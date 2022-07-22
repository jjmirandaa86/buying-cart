import React, { useContext } from 'react';
import LanguageContext from "../contexts/LanguageContext";
import Loading from "./Loading";
import Products from "./Products";

const Body = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div>
      {texts.titleProducts}
      <Products />
      <Loading />
    </div>
  );
};

export default Body;