import navTools from './NavTools';
const I = actor();

export default productDetailsPage = {
    addToCartButton: '#add-to-cart-button',

    async addToCart() {
        I.click(this.addToCartButton);
        I.wait(2);
        I.pressKey('Escape');
        let cartCount = await I.grabTextFrom(navTools.cartCount); 
        return cartCount === '1';
    }
}