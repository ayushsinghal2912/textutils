import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  
  let showAlert = (message,type)=>{
     setAlert({
      msg : message,
      type : type
     })
     setTimeout(()=>{
      setAlert(null);
     }, 800)
  }

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert= {alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact  path="/" element={<TextForm heading="Enter the Text to Analyze below" mode={mode} showAlert ={showAlert} />}/>
      </Routes>
       </div>
       </Router>
    </>
  );
}

export default App;
