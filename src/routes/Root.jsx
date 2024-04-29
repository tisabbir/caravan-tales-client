import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Tooltip } from "react-tooltip";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    <Tooltip id="my-tooltip-multiline" />

    </div>
  );
};

export default Root;
