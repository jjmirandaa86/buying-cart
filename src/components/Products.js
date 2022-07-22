import React, { useEffect, useState } from 'react';
import ItemProducts from "./ItemProducts";
import { URLS } from "../../src/api/Urls";
import { helpHttp } from "../helpers/helpHttp";

const Products = () => {
  const initialStateProducts = [];
  const [products, setProducts] = useState(initialStateProducts);

  let api = helpHttp();

  useEffect(() => {
    //setLoading(true);
    api.get(URLS.products)
      .then((res) => {
        if (!res.err) {
          setProducts(res);
          //setError(null);
        } else {
          setProducts(null);
          //setError(res);
        }
      });
    //setLoading(false);

  }, []);

  const handleAddProduct = () => {

  };

  return (
    <>
      {
        products.length > 0
          ? products.map((product, index) =>
            <ItemProducts
              key={index}
              product={product}
              handleAddProduct={handleAddProduct} />)
          : "No hay productos"
      }
    </>
  );
};

export default Products;