import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TextTool             from "./sw_engineering/TextTool";
import NeoHoverCard         from "./gadgets/NeoHoverCard";

export default function SoftwareEngineering() {
  const [selected, setSelected] = useState(null);
  const location = useLocation();

  // Reset state when the location path is /ml
  useEffect(() => {
    if (location.pathname === "/sw_eng") {
      setSelected(null);
    }
  }, [location]);

  const cards = [
    { key: "TextTool",  title: "Text Tool",  onClick: () => setSelected("TextTool") }
  ];

  if (selected === "TextTool") {
    return (
      <main className="sidebar-content" style={{ minHeight: '100vh' }}>
        <TextTool />
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