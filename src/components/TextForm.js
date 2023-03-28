import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  // const [searchText, setSearch] = useState("");
  let handleUpClick = ()=>{
    let upper = text.toLocaleUpperCase();
    if(upper === text)
    {
      props.showAlert("Already in Upper Case","success");
    }
    else
    {
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to Upper Case","success");
    }
  }
  let handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");

 }
  let handleClearClick = ()=>{
         setText("");
     props.showAlert("Text Cleared","success");

  }
  let handleCopy = ()=>
  {
    // var text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","success");

  }
  let handleExtraSpace = ()=>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")) ; 
    props.showAlert("Extra spaces removed","success");

  }
//   let handleSearchClick = ()=> 
//   {
//       if(text.includes(searchText))
//       {

//       }
//   }
//   let handleSearch = (e)=>{
// setSearch(e.target.value);
//   }

  let handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text,setText] = useState("");
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <div className="mb-3">
      <h1 className="my-4" style={{textAlign:"center"}}>{props.heading}</h1>
        {/* <label htmlFor="myBox" className="form-label my-3 ">
          {props.heading}
        </label> */}
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Text Here" style={{backgroundColor : props.mode==='dark'?'#7897d8':'white', color :props.mode==='dark'?'white':'grey' }}  ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>


      {/* <input className="form-control me-2" type="search" onChange={(e)=> handleSearch(e)} placeholder="Search" aria-label="Search"/> */}
      {/* <button className="btn btn-primary mx-2" onClick={handleSearchClick}> Search</button> */}



    </div>

    <div className="container my-5" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s/).filter((element)=>{return element.length !==0}).length}  words and {text.length} characters </p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length !==0}).length} minutes read</p>
      {/* <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something above to preview it"}</p> */}
    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Text here",
};
