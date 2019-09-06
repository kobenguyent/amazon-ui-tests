const I = actor();

export default resultPage = {
    resultBar: '#s-result-info-bar-content',
    productName: locate('h2').at(1),
    noResult: '#noResultsTitle',

    async hasResults(searchString) {
        const results = await I.grabTextFrom(this.productName);
        return results[0].toLowerCase().includes(searchString.toLowerCase());
    },

    showProductDetails() {
        I.click(this.productName);
        I.wait(2);
    }
}