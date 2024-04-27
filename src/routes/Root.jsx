import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Nav from "../Components/Nav";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
