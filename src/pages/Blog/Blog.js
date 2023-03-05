import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import ContactUs from "components/ContactSection/ContactUs";
import { apiURL } from "utils/api/api";
import BlogPostCard from "./BlogPostCard/BlogPostCard";
import styles from "./Blog.module.scss";
import BlogPost from "./BlogPost/BlogPost";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [uidData, setUid] = useState([]);
  const { uid } = useParams();
  const handleClick = (uid) => {
    getBlogPostByUid(uid);
  };
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

  const getBlogPostByUid = async (uid) => {
    try {
      const res = await fetch(
        `${apiURL}/api/blogs?fields=title,content,date&populate=cardImage&filters[uid]=${uid}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Error");

      setUid(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBlogPostByUid(uid);
  }, [uid]);
  return (
    <section className={styles.blogRoot}>
      <HeaderContextBox
        name="Blog"
        header="Our latest news and events."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <div className={styles.blogsContainer}>
        {blogs?.data?.map(
          ({ attributes: { uid, title, summary, date, cardImage }, id }) => {
            const coverImage = cardImage?.data?.map(
              ({ attributes: { formats } }) => formats.small.url
            ); //to fetch the cover Image

            return (
              <BlogPostCard
                handleClick={() => handleClick(uid)}
                key={id}
                image={apiURL + coverImage}
                title={title}
                summary={summary}
                postDate={date}
              />
            );
          }
        )}
      </div>
      <BlogPost uuid={uidData} />
      <ContactUs />
    </section>
  );
};
export default Blog;
