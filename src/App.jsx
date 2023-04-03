import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./route/Root.jsx";
import Error from "./route/Error.jsx";
import Home from "./route/Home.jsx";
import Shop from "./route/Shop.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: (_) => fetch(`./products.json`),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
