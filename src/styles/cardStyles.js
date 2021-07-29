import { makeStyles } from "@material-ui/core/styles";

const cardStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    display: "flex",
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
      maxWidth: 390,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 350,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 300,
    },
    maxHeight: 600,
  },
  media: {
    height: 250,
  },
  skeletonMedia: {
    width: 300,
    height: 250,
  },
  skeletonButton: {
    width: "100%",
  },
}));

export default cardStyles;
