import React, { useContext } from 'react';
import LanguageContext from "../contexts/LanguageContext";

const Logo = () => {

  const { texts } = useContext(LanguageContext);

  return (
    <>
      <img src="svg/logo.svg"
        width={120} height={50}
        alt={texts.header_alt_logo}></img>
    </>
  );
};

export default Logo;