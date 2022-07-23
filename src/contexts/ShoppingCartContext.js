import { useState, createContext } from "react";

const ShoppingCartContext = createContext();

const initialStateShoppingCart = [];

const ShoppingCartProvider = ({ children }) => {

  const [shoppingCart, setShoppingCart] = useState(initialStateShoppingCart);


  //add products to shoppingCart
  const addOneProductToCart = (data) => {
    const { id, name, price } = data;

    const existProduct = shoppingCart.find((el) => el.id === id);

    const productAddOne = shoppingCart.find((el) => {
      if (el.id === id) {
        el.quantity = el.quantity + 1;
        return el;
      }
    });

    console.log("existe");
    console.log(existProduct);

    console.log("agrega 1");
    console.log(productAddOne);

    if (existProduct) {
      setShoppingCart([...shoppingCart, productAddOne]);
    } else {
      setShoppingCart([...shoppingCart, { id: id, name: name, price: price, quantity: 1 }]);
    }
  };

  const handleDeleteProductToCart = () => { };

  const removeOneProductToCart = () => { };

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