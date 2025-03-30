import { useState } from 'react'


import './App.css'
import HomePage from "./pages/HomePage.jsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
 <Outlet/>

    </>
  )
}

export default App
