import WebDriver from "webdriver";
import path from 'path'

const browser = await WebDriver.newSession({
  capabilities: {
    webSocketUrl: true,
    browserName: "chrome",
  },
});

await browser.sessionSubscribe({
  events: ["log.entryAdded"],
});

const filePath = path.join(process.cwd(), 'index.html')
await browser.navigateTo(
  (`file://${filePath}`)
);

const elem = await browser.findElement("css selector", "#js-error");

await browser.elementClick(elem['element-6066-11e4-a52e-4f735466cecf']);

browser.on("message", (data) => {
  console.log(
    `Console message received: ${data}`
  );
});

// await browser.deleteSession();
