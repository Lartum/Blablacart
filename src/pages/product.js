import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";

import { Skeleton } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/cart-context";
import { getProductById } from "../services/productServices";
import productStyles from "../styles/productStyles";

export default function Product() {
  const { id } = useParams();
  const classes = productStyles();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [cart, addProduct, removeProduct] = useCart(useCart);
  useEffect(() => {
    setLoading(!loading);
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(!loading));
  }, [id]);

  return (
    <>
      <Navbar hideSidebar={true} />
      <Container className={classes.productContainer}>
        <>
          <Box className={classes.product}>
            {loading || !product ? (
              <Skeleton
                animation="wave"
                variant="rect"
                className={classes.skeletonMedia}
              />
            ) : (
              <img
                src={product.image}
                alt={product.title}
                className={classes.productImage}
              />
            )}
            {loading || !product ? (
              <Skeleton
                animation="wave"
                height={20}
                style={{ marginBottom: 6, width: 250 }}
              />
            ) : (
              <Button
                // fullWidth
                className={classes.cartButton}
                size="small"
                color="primary"
                variant="contained"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "30px",
                }}
                onClick={() => addProduct(product)}
              >
                Add To Cart
              </Button>
            )}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "15px",
              paddingRight: "15px",
              marginTop: 24,
            }}
          >
            {loading || !product ? (
              <Skeleton
                animation="wave"
                variant="rect"
                height={20}
                style={{
                  marginBottom: 18,
                  width: 250,
                  // marginLeft: "auto",
                  // marginRight: "auto",
                }}
              />
            ) : (
              <Typography
                variant="h4"
                style={{ marginBottom: 18 }}
                color="primary"
              >
                {product.title}
              </Typography>
            )}
            {loading || !product ? (
              <Skeleton
                animation="wave"
                variant="rect"
                height={20}
                style={{
                  marginBottom: 18,
                  width: 250,
                  // marginLeft: "auto",
                  // marginRight: "auto",
                }}
              />
            ) : (
              <Typography
                variant="h4"
                style={{ marginBottom: 18, fontWeight: "bold" }}
              >
                ₹ {product.price * 75}
              </Typography>
            )}
            {loading || !product ? (
              <>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={10}
                  style={{
                    marginBottom: 8,
                    width: 250,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={10}
                  style={{
                    marginBottom: 3,
                    width: 250,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={10}
                  style={{
                    marginBottom: 3,
                    width: 250,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Skeleton
                  animation="wave"
                  variant="rect"
                  height={10}
                  style={{
                    marginBottom: 3,
                    width: 250,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  style={{ marginBottom: 8 }}
                  color="primary"
                >
                  Description
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: 12,
                  }}
                >
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  Categories
                </Typography>
                {loading || !product ? (
                  <Skeleton animation="wave" variant="rect" style={{}} />
                ) : (
                  <>
                    <Divider style={{ marginBottom: 12 }} />
                    <Chip
                      style={{ width: 150 }}
                      variant="outlined"
                      color="primary"
                      label={product.category}
                    />
                    <Divider style={{ marginTop: 12 }} />
                  </>
                )}
              </>
            )}
          </Box>
        </>
      </Container>
    </>
  );
}
