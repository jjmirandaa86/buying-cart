import { Button, Stack } from "react-bootstrap";
import React, { useContext } from 'react';
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const ListCartProducts = ({ data,
  handleDeleteProductToCart,
  addOneProductToCart,
  removeOneProductToCart }) => {

  const { id, name, quantity, price } = data;

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name} </td>
        <td>{quantity} </td>
        <td>$ {price} </td>
        <td>$ {parseFloat(price) * parseFloat(quantity)} </td>
        <td>
          <Stack gap={1} direction="horizontal">
            <Button
              onClick={(() => handleDeleteProductToCart(data))}
              variant="outline-danger"
            >X</Button>
            {quantity > 1
              ? <>
                <Button
                  onClick={(() => addOneProductToCart(data))}
                  variant="secondary" >+</Button>
                <Button
                  onClick={(() => removeOneProductToCart(data))}
                  variant="outline-secondary"
                >-</Button>
              </>
              : ""
            }
          </Stack>
        </td>
      </tr>
    </>
  );
};

export default ListCartProducts;