import React, { useContext } from 'react';
import ProductContext from "../contexts/ProductContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const ListCartProducts = () => {

  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      {shoppingCart.length > 0 &&
        <>
          {shoppingCart.map((el, index) =>
            <tr key={index}>
              <td>{index} </td>
              <td>{el.name} </td>
              <td>{el.quantity} </td>
              <td>$ {el.price} </td>
              <td>$ {parseFloat(el.price) * parseFloat(el.quantity)} </td>
            </tr>
          )}
        </>
      }
    </>
  );
};

export default ListCartProducts;