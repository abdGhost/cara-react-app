import FeaturedProduct from "../../components/FeaturedProduct";
import NewsLetter from "../../components/NewsLetter";
import "../Home/Home.css";
const Shop = () => {
  return (
    <>
      {/* <!-- Hero Section start --> */}
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>{" "}
      <section id="product1" className="section-p1">
        <div className="product-container">
          <FeaturedProduct />
        </div>
      </section>
      {/* <!-- Hero Section end --> */}{" "}
      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
      <NewsLetter />
    </>
  );
};

export default Shop;
