import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import cartStyles from "../styles/cartStyles";

export default function Cart({ cartToggle, toggleCart }) {
  const classes = cartStyles();
  const [cart, addProduct, removeProduct, handleQuantityChange] =
    useCart(useCart);
  const history = useHistory();

  let totalPrice = 0;
  if (cart.length > 0) {
    cart.map(({ quantity, price }) => {
      totalPrice = (totalPrice + price * 75) * quantity;
    });
  }
  return (
    <>
      {cartToggle ? (
        <div className={classes.root} onBlur={toggleCart}>
          <List>
            {cart.length > 0 ? (
              <>
                {cart.map(({ id, image, title, price }, index) => (
                  <ListItem key={id}>
                    <Box className={classes.imageContainer}>
                      <img
                        src={image}
                        alt={title}
                        className={classes.cartProductImage}
                      />
                    </Box>
                    <Box style={{ marginLeft: 4, flexGrow: 1 }}>
                      <Typography style={{ color: "#00000D" }}>
                        {title.length > 20
                          ? title.substring(0, 20) + "..."
                          : title}
                      </Typography>
                      <Typography style={{ color: "#00000D" }}>
                        ₹ {price * 75}
                      </Typography>
                      <Box
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <FormControl style={{ alignSelf: "center" }}>
                          <input
                            defaultValue={1}
                            // value={cart[index].quantity}
                            onChange={(e) =>
                              handleQuantityChange(index, e.target.value)
                            }
                            type="number"
                            id="tentacles"
                            name="tentacles"
                            min={1}
                            max={5}
                          />
                        </FormControl>
                        <IconButton
                          onClick={() => removeProduct(id)}
                          style={{ marginLeft: "auto" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
                <Divider />
                <ListItem>
                  <Typography style={{ color: "#000" }}>Total</Typography>
                  <Typography style={{ marginLeft: "auto", color: "#000" }}>
                    ₹{totalPrice}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Button
                    fullWidth
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => history.push("/viewcart")}
                  >
                    Checkout
                  </Button>
                </ListItem>
              </>
            ) : (
              <Typography
                variant="body1"
                style={{ color: "#00000D", textAlign: "center" }}
              >
                Cart is Empty
              </Typography>
            )}
          </List>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
