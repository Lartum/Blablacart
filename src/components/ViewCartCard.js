import {
  Box,
  Container,
  FormControl,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import cartStyles from "../styles/cartStyles";
export default function ViewCartCard({
  index,
  id,
  image,
  title,
  price,
  quantity,
  removeProduct,
  handleQuantityChange,
}) {
  const classes = cartStyles();
  return (
    <Container maxWidth="sm">
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 12,
          padding: 12,
        }}
      >
        <Box>
          <Typography style={{ color: "#00000D" }}>{title}</Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <img
            src={image}
            alt={title}
            className={classes.cartProductImage}
            style={{ position: "relative" }}
          />
          <Typography style={{ alignSelf: "center", marginLeft: 16 }}>
            ₹ {price * 75}
          </Typography>
          <Box style={{ marginLeft: "auto" }}>
            <Box style={{ display: "flex", justifyContent: "flex-end" }}>
              <FormControl style={{ alignSelf: "center" }}>
                <input
                  defaultValue={quantity}
                  // value={quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
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
        </Box>
      </Paper>
    </Container>
  );
}
