import { useState } from "react";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Logins from "./pages/Logins";
import Ingame from "./pages/Ingame";


function App() {
    
  return (
    <>

      <Routes>
        <Route path="/Logins" element={<Logins />} />
        <Route path="/Ingame" element={<Ingame />} />
      </Routes>
    </>
  );
}

export default App;
