import {
  Paper,
  Container,
  Typography,
  Button,
  Divider,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import ViewCartCard from "../components/ViewCartCard";
import { useCart } from "../contexts/cart-context";

export default function ViewCart() {
  const [cart, addProduct, removeProduct, handleQuantityChange] =
    useCart(useCart);
  const history = useHistory();
  let totalItems = 0,
    totalPrice = 0;
  if (cart.length > 0) {
    cart.map(({ quantity, price }) => {
      totalItems = totalItems + quantity;
      totalPrice = (totalPrice + price * 75) * quantity;
    });
  }

  return (
    <>
      <Navbar hideSidebar={true} />
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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
          <Paper
            style={{
              padding: "12px 30px",
              flexGrow: 1,
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: "fit-content",
            }}
          >
            <Box style={{ display: "flex" }}>
              <Typography
                variant="body1"
                color="primary"
                style={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                Price Details
              </Typography>
              <Divider style={{ marginTop: 12 }} />
            </Box>
            <Box style={{ display: "flex" }}>
              <Typography>
                Price (<span>{totalItems} item</span>)
              </Typography>
              <Typography style={{ marginLeft: "auto" }}>
                ₹{totalPrice}
              </Typography>
            </Box>
            <Box style={{ display: "flex" }}>
              <Typography>Delivery Charges</Typography>
              <Typography style={{ marginLeft: "auto", color: "#388e3c" }}>
                Free
              </Typography>
            </Box>
            <Divider />
            <Box style={{ display: "flex" }}>
              <Typography style={{ fontWeight: "bold" }}>
                Total Payable
              </Typography>
              <Typography style={{ marginLeft: "auto", fontWeight: "bold" }}>
                ₹{totalPrice}
              </Typography>
            </Box>
            <Divider />
          </Paper>
        </div>
      </Container>
    </>
  );
}
