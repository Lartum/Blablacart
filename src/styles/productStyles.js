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
  productDetails: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 24,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 40,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 40,
    },
  },
  product: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 350,
    marginTop: 24,
    alignSelf: "flex-start",
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
      marginTop: 50,
    },
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
      marginTop: 50,
    },
    [theme.breakpoints.up("lg")]: {
      flexWrap: "nowrap",
      marginTop: 100,
    },
  },
  cartButton: {
    width: 250,
  },
}));

export default productStyles;
