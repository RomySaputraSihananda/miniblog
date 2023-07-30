import Background from "./Background";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
