const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const Header = require("../utils/page-object/base_page/header");
const Footer = require("../utils/page-object/base_page/footer");
setDefaultTimeout(60000);

When('I open {string} url', function(url) {
  return browser.get(url);
});

Then(/^Header height should (not )?be "([^"]*)"$/, async function(notArg, height) {
  const header = new Header();
  const headerWidth= await header.getHeaderHight();
  if (notArg) {
    expect(headerHeight).to.not.be.equal(height);
  } else {
    expect(headerHeight).to.be.equal(height);
  }
});

Then(/^Header width should (not )?be "([^"]*)"$/, async function(notArg, width) {
  const header = new Header();
  const headerWidth= await header.getHeaderWidth();
  if (notArg) {
    expect(headerWidth).to.not.be.equal(width);
  } else {
    expect(headerWidth).to.be.equal(width);
  }
});

Then(/^Footer height should (not )?be "([^"]*)"$/, async function(notArg, height) {
  const footer = new Footer();
  const footerWidth= await footer.getFooterHight();
  if (notArg) {
    expect(footerWidth).to.not.be.equal(height);
  } else {
    expect(footerWidth).to.be.equal(height);
  }
});

When('I wait "{int}" seconds', function(timeInSeconds) {
  return browser.sleep(timeInSeconds * 1000);
});