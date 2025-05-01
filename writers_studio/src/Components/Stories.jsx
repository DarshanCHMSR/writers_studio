import React, { useEffect, useState } from "react";
import "../css/stories.css";
import { useNavigate } from "react-router-dom";

const Stories = () => {
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
              <button
                className="btn btn-primary"
                onClick={() => openModal(story)}
                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              >
                See More
              </button>
            </div>
          </div>
        ))
      ) : (
        !error && <p className="text-center">No stories available</p>
      )}

      {/* Bootstrap Modal */}
      {selectedStory && (

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex voluptates sunt aliquid voluptatibus, minima pariatur nisi maiores! Voluptatem minus, maxime porro quos inventore, natus expedita ex, earum praesentium odit officia.
        Corporis ad blanditiis quasi deleniti sit voluptate repellendus omnis aut a ullam cupiditate, reprehenderit asperiores dolore minus similique incidunt ea laudantium. Accusantium, dolore. Ab rerum consectetur dolorem, at commodi ipsa.
        Nulla temporibus dolores corporis, perspiciatis fugit recusandae dolor, iusto tempora quos dicta culpa odio ex, incidunt dolorem libero quisquam? Ea maiores excepturi, aliquid nostrum eos consectetur odit vel. Dolore, nam!
        Dolorum nihil quisquam laborum aperiam ad eos ratione nisi! Vitae dolores architecto beatae incidunt debitis explicabo odio unde consequuntur dolorum? Delectus cumque iure quod beatae eligendi ipsum aperiam, adipisci nulla.
        Asperiores molestiae magnam maiores nihil harum aut similique incidunt rem, corrupti sunt esse eaque quo quidem molestias accusamus iusto. Dolores omnis facere id ipsum. Pariatur cum nisi hic tempore dolorem.
        Odit, tempore. Pariatur consequatur perferendis culpa sit, in non autem facilis nemo enim deleniti tempora, facere corporis voluptatem dignissimos ex, ea laboriosam fugit quia ad suscipit ab id praesentium debitis?
        Minus porro temporibus eos repudiandae vel et quia blanditiis nihil omnis aspernatur, sunt cumque? Quisquam esse aspernatur iure, unde velit ipsam. Id esse nam omnis recusandae, doloremque hic dignissimos eius!
        Quis reiciendis excepturi quasi maxime possimus fuga autem voluptatibus voluptas! Deleniti eius cumque tempore quod assumenda in ipsum aperiam, voluptates veritatis quia repellat incidunt rem doloremque enim, tenetur vero magnam.
        Aliquam optio, aspernatur ut minus fugit quod nulla eius cupiditate repellendus deserunt nemo non omnis molestias hic iste, libero laudantium, minima asperiores. Reiciendis porro consectetur, incidunt voluptas atque molestiae officia.

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
      )}
    </div>
  );
};

export default Stories;


