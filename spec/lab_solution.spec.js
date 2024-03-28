const User = require("../lab2");


describe('test user obj', () => {
  let user;

  beforeEach(() => {
    user = new User('Moamen', 'Aboaboud3200');
  })
  it(" Adds a product to the cart array.", () => {
    const myProduct = { name: 'meat', price: 300 };
    user.addToCart(myProduct);
    expect(user.cart).toContain(myProduct);
  });

  it("testing calculateTotalCartPrice", () => {
    const products = [
      { name: "letuce", price: 20 },
      { name: "tomatos", price: 24 },
    ];
    products.forEach((product) => user.addToCart(product));
    const sumation = products.reduce((acc, prd) => acc + prd.price, 0);
    expect(user.calculateTotalCartPrice()).toBe(sumation);
  });
  it('last one', () => {
    const paymentModel = {
      goToVerifyPage: jasmine.createSpy(),
      returnBack: jasmine.createSpy(),
      isVerify: jasmine.createSpy().and.returnValue(true),
    };
    expect(user.checkout(paymentModel)).toBe(true);
    expect(paymentModel.isVerify()).toHaveBeenCalled;
    expect(paymentModel.goToVerifyPage()).toHaveBeenCalled;
    expect(paymentModel.returnBack()).toHaveBeenCalled;
  })
})