import navTools from './NavTools';
import popup from './Popup';
const I = actor();

export default productDetailsPage = {
    addToCartButton: 'input[id="add-to-cart-button"]',

    async addToCart() {
        I.click(this.addToCartButton);
        I.wait(2);
        I.pressKey('Escape');
        let cartCount = await I.grabTextFrom(navTools.cartCount); 
        return cartCount === '1';
    }
}