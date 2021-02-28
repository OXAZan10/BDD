const Element = require("../base_elements/base_element");

class Footer {
    constructor() {
        this.footerCopyrights = new Element("Text of copyrights", ".footer-copyrights");
        this.footer = new Element("Footer", "#footer");
    };

    async getFooterWidth() { 
        return this.footer.getCssValue("width");
    };

    async getFooterHight() {
        return this.footer.getCssValue("height");
    }
};

module.exports = Footer;

