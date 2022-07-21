import React from 'react';
import Logo from "./Logo";
import Theme from "./Theme";
import Language from "./Language";

const Header = () => {
  const menu = [
    { id: 1, name: "Nuevo Cliente", order: 1 },
  ];

  return (
    <>
      <Logo />
      <Theme />
      <Language />
    </>
  );
};

export default Header;