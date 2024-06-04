import { useState } from "react";
import SingleProduct from "./SingleProduct";
const featuredProductsList = [
  {
    image: "img/products/f1.jpg",
    brandName: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: 78,
  },
  {
    image: "img/products/f2.jpg",
    brandName: "US Polo",
    title: "Checked Shirt",
    price: 31,
  },
  {
    image: "img/products/f3.jpg",
    brandName: "Gucci",
    title: "Polo T-Shirts",
    price: 20,
  },
  {
    image: "img/products/f4.jpg",
    brandName: "H&M",
    title: "Cartoon T-Shirts",
    price: 33,
  },
  {
    image: "img/products/f5.jpg",
    brandName: "Zudio",
    title: "Floral Shirts",
    price: 49,
  },
  {
    image: "img/products/f6.jpg",
    brandName: "HRX",
    title: "Formal Shirts",
    price: 81,
  },
  {
    image: "img/products/f7.jpg",
    brandName: "Puma",
    title: "Floral Pajama",
    price: 99,
  },
  {
    image: "img/products/f8.jpg",
    brandName: "Tommy Hilfiger",
    title: "Retro Top",
    price: 110,
  },
];
const FeaturedProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const featuredProducts = featuredProductsList;
  function handleClick(product) {
    setSelectedProduct(product);
  }
  return (
    <>
      {selectedProduct ? (
        <>
          <SingleProduct product={selectedProduct} />
          <FeaturedProduct />
        </>
      ) : (
        featuredProducts.map((product) => (
          <>
            <div className="product" onClick={handleClick}>
              <img src={product.image} alt="" />
              <div className="description">
                <span>{product.brandName}</span>
                <h5>{product.title}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>${product.price}</h4>
              </div>
              <a href="#">
                <i className="fa-solid fa-cart-shopping cart"></i>
              </a>
            </div>
          </>
        ))
      )}
    </>
  );
};

export default FeaturedProduct;
