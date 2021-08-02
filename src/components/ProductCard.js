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

export default function ProductCard({
  loading,
  id,
  image = "",
  title = "",
  price,
  related = false,
}) {
  const classes = cardStyles();
  const [, addProduct] = useCart(useCart);
  const history = useHistory();
  const product = {
    id,
    image,
    title,
    price,
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
        ) : image.length > 0 ? (
          <CardMedia
            className={classes.media}
            component="img"
            alt="Product"
            image={image}
            title={title}
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
              {title.length > 20 ? title.substring(0, 20) + "..." : title}
            </Typography>
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              ₹ {price * 75}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {related ? (
        <></>
      ) : (
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
      )}
    </Card>
  );
}
