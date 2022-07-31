import React, { useContext } from 'react';
import { Container, Badge } from 'react-bootstrap';
import { FilterProductProvider } from "../contexts/FilterProductContext";
import LanguageContext from "../contexts/LanguageContext";
import LoadingContext from "../contexts/LodingContexts";
import OptionBodyContext from "../contexts/OptionBodyContext";
import Loading from "./Loading";
import Products from "./Products";
import News from "./News";
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
          <News />
          {optionBody === "P" &&
            <Container>
              <h3>
                <Badge bg="secondary">{texts.titleProducts}</Badge>
              </h3>
              <FilterProductProvider>
                <Products />
              </FilterProductProvider>
            </Container>
          }
          {optionBody === "C" &&
            <>
              <h3>
                <Badge bg="secondary">{texts.shopping_cart_title}</Badge>
              </h3>
              <ShoppingCart />
            </>
          }
        </>
      }
    </div>
  );
};

export default Body;;