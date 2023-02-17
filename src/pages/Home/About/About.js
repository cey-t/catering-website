import egg from "images/HomePage/egg.jpg";
// import spagetti from "images/HomePage/spagetti.jpg";
// import soup from "images/HomePage/soup.jpg";
import styles from "./About.module.scss";
import ContextBox from "components/ContextBox/ContextBox";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <img src={egg} width={"100%"} alt="soup" />
      <div className={styles.aboutInfo}>
        <ContextBox
          span="Illud decore voluptaria has at."
          text="Hinc invenire atomorum no
          vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum
          qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo."
        />
      </div>
    </section>
  );
};
export default About;
