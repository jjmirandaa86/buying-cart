import React, { useContext } from 'react';
import { Badge, Container } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import { FilterProductProvider } from "../../contexts/FilterProductContext";
import Products from "./Products";


const ProductsView = () => {

  const { texts } = useContext(LanguageContext);
  const { style } = useContext(StyleContext);

  return (
    <Container>
      <h3>
        <Badge bg={style.colorFirst}>{texts.titleProducts}</Badge>
      </h3>
      <FilterProductProvider>
        <Products />
      </FilterProductProvider>
    </Container>
  );
};

export default ProductsView;