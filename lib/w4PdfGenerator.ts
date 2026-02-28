import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { W4FormData, calculateW4Values, formatSSN, formatDate } from './w4FieldMapping';

/**
 * W-4 PDF Generator using X/Y coordinate positioning
 * Coordinates from the working projectworflow implementation.
 * Blue text color to match native form fields.
 */

// ── X/Y Coordinate field positions (from working original) ──
const FIELDS = {
  step1: {
    firstName:    { x: 36,  y: 632, width: 200 },
    lastName:     { x: 240, y: 632, width: 180 },
    ssn:          { x: 432, y: 632, width: 144 },
    addressLine1: { x: 36,  y: 598, width: 540 },
    addressLine2: { x: 36,  y: 564, width: 540 },
    filingStatus_single:          { x: 52, y: 518 },
    filingStatus_married:         { x: 52, y: 502 },
    filingStatus_headOfHousehold: { x: 52, y: 486 },
  },
  step2: {
    twoJobsCheckbox: { x: 52, y: 430 },
  },
  step3: {
    totalCredits: { x: 500, y: 372, width: 76 },
  },
  step4: {
    otherIncome:     { x: 500, y: 318, width: 76 },
    deductions:      { x: 500, y: 288, width: 76 },
    extraWithholding:{ x: 500, y: 258, width: 76 },
  },
  step5: {
    signature:  { x: 72,  y: 188, width: 240, height: 24 },
    dateSigned: { x: 432, y: 188, width: 100 },
  },
} as const;

export async function generateFilledW4Pdf(
  formData: W4FormData,
  templatePdfBytes: ArrayBuffer
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(templatePdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const calculated = calculateW4Values(formData);
  const isExempt = formData.claimExempt;

  // Blue color to match native form fields (from original)
  const blueColor = rgb(0, 0.2, 0.6);

  // ── Helper: draw text at X/Y ──
  const drawText = (text: string, x: number, y: number, options?: { size?: number; bold?: boolean; maxWidth?: number }) => {
    if (!text) return;
    firstPage.drawText(String(text), {
      x,
      y,
      size: options?.size || 11,
      font: options?.bold ? helveticaBold : helveticaFont,
      color: blueColor,
      maxWidth: options?.maxWidth,
    });
  };

  // ── Helper: draw checkbox "X" ──
  const drawCheckbox = (checked: boolean, x: number, y: number) => {
    if (checked) {
      firstPage.drawText('X', {
        x: x + 2,
        y: y + 2,
        size: 10,
        font: helveticaBold,
        color: blueColor,
      });
    }
  };

  // ══════════ STEP 1: Personal Info ══════════
  const firstMiddle = `${formData.firstName || ''} ${formData.middleInitial || ''}`.trim();
  drawText(firstMiddle, FIELDS.step1.firstName.x, FIELDS.step1.firstName.y, { maxWidth: FIELDS.step1.firstName.width });
  drawText(formData.lastName || '', FIELDS.step1.lastName.x, FIELDS.step1.lastName.y, { maxWidth: FIELDS.step1.lastName.width });
  drawText(formatSSN(formData.ssn), FIELDS.step1.ssn.x, FIELDS.step1.ssn.y);

  drawText(formData.address || '', FIELDS.step1.addressLine1.x, FIELDS.step1.addressLine1.y, { maxWidth: FIELDS.step1.addressLine1.width });

  const cityStateZip = [formData.city, formData.state, formData.zipCode].filter(Boolean).join(', ').replace(/, ([A-Z]{2}),/, ', $1 ');
  drawText(cityStateZip, FIELDS.step1.addressLine2.x, FIELDS.step1.addressLine2.y, { maxWidth: FIELDS.step1.addressLine2.width });

  // Filing Status checkboxes
  drawCheckbox(formData.filingStatus === 'single', FIELDS.step1.filingStatus_single.x, FIELDS.step1.filingStatus_single.y);
  drawCheckbox(formData.filingStatus === 'married_jointly', FIELDS.step1.filingStatus_married.x, FIELDS.step1.filingStatus_married.y);
  drawCheckbox(formData.filingStatus === 'head_of_household', FIELDS.step1.filingStatus_headOfHousehold.x, FIELDS.step1.filingStatus_headOfHousehold.y);

  // ══════════ STEP 2: Multiple Jobs ══════════
  drawCheckbox(formData.step2.twoJobsOnly, FIELDS.step2.twoJobsCheckbox.x, FIELDS.step2.twoJobsCheckbox.y);

  // ══════════ STEP 3: Dependents ══════════
  if (!isExempt && calculated.totalCredits > 0) {
    drawText(`$${calculated.totalCredits.toLocaleString()}`, FIELDS.step3.totalCredits.x, FIELDS.step3.totalCredits.y);
  }

  // ══════════ STEP 4: Other Adjustments ══════════
  if (!isExempt) {
    if (formData.step4.otherIncome > 0) {
      drawText(`$${formData.step4.otherIncome.toLocaleString()}`, FIELDS.step4.otherIncome.x, FIELDS.step4.otherIncome.y);
    }
    if (formData.step4.deductions > 0) {
      drawText(`$${formData.step4.deductions.toLocaleString()}`, FIELDS.step4.deductions.x, FIELDS.step4.deductions.y);
    }
    if (formData.step4.extraWithholding > 0) {
      drawText(`$${formData.step4.extraWithholding.toLocaleString()}`, FIELDS.step4.extraWithholding.x, FIELDS.step4.extraWithholding.y);
    }
  } else {
    drawText('Exempt', FIELDS.step4.extraWithholding.x, FIELDS.step4.extraWithholding.y);
  }

  // ══════════ STEP 5: Signature ══════════
  // If drawn signature exists, embed as image
  if (formData.signature.signatureImage) {
    try {
      const sigData = formData.signature.signatureImage;
      const base64 = sigData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      const sigBytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));

      let sigImage;
      if (sigData.includes('image/png')) {
        sigImage = await pdfDoc.embedPng(sigBytes);
      } else {
        sigImage = await pdfDoc.embedJpg(sigBytes);
      }

      const sigDims = sigImage.scale(0.3);
      firstPage.drawImage(sigImage, {
        x: FIELDS.step5.signature.x,
        y: FIELDS.step5.signature.y - 10,
        width: Math.min(sigDims.width, FIELDS.step5.signature.width),
        height: Math.min(sigDims.height, FIELDS.step5.signature.height),
      });
    } catch (e) {
      // Fallback to typed name if image fails
      if (formData.signature.typedName) {
        drawText(formData.signature.typedName, FIELDS.step5.signature.x, FIELDS.step5.signature.y, { size: 12 });
      }
      console.log(`  ⚠️ Could not embed signature image: ${(e as Error).message}`);
    }
  } else if (formData.signature.typedName) {
    drawText(formData.signature.typedName, FIELDS.step5.signature.x, FIELDS.step5.signature.y, { size: 12 });
  }

  // Date signed
  drawText(formatDate(formData.signature.signedAt || new Date().toISOString()), FIELDS.step5.dateSigned.x, FIELDS.step5.dateSigned.y);

  return await pdfDoc.save();
}
