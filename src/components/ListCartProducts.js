import { Button, Stack } from "react-bootstrap";
import React, { useContext } from 'react';
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const ListCartProducts = () => {

  const {
    shoppingCart,
    addOneProductToCart,
    handleDeleteProductToCart,
    removeOneProductToCart } = useContext(ShoppingCartContext);

  return (
    <>
      {shoppingCart.length > 0 &&
        <>
          {shoppingCart.map((el, index) => {
            const { id, name, quantity, price } = el;
            return (
              <>
                <tr key={index}>
                  <td>{index} </td>
                  <td>{name} </td>
                  <td>{quantity} </td>
                  <td>$ {price} </td>
                  <td>$ {parseFloat(price) * parseFloat(quantity)} </td>
                  <td>
                    <Stack gap={1} direction="horizontal">
                      <Button
                        onClick={(() => handleDeleteProductToCart(el))}
                        variant="outline-danger"
                      >X</Button>
                      {quantity > 1
                        ? <>
                          <Button
                            onClick={(() => addOneProductToCart(el))}
                            variant="secondary" >+</Button>
                          <Button
                            onClick={(() => removeOneProductToCart(el))}
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
          }
          )}
        </>
      }
    </>
  );
};

export default ListCartProducts;