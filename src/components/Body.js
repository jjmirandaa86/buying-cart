import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
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
          <Container>
            {texts.shopping_cart_title}
            <ShoppingCart />
          </Container>
          <Container>
            {texts.titleProducts}
            <Products />
          </Container>
        </>
      }
    </div>
  );
};

export default Body;