const Element = require("../base_elements/base_element");

class Header {
    constructor() {
        this.langugeIcon = new Element("Language icon", ".location-selector__globe");
        this.header = new Element("Header", "#header");
    };

    async getHeaderWidth() { 
        return this.header.getCssValue("width");
    };

    async getHeaderHight() {
        return this.header.getCssValue("height");
    };
};

module.exports = Header;

