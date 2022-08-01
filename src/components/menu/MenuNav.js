import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Offcanvas, NavDropdown, Form, Navbar, Nav, Row, Col, Button, Badge } from 'react-bootstrap';
import LanguageContext from "../../contexts/LanguageContext";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import ThemeContext from "../../contexts/ThemeContext";
import StyleContext from "../../contexts/StyleContext";
import Language from "../Language";
import Logo from "../Logo";
import UserHead from "./UserHead";
import Theme from "../Theme";
import ShoppingCartHead from "./ShoppingCartHead";

function MenuNav() {

  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { style } = useContext(StyleContext);

  const expand = "md";

  return (
    <>
      <Navbar key={expand}
        bg={theme === "light" ? style.colorBacground : theme}
        text={theme === "light" ? "white" : "dark"}
        expand={expand}
        className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Link to="/">
              {" "} <Logo />
            </Link>
          </Navbar.Brand>
          <div div className="justify-content-end">
            <Link to="/user"><UserHead /></Link>
            <Link to="/cart"><ShoppingCartHead /></Link>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link to="/offers">{texts.header_label_offers}</Link></Nav.Link>
                <Nav.Link><Link to="/news">{texts.header_label_news}</Link> </Nav.Link>
                <Nav.Link><Link to="/combos">{texts.header_label_combos}</Link> </Nav.Link>
              </Nav>
              <Row>
                <Col xs="auto"><Theme /></Col>
                <Col xs="auto"><Language /></Col>
                <Col xs="auto"><Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder={texts.header_button_search}
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant={style.colorFirst}>{texts.header_button_search} </Button>
                </Form></Col>
              </Row>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuNav;