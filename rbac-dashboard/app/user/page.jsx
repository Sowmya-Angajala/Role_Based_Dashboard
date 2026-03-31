// app/dashboard/user/page.jsx
"use client";
import { useState } from "react";

export default function User() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    setNotes([...notes, text]);
    setText("");
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addNote}>Add Note</button>

      {notes.map((n, i) => (
        <div key={i}>{n}</div>
      ))}
    </div>
  );
}