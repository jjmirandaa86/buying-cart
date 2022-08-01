import React, { useContext } from 'react';
import { Container, Row, Col, Badge } from "react-bootstrap";
import FilterProductContext from "../../contexts/FilterProductContext";
import ProductContext from "../../contexts/ProductContext";
import StyleContext from "../../contexts/StyleContext";

const BrandProducts = () => {

  const { product } = useContext(ProductContext);
  const { style } = useContext(StyleContext);
  const { configFilterProduct } = useContext(FilterProductContext);

  const filterField = "brand";

  const brands = new Set(product.map((el) => el.brand));
  let brandsList = [...brands];

  return (
    <>
      {brandsList.length > 0 &&
        <Container>
          <Row>
            {brandsList.map((el, index) =>
              <Col key={index}
                xs
                onClick={() => configFilterProduct(filterField, el)}>
                <Badge bg={style.colorFirst}>{el} </Badge></Col>)}
          </Row>
        </Container>
      }
    </>
  );
};

export default BrandProducts;