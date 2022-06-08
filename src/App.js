import Welcome from "./components/welcome/Welcome";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Map from "./components/Map/Map";
import Home from "./components/Home";
import { useState } from "react";
import './App.css';
import AboutUs from "./components/About/AboutUs";
function App() {
  const [welcome, setWelcome] = useState(true)
  return (
      <>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="./login" element={<Login/>} />
          <Route path="./about" element={<AboutUs/>}/>
        </Routes>
        { welcome && <Welcome closeWelcome={setWelcome} /> }
      </>
  )
  
}
 export default App;
