import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Combos from "../components/Combos";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import Main from "../components/Main";
import News from "../components/News";
import Offers from "../components/Offers";
import ShoppingCart from "../components/ShoppingCart";
import User from "../components/User";

const NavPage = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/offers"><><Offers /></></Route>
          <Route exact path="/combos"><><Combos /></></Route>
          <Route exact path="/news"><><News /></></Route>
          <Route exact path="/cart"><ShoppingCart /></Route>
          <Route exact path="/user"><User /></Route>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/x">
            E1111
          </Route>
          <Route exact path="/rememberuser"><Footer /></Route>
          <Route exact path="*" component={<Error />}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default NavPage;