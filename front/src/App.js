import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import OrderPage from "./containers/OrderPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";

import ToStart from './containers/ToStart';
import Contacts from './containers/Contacts';
import PaymentAndDelivery from './containers/container/PaymentAndDelivery/PaymentAndDelivery';
import Discounts from './containers/Promotion';
import Warranty from './containers/Warranty';
import Workshop from './containers/Workshop';
import Improvement from './containers/Improvement';
import GoldLeaf from './containers/GoldLeaf';
import ChoiceOfMonument from './containers/ChoiceOfMonument';
import Headstones from './containers/Headstones';
import Engraving from './containers/Engraving';
import Exclusive from './containers/Exclusive';
import Payment from "./containers/Payment";
import WholesaleBuyers from "./containers/WholesaleBuyers";
import Test from "./Test";
import Partner from './containers/Partner/Partner';
import GraniteCatalog from './containers/GraniteCatalog/GraniteCatalog';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    // console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/test" component={Test} /> */}
          <Route path="/to-start" component={ToStart} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/paymentAnd-delivery" component={PaymentAndDelivery} exact />
          <Route path="/payment" component={Payment} exact />
          <Route path="/discounts" component={Discounts} exact />
          <Route path="/warranty" component={Warranty} exact />
          <Route path="/workshop" component={Workshop} exact />
          <Route path="/improvement" component={Improvement} exact />
          <Route path="/gold-leaf" component={GoldLeaf} exact />
          <Route path="/choice-of-monument" component={ChoiceOfMonument} exact />
          <Route path="/headstones" component={Headstones} exact />
          <Route path="/engraving" component={Engraving} exact />
          <Route path="/exclusive" component={Exclusive} exact />
          <Route path="/wholesale-buyers" component={WholesaleBuyers} exact />
          <Route path="/partner" component={Partner} exact />
          <Route path="/granite-catalog" component={GraniteCatalog} exact />


          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          <Route path="/:slug" component={ProductListPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
