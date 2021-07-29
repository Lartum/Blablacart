import { makeStyles } from "@material-ui/core/styles";

const cartStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    top: 60,

    [theme.breakpoints.down("sm")]: {
      right: 14,
    },
    [theme.breakpoints.up("md")]: {
      right: 28,
    },
    [theme.breakpoints.up("lg")]: {
      right: 28,
    },
    padding: 4,
    borderRadius: 4,
  },
  imageContainer: {
    width: 48,
    height: 48,
  },
  pointer: {
    borderColor: "transparent transparent #fff transparent",
    borderStyle: "solid",
    borderWidth: "0px 15px 20px 15px",
    height: 0,
    width: 0,
  },
  cartProductImage: {
    width: 40,
    marginTop: 8,
    position: "absolute",
    top: 0,
  },
}));

export default cartStyles;
