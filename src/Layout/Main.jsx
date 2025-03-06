import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    // Scroll to the top of the page on reload or when the route changes
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once when the page reloads

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
