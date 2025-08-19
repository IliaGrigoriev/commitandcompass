import './css/main_feed.css'

import NeoHoverCard from "./gadgets/NeoHoverCard";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './css/sidebar.css';

import SentimentRecognition from './ml_and_data_sc/SentimentRecognition';

export default function MLDataScience() {
  const [selected, setSelected] = useState(null);
  const location = useLocation();

  // Reset state when the location path is /ml
  useEffect(() => {
    if (location.pathname === "/ml") {
      setSelected(null);
    }
  }, [location]);

  const cards = [
    { key: "SentimentRecognition",  title: "Sentiment Recognition",  onClick: () => setSelected("SentimentRecognition") }
  ];

  if (selected === "SentimentRecognition") {
    return (
      <main className="sidebar-content" style={{ minHeight: '100vh' }}>
        <SentimentRecognition />
      </main>
    );
  }

  return (
    <div className="main-container">
      <div className="six-by-six-grid">
        {cards.map(card => (
          <div key={card.key} className="grid-item">
            <NeoHoverCard
              hover_name      = {card.title}
              backgroundImage = {card.image}
              onUserClick     = {card.onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
