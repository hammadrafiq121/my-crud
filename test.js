const { Builder, Browser, By, Key } = require('selenium-webdriver');

(async function example() {
  for (var i = 0; i <= 10; i++) {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    try {
      await driver.get('http://websitedemon.com/driving2/');
      await driver.manage().window().maximize();
      await driver.findElement(By.linkText('Log In')).sendKeys('Log In', Key.RETURN);
      await driver.findElement(By.id('user_login')).sendKeys('bob', Key.RETURN);
      await driver.findElement(By.id('user_pass')).sendKeys('bob', Key.RETURN);
      await driver.findElement(By.id('wp-submit')).sendKeys('wp-submit', Key.RETURN);
      await driver.manage().window().fullscreen();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      await driver.quit();
    }
  }
})();
