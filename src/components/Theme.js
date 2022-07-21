import React, { useContext } from 'react';
import ThemeContext from "../contexts/ThemeContext";

const Theme = () => {

  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      {
        theme === "light"
          ? <img src="./svg/sunDark.svg" width={25} height={25} onClick={handleTheme} />
          : <img src="./svg/sunLight.svg" width={25} height={25} onClick={handleTheme} />
      }
    </>
  );
};

export default Theme;