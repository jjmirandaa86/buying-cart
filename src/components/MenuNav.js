import { useContext } from "react";
import { Container, Offcanvas, NavDropdown, Form, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import LanguageContext from "../contexts/LanguageContext";
import ThemeContext from "../contexts/ThemeContext";
import Language from "./Language";
import Logo from "./Logo";
import Theme from "./Theme";

function OffcanvasExample() {

  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const expand = "md";

  return (
    <>
      <Navbar key={expand} bg={theme} expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo />
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