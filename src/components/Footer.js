import React, { useContext } from 'react';
import { Container } from "react-bootstrap";
import ThemeContext from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <nav class={`navbar sticky-top navbar-${theme} bg-${theme}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">marcas</a>
          <a class="navbar-brand" href="#">products</a>
          <a class="navbar-brand" href="#">ofertas</a>
        </div>
      </nav>
    </>
  );
};

export default Footer;