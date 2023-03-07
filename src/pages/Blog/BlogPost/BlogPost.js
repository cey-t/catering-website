import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { apiURL } from "utils/api/api";
import ReactMarkdown from "react-markdown";
import ContactUs from "components/ContactSection/ContactUs";
import BlogPostCard from "../BlogPostCard/BlogPostCard";
import styles from "./BlogPost.module.scss";
const BlogPost = () => {
  const { uid } = useParams();
  const [uidData, setUid] = useState({});
  const [orderedData, setOrderedData] = useState({});
  const sortedData = orderedData?.data?.slice(0, 3);

  const getBlogPostByUid = useCallback(async () => {
    try {
      const res = await fetch(
        `${apiURL}/api/blogs?fields=title,content,date&populate=coverImage&filters[uid]=${uid}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Error");

      setUid(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [uid]);
  const getLastThreeBlogPosts = useCallback(async () => {
    try {
      const res = await fetch(
        `${apiURL}/api/blogs?sort=date:desc&populate=cardImage`
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Error");
      setOrderedData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  useEffect(() => {
    getLastThreeBlogPosts();
  }, [getLastThreeBlogPosts]);
  useEffect(() => {
    getBlogPostByUid(uid);
  }, [uid, getBlogPostByUid]);
  return (
    <section className={styles.blogPostRoot}>
      <div className={styles.postHero}></div>
      {uidData?.data?.map(
        ({ attributes: { title, content, date, coverImage }, id }) => {
          const blogImage = coverImage?.data?.map(
            ({ attributes }) => attributes.url
          );
          return (
            <div className={styles.postRoot} key={id}>
              <img
                src={apiURL + blogImage}
                className={styles.postImage}
                alt="blog-post"
                width={"90%"}
              />
              <div className={styles.postContainer}>
                <h3 className={styles.postDate}>{date}</h3>
                <h1 className={styles.postTitle}>{title}</h1>
                <ReactMarkdown className={styles.contentText}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          );
        }
      )}
      <div className={styles.latestBlogsContainer}>
        <h4 className={styles.latestBlogTitle}>Latest Posts</h4>
        <div className={styles.sortedBlogs}>
          {sortedData?.map(
            ({ attributes: { title, summary, date, uid, cardImage } }) => {
              const image = cardImage?.data?.map(
                ({ attributes: { formats } }) => formats.small.url
              ); //to fetch the cover Image
              return (
                <BlogPostCard
                  key={uid}
                  title={title}
                  summary={summary}
                  postDate={date}
                  image={apiURL + image}
                  uid={uid}
                />
              );
            }
          )}
        </div>
      </div>
      <ContactUs />
    </section>
  );
};
export default BlogPost;
