import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Courses from "../pages/courses/Courses";
import AddCourses from "../pages/AddCourse/AddCourses";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import { createBrowserRouter, RouterProvider } from "react-router";
import CourseDetails from "../components/CourseDetails";
import PrivateRouter from "../private/PrivateRouter";

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
        element: (
          <PrivateRouter>
            <AddCourses />
          </PrivateRouter>
        ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "course-details/:id",
        Component: CourseDetails,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
