import { useState } from "react";
import "./App.css";
import AdsPost from "./Components/AdsPost/AdsPost";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <h1>Modern Mart</h1>
        <AdsPost/>
        <Features/>
        <Footer/>
    </div>
  );
}

export default App;
