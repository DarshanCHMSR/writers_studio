import React, { useEffect, useState } from "react";
import "../css/stories.css";
import { useNavigate } from "react-router-dom";
import { url } from "./data-link/url"; // Import the URL from the data-link file

const PublicStories = () => {
  const [stories, setStories] = useState([]); // State to store fetched stories
  const [error, setError] = useState(""); // State to store error messages
  const [selectedStory, setSelectedStory] = useState(null); // State to track the selected story for the modal
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      navigate("/login");
    } else {
      fetchStories();
    }
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch(`${url}/api/story/publicstories`, {
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

  const openModal = (story) => {
    setSelectedStory(story); // Set the selected story for the modal
  };

  const closeModal = () => {
    setSelectedStory(null); // Clear the selected story when the modal is closed
  };

  return (
    <div className=" mt-5">
      <h1 className="h1 text-center mb-4" style={{ marginTop: "6rem" }}>
        Stories
      </h1>
      {error && <p className="text-danger text-center">{error}</p>}
      {stories.length > 0 ? (
        stories.map((story) => (
          <div className="card mb-3" key={story._id}>
            <div className="card-body">
              <h5 className="card-title">Author: {story.author}</h5>
              <p className="card-text">{story.description}</p>
              <div className="card__form">
              <button
                className="card__button"
                onClick={() => openModal(story)}
                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              >
                See More
              </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        !error && <p className="text-center">No stories available</p>
      )}

      {/* Bootstrap Modal */}
      {selectedStory && (

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">{selectedStory.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p><strong>Author:</strong> {selectedStory.author}</p>
                <p><strong>Description:</strong> {selectedStory.description}</p>
                <p><strong>Story:</strong> {selectedStory.story}</p>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Understood</button> */}
      </div>
    </div>
  </div>
</div>
      )}
    </div>
  );
};

export default PublicStories;


