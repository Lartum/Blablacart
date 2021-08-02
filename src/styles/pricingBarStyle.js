import { makeStyles } from "@material-ui/core/styles";

const pricingBarStyle = makeStyles((theme) => ({
  root: {
    padding: "12px 30px",
    flexGrow: 1,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    height: "fit-content",
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: 50,
    //   gap: 20,
    // },
    // [theme.breakpoints.up("md")]: {
    //   marginTop: 50,
    //   gap: 30,
    // },
    // [theme.breakpoints.up("lg")]: {
    //   marginTop: 100,
    //   gap: 10,
    // },
    // marginTop: 12,
  },
}));

export default pricingBarStyle;
