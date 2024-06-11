import NewsLetter from "../../components/NewsLetter";

const Contact = () => {
  return (
    <div>
      {/* <!-- Hero Section start --> */}
      <section id="page-header" className="about-header">
        <h2>Lets_talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!</p>
      </section>
      {/* <!-- Hero Section end --> */}

      {/* <!-- Contact Details Start --> */}
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations o contact us today</h2>
          <h3>Head Office</h3>

          <div>
            <li>
              <i className="fa fa-map"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                alias.
              </p>
            </li>
            <li>
              <i className="fa fa-map"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                alias.
              </p>
            </li>

            <li>
              <i className="fa fa-map"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                alias.
              </p>
            </li>

            <li>
              <i className="fa fa-map"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                alias.
              </p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.02905792641!2d78.99010905483327!3d21.16106590237988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717566276677!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* <!-- Contact Details End --> */}

      {/* <!-- Contact Form Start --> */}
      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear fom you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="img/people/1.png" alt="" />
            <p>
              <span>John Doe</span> Senior Marketing Manager <br />
              Phone: +000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="img/people/2.png" alt="" />
            <p>
              <span>John Doe</span> Senior Marketing Manager <br />
              Phone: +000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="img/people/3.png" alt="" />
            <p>
              <span>John Doe</span> Senior Marketing Manager <br />
              Phone: +000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Contact Form End --> */}
      <NewsLetter />
    </div>
  );
};

export default Contact;
