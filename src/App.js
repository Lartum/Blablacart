import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import Navbar from "./components/Navbar";

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
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
