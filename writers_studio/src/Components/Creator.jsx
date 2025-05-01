import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS

const Creator = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      // User is authenticated, proceed with the component logic
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(Text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
  };
  const handleCopy = () => {
    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspaces ", "success");
  };
  const handleExtraLines = () => {
    let newText = Text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspaces ", "success");
  };

  // Quill modules for toolbar customization
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Header levels
      ["bold", "italic", "underline", "strike"], // Text formatting
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ indent: "-1" }, { indent: "+1" }], // Indentation
      [{ direction: "rtl" }], // Text direction
      [{ size: ["small", false, "large", "huge"] }], // Font size
      [{ color: [] }, { background: [] }], // Text and background color
      [{ font: [] }], // Font family
      [{ align: [] }], // Text alignment
    ],
  };


  // Quill formats for supported features
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "script",
    "indent",
    "direction",
    "size",
    "color",
    "background",
    "font",
    "align",
  ];
  const [Text, setText] = useState("");
  const [normal, setNormal] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // State to store the description

  const handleTextChange = (value) => {
    setText(value); // Update the Text state with the new value from the editor
    const convertHtmlToText = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      return doc.body.textContent || "";
    };
    
    // Usage in your component
     setNormal(convertHtmlToText(Text)); // Convert the HTML in `Text` to plain text
    console.log(normal); // Logs the plain text version of the HTML
  
  }
 
  const handleSave = () => {
    const storyData = {
      title: title,
      description: description,
      story:  normal, // Use the text from the editor
      author: "aaaaa",
    };

    fetch("http://localhost:5000/api/story/addstory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth-token"), // Pass auth token for authentication
      },
      body: JSON.stringify(storyData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Story saved successfully!");
          setText(""); // Clear the editor after saving
          setTitle(""); // Clear the title input
          setDescription(""); // Clear the description input
        } else {
          alert("Failed to save story. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error saving story:", error);
      });
  };


  return (
    <>
      <div>
      <div className="text-center mb-4" style={{marginTop:"5rem"}}>
        <h1 className="display-4 mt-5" >Create Your Own Stories</h1>
        <p className="lead">
          Welcome <strong>{user}</strong> to the Writer's Studio. Start writing
          your story below:
        </p>
        <p>Your Email: <strong>{email}</strong></p>
      </div>
        <input
          placeholder="Enter the title of the story "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="container"
        />
        <input
          placeholder="Enter the description of the story "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="container my-3"
        />
        <ReactQuill
          theme="snow"
          value={Text}
          onChange={handleTextChange} // Update the Text state directly
          placeholder="Start writing here..."
          modules={modules}
          formats={formats}
          style={{ height: "300px", marginTop: "20px" }}
        />
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <div dangerouslySetInnerHTML={{ __html: Text }} />
        </div>
      </div>
      <div>
      <button onClick={handleSave} className="btn btn-success mx-2">
          Save Story
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
        <button
          disabled={Text.length === 0}
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>

        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove ExtraSpaces
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraLines}
        >
          Remove Lines
        </button>

        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>
            {Text.trim().length === 0
              ? 0
              : Text.split(/\s+/).filter((element) => element.length !== 0)
                  .length}{" "}
            words and {Text.length} characters
          </p>
          <p>
            {Text.trim().length === 0
              ? 0
              : (
                  0.008 *
                  Text.split(/\s+/).filter((element) => element.length !== 0)
                    .length
                ).toFixed(2)}{" "}
            minutes to read
          </p>
        </div>
      </div>
    </>
  );
};

export default Creator;
