import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import LanguageContext from "../../contexts/LanguageContext";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import ThemeContext from "../../contexts/ThemeContext";
import ListCartProducts from "./ListCartProducts";

const ShoppingCart = () => {

  const { shoppingCart,
    handleDeleteProductToCart,
    addOneProductToCart,
    removeOneProductToCart } = useContext(ShoppingCartContext);

  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const totalExpense = shoppingCart.map(el =>
    parseFloat(el.price) * parseFloat(el.quantity));

  return (
    <>
      <Table responsive="xs" variant={theme} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{texts.shopping_cart_table_title_product} </th>
            <th>{texts.shopping_cart_table_title_quantity} </th>
            <th>{texts.shopping_cart_table_title_price} </th>
            <th>{texts.shopping_cart_table_title_sTotal} </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingCart.length > 0 &&
            <>
              {
                shoppingCart.map((el, index) =>
                  <ListCartProducts
                    key={index}
                    data={el}
                    handleDeleteProductToCart={handleDeleteProductToCart}
                    addOneProductToCart={addOneProductToCart}
                    removeOneProductToCart={removeOneProductToCart}
                  />
                )
              }
            </>
          }
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