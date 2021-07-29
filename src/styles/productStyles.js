import { makeStyles } from "@material-ui/core";

const productStyles = makeStyles((theme) => ({
  productImage: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "350",
    },
    [theme.breakpoints.up("lg")]: {
      width: 350,
    },
  },
  product: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 350,
    marginTop: 24,
  },
  skeletonMedia: {
    [theme.breakpoints.down("sm")]: {
      width: 200,
      height: 150,
    },
    [theme.breakpoints.up("md")]: {
      width: 350,
      height: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: 350,
      height: 250,
    },
  },
  productContainer: {
    display: "flex",

    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
    [theme.breakpoints.up("lg")]: {
      flexWrap: "nowrap",
    },
  },
  cartButton: {
    width: 250,
  },
}));

export default productStyles;
