import React, { useContext, useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import ItemProducts from "./ItemProducts";
import { URLS } from "../../src/api/Urls";
import { helpHttp } from "../helpers/helpHttp";
import LoadingContext from "../contexts/LodingContexts";
import ProductContext from "../contexts/ProductContext";
import BrandProducts from "./BrandProducts";
import FilterProductContext from "../contexts/FilterProductContext";

const Products = () => {

  const { product, setProduct } = useContext(ProductContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { filter } = useContext(FilterProductContext);

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

  const AllProducts = () => product.map((product, index) =>
    <ItemProducts
      key={index}
      product={product} />);

  const FilterProduct = () =>
    product.map((product, index) => {
      console.log(product);
      if (product.brand === filter.value) {
        console.log(product);
        return product;
      }
      return (
        <ItemProducts
          key={index}
          product={product} />
      );
    }
    );

  return (
    <Container>
      <BrandProducts />
      <Row xs={2} md={3} className="g-6">
        {
          product.length > 0
            ? filter.brand !== null
              ? <FilterProduct />
              : <AllProducts />
            : "No hay productos"
        }
      </Row>
    </Container>
  );
};

export default Products;