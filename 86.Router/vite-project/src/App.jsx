import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Services, ErrorPage } from "./Pages";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import User, { userLoader } from "./components/user/User";
import UserDetail, { uerDetailLoader } from "./components/user/UserDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          {
            index: true,
            element: (
              <center>
                <h1>vision..!</h1>
              </center>
            ),
          },
          {
            path: "mission",
            element: (
              <center>
                <h1>mission..!</h1>
              </center>
            ),
          },
          {
            path: "goal",
            element: (
              <center>
                <h1>Goal...!</h1>
              </center>
            ),
          },
        ],
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          {
            // path: ":id",
            index: true,
            element: <User />,
            loader: userLoader,
          },
          {
            path: ":id",
            element: <UserDetail />,
            loader: uerDetailLoader,
          },
        ],
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<AboutLayout />}>
//         <Route
//           index
//           element={
//             <center>
//               <h1>vision..!</h1>
//             </center>
//           }
//         />
//         <Route
//           path="mission"
//           element={
//             <center>
//               <h1>mission..!</h1>
//             </center>
//           }
//         />
//         <Route
//           path="goal"
//           element={
//             <center>
//               <h1>Goal...!</h1>
//             </center>
//           }
//         />
//       </Route>
//       <Route path="services" element={<Services />} />
//     </Route>
//   )
// );
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
