import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { url } from "./data-link/url"; // Import the URL from the data-link file
import "../css/writerscss.css"; // Import your CSS file for styling 
const Creator = () => {
  const navigate = useNavigate();
  const [Text, setText] = useState("");
  const [normal, setNormal] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // State to store the description

  useEffect(() => {
    const convertHtmlToText = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      return doc.body.textContent || "";
    };
  
    setNormal(convertHtmlToText(Text));
    if (localStorage.getItem("auth-token")) {
      // User is authenticated, proceed with the component logic
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [Text]);
  const handleTextChange = (value) => {
    setText(value); // Update the `Text` state with the new value from the editor
  };
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const handleUpClick = () => {
    let newText = normal.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = normal.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(normal);
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
    var normal = document.getElementById("myBox");
    normal.select();
    navigator.clipboard.writeText(normal.value);
    document.getSelection().removeAllRanges();
  };

  const handleExtraSpaces = () => {
    let newText = normal.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleExtraLines = () => {
    let newText = normal.split(/\s+/);
    setText(newText.join(" "));
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
  
 
 
  const handleSave = () => {
    const storyData = {
      title: title,
      description: description,
      story:  normal, // Use the text from the editor
      author: name,
    };

    fetch(`${url}/api/story/addstory`, {
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
    <div className="writer-container  mt-5">
      <div className="text-center writer-heading mb-4">
        <h1 className="display-4">Create Your Own Stories</h1>
        <p className="lead">
          Welcome <strong>{name}</strong> to the Writer's Studio. Start writing your story below:
        </p>
        <p>Your Email: <strong>{email}</strong></p>
      </div>
  
      <input
        placeholder="Enter the title of the story"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="container"
      />
      <input
        placeholder="Enter the description of the story"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="container my-3"
      />
  
      <ReactQuill
        theme="snow"
        value={Text}
        onChange={handleTextChange}
        placeholder="Start writing here..."
        modules={modules}
        formats={formats}
        style={{ height: "300px", marginTop: "20px" }}
      />
  
      <div style={{ marginTop: "20px" }}>
        <h3>Preview:</h3>
        <div className="preview-box" dangerouslySetInnerHTML={{ __html: Text }} />
      </div>
  
      <div className="mt-4">
        <button onClick={handleSave} disabled={Text.length === 0} className="btn btn-success mx-2">
          Save Story
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={Text.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">
          Speak
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraLines}>
          Remove Lines
        </button>
      </div>
  
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            normal
              .split(/\s+/)
              .filter((element) => element.length !== 0).length
          } words and{" "}
          {
            normal.replace(/\s+/g, "").length
          } characters
        </p>
        <p>
          {
            (
              0.008 *
              normal
                .split(/\s+/)
                .filter((element) => element.length !== 0).length
            ).toFixed(2)
          } minutes to read
        </p>
      </div>
    </div>
  </>
  
  
  );
};

export default Creator;
