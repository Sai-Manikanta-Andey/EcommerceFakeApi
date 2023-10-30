import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Home from "./components/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartProvider from "./context/CartContext";
import ProductContextProvider from "./context/ProductContext";



const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <ProductContextProvider>
          <Header />
          <Outlet />
          
        </ProductContextProvider>
      </CartProvider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:Id",
        element: <ProductPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
