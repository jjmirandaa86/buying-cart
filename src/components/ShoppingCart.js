import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import LanguageContext from "../contexts/LanguageContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ListCartProducts from "./ListCartProducts";

const ShoppingCart = () => {

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const { texts } = useContext(LanguageContext);

  const totalExpense = shoppingCart.map(el =>
    parseFloat(el.price) * parseFloat(el.quantity));

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{texts.shopping_cart_table_title_product} </th>
            <th>{texts.shopping_cart_table_title_quantity} </th>
            <th>{texts.shopping_cart_table_title_price} </th>
            <th>{texts.shopping_cart_table_title_sTotal} </th>
          </tr>
        </thead>
        <tbody>
          <ListCartProducts />
        </tbody>
      </Table>
      <div>
        {texts.shopping_cart_table_title_total}:
        $ {totalExpense}
      </div>

    </>
  );
};

export default ShoppingCart;