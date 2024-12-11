import { BLOG_CONTENT } from "../constants";

const Blog = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto border-b-2" id="blog">
        <div className="my-20">
          <h2 className="text-xl lg:text-3xl tracking-tight text-center mb-20">
            بلاگ
          </h2>
          {BLOG_CONTENT.map((blog, index) => (
            <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
              <div
                className={`lg:w-1/2 mb-4 lg:mb-0 ${
                  index % 2 === 0 ? "" : "lg:order-2"
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div
                className={`lg:w-1/2 flex flex-col ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <h3 className="text-xl lg:text-2xl font-medium mb-2">
                  {blog.title}
                </h3>
                <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
