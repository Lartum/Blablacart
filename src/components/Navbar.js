import { useState } from "react";
import {
  AppBar,
  Badge,
  // Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import navbarStyles from "../styles/navbarStyles";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import { useCart } from "../contexts/cart-context";
import { useHistory } from "react-router-dom";

export default function Navbar({
  getAllProducts,
  searchProductByCategory,
  hideSidebar = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const classes = navbarStyles();
  const [cart, addProduct, removeProduct, handleQuantityChange] =
    useCart(useCart);
  const history = useHistory();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const toggleCart = (event) => {
    setCartToggle(!cartToggle);
  };

  const redirectHome = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          {hideSidebar ? (
            <></>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            className={classes.title}
            onClick={redirectHome}
          >
            BlablaCart
          </Typography>
          <>
            <IconButton
              onClick={() => toggleCart()}
              style={{ marginLeft: "auto" }}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Cart cartToggle={cartToggle} toggleCart={toggleCart} />
          </>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <Typography variant="body1">Username</Typography>
        </Toolbar>
      </AppBar>
      {hideSidebar ? (
        <></>
      ) : (
        <Sidebar
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          getAllProducts={getAllProducts}
          searchProductByCategory={searchProductByCategory}
        />
      )}
    </div>
  );
}
