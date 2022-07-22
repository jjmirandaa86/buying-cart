import { useState, createContext } from "react";

const ShoppingCartContext = createContext();

const initialStateShoppingCart = {};

const ShoppingCartProvider = ({ children }) => {

  const [shoppingCart, setShoppingCart] = useState(initialStateShoppingCart);

  const data = { shoppingCart, setShoppingCart };

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  );

};

export { ShoppingCartProvider };
export default ShoppingCartContext;