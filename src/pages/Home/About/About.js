import { Link } from "react-router-dom";
import { useState } from "react";
import ContextBox from "components/ContextBox/ContextBox";
import egg from "images/HomePage/egg.jpg";
import spagetti from "images/HomePage/spagetti.jpg";
import soup from "images/HomePage/soup.jpg";
import styles from "./About.module.scss";
import classNames from "classnames";
const About = () => {
  const Images = [
    {
      id: 1,
      src: egg,
      alt: "egg",
    },
    {
      id: 2,
      src: soup,
      alt: "soup",
    },
    { id: 3, src: spagetti, alt: "spagetti" },
  ];
  const [counter, setCounter] = useState(1);
  const [activeDot, setActiveDot] = useState(Images[0].id);
  const food = Images.filter((num) => num.id === counter)[0];
  const handleSelectImage = (id) => {
    setActiveDot(id);
    setCounter(id);
  };
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageWrapper}>
        <img src={food.src} width={"100%"} alt={food.alt} />

        <div className={styles.dotContainer}>
          {Images.map((image) => (
            <div
              key={image.id}
              onClick={() => handleSelectImage(image.id)}
              className={classNames(styles.sliderDot, {
                [styles.activeDot]: activeDot === image.id,
              })}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <ContextBox
          span="Illud decore voluptaria has at."
          text="Hinc invenire atomorum no
          vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum
          qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo."
        />
        <Link className={styles.aboutUs} to="/about">
          More About Us
        </Link>
      </div>
    </section>
  );
};
export default About;
