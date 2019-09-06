import {expect} from 'chai';

Feature('Add to card functionality');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Add a product to shopping cart', async (I, homePage, resultPage, productDetailsPage) => {
    const searchString = 'echo';
    homePage.search(searchString);
    resultPage.showProductDetails();
    expect(await productDetailsPage.addToCart()).to.be.true;
});