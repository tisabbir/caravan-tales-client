import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./index.css";
import Home from "./Layouts/Home";
import Root from "./routes/Root";
import AuthProvider from "./Providers/AuthProvider";
import AddSpot from "./Components/AddSpot";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyList from "./Components/MyList";
import AllList from "./Components/AllList";
import SpotDetail from "./Components/SpotDetail";
import AllListSpotDetails from "./Components/AllListSpotDetails";
import UpdateSpot from "./Components/UpdateSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader : ()=> fetch('/banner.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all",
        element: <AllList />,
      },
      {
        path: "/add",
        element: <PrivateRoute><AddSpot /></PrivateRoute>,
      },
      {
        path: "/update",
        element: <PrivateRoute><UpdateSpot /></PrivateRoute>,
      },
      {
        path: "/list",
        element: <PrivateRoute><MyList /></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><SpotDetail /></PrivateRoute>,
        loader: ({params})=>fetch(`https://caravan-tales-server.vercel.app/spots/${params.id}`)
      },
      {
        path: "/alldetails/:id",
        element: <PrivateRoute><AllListSpotDetails /></PrivateRoute>,
        loader: ({params})=>fetch(`https://caravan-tales-server.vercel.app/allspots/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
         <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
