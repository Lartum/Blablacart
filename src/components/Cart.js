import {
  Box,
  Button,
  FormControl,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import cartStyles from "../styles/cartStyles";

export default function Cart({ cartToggle, toggleCart, cart, removeProduct }) {
  const classes = cartStyles();
  const history = useHistory();
  const handleQuantityChange = (index) => (event) => {
    cart[index].quantity = event.target.value;
  };

  const redirectToCheckout = () => {
    history.push("/checkout");
  };
  return (
    <>
      {cartToggle ? (
        <div className={classes.root} onBlur={toggleCart}>
          <List>
            {cart.length > 0 ? (
              <>
                {cart.map(({ id, imageUrl, name }, index) => (
                  <ListItem key={id}>
                    <Box className={classes.imageContainer}>
                      <img
                        src={imageUrl}
                        alt={name}
                        className={classes.cartProductImage}
                      />
                    </Box>
                    <Box style={{ marginLeft: 4 }}>
                      <Typography
                        style={{ color: "#00000D", textAlign: "center" }}
                      >
                        {name.length > 20
                          ? name.substring(0, 20) + "..."
                          : name}
                      </Typography>
                      <Box style={{ display: "flex" }}>
                        <FormControl style={{ alignSelf: "center" }}>
                          <input
                            defaultValue={1}
                            onChange={() => handleQuantityChange(index)}
                            type="number"
                            id="tentacles"
                            name="tentacles"
                            min={1}
                            max={5}
                          />
                        </FormControl>

                        <IconButton
                          onClick={() => removeProduct(index)}
                          style={{ marginLeft: "auto" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
                <ListItem>
                  <Button
                    fullWidth
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => redirectToCheckout()}
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
