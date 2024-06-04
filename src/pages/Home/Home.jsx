import FeaturedProduct from "../../components/FeaturedProduct";
import NewsLetter from "../../components/NewsLetter";
import Services from "../../components/Services";
import "./Home.css";

// const featuredProductsList = [
//   {
//     image: "img/products/f1.jpg",
//     brandName: "adidas",
//     title: "Cartoon Astronaut T-Shirt",
//     price: 78,
//   },
//   {
//     image: "img/products/f2.jpg",
//     brandName: "US Polo",
//     title: "Checked Shirt",
//     price: 31,
//   },
//   {
//     image: "img/products/f3.jpg",
//     brandName: "Gucci",
//     title: "Polo T-Shirts",
//     price: 20,
//   },
//   {
//     image: "img/products/f4.jpg",
//     brandName: "H&M",
//     title: "Cartoon T-Shirts",
//     price: 33,
//   },
//   {
//     image: "img/products/f5.jpg",
//     brandName: "Zudio",
//     title: "Floral Shirts",
//     price: 49,
//   },
//   {
//     image: "img/products/f6.jpg",
//     brandName: "HRX",
//     title: "Formal Shirts",
//     price: 81,
//   },
//   {
//     image: "img/products/f7.jpg",
//     brandName: "Puma",
//     title: "Floral Pajama",
//     price: 99,
//   },
//   {
//     image: "img/products/f8.jpg",
//     brandName: "Tommy Hilfiger",
//     title: "Retro Top",
//     price: 110,
//   },
// ];
const newArrivalProducts = [
  {
    image: "img/products/n1.jpg",
    brandName: "adidas",
    title: "Cartoon Astronaut T-Shirt",
    price: 78,
  },
  {
    image: "img/products/n2.jpg",
    brandName: "US Polo",
    title: "Checked Shirt",
    price: 31,
  },
  {
    image: "img/products/n3.jpg",
    brandName: "Gucci",
    title: "Polo T-Shirts",
    price: 20,
  },
  {
    image: "img/products/n4.jpg",
    brandName: "H&M",
    title: "Cartoon T-Shirts",
    price: 33,
  },
  {
    image: "img/products/n5.jpg",
    brandName: "Zudio",
    title: "Floral Shirts",
    price: 49,
  },
  {
    image: "img/products/n6.jpg",
    brandName: "HRX",
    title: "Formal Shirts",
    price: 81,
  },
  {
    image: "img/products/n7.jpg",
    brandName: "Puma",
    title: "Floral Pajama",
    price: 99,
  },
  {
    image: "img/products/n8.jpg",
    brandName: "Tommy Hilfiger",
    title: "Retro Top",
    price: 110,
  },
];
const Home = () => {
  return (
    <>
      <div>
        {/* <!-- Hero Section start --> */}
        <section id="hero">
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 70% off!</p>
          <button>Shop Now</button>
        </section>
        {/* <!-- Hero Section end --> */}
      </div>
      <section id="feature" className="section-p1">
        <Services />
      </section>
      <section id="product1" className="section-p1">
        <h2>Feature Product</h2>
        <p>Summer Collection New Morden Design</p>

        <div className="product-container">
          <FeaturedProduct />
        </div>
      </section>
      <RepairService />
      <NewArrivalProducts />
      <FashionDeals />
      <NewsLetter />
    </>
  );
};
export default Home;

function RepairService() {
  return (
    <>
      {/* <!-- Call To Action Banner Start --> */}
      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - All t-shirts & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>
      {/* <!-- Call To Action Banner End --> */}
    </>
  );
}

function NewArrivalProducts() {
  return (
    <>
      {/* <!-- New Arrival Section start --> */}
      <section id="product1" className="section-p1">
        <h2>New Arrival</h2>
        <p>Summer Collection New Morden Design</p>

        <div className="product-container">
          {newArrivalProducts.map((newProduct) => (
            <>
              <div className="product">
                <img src={newProduct.image} alt="" />
                <div className="description">
                  <span>{newProduct.brandName}</span>
                  <h5>{newProduct.title}</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>${newProduct.price}</h4>
                </div>
                <a href="#">
                  {" "}
                  <i className="fa-solid fa-cart-shopping cart"></i>
                </a>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* <!-- New Arrival Section end --> */}
    </>
  );
}

function FashionDeals() {
  return (
    <>
      {/* <!-- Call To Action Banner 2 start --> */}
      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>

        <div className="banner-box banner-box2">
          <h4>spring/summer</h4>
          <h2>upcoming season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>
      {/* <!-- Call To Action Banner 2 end -->

    <!-- Text Banner Start --> */}
      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>

        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2024</h3>
        </div>

        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
      {/* <!-- Text Banner End --> */}
    </>
  );
}
