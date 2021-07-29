import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import { useCart } from "../contexts/cart-context";
import cartStyles from "../styles/cartStyles";

export const AddressForm = () => {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <TextField variant="outlined" label="Name" />
      <TextField variant="outlined" label="Mobile Number" />
      <TextField variant="outlined" label="Pincode" />
      <TextField variant="outlined" label="Locality" />
      <TextField variant="outlined" label="Address" />
      <TextField variant="outlined" label="City/District" />
      <FormControl style={{ minWidth: 120 }}>
        <InputLabel>State</InputLabel>
        <Select>
          {indianState.map((state, index) => (
            <MenuItem key={index} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const OrderSummary = () => {
  const [cart, addProduct, removeProduct, handleQuantityChange] =
    useCart(useCart);
  const classes = cartStyles();
  return (
    <div>
      <List>
        {cart.length > 0 ? (
          cart.map(({ id, image, title, price, quantity }, index) => (
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
                  {title.length > 20 ? title.substring(0, 20) + "..." : title}
                </Typography>
                <Typography style={{ color: "#00000D" }}>₹{}</Typography>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <FormControl style={{ alignSelf: "center" }}>
                    <input
                      defaultValue={1}
                      value={quantity}
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
          ))
        ) : (
          <Typography>Cart is Empty</Typography>
        )}
      </List>
    </div>
  );
};

export const PaymentOptions = () => {
  const [method, setMethod] = useState("");
  const handleChange = (e) => {
    setMethod(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel component="legend">Payment Methods</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={method}
        onChange={handleChange}
      >
        <FormControlLabel
          value="credit/debit"
          control={<Radio />}
          label="Credit Card/Debit Card"
        />
        <FormControlLabel
          value="net_banking"
          control={<Radio />}
          label="Net Banking"
        />
        <FormControlLabel
          value="upi"
          control={<Radio />}
          label="Other UPI Apps"
        />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="EMI"
        />
        <FormControlLabel
          value="cod"
          control={<Radio />}
          label="Pay on delivery"
        />
      </RadioGroup>
    </FormControl>
  );
};

let indianState = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
