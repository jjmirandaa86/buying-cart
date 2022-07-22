import React from 'react';
import MenuNav from "./MenuNav";

const Header = () => {
  const menu = [
    { id: 1, name: "Nuevo Cliente", order: 1 },
  ];

  return (
    <>
      <MenuNav />
    </>
  );
};

export default Header;