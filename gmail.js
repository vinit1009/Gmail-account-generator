const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false,
   executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/signup');

  await page.type('#firstName', 'Vinit',  { delay: 200 });
  await page.type('#lastName', 'Shah',  { delay: 200 });

  await page.waitFor(10000)

  const clear = await page.$('#username');
  await clear.click({clickCount:3});
  await clear.type('#email', {delay:200});

  await page.type('[name=Passwd]', '#password', {delay: 200})
  await page.type('[name=ConfirmPasswd]', '#password', {delay: 200})





  const [button1] = await page.$x("//button[contains(., 'Next')]");

  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    button1.click(), // Clicking the link will indirectly cause a navigation
  ]);

  await page.waitFor(10000)


  await page.type('[type=tel]', '#phone number',  { delay: 200 });


  const [button2] = await page.$x("//button[contains(., 'Next')]");
  if (button2) {
    await button2.click();
  }


  










  // await page.screenshot({ path: 'example.png' });

  // await browser.close();
})();
