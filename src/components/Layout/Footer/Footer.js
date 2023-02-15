import styles from "./Footer.module.scss";
import logo from "images/logo.svg";
import { navLinks } from "utils/data/navLinks";
import { Link } from "react-router-dom";
const Footer = () => {
  const headerNav = navLinks.slice(0, 4);
  const footerNavItems = navLinks.slice(6, 8);
  const footerNav = headerNav.concat(footerNavItems);
  return (
    <section className={styles.footerRoot}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <p className={styles.reference}>
            @{new Date().getFullYear()} Spoon Inc, All rights reserved.
          </p>
        </div>
        <div className={styles.footerLinksContainer}>
          {footerNav.map((footer) => (
            <Link
              to={footer.path}
              key={footer.id}
              className={styles.footerItem}
            >
              {footer.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Footer;
