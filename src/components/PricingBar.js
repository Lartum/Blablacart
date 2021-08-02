import { Box, Divider, Paper, Typography } from "@material-ui/core";
import pricingBarStyle from "../styles/pricingBarStyle";

export default function PricingBar({ totalItems, totalPrice }) {
  const classes = pricingBarStyle();
  return (
    <Paper className={classes.root}>
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
        <Typography style={{ marginLeft: "auto" }}>₹{totalPrice}</Typography>
      </Box>
      <Box style={{ display: "flex" }}>
        <Typography>Delivery Charges</Typography>
        <Typography style={{ marginLeft: "auto", color: "#388e3c" }}>
          Free
        </Typography>
      </Box>
      <Divider />
      <Box style={{ display: "flex" }}>
        <Typography style={{ fontWeight: "bold" }}>Total Payable</Typography>
        <Typography style={{ marginLeft: "auto", fontWeight: "bold" }}>
          ₹{totalPrice}
        </Typography>
      </Box>
      <Divider />
    </Paper>
  );
}
