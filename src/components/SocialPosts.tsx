import "./SocialPosts.css";
import { useState } from "react";
import PostInList from "./PostInList";
import Post from "../models/Posts";
import { openStdin } from "process";
import PostForm from "./PostForm";
import { isTemplateLiteralTypeNode } from "typescript";

export default function SocialPosts() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [posts, setPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Grand Circus is cool" },
    { title: "React", thought: "React give me power!" },
    {
      title: "Beatrice",
      thought:
        "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!",
    },
  ]);
  function deletePost(i: number) {
    //copy then modify
    let copiedPosts = [...posts];
    copiedPosts.splice(i, 1);
    setPosts(copiedPosts);
  }

  function onSubmit() {
    let copiedPosts = [...posts];
    copiedPosts.unshift({ title: title, thought: thought });
    setPosts(copiedPosts);
  }

  return (
    <div className="socialPosts">
      <h1>My Thoughts</h1>

      <button
        className="newThought"
        onClick={() => {
          setFormIsVisible(true);
        }}
      >
        New Thought
      </button>
      <div className="postsList">
        {formIsVisible && (
          <PostForm
            setTitle={setTitle}
            setThought={setThought}
            onSubmit={() => {
              onSubmit();
            }}
            onClose={() => {
              setFormIsVisible(false);
            }}
          />
        )}
        {posts.map((post, index) => (
          <PostInList
            key={index}
            post={post}
            onDelete={() => {
              deletePost(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
