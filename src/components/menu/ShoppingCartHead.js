import React, { useContext } from 'react';
import { Badge } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

const ShoppingCartHead = () => {

  const { shoppingCart } = useContext(ShoppingCartContext);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <span>
        <img src="svg/shopping-cart.svg"
          width={30} height={30}
          alt={texts.header_alt_cart} />
        <Badge pill bg="secondary">{shoppingCart.length}</Badge>
      </span>
    </>
  );
};

export default ShoppingCartHead;