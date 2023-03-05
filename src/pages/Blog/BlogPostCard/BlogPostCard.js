import styles from "./BlogPostCard.module.scss";
import classNames from "classnames";
const BlogPostCard = ({ image, postDate, title, summary, handleClick }) => {
  return (
    <div onClick={handleClick} className={styles.blogPostContainer}>
      <img src={image} alt="blog-post-media" className={styles.blogImage} />
      <div className={styles.blogPostContent}>
        <p className={styles.postInfo}>{postDate}</p>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={classNames(styles.postInfo, styles.postSummary)}>
          {summary}
        </p>
      </div>
    </div>
  );
};
export default BlogPostCard;
