import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { getCategories } from "../services/productServices";
import sidebarStyles from "../styles/sidebarStyles";

export default function Sidebar({
  isOpen,
  toggleDrawer,
  getAllProducts,
  searchProductByCategory,
}) {
  const classes = sidebarStyles();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
          {loading || (categories.length && categories.length < 1) ? (
            <div style={{ padding: 8 }}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <>
              <ListItem
                button
                className={classes.categorytext}
                onClick={getAllProducts}
              >
                <ListItemText primary="all" />
              </ListItem>
              {categories.map((category, index) => (
                <ListItem
                  key={index}
                  button
                  className={classes.categorytext}
                  onClick={() => handleCategoryClick(category)}
                >
                  <ListItemText primary={category} />
                </ListItem>
              ))}
            </>
          )}
        </List>
      </div>
    </Drawer>
  );
}
