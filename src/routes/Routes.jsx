import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layouts/LoginlayOut/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";
import Terms from "../Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: (
          <Navigate to="https://dragon-news-server-ten-sepia.vercel.app/catagories/0"></Navigate>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "catagory",
    element: <Main></Main>,
    children: [
      // {
      //   path: "catagory",
      //   element: <Catagory></Catagory>,
      //   loader: () => fetch("http://localhost:5000/news"),
      // },
      {
        path: ":id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-ten-sepia.vercel.app/catagories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoutes>
            <News></News>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-ten-sepia.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
