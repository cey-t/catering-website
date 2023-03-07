import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { apiURL } from "utils/api/api";
import ReactMarkdown from "react-markdown";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import styles from "./BlogPost.module.scss";
const BlogPost = () => {
  const { uid } = useParams();
  const [uidData, setUid] = useState({});
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
  console.log(uidData);

  useEffect(() => {
    getBlogPostByUid(uid);
  }, [uid, getBlogPostByUid]);
  return (
    <section className={styles.blogPostRoot}>
      <HeaderContextBox />
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
                width={"80%"}
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
    </section>
  );
};
export default BlogPost;
