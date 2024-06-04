import NewsLetter from "../../components/NewsLetter";
import "../Home/Home.css";
const blogDetails = [
  {
    image: "img/blog/b1.jpg",
    blogTitle: "The Cotton-Jersey Zip-Up Hoodie",
    blogData:
      "Kickstarter man braid godard coloring book. Reclette waistcoat selfiles wolf chartreuse hexagon irony, godard.....",
  },
  {
    image: "img/blog/b2.jpg",
    blogTitle: "The Cotton-Jersey Zip-Up Hoodie",
    blogData:
      "Kickstarter man braid godard coloring book. Reclette waistcoat selfiles wolf chartreuse hexagon irony, godard.....",
  },
  {
    image: "img/blog/b3.jpg",
    blogTitle: "The Cotton-Jersey Zip-Up Hoodie",
    blogData:
      "Kickstarter man braid godard coloring book. Reclette waistcoat selfiles wolf chartreuse hexagon irony, godard.....",
  },
  {
    image: "img/blog/b4.jpg",
    blogTitle: "The Cotton-Jersey Zip-Up Hoodie",
    blogData:
      "Kickstarter man braid godard coloring book. Reclette waistcoat selfiles wolf chartreuse hexagon irony, godard.....",
  },
  {
    image: "img/blog/b5.jpg",
    blogTitle: "The Cotton-Jersey Zip-Up Hoodie",
    blogData:
      "Kickstarter man braid godard coloring book. Reclette waistcoat selfiles wolf chartreuse hexagon irony, godard.....",
  },
  {
    image: "img/blog/b6.jpg",
    blogTitle: "The Cotton-Jersey Zip-Up Hoodie",
    blogData:
      "Kickstarter man braid godard coloring book. Reclette waistcoat selfiles wolf chartreuse hexagon irony, godard.....",
  },
];
const Blog = () => {
  return (
    <>
      {/* <!-- Hero Section start --> */}
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>
      {/* <!-- Hero Section end --> */}
      <section id="blog">
        {blogDetails.map((blogItem) => (
          <>
            <div className="blog-box">
              <div className="blog-img">
                <img src={blogItem.image} alt="" />
              </div>
              <div className="blog-details">
                <h4>{blogItem.blogTitle}</h4>
                <p>{blogItem.blogData}</p>
                <a href="#">CONTINUE READING</a>
              </div>
              <h1>13/01</h1>{" "}
            </div>
          </>
        ))}

        {/* <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b2.jpg" alt="" />
          </div>

          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Reclette waistcoat
              selfiles wolf chartreuse hexagon irony, godard.....
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b3.jpg" alt="" />
          </div>

          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Reclette waistcoat
              selfiles wolf chartreuse hexagon irony, godard.....
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b4.jpg" alt="" />
          </div>

          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Reclette waistcoat
              selfiles wolf chartreuse hexagon irony, godard.....
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/b6.jpg" alt="" />
          </div>

          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Reclette waistcoat
              selfiles wolf chartreuse hexagon irony, godard.....
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div> */}
      </section>{" "}
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

export default Blog;
