import { useEffect, useState } from "react";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import ContactUs from "components/ContactSection/ContactUs";
import { apiURL } from "utils/api/api";
import BlogPost from "./BlogPost/BlogPost";
import styles from "./Blog.module.scss";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
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
        name="Blog"
        header="Our latest news and events."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <div className={styles.blogsContainer}>
        {blogs?.data?.map(({ attributes, id }) => {
          const coverImage = attributes?.cardImage?.data?.map(
            ({ attributes }) => attributes.formats.small.url
          ); //to fetch the cover Image
          return (
            <BlogPost
              image={apiURL + coverImage}
              title={attributes.title}
              summary={attributes.summary}
              postDate={attributes.date}
            />
          );
        })}
      </div>
      <ContactUs />
    </section>
  );
};
export default Blog;
