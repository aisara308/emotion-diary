import React, { useState, useEffect } from "react";
import EmotionForm from "./EmotionForm";
import EmotionList from "./EmotionList";
import "./App.css";

function App() {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const savedEmotions = JSON.parse(localStorage.getItem("emotions")) || [];
    setEmotions(savedEmotions);
  }, []);

  useEffect(() => {
    localStorage.setItem("emotions", JSON.stringify(emotions));
  }, [emotions]);

  const addEmotion = (emotion) => {
    setEmotions([...emotions, emotion]);
  };

  const deleteEmotion = (id) => {
    setEmotions(emotions.filter((emotion) => emotion.id !== id));
  };

  return (
    <div className="app">
      <h1>Эмоциялар күнделігі</h1>
      <EmotionForm onAdd={addEmotion} />
      <EmotionList emotions={emotions} onDelete={deleteEmotion} />
    </div>
  );
}

export default App;
