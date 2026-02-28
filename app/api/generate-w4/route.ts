import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { mapFormDataToTemplateFields } from '@/lib/w4FieldMappingExact';
import { fillPdfWithNativeFields, fillPdfWithTemplateFields } from '@/lib/w4PdfGeneratorExact';
import { W4FormData } from '@/lib/w4FieldMapping';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const formData = (await req.json()) as W4FormData;

    if (!formData.firstName || !formData.lastName || !formData.ssn) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const templatePath = path.join(process.cwd(), 'public', 'fw4.pdf');
    const templateBytes = await fs.readFile(templatePath);
    const fieldValues = mapFormDataToTemplateFields(formData, formData.signature);

    const pdfTemplate = new Uint8Array(
      templateBytes.buffer.slice(templateBytes.byteOffset, templateBytes.byteOffset + templateBytes.byteLength),
    );

    let filledPdfBytes: Uint8Array;
    try {
      filledPdfBytes = await fillPdfWithNativeFields(fieldValues, pdfTemplate, true);
    } catch {
      filledPdfBytes = await fillPdfWithTemplateFields(fieldValues, pdfTemplate, true);
    }

    return new NextResponse(Buffer.from(filledPdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="completed_w4.pdf"',
      },
    });
  } catch (error: any) {
    console.error('Error generating W4 PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF', details: error.message },
      { status: 500 },
    );
  }
}
