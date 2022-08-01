import React, { useContext } from 'react';
import { Card, Button, Container, Form, Col, Row, InputGroup } from 'react-bootstrap';
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import StyleContext from "../../contexts/StyleContext";
import ThemeContext from "../../contexts/ThemeContext";

const ItemProducts = ({ product }) => {

  const { id, name, price, url, brand } = product;

  const { theme } = useContext(ThemeContext);
  const { style } = useContext(StyleContext);
  const { addOneProductToCart } = useContext(ShoppingCartContext);

  return (
    <Container>
      <Card
        style={{ width: '10rem', padding: '0.5rem' }}
        bg={theme.toLowerCase()}
        key={theme}
        text={theme.toLowerCase() === 'light' ? 'dark' : 'white'}>
        <div><h6>{brand}</h6></div>
        <Card.Img variant="top" src={url} />
        <Card.Body className="text-center p-1">
          <Card.Text>
            <div><h6>{name}</h6></div>
            <div><h4>$ {price}</h4></div>
          </Card.Text>
          <Button variant={`${style.colorFirst}`}
            onClick={() => addOneProductToCart(product)}>
            <img src="svg/shopping-cart.svg"
              width={30} height={30}
              alt={"dd"} />
            Agregar</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemProducts;