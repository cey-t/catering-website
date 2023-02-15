import { Link } from "react-router-dom";
import { navLinks } from "utils/data/navLinks";
import logo from "images/logo.svg";
import hamburger from "images/hamburger.svg";
import styles from "./NavBar.module.scss";
const NavBar = () => {
  const headerNav = navLinks.slice(0, 6);
  return (
    <section className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="logo" className={styles.logo} width={"100%"} />
          </Link>
        </div>
        <div className={styles.navLinks}>
          {headerNav.map((nav) => (
            <Link to={nav.path} key={nav.id} className={styles.navItem}>
              {nav.label ? (
                nav.label
              ) : (
                <button className={styles.getStartedButton}>
                  {nav.buttonLabel}
                </button>
              )}
            </Link>
          ))}
        </div>
        <img
          src={hamburger}
          alt="mobile-nav-icon"
          className={styles.hamburgerIcon}
        />
      </div>
    </section>
  );
};
export default NavBar;
