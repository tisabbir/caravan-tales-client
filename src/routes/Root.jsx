import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
