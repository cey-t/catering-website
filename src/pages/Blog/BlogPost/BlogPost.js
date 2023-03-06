import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { apiURL } from "utils/api/api";
const BlogPost = () => {
  const { uid } = useParams();
  const [uidData, setUid] = useState({});
  const getBlogPostByUid = useCallback(async () => {
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
  }, [uid]);

  useEffect(() => {
    getBlogPostByUid(uid);
  }, [uid, getBlogPostByUid]);
  return (
    <section>
      {uidData?.data?.map(({ attributes: { title, content }, id }) => (
        <div key={id}>{title}</div>
      ))}
    </section>
  );
};
export default BlogPost;
