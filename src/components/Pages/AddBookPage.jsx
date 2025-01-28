import React from "react";
import { useNavigate } from "react-router-dom";

const AddBookForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "black",
          borderRadius: "10px",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Add New Book
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Title:
          </label>
          <input
            type="text"
            placeholder="Enter book title"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "5px",
              
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Author:
          </label>
          <input
            type="text"
            placeholder="Enter author's name"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px"}}>
            Description:
          </label>
          <textarea
            placeholder="Enter book description"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              resize: "none",
              minHeight: "80px",
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Cover Image URL:
          </label>
          <input
            type="url"
            placeholder="Enter image URL"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
            
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
