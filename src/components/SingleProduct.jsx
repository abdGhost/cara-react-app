const detailedImage = [
  {
    image: "img/products/f2.jpg",
  },
  {
    image: "img/products/f3.jpg",
  },
  {
    image: "img/products/f4.jpg",
  },
  {
    image: "img/products/f5.jpg",
  },
];
const SingleProduct = () => {
  return (
    <section id="product-details" className="section-p1">
      <div className="single-product-image">
        {" "}
        <img id="main-image" src="img/products/f1.jpg" width="100%" alt="" />
        <div className="small-img-group">
          {detailedImage.map((item) => (
            <>
              <div className="small-img-col">
                <img
                  className="small-img"
                  src={item.image}
                  alt=""
                  width="100%"
                />
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="single-product-details">
        <h4>Home / T-Shirts</h4>
        <h2>Mens Fashion T Shirt</h2>
        <h2>$139.00</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>

        <input type="number" value="1" />
        <button className="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>
          The Gildan Ulta Cotton t-shirt is made from a substantial 6.0 oz. per
          sq. yd. fabri constructed from 100% cotton, this classic fit preshrunk
          jersey kit provides unmacted comfort with each wear. Featuring a taped
          neck and shoulder and a seamless double-needle collar and avaiable in
          a range of color, it offers it all in the ultimate head-turning
          package.
        </span>
      </div>
    </section>
  );
};

export default SingleProduct;
