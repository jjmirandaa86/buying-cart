import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Offcanvas, NavDropdown, Form, Navbar, Nav, Row, Col, Button, Badge } from 'react-bootstrap';
import LanguageContext from "../contexts/LanguageContext";
import OptionBodyContext from "../contexts/OptionBodyContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ThemeContext from "../contexts/ThemeContext";
import Language from "./Language";
import Logo from "./Logo";
import UserHead from "./UserHead";
import Theme from "./Theme";
import ShoppingCartHead from "./ShoppingCartHead";

function OffcanvasExample() {

  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const expand = "md";

  return (
    <>
      <Navbar key={expand} bg={theme} text="dark" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Logo />
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
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/offers">{texts.header_label_offers} </Nav.Link>
                <Nav.Link href="/news">{texts.header_label_news} </Nav.Link>
                <Nav.Link href="/combos">{texts.header_label_combos} </Nav.Link>
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
                  <Button variant="outline-warning">{texts.header_button_search} </Button>
                </Form></Col>
              </Row>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;