import React, { useEffect, useState } from "react";
import "../css/stories.css";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const [stories, setStories] = useState([]); // State to store fetched stories
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();
  const [expandedStoryId, setExpandedStoryId] = useState(null); // State to track the expanded story

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    } else {
      fetchStories();
    }
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/story/fetchallstories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("auth-token"), // Use dynamic token
        },
      });
      const data = await response.json();
      if (response.ok) {
        setStories(data); // Update state with fetched stories
      } else {
        setError(data.error || "Failed to fetch stories");
      }
    } catch (error) {
      setError("An error occurred while fetching stories");
      console.error("Error fetching stories:", error);
    }
  };
  const toggleStory = (id) => {
    setExpandedStoryId(expandedStoryId === id ? null : id); // Toggle the expanded story
  };
  return (
    <div className=" mt-5">
      <h1 className="h1 text-center mb-4" style={{ marginTop: "6rem" }}>
        Stories
      </h1>
      {error && <p className="text-danger text-center">{error}</p>}
      {stories.length > 0 ? (
        stories.map((story) => (
          <div className="card" key={story._id}>
            <span className="card__title">Author: {story.author}</span>
            <p className="card__content">{story.description}</p>
            
            {expandedStoryId === story._id && (
                <p className="card-text">
                  <strong>Story:</strong> {story.story}
                </p>
              )}
              <div className="card__form">
              <button
                className="card__button"
                onClick={() => toggleStory(story._id)}
              >
                {expandedStoryId === story._id ? "See Less" : "See More"}
              </button>
              </div>

          </div>
        ))
      ) : (
        !error && <p className="text-center">No stories available</p>
      )}
      
    </div>
  );
};

export default Stories;