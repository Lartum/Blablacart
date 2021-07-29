import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import ViewCart from "./pages/viewcart";
import Checkout from "./pages/checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/viewcart">
          <ViewCart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
