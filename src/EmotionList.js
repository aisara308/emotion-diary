import React from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import "./EmotionList.css";

function EmotionList({ emotions, onDelete }) {
  return (
    <div className="emotion-list">
      {emotions.length === 0 ? (
        <p className="empty-message">Эмоциялар әлі жоқ...</p>
      ) : (
        emotions.map((emotion) => (
          <motion.div
            key={emotion.id}
            className="emotion-item"
            style={{ backgroundColor: emotion.color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span className="emoji">{emotion.emoji}</span>
            <div className="text">
              <p>{emotion.text}</p>
              <small>{emotion.date}</small>
            </div>
            <button className="delete-btn" onClick={() => onDelete(emotion.id)}>
              <FaTrash />
            </button>
          </motion.div>
        ))
      )}
    </div>
  );
}

export default EmotionList;
