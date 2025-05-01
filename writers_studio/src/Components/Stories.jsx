import React, { useEffect, useState } from "react";
import "../css/stories.css";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const [stories, setStories] = useState([]); // State to store fetched stories
  const navigate = useNavigate();
  const [ss, setSS] = useState(""); // State to store a specific story description

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
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxMjE3MzdjNzBhMWRhZTc3ZTBjYzE0In0sImlhdCI6MTc0NjAzNjAyMH0.S14jPRtahYzO2AkxTAE-h35467isGCkDGjBdSAbO-yI", // Pass auth token for authentication
        },
      });

      const data = await response.json();
      const users=localStorage.getItem("users");
      console.log(users ) // Store the description in local storage
      if (response.ok) {
        setSS(data[0].description);
        setStories(data); // Update state with fetched stories
      } else {
        console.error("Failed to fetch stories:", data.error);
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  return (
    <div>
      <h1 className="h1 " style={{marginTop:"6rem"}}>Stories</h1>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div className="card" key={ss}>
            <span className="card__title">Author: {ss}</span>
            <p className="card__content">{story.content}</p>
            <form className="card__form">
              <button className="card__button">See me</button>
            </form>
          </div>
        ))
      ) : (
        <p>No stories available</p>
      )}
    </div>
  );
};

export default Stories;
