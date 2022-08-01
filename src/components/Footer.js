import React, { useContext } from 'react';
import { Container, Navbar } from "react-bootstrap";
import StyleContext from "../contexts/StyleContext";
import ThemeContext from "../contexts/ThemeContext";

const Footer = () => {

  const { theme } = useContext(ThemeContext);
  const { style } = useContext(StyleContext);
  const expand = "md";

  return (
    <>
      <Navbar key={expand}
        bg={theme === "light" ? style.colorBacground : theme}
        text={theme === "light" ? "white" : "dark"}
        expand={expand}
        className={`navbar sticky-top navbar-${theme}`}>
        <Container fluid>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">marcas</a>
            <a className="navbar-brand" href="#">products</a>
            <a className="navbar-brand" href="#">ofertas</a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;