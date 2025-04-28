import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const Creator = () => {
  const [content, setContent] = useState(''); // State to store editor content

  const handleChange = (value) => {
    setContent(value); // Update state when content changes
  };

  return (
    <div>
      <h2>Quill Editor</h2>
      <ReactQuill
        theme="snow" // Use the "snow" theme
        value={content} // Bind the editor's value to state
        onChange={handleChange} // Handle content changes
        placeholder="Start writing here..."
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Creator;