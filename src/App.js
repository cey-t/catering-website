import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "components/Layout/NavBar/NavBar";
import styles from "./index.scss";
import Footer from "components/Layout/Footer/Footer";
import Home from "pages/Home/Home";
import Features from "pages/Features/Features";
import Pricing from "pages/Pricing/Pricing";
import About from "pages/About/About";
import Premium from "pages/Premium/Premium";
import Blog from "pages/Blog/Blog";
const App = () => {
  return (
    <div className={styles.appContainer}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
