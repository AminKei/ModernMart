import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Hearder/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AppBar from "./Components/AppBar/AppBar";
import PlayGround from "./Tests/Components/PlayGround";
import ProductsList from "./Pages/ProductsList/ProductsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./Components/NotFound/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const AppWrapper = () => {
  const location = useLocation();
  const WithoutAppBar = ["/login", "/register"];

  return (
    <>
      {!WithoutAppBar.includes(location.pathname) && <AppBar />}{" "}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productslist" element={<ProductsList />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header>
          <NavigationBar />
          <AppWrapper />
        </Header>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send it to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
