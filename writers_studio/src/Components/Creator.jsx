import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const Creator = () => {
  const [content, setContent] = useState(''); // State to store editor content

  const handleChange = (value) => {
    setContent(value); // Update state when content changes
  };

  const handleSave = () => {
    console.log(JSON.stringify({ content })); // Log content in JSON format
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
    'color',
    'background',
    'font',
    'align',
  ];

  return (
    <div>
      <h2>Quill Editor</h2>
      <ReactQuill
        theme="snow" // Use the "snow" theme
        value={content} // Bind the editor's value to state
        onChange={handleChange} // Handle content changes
        placeholder="Start writing here..."
        modules={modules} // Add custom toolbar
        formats={formats} // Add supported formats
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <button
        onClick={handleSave}
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
    </div>
  );
};

export default Creator;