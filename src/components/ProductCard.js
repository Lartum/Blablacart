import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import cardStyles from "../styles/cardStyles";
import { useCart } from "../contexts/cart-context";
import { useHistory } from "react-router-dom";

export default function ProductCard({ loading, id, imageUrl = "", name = "" }) {
  const classes = cardStyles();
  const [cart, addProduct, removeProduct] = useCart(useCart);
  const history = useHistory();
  const product = {
    id,
    imageUrl,
    name,
    quantity: 1,
  };

  const handleProductRedirect = () => {
    if (!loading) history.push("/product/" + id);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleProductRedirect}>
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rect"
            className={classes.skeletonMedia}
          />
        ) : imageUrl.length > 0 ? (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Product"
            image={imageUrl}
            title={name}
          />
        ) : (
          <Skeleton
            animation="wave"
            variant="rect"
            className={classes.skeletonMedia}
          />
        )}
        <CardContent>
          {loading ? (
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography gutterBottom variant="h6" component="h6" align="center">
              {name.length > 20 ? name.substring(0, 20) + "..." : name}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {loading ? (
          <Skeleton
            animation="wave"
            height={20}
            style={{ marginBottom: 6 }}
            className={classes.skeletonButton}
          />
        ) : (
          <Button
            fullWidth
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
