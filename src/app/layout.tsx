import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReset from "../components/ScrollReset";

const Layout = () => {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
