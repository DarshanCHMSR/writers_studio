import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { url } from "./data-link/url"; // Import the URL from the data-link file

const EditStory = () => {
  const navigate = useNavigate();
  const [Text, setText] = useState("");
  const [normal, setNormal] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // State to store the description
  const storyId = "68126ab1d93dad0919c5f461"; // Replace with dynamic ID if needed

  // Fetch the story data when the component loads
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`${url}/api/story/getstory/68126aed70823d216c0ee59c`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("auth-token"), // Pass auth token for authentication
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title); // Populate the title
          setDescription(data.description); // Populate the description
          setText(data.story); // Populate the story content
        } else {
          console.error("Failed to fetch story:", response.statusText);
          alert("Failed to fetch the story. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching story:", error);
        alert("An error occurred while fetching the story.");
      }
    };

    fetchStory();
  }, [storyId]);

  // Convert HTML to plain text for `normal`
  useEffect(() => {
    const convertHtmlToText = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      return doc.body.textContent || "";
    };

    setNormal(convertHtmlToText(Text));
  }, [Text]);

  const handleTextChange = (value) => {
    setText(value); // Update the `Text` state with the new value from the editor
  };

  const handleSave = () => {
    const storyData = {
      title: title,
      description: description,
      story: normal, // Use the plain text from the editor
    };

    fetch(`${url}/api/story/updatestory/${storyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("auth-token"), // Pass auth token for authentication
      },
      body: JSON.stringify(storyData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Story updated successfully!");
          navigate("/stories"); // Redirect to the stories page or another page
        } else {
          alert("Failed to update story. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error updating story:", error);
      });
  };

  return (
    <>
      <div>
        <div className="text-center mb-4" style={{ marginTop: "5rem" }}>
          <h1 className="display-4 mt-5">Edit Your Story</h1>
          <p className="lead">
            Welcome <strong>{localStorage.getItem("name")}</strong> to the
            Writer's Studio. Edit your story below:
          </p>
          <p>
            Your Email: <strong>{localStorage.getItem("email")}</strong>
          </p>
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
          onChange={handleTextChange} // Update the Text state directly
          placeholder="Start editing here..."
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
            ],
          }}
          formats={[
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
          ]}
          style={{ height: "300px", marginTop: "20px" }}
        />
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <div dangerouslySetInnerHTML={{ __html: Text }} />
        </div>
      </div>
      <div>
        <button
          onClick={handleSave}
          disabled={normal.length === 0}
          className="btn btn-success mx-2"
        >
          Save Story
        </button>
      </div>
    </>
  );
};

export default EditStory;