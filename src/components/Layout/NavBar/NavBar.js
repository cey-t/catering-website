import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "utils/data/navLinks";
import logo from "images/logo.svg";
import hamburger from "images/hamburger.svg";
import styles from "./NavBar.module.scss";
import classNames from "classnames";
const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const headerNav = navLinks.slice(0, 6);
  return (
    <section className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <Link
            onClick={() => setShowNav(false)}
            to="/"
            className={styles.logoLink}
          >
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
        {console.log(showNav)}
        <img
          onClick={() => setShowNav(!showNav)}
          src={hamburger}
          alt="mobile-nav-icon"
          className={styles.hamburgerIcon}
        />
      </div>
      {showNav && (
        <div className={styles.mobileNavBar}>
          {headerNav.map((nav) => (
            <Link
              to={nav.path}
              onClick={() => setShowNav(!showNav)}
              key={nav.id}
              className={styles.navItem}
            >
              {nav.label ? (
                nav.label
              ) : (
                <button
                  onClick={() => setShowNav(!showNav)}
                  className={classNames(
                    styles.getStartedButton,
                    styles.mobileButton
                  )}
                >
                  {nav.buttonLabel}
                </button>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
export default NavBar;
