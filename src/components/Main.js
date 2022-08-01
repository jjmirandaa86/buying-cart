import React, { useContext } from 'react';
import ThemeContext from "../contexts/ThemeContext";
import { ProductProvider } from "../contexts/ProductContext";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import RoutePage from "../routes/RoutePage";

const Main = () => {

  const { theme } = useContext(ThemeContext);
  //<div class="p-3 mb-2 bg-dark text-white"></div>

  return (
    <div className={`bg-${theme} text-${theme === "light" ? "white" : "dark"}`} >
      <ProductProvider>
        <ShoppingCartProvider>
          <RoutePage />
        </ShoppingCartProvider>
      </ProductProvider>
    </div>
  );
};

export default Main;