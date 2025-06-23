import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Courses from "../pages/courses/Courses";
import AddCourses from "../pages/AddCourse/AddCourses";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "add-courses",
        Component: AddCourses,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
