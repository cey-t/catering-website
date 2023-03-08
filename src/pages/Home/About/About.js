import { Link } from "react-router-dom";
import ContextBox from "components/ContextBox/ContextBox";
import egg from "images/HomePage/egg.jpg";
import spagetti from "images/HomePage/spagetti.jpg";
import soup from "images/HomePage/soup.jpg";
import styles from "./About.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageWrapper}>
        <Slider {...settings} className={styles.slider}>
          {Images.map((image) => (
            <div key={image.id}>
              <img src={image.src} width={"100%"} alt={image.alt} />
            </div>
          ))}
        </Slider>
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
