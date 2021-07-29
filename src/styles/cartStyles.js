import { makeStyles } from "@material-ui/core/styles";

const cartStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    top: 60,

    [theme.breakpoints.down("sm")]: {
      right: 30,
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      right: 28,
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      right: 28,
      width: "100%",
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
