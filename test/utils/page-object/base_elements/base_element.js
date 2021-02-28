class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }

    async getCssValue(attr){
        const attributeCss = await this.element.getCssValue(attr);
        return attributeCss;
    }
};

module.exports = Element;