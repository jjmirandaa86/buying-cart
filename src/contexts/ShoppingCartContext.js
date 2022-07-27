import { useState, createContext } from "react";

const ShoppingCartContext = createContext();

const initialStateShoppingCart = [];

const ShoppingCartProvider = ({ children }) => {

  const [shoppingCart, setShoppingCart] = useState(initialStateShoppingCart);


  //add products to shoppingCart
  const addOneProductToCart = (data) => {
    const { id } = data;
    const existProduct = shoppingCart.find((el) => el.id === id);

    if (existProduct) {
      const productsFilter = shoppingCart.filter((el) => {
        if (el.id !== id)
          return el;
      });
      productsFilter.push({ ...existProduct, quantity: existProduct.quantity + 1 });
      setShoppingCart(productsFilter);
    } else
      setShoppingCart([...shoppingCart, { ...data, quantity: 1 }]);
  };

  const removeOneProductToCart = (data) => {
    const { id } = data;
    const existProduct = shoppingCart.find((el) => el.id === id);

    if (existProduct) {
      const productsFilter = shoppingCart.filter((el) => {
        if (el.id !== id)
          return el;
      });

      if (parseInt(existProduct.quantity) > 1) {
        productsFilter.push({ ...existProduct, quantity: existProduct.quantity - 1 });
      }
      setShoppingCart(productsFilter);
    }
  };

  const handleDeleteProductToCart = (data) => {
    const { id } = data;

    setShoppingCart(
      shoppingCart.filter((el) => {
        if (el.id !== id)
          return el;
      })
    );
  };

  const data = {
    shoppingCart,
    addOneProductToCart,
    handleDeleteProductToCart,
    removeOneProductToCart
  };

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  );

};

export { ShoppingCartProvider };
export default ShoppingCartContext;