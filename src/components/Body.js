import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import LanguageContext from "../contexts/LanguageContext";
import LoadingContext from "../contexts/LodingContexts";
import OptionBodyContext from "../contexts/OptionBodyContext";
import Loading from "./Loading";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

const Body = () => {
  const { texts } = useContext(LanguageContext);
  const { loading } = useContext(LoadingContext);
  const { optionBody } = useContext(OptionBodyContext);

  return (
    <div>
      {loading && <Loading />}
      {!loading &&
        <>
          {optionBody === "P" &&
            <>
              {texts.titleProducts}
              < Products />
            </>
          }
          {optionBody === "C" &&
            <>
              {texts.shopping_cart_title}
              <ShoppingCart />
            </>
          }
        </>
      }
    </div>
  );
};

export default Body;