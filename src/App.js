import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LikeCompo from "./components/LikeCompo";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <LikeCompo />
    </div>
  );
}

export default App;
