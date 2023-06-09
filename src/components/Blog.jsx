import Navbar from "./Navbar";
import "./style/Blog.css";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="blog-content">
        <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>Blog</h1>
        <div className="blogs">
          <div className="blog">Blog</div>
          <div className="blog">Blog</div>
          <div className="blog">Blog</div>
        </div>
        <div className="latest-blogs">
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "30px",
              marginTop: "70px",
            }}
          >
            Latest Blogs
          </h1>
          <div className="latest-blogs-blog">
            <h1>Title</h1>
            <p className="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              veniam illo similique temporibus optio, ut consequuntur vitae
              rerum quae mollitia esse reprehenderit unde modi facere ipsum
              cumque magnam maiores, eligendi deleniti voluptatum? Recusandae
              quam dolor nesciunt enim officiis excepturi mollitia. Dolorem quam
              commodi reiciendis magnam facere tempore rerum deserunt, numquam
              tenetur laboriosam tempora quaerat dolore, repellendus explicabo
              atque incidunt minus corrupti. Maxime, nisi! Eveniet voluptatem
              sit ullam cumque. Autem iste ducimus soluta, quos ab ad voluptates
              tempora enim deserunt nam hic ipsum. Nisi eaque omnis quisquam
              impedit neque quibusdam obcaecati, corrupti odit commodi nemo
              amet, optio perspiciatis deleniti maxime possimus!
            </p>
          </div>
          <div className="latest-blogs-blog">
            <h1>Title</h1>
            <p className="blog-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              eaque impedit voluptatum commodi culpa accusantium voluptates
              temporibus architecto nesciunt ea! Sapiente sequi dicta magnam
              assumenda quas ab nisi iste quo vero velit quibusdam tempore
              maiores eius eum voluptate, deleniti adipisci asperiores
              accusantium amet, qui laborum consequuntur repudiandae. Corrupti
              ullam iure dolor natus, quae sapiente rem provident, accusamus
              distinctio alias itaque earum quibusdam dolorum esse non ipsa
              architecto exercitationem odio officia dolores, nulla tenetur
              reiciendis pariatur? Quo doloribus perferendis temporibus magni
              impedit hic eligendi eos, quas reiciendis sit quod rem!
              Consectetur provident at facere dignissimos aliquid sunt atque
              maiores, necessitatibus impedit.
            </p>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p>Copyright © 2023 AuditHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Blog;
