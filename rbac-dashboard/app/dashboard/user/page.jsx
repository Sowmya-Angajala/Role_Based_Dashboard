"use client";
import { useState } from "react";
import UserCard from "../../componets/UserCard";

export default function User() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const user = {
    name: "User",
    email: "user@gmail.com",
    role: "USER",
  };

  const addNote = () => {
    if (!text) return;
    setNotes([...notes, text]);
    setText("");
  };

  return (
    <div className="container">
      <UserCard user={user} />

      <div className="card">
        <h2 className="title">My Notes</h2>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
        />
        <button className="btn" onClick={addNote}>
          Add
        </button>

        {notes.map((n, i) => (
          <p key={i}>{n}</p>
        ))}
      </div>
    </div>
  );
}