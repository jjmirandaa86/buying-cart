import React, { useContext } from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ThemeContext from "../contexts/ThemeContext";

const Theme = () => {

  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      {
        theme === "light"
          ? <img src="./svg/sunDark.svg"
            width={25} height={25}
            onClick={handleTheme}
            alt={texts.header_alt_theme} />
          : <img src="./svg/sunLight.svg"
            width={25} height={25}
            onClick={handleTheme}
            alt={texts.header_alt_theme} />
      }
    </>
  );
};

export default Theme;