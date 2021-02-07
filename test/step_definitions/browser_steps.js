const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);
When('I open {string} url', function(url) {
  return browser.get(url);
});

Then(/^Header height should (not )?be "([^"]*)"$/, async function(notArg, height) {
  const header = element(by.id('header'));
  const headerHeight = await header.getCssValue('height');
  if (notArg) {
    expect(headerHeight).to.not.be.equal(height);
  } else {
    expect(headerHeight).to.be.equal(height);
  }
});

Then(/^Header width should (not )?be "([^"]*)"$/, async function(notArg, width) {
  const header = element(by.id('header'));
  const headerWidth = await header.getCssValue('width');
  if (notArg) {
    expect(headerWidth).to.not.be.equal(width);
  } else {
    expect(headerWidth).to.be.equal(width);
  }
});

Then(/^Footer height should (not )?be "([^"]*)"$/, async function(notArg, height) {
  const footer = element(by.id('footer'));
  const footerWidth = await footer.getCssValue('height');
  if (notArg) {
    expect(footerWidth).to.not.be.equal(height);
  } else {
    expect(footerWidth).to.be.equal(height);
  }
});
When('I wait "{int}" seconds', function(timeInSeconds) {
  return browser.sleep(timeInSeconds * 1000);
});