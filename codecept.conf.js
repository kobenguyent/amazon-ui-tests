require('import-export');
const selenium = require('selenium-standalone');

exports.config = {
  tests: './tests/**/*.js',
  timeout: 10000,
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.amazon.de',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--window-size=1440,700' ]
        }
      },
      windowSize: '1440x700'
    }
  },
  bootstrapAll: (done) => {
    selenium.start((err, child) => {
      if (err) {
        throw err;
      }

      selenium.__child = child;
      done();
    });
  },
  teardownAll: (done) => {
    setTimeout(() => {
      try {
        if (selenium.__child) selenium.__child.kill();
      } catch (e) {}
    }, 3000);
    done();
  },
  name: 'amazon-ui-tests',
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    homePage: './pages/HomePage.js',
    resultPage: './pages/ResultPage.js',
    productDetailsPage: './pages/ProductDetailsPage.js',
    popup: './pages/Popup.js',
    cartPage: './pages/CartPage.js'
  }
}
