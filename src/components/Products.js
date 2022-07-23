import React, { useContext, useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import ItemProducts from "./ItemProducts";
import { URLS } from "../../src/api/Urls";
import { helpHttp } from "../helpers/helpHttp";
import LoadingContext from "../contexts/LodingContexts";
import ProductContext from "../contexts/ProductContext";

const Products = () => {

  const { product, setProduct } = useContext(ProductContext);
  const { loading, setLoading } = useContext(LoadingContext);

  let api = helpHttp();

  useEffect(() => {
    setLoading(true);

    api.get(URLS.products)
      .then((res) => {
        if (!res.err) {
          setProduct(res);
          //setError(null);
        } else {
          setProduct(null);
          //setError(res);
        }
      });

    setLoading(false);

  }, []);

  const handleAddProduct = () => {

  };

  return (
    <Container>
      <Row xs={2} md={3} className="g-6">
        {
          product.length > 0
            ?
            product.map((product, index) =>
              <ItemProducts
                key={index}
                product={product}
                handleAddProduct={handleAddProduct} />)
            : "No hay productos"
        }
      </Row>
    </Container>
  );
};

export default Products;