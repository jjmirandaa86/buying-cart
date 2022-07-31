import React, { useContext } from 'react';
import { Badge, Button } from "react-bootstrap";
import LanguageContext from "../contexts/LanguageContext";
import OptionBodyContext from "../contexts/OptionBodyContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const ShoppingCartHead = () => {

  const { shoppingCart } = useContext(ShoppingCartContext);
  const { texts } = useContext(LanguageContext);
  const { optionBody, setOptionBody } = useContext(OptionBodyContext);

  return (
    <>
      {optionBody === "P"
        ? <span onClick={() => setOptionBody("C")}>
          <img src="svg/shopping-cart.svg"
            width={30} height={30}
            alt={texts.header_alt_cart} />
          <Badge pill bg="secondary">{shoppingCart.length}</Badge>
        </span>
        : <Button variant="primary" onClick={() => setOptionBody("P")}>
          ccccc
        </Button>
      }
    </>
  );
};

export default ShoppingCartHead;