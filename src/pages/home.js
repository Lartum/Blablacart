import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import cardStyles from "../styles/cardStyles";
import {
  getProducts,
  getProductsByCategory,
} from "../services/productServices";

export default function Home() {
  const classes = cardStyles();
  const [products, setProducts] = useState([]);
  const [limit] = useState(24);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getAllProducts = () => {
    setLoading(true);
    getProducts(limit)
      .then((res) => {
        setProducts(res);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const searchProductByCategory = (category) => {
    setLoading(true);
    getProductsByCategory(category)
      .then((res) => {
        setProducts(res);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar
        getAllProducts={getAllProducts}
        searchProductByCategory={searchProductByCategory}
      />
      <Container maxWidth="lg">
        <div className={classes.root}>
          {products.map(({ id, image, title, price }, index) => (
            <ProductCard
              key={index}
              loading={loading}
              id={id}
              image={image}
              title={title}
              price={price}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
