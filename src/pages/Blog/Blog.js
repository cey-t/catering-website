import { useEffect, useState } from "react";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import ContactUs from "components/ContactSection/ContactUs";
import { apiURL } from "utils/api/api";
import BlogPostCard from "./BlogPostCard/BlogPostCard";
import styles from "./Blog.module.scss";
const Blog = () => {
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await fetch(
          `${apiURL}/api/blogs?populate=cardImage,coverImage`
        );
        const data = await res.json();
        if (!res.ok) throw new Error("Something went wrong");
        setBlogs(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllBlogs();
  }, []);

  return (
    <section className={styles.blogRoot}>
      <HeaderContextBox
        hasBorder
        name="Blog"
        header="Our latest news and events."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <div className={styles.blogsContainer}>
        {blogs.data &&
          blogs?.data?.map(
            ({ attributes: { uid, title, summary, date, cardImage } }) => {
              const coverImage = cardImage?.data?.map(
                ({ attributes: { formats } }) => formats.small.url
              ); //to fetch the cover Image

              return (
                <BlogPostCard
                  key={uid}
                  image={apiURL + coverImage}
                  title={title}
                  summary={summary}
                  postDate={date}
                  uid={uid}
                />
              );
            }
          )}
      </div>

      <ContactUs />
    </section>
  );
};
export default Blog;
