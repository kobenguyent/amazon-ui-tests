require('import-export');
require('events').EventEmitter.prototype._maxListeners = 100;

exports.config = {
  "tests": "./tests/**/*.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "WebDriverIO": {
      url: 'https://www.amazon.de',
      "browser": "chrome",
      "desiredCapabilities": {
        "chromeOptions": {
          "args": [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
      },
      "keepCookies": true,
      keepBrowserState: true,
      restart: false,
      "windowSize": "1440x700",
      "waitForNavigation": ["networkidle2","domcontentloaded"],
    }
  },
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  "name": "amazon-ui-tests",
  "multiple": {
    "parallel": {
      "chunks": 2
    }
  },
  "include": {
    homePage: './pages/HomePage.js',
    resultPage: './pages/ResultPage.js',
    productDetailsPage: './pages/ProductDetailsPage.js',
    popup: './pages/Popup.js',
    cartPage: './pages/CartPage.js'
  }
}