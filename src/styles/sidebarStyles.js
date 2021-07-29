import { makeStyles } from "@material-ui/core";

const sidebarStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  categorytext: {
    textTransform: "capitalize",
  },
  sidebarTitle: {
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 2,
  },
});

export default sidebarStyles;
