import puppeteer from "puppeteer";
import path from 'path'

const browser = await puppeteer.launch({
  protocol: "webDriverBiDi",
  headless: "new",
});

const context = await browser.createIncognitoBrowserContext();
const page = await context.newPage();

page.on("console", (message) => {
  console.log(
    `Console message received: [${message.type()}] ${message.text()}`
  );
});
const filePath = path.join(process.cwd(), 'index.html')

await page.goto(
  `https://www.selenium.dev/selenium/web/bidi/logEntryAdded.html`
);

// await page.goto(
//   `file://${filePath}`
// );

await page.evaluate(() => {
  document.querySelector("#consoleLog").click();
  // document.querySelector("#console-log").click();

});

// await browser.close();
