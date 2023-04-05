import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { shoppingCart } from "./utility/index.js";
import Root from "./route/Root.jsx";
import Error from "./route/Error.jsx";
import Home from "./route/Home.jsx";
import Shop from "./route/Shop.jsx";
import OrderReview from "./route/OrderReview.jsx";
import Login from "./route/Login.jsx";
import Signup from "./route/Signup.jsx";

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
        {
          path: "/order-review",
          element: <OrderReview />,
          loader: shoppingCart,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
