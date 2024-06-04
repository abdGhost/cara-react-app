const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="img/logo.png" alt="logo" />
          <h4>Contact</h4>
          <p>
            <span>Address:</span> 562 Wellington Road, Street 32, San Francisco
          </p>
          <p>
            <span>Phone:</span> +01 2222 365/(+91) 01 235 6789
          </p>
          <p>
            <span>Hours:</span> 10:00 - 18:00, Mon - Sat
          </p>

          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#"> About us</a>
          <a href="#"> Delivery Information</a>
          <a href="#"> Privacy</a>
          <a href="#"> Terms & Conditions</a>
          <a href="#"> Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#"> Sign In</a>
          <a href="#"> View Cart</a>
          <a href="#"> My Wishlist</a>
          <a href="#"> Track My Order</a>
          <a href="#"> Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" alt="" />
        </div>

        <div className="copyright">
          <p>@2024, Cara</p>
        </div>
      </footer>

      {/* <!-- Footer End --> */}
    </div>
  );
};

export default Footer;
