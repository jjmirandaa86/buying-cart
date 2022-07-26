import React, { useContext } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ThemeContext from "../contexts/ThemeContext";

const ItemProducts = ({ product, handleAddProduct }) => {

  const { id, name, price, url, brand } = product;

  const { theme } = useContext(ThemeContext);
  const {
    shoppingCart,
    addOneProductToCart } = useContext(ShoppingCartContext);

  const bgCard = `bg- ${theme}`;

  //"bg-" + theme + " text-" + theme === "light" ? "dark" : "white";

  return (
    <>
      <Card style={{ width: '11rem' }}
        bg={theme.toLowerCase()}
        key={theme}
        text={theme.toLowerCase() === 'light' ? 'dark' : 'white'}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name} {" "} ${price} </Card.Title>
          <Card.Text>
            {brand} {" - "} {name}
          </Card.Text>
          <Button onClick={(() => addOneProductToCart(product))} variant="primary">+</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemProducts;