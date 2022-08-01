import React from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Combos from "../components/cart/Combos";
import Error from "../components/error/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/login/Login";
import News from "../components/cart/News";
import Offers from "../components/cart/Offers";
import ShoppingCart from "../components/cart/ShoppingCart";
import User from "../components/user/User";
import ProductsView from "../components/cart/ProductsView";
import RememberUser from "../components/user/RememberUser";

const NavPage = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/offers">
              <>
                <Offers />
                <ProductsView />
              </>
            </Route>
            <Route exact path="/news">
              <>
                <News />
                <ProductsView />
              </>
            </Route>
            <Route exact path="/combos">
              <>
                <Combos />
                <ProductsView />
              </>
            </Route>
            <Route exact path="/cart"><ShoppingCart /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/user"><User /></Route>
            <Route exact path="/rememberuser"><RememberUser /></Route>
            <Route exact path="/">
              <>
                <Offers />
                <ProductsView />
              </>
            </Route>
            <Route exact path="*" component={<Error />}></Route>
          </Switch>
        </Container >
        <Footer />
      </Router>
    </>
  );
};

export default NavPage;