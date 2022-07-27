import { useContext } from "react";
import { Container, Offcanvas, NavDropdown, Form, Navbar, Nav, Row, Col, Button, Badge } from 'react-bootstrap';
import LanguageContext from "../contexts/LanguageContext";
import OptionBodyContext from "../contexts/OptionBodyContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ThemeContext from "../contexts/ThemeContext";
import Language from "./Language";
import Logo from "./Logo";
import Theme from "./Theme";

function OffcanvasExample() {

  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { shoppingCart } = useContext(ShoppingCartContext);
  const { optionBody, setOptionBody } = useContext(OptionBodyContext);

  const expand = "md";

  return (
    <>
      <Navbar key={expand} bg={theme} text="dark" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo />
            <span className="justify-content-center">
              {optionBody === "P"
                ? <Button variant="primary" onClick={() => setOptionBody("C")}>
                  {texts.header_button_cart} <Badge pill bg="secondary">{shoppingCart.length}</Badge>
                </Button>
                : <Button variant="primary" onClick={() => setOptionBody("P")}>
                  {texts.header_button_products}
                </Button>
              }

            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
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
                  <Button variant="outline-success">{texts.header_button_search} </Button>
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