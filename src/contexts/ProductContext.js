import { useState, createContext } from "react";

const ProductContext = createContext();

const initialStateProduct = {};

const ProductProvider = ({ children }) => {

  const [product, setProduct] = useState(initialStateProduct);

  const data = { product, setProduct };

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );

};

export { ProductProvider };
export default ProductContext;