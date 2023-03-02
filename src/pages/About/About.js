import ContextBox from "components/ContextBox/ContextBox";
import bananaCake from "images/Premium/banana-cake.jpg";
import AboutMission from "./AboutMission/AboutMisson";
import ContactUs from "components/ContactSection/ContactUs";
import HeaderContextBox from "components/HeaderInnerContent/HeaderContextBox";
import styles from "./About.module.scss";
const About = () => {
  return (
    <section className={styles.aboutRoot}>
      <HeaderContextBox
        name="About"
        header="Changing the catering game."
        content="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur."
      />
      <div className={styles.imageContainer}>
        <img
          className={styles.heroImage}
          src={bananaCake}
          width={"80%"}
          alt="banana cake"
        />
      </div>
      <ContextBox
        className={styles.contextBox}
        span="We combine the benefits of the best local farms with advances made possible by technology to deliver you the best catering experience possible."
        text="Food surrounds us, but we don’t always think about where it comes from or how it got to us. The way we eat and our experiences with food have huge impact on everything from the environment to our health."
      />

      <AboutMission />
      <ContactUs />
    </section>
  );
};
export default About;
