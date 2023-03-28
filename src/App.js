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

  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  // let colors = ['primary', 'danger','success','warning'];
  let colorMessages = {
    'primary': 'Blue color mode is enabled',
    'danger': 'Red color mode is enabled',
    'success': 'Green color mode is enabled',
    'warning': 'Yellow color mode is enabled'
  };

  let changeMode = (cls)=>
  {
    let message = colorMessages[cls];
    console.log(message);
    if(message)
    {
      removeBodyClasses();
      document.body.classList.add('bg-'+cls);
      showAlert(message,"success");
    }
    else{
      showAlert('Unknown color mode','warning');
    }
  };
  // let changeMode = (cls)=>
  // {
  //   colors.forEach((color)=>{
  //     if(cls===color)
  //     showAlert(`${color} color mode is enabled`, "success");
  //   }
  //   )
  // }
  let toggleMode = (cls) => {
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
        changeMode={changeMode}
      />
      <Alert alert= {alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About mode = {mode}/>}/>
          <Route exact  path="/" element={<TextForm heading="Enter the Text to Analyze below" mode={mode} showAlert ={showAlert} />}/>
      </Routes>
       </div>
       </Router>
    </>
  );
}

export default App;
