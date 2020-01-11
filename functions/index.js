console.log(1);
const chromium = require("chrome-aws-lambda");
console.log(2);
exports.handler = async (event, context) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless
  });

  const page = await browser.newPage();
  const html = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Netlify Puppeteer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <main>
        <h1>Netlify Puppeteer</h1>
    </main>      
  </body>
  </html>
  `;
  page.setContent(html);

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" }
  });

  const response = {
    headers: {
      "Content-type": "application/pdf",
      "content-disposition": "attachment; filename=test.pdf"
    },
    statusCode: 200,
    body: pdf.toString("base64"),
    isBase64Encoded: true
  };

  context.succeed(response);
};
