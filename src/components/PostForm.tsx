import React from "react";
import "./PostForm.css";

export default function PostForm({
  onClose,
  setTitle,
  setThought,
  onSubmit,
}: {
  onClose: () => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setThought: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}) {
  return (
    <form
      className="PostForm"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
        onClose();
      }}
    >
      <i
        className="fas fa-times-circle"
        onClick={() => {
          onClose();
        }}
      ></i>
      <label>Title</label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label>Thought</label>
      <textarea
        onChange={(event) => {
          setThought(event.target.value);
        }}
      ></textarea>
      <button type="submit" className="addPost">
        Add Post
      </button>
    </form>
  );
}
