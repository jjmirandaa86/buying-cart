import React, { useContext } from 'react';
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const ListCartProducts = () => {

  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      {shoppingCart.length > 0 &&
        <>
          {shoppingCart.map(el =>
            <>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </>
          )}
        </>
      }
    </>
  );
};

export default ListCartProducts;