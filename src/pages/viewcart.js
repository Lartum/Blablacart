import { Paper, Container, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import PricingBar from "../components/PricingBar";
import ViewCartCard from "../components/ViewCartCard";
import { useCart } from "../contexts/cart-context";
import viewCartStyles from "../styles/viewCartStyles";

export default function ViewCart() {
  const [cart, , removeProduct, handleQuantityChange] = useCart(useCart);
  const classes = viewCartStyles();
  const history = useHistory();
  let totalItems = 0,
    totalPrice = 0;
  if (cart.length > 0) {
    cart.map(({ quantity, price }) => {
      totalItems = totalItems + quantity;
      return (totalPrice = (totalPrice + price * 75) * quantity);
    });
  }

  return (
    <>
      <Navbar hideSidebar={true} showBackButton={true} />
      <Container>
        <div className={classes.root}>
          <Paper
            style={{
              flexGrow: 1,
              marginTop: 20,
              paddingTop: 12,
              paddingBottom: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              color="primary"
              style={{ textAlign: "center", fontWeight: "bolder" }}
            >
              Shopping Cart
            </Typography>
            {cart.length < 1 ? (
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Cart is empty
              </Typography>
            ) : (
              cart.map(({ id, image, title, quantity, price }, index) => (
                <ViewCartCard
                  key={id}
                  index={index}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  quantity={quantity}
                  removeProduct={removeProduct}
                  handleQuantityChange={handleQuantityChange}
                />
              ))
            )}
            {cart.length < 1 ? (
              <Button
                color="primary"
                size="small"
                variant="contained"
                onClick={() => history.push("/")}
                style={{
                  width: 250,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 16,
                }}
              >
                Go to Products
              </Button>
            ) : (
              <Button
                color="primary"
                size="small"
                variant="contained"
                style={{
                  width: 250,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 16,
                }}
                onClick={() => history.push("/checkout")}
              >
                Proceed To Checkout
              </Button>
            )}
          </Paper>
          <PricingBar totalItems={totalItems} totalPrice={totalPrice} />
        </div>
      </Container>
    </>
  );
}
