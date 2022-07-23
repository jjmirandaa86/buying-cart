import { useState, createContext } from "react";

const ShoppingCartContext = createContext();

const initialStateShoppingCart = [];

const ShoppingCartProvider = ({ children }) => {

  const [shoppingCart, setShoppingCart] = useState(initialStateShoppingCart);


  //add products to shoppingCart
  const addProductToCart = (data) => {
    const { id, name, price } = data;
    const existProduct = () => {
      shoppingCart.find((el) => el.id === id);
    };

    //if Object.keys()

    setShoppingCart([
      ...shoppingCart,
      { id: id, name: name, price: price, quantity: 1 }
    ]
    );

    console.log(shoppingCart);
  };


  const data = { shoppingCart, setShoppingCart, addProductToCart };

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  );

};

export { ShoppingCartProvider };
export default ShoppingCartContext;