import { makeStyles } from "@material-ui/core/styles";

const viewCartStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    flexWrap: "wrap",
    display: "flex",
    // justifyContent: "center",
    // gap: 10,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
      gap: 12,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
      gap: 12,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 100,
      gap: 12,
    },
    marginTop: 12,
  },
}));

export default viewCartStyles;
