import React, { useContext } from 'react';
import LanguageContext from "../contexts/LanguageContext";

const Language = () => {

  const { language, handleLanguage, listLanguage } = useContext(LanguageContext);
  const { texts } = useContext(LanguageContext);

  const { id, name, flag } = listLanguage.find(e => e.id === language);

  return (
    <>
      {
        <img
          src={"svg/" + flag}
          width={20}
          height={20}
          alt={texts.header_alt_language}
          onClick={handleLanguage} />
      }
    </>
  );
};

export default Language;;