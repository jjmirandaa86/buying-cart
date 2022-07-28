import React, { useContext } from 'react';
import { Card, Button, Container, Form, Col, Row, InputGroup } from 'react-bootstrap';
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ThemeContext from "../contexts/ThemeContext";

const ItemProducts = ({ product }) => {

  const { id, name, price, url, brand } = product;

  const { theme } = useContext(ThemeContext);
  const { addOneProductToCart } = useContext(ShoppingCartContext);

  const bgCard = `bg- ${theme}`;

  //"bg-" + theme + " text-" + theme === "light" ? "dark" : "white";

  return (
    <>
      <Card
        className="text-center"
        style={{ width: '20%' }}
        bg={theme.toLowerCase()}
        key={theme}
        text={theme.toLowerCase() === 'light' ? 'dark' : 'white'}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {brand}
          </Card.Text>
          <InputGroup className="mb-4">
            <Button variant="outline-secondary"
              onClick={() => addOneProductToCart(product)}>-</Button>
            <Form.Control aria-label=""
              placeholder="0" />
            <Button variant="outline-secondary"
              onClick={() => addOneProductToCart(product)}>+</Button>
            <Button variant="outline-secondary"
              onClick={() => addOneProductToCart(product)}>Agregar</Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemProducts;