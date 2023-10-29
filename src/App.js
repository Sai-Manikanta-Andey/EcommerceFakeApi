import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Home from "./components/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";

import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
import { useCartContext } from "./context/CartContext";
const App = () => {
  const {addToCart,removeFromCart,cart}=useCartContext()
  

  return (
    <div className="App">
      <CartContextProvider value={{addToCart,removeFromCart,cart}} >
        <ProductContextProvider>
          <Header />
          <Outlet />
        </ProductContextProvider>
      </CartContextProvider>
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
