import { makeStyles } from "@material-ui/core/styles";

const cardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    gap: 10,
    [theme.breakpoints.down("sm")]: {
      gap: 20,
    },
    [theme.breakpoints.up("md")]: {
      gap: 30,
    },
    [theme.breakpoints.up("lg")]: {
      gap: 10,
    },
    marginTop: 12,
  },
  card: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      minWidth: 300,
      maxWidth: 300,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 250,
      maxWidth: 250,
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 300,
      maxWidth: 300,
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: 300,
      maxWidth: 300,
    },
    maxHeight: 600,
  },
  media: {
    height: 250,
  },
  skeletonMedia: {
    [theme.breakpoints.down("sm")]: {
      width: 350,
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
  skeletonButton: {
    width: "100%",
  },
}));

export default cardStyles;
