import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const Creator = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('auth-token')){
        // User is authenticated, proceed with the component logic      
        }
    else{
        navigate('/login');
    }
    // eslint-disable-next-line
}, [])
const user=localStorage.getItem('user')
const email=localStorage.getItem('email')
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been Cleared","success")
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(Text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}
  const handleCopy =()=>{
    var Text=document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
   document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success")
  }

  const handleExtraSpaces =()=>{
      let newText=Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extraspaces ","success")
  }
  const handleExtraLines =()=>{
    let newText=Text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspaces ","success")
}
 
  const [Text, setText] = useState("");
  const [normal,setNormal]= useState("");
  const handleChange = (value) => {
    setText(value); // Update state when text changes
    setNormal({ __html: Text }); // Update normal text state
  };

  const handleSave = () => {
    console.log(JSON.stringify({ Text })); // Log text in JSON format
  };

  // Quill modules for toolbar customization
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Header levels
      ['bold', 'italic', 'underline', 'strike'], // Text formatting
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      [{ indent: '-1' }, { indent: '+1' }], // Indentation
      [{ direction: 'rtl' }], // Text direction
      [{ size: ['small', false, 'large', 'huge'] }], // Font size
      [{ color: [] }, { background: [] }], // Text and background color
      [{ font: [] }], // Font family
      [{ align: [] }], // Text alignment
    ],
  };

  // Quill formats for supported features
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'script',
    'indent',
    'direction',
    'size',
    'color',
    'background',
    'font',
    'align',
  ];

  return ( 

    <>
    <div>
      <p style={{textAlign:"center",fontSize:"2.5rem",marginTop:"7rem",marginBottom:"2.5rem",fontWeight:"600"}}>Create Your own Stories</p>
      <h1>User Info:</h1>
      <p>Welcome <strong>{user}</strong> to the Writer's Studio. Start writing your story below:</p>
      <p>Your Email : {email}</p>
      <ReactQuill
        theme="snow" // Use the "snow" theme
        value={Text} // Bind the editor's value to state
        onChange={handleChange} // Handle text changes
        placeholder="Start writing here..."
        modules={modules} // Add custom toolbar
        formats={formats} // Add supported formats
        style={{ height: '300px', marginTop: '20px' }} // Set editor height and margin
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: Text }} />
      </div>
      
    </div>
    <div >
     
    <button
        onClick={handleSave}
        className="btn btn-primary mx-2 my-1" 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Save
      </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
      Convert to uppercase
    </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
      Convert to Lowercase
    </button>
    <button disabled={Text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearText}>
      Clear text
    </button>
    <button disabled={Text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
      Copy text
    </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
      Remove ExtraSpaces
    </button>
    <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraLines}>
      Remove Lines
    </button>
   
  <div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>
    {
      Text.trim().length === 0
        ? 0
        : Text.split(/\s+/).filter((element) => element.length !== 0).length
    }{" "}
    words and {Text.length} characters
  </p>
  <p>
    {Text.trim().length === 0
      ? 0
      : (0.008 *
          Text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)}{" "}
    minutes to read
  </p>
  
</div>
</div>
    </>
  );
};

export default Creator;