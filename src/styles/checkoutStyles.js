import { makeStyles } from "@material-ui/core";

const checkoutStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 100,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 100,
    },
  },

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default checkoutStyles;
