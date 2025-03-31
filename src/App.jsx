import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Outlet />
    </>
  );
}

export default App;
