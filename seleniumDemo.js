import { Builder, LogInspector } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(new chrome.Options().enableBidi())
  .build();

  const inspector = await LogInspector(driver);
  await inspector.onConsoleEntry((entry) => {
    console.log(`Console message received: [${entry.type}][${entry.level}] [${entry.text}]`)
  });

  await driver.get('https://www.selenium.dev/selenium/web/bidi/logEntryAdded.html')
  await driver.findElement({id: 'consoleLog'}).click();

  await driver.sleep(5000)

  // await driver.quit()