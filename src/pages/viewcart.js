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
              cart.map(({ id, image, title, quantity }, index) => (
                <ViewCartCard
                  key={id}
                  index={index}
                  id={id}
                  image={image}
                  title={title}
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
              gap: 50,
              height: "fit-content",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="primary"
                style={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                Price Details
              </Typography>
              <Divider style={{ marginTop: 12 }} />
            </Box>
            <Box>
              <Typography>
                Price (<span>{cart.length} item</span>)
              </Typography>
            </Box>
            <Box>
              <Typography>Delivery Charges</Typography>
            </Box>
            <Box>
              <Typography>Total Payable</Typography>
            </Box>
          </Paper>
        </div>
      </Container>
    </>
  );
}
