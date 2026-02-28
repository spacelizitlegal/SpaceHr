const fs = require('fs');
const path = require('path');

async function run() {
  const { PDFDocument } = await import('pdf-lib');
  const bytes = fs.readFileSync(path.join(__dirname, 'public', 'fw4.pdf'));
  const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const form = doc.getForm();
  const fields = form.getFields();
  const lines = ['FIELDS: ' + fields.length, ''];
  for (const f of fields) {
    lines.push(f.constructor.name + ' :: ' + f.getName());
  }
  fs.writeFileSync(path.join(__dirname, 'pdf-fields-output.txt'), lines.join('\n'), 'utf8');
  console.log('DONE - ' + fields.length + ' fields');
}

run().then(() => process.exit(0)).catch(e => {
  fs.writeFileSync(path.join(__dirname, 'pdf-fields-output.txt'), 'ERROR: ' + e.message, 'utf8');
  console.error(e.message);
  process.exit(1);
});
