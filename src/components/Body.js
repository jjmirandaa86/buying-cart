import React, { useContext } from 'react';
import LanguageContext from "../contexts/LanguageContext";

const Body = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      {texts.titleProducts}
    </>
  );
};

export default Body;