import React, { useState, useContext } from "react";
const CartContext = React.createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartProducts, setcartProducts] = useState([]);

  const addProduct = (product) => {
    const existingProduct = cartProducts.findIndex(
      ({ id }) => id === product.id
    );

    if (existingProduct > -1) {
      if (cartProducts[existingProduct].quantity >= 5) {
        return false;
      }
      const newQuantity = cartProducts[existingProduct].quantity++;
      return (cartProducts[existingProduct].price *= newQuantity);
    }
    if (!product.quantity) {
      product.quantity = 1;
    }
    setcartProducts(cartProducts.concat(product));
  };
  const removeProduct = (id) => {
    setcartProducts(cartProducts.filter((product) => id !== product.id));
  };

  const handleQuantityChange = (index, value) => {
    cartProducts[index].price *= value;
    cartProducts[index].quantity = value;
  };
  const data = [cartProducts, addProduct, removeProduct, handleQuantityChange];
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart can only be used inside CartProvider");
  }
  return context;
};
