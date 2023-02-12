import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { navLinks } from "../../utils/data/navLinks";
import Features from "../../pages/Features/Features";
import Premium from "../../pages/Premium/Premium";
import About from "../../pages/About/About";
import Pricing from "../../pages/Pricing/Pricing";
import Home from "../../pages/Home/Home";
import logo from "../../images/logo.svg";
import styles from "./NavBar.module.scss";
const NavBar = () => {
  return (
    <section className={styles.headerContainer}>
      <Router>
        <div className={styles.navBarContainer}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.navLinks}>
            {navLinks.map((nav) => (
              <Link to={nav.path} className={styles.navItem}>
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
        </div>
        <div className={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </section>
  );
};
export default NavBar;
