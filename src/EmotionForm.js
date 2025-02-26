import React, { useState } from "react";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import "./EmotionForm.css";

function EmotionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#a78bfa");
  const [emoji, setEmoji] = useState("😊");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newEmotion = {
      id: Date.now(),
      text,
      color,
      emoji,
      date: new Date().toLocaleDateString(),
    };

    onAdd(newEmotion);
    setText("");
  };

  return (
    <form className="emotion-form" onSubmit={handleSubmit}>
      <h2>Бүгінгі эмоцияңыз</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Эмоцияңызды жазыңыз..."
      />
      <div className="controls">
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div className="emoji-picker">
          <span onClick={() => setEmoji("😊")}><FaSmile /></span>
          <span onClick={() => setEmoji("😐")}><FaMeh /></span>
          <span onClick={() => setEmoji("☹️")}><FaFrown /></span>
        </div>
      </div>
      <button type="submit">Сақтау</button>
    </form>
  );
}

export default EmotionForm;
