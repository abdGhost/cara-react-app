import NewsLetter from "../../components/NewsLetter";
import Services from "../../components/Services";

const About = () => {
  return (
    <>
      {/* <!-- Hero Section start --> */}
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Read all case studies about our products!</p>
      </section>
      {/* <!-- Hero Section end --> */}
      {/* <!-- About Head Section Start --> */}

      <section id="about-head" className="section-p1">
        <img src="img/about/a6.jpg" alt="" />
        <div>
          <h2>Who we are</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
            laudantium vero odit eligendi esse dolores quae illo impedit quaerat
            tenetur beatae animi provident. Iure dolorem eos iste vero
            quibusdam! Facere ad dolore esse in sed. Maiores, illum adipisci
            doloribus mollitia eos sint quas eveniet quibusdam optio, deleniti
            placeat architecto id, explicabo molestiae dolores nam possimus
            pariatur! Sed earum, harum ullam nulla repellendus eos molestiae
            dolorum in fugit odit, rerum dolor voluptatem totam dicta libero
            debitis recusandae nisi sequi. Beatae nisi nam quidem? Obcaecati
            quos, rerum delectus, incidunt neque sed molestias accusantium
            recusandae pariatur exercitationem repellendus, aut temporibus! Fuga
            pariatur laborum consectetur eum omnis aliquam esse consequatur est
            deleniti velit corporis aperiam atque at cupiditate tempora,
            officiis placeat eligendi perferendis consequuntur itaque quis
            dolorem obcaecati, nostrum ipsum! Laborum quae, facere iste atque ut
            accusamus voluptas tenetur, quidem, ratione officiis quam voluptates
            ullam! Ea laboriosam eos nesciunt blanditiis velit necessitatibus
            dolores iste ad excepturi voluptates omnis aperiam delectus aliquam,
            eaque quis porro perferendis voluptas et, atque fugiat aliquid nulla
            eligendi at. Vel, sit? Recusandae exercitationem repellat similique
            ea praesentium, commodi dignissimos, harum quaerat placeat quis eius
            iure optio maiores omnis! Quo exercitationem adipisci commodi
            perspiciatis cumque voluptatem deleniti dolor consequatur distinctio
            quas?
          </p>
          <abbr title="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur neque nostrum voluptate officia hic. Animi provident
            sed numquam alias. Unde!
          </abbr>
          <br />
          <br />
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut, quidem commodi doloremque quis quo?
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Head Section End --> */}

      {/* <!-- About App Start --> */}
      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <video autoPlay muted loop src="img/about/1.mp4"></video>
        </div>
      </section>
      {/* <!-- About App End --> */}
      <section id="feature" className="section-p1">
        <Services />
      </section>
      <NewsLetter />
    </>
  );
};

export default About;
