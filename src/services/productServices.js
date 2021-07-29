export function getProducts(limit) {
  return fetch("https://fakestoreapi.com/products?limit=" + limit).then((res) =>
    res.json()
  );
}

export function getProductById(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
}

export function getCategories() {
  return fetch(`https://fakestoreapi.com/products/categories`).then((res) =>
    res.json()
  );
}

export function getProductsByCategory(category) {
  return fetch(
    encodeURI(`https://fakestoreapi.com/products/category/${category}`)
  ).then((res) => res.json());
}
