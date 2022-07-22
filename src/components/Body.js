import React, { useContext } from 'react';
import { ProductProvider } from "../contexts/ProductContext";
import LanguageContext from "../contexts/LanguageContext";
import LoadingContext from "../contexts/LodingContexts";
import Loading from "./Loading";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";

const Body = () => {
  const { texts } = useContext(LanguageContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div>
      {loading && <Loading />}
      {!loading &&
        <>
          <ProductProvider>
            <ShoppingCartProvider>
              {texts.shopping_cart_title}
              <ShoppingCart />
              {texts.titleProducts}
              <Products />
            </ShoppingCartProvider>
          </ProductProvider>
        </>
      }
    </div>
  );
};

export default Body;