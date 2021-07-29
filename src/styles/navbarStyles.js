import { makeStyles } from "@material-ui/core/styles";

const navbarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    // flexGrow: 1,
    fontWeight: "bolder",
    cursor: "pointer",
  },
}));

export default navbarStyles;
