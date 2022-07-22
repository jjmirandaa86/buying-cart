import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import LanguageContext from "../contexts/LanguageContext";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import ListCartProducts from "./ListCartProducts";

const ShoppingCart = () => {

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const { texts } = useContext(LanguageContext);


  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{texts.shopping_cart_table_title_image} </th>
            <th>{texts.shopping_cart_table_title_product} </th>
            <th>{texts.shopping_cart_table_title_quantity} </th>
            <th>{texts.shopping_cart_table_title_total} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <ListCartProducts />
          </tr>
        </tbody>
      </Table>


    </>
  );
};

export default ShoppingCart;