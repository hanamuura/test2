import React, {useState} from "react";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Main from "./pages/Main";

function App() {
  
  return (
    <div>
      <div className="navbar">
        <div className="navbar__links">
          <Link className="navbar_link_main" to = "/mainpage">Main</Link> 
          <Link className="navbar_link_start" to = "/startpage">Start</Link>
        </div>
      </div>
       <Routes>
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/mainpage" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
