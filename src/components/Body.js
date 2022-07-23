import React, { useContext } from 'react';
import LanguageContext from "../contexts/LanguageContext";
import LoadingContext from "../contexts/LodingContexts";
import Loading from "./Loading";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

const Body = () => {
  const { texts } = useContext(LanguageContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div>
      {loading && <Loading />}
      {!loading &&
        <>
          {texts.shopping_cart_title}
          <ShoppingCart />
          {texts.titleProducts}
          <Products />
        </>
      }
    </div>
  );
};

export default Body;