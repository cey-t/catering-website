import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "components/Layout/NavBar/NavBar";
import styles from "./index.scss";
import Footer from "components/Layout/Footer/Footer";
import Home from "pages/Home/Home";
import Features from "pages/Features/Features";
import Pricing from "pages/Pricing/Pricing";
import About from "pages/About/About";
import Premium from "pages/Premium/Premium";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Blog from "pages/Blog/Blog";
import GetStarted from "pages/GetStarted/GetStarted";
import BlogPost from "pages/Blog/BlogPost/BlogPost";
import ContactUs from "pages/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "antd/dist/reset.css";
const App = () => {
  return (
    <div className={styles.appContainer}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:uid" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
