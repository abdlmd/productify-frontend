import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
