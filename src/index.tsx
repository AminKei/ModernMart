import React from "react";  
import ReactDOM from "react-dom/client";  
import "./index.css";  
import App from "./App";  
import reportWebVitals from "./reportWebVitals";  
import NavigationBar from "./Components/NavigationBar/NavigationBar";  
import PlayGround from "./Tests/Components/PlayGround";  
import "swiper/css";  
import "swiper/css/free-mode";  
import "swiper/css/pagination";  
import SingleProduct from "./Pages/SingleProduct/SingleProduct";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Header from "./Components/Hearder/Header";

const root = ReactDOM.createRoot(  
  document.getElementById("root") as HTMLElement  
);  
root.render(  
  <React.StrictMode>  
    <Router>  
      <Header>
      <NavigationBar />  
      <Routes>  
        <Route path="/" element={<App />} />  
        <Route path="/singleproduct" element={<SingleProduct />} />  
        <Route path="/playground" element={<PlayGround />} />  
      </Routes>  
        </Header>  
    </Router>  
  </React.StrictMode>  
);  

// If you want to start measuring performance in your app, pass a function  
// to log results (for example: reportWebVitals(console.log))  
// or send it to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals  
reportWebVitals();