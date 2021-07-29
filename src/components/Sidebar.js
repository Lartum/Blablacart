import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCategories } from "../services/productServices";
import sidebarStyles from "../styles/sidebarStyles";

export default function Sidebar({
  isOpen,
  toggleDrawer,
  searchProductByCategory,
}) {
  const classes = sidebarStyles();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const handleCategoryClick = (category) => {
    searchProductByCategory(category);
  };
  return (
    <Drawer open={isOpen} onClose={toggleDrawer(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={(event) => toggleDrawer(false)}
        onKeyDown={(event) => toggleDrawer(false)}
      >
        <Typography
          variant="h6"
          color="primary"
          className={classes.sidebarTitle}
        >
          BlablaCart
        </Typography>
        <List>
          {categories.map((category, index) => (
            <ListItem
              button
              className={classes.categorytext}
              onClick={() => handleCategoryClick(category)}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
          {/* <ListItem button>
            <ListItemText primary="Category 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Category 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Category 3" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Category 4" />
          </ListItem> */}
        </List>
      </div>
    </Drawer>
  );
}
