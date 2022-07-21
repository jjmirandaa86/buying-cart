import React, { useContext } from 'react';
import ThemeContext from "../contexts/ThemeContext";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  const initialState = {
    products: [
      { id: 1, name: "Pepsi 500", price: 0.5, brand: "Pepsi" },
      { id: 1, name: "Seven 1200", price: 2, brand: "Seven" },
      { id: 1, name: "Gatorade 1000", price: 0.75, brand: "Gatorade" },
      { id: 1, name: "Mas Fresa 3000", price: 2.5, brand: "Mas" },
      { id: 1, name: "V220 365", price: 1, brand: "V220" },
    ],
    client: [],
    shoppingCart: []
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className={"app-" + theme}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;