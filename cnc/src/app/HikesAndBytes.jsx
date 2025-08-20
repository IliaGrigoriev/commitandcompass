import React, { useState, useEffect } from "react";
import { useLocation }                from "react-router-dom";

import "./css/sidebar.css";
import "./css/hikes_and_bytes.css";

import NeoHoverCard from "./gadgets/NeoHoverCard";
import FrostyBytes  from "./hikes_and_bytes/FrostyBytes";

// now your code/constants
const base = import.meta.env.BASE_URL; // "/"
const magaroja_logo        = `${base}photos/frosty_bytes/magaroja_snow.png`;
const deploying_croissants = `${base}photos/deploying_croissants/dep_cr_logo.jpg`;
const foggy_forever        = `${base}photos/foggy_forever/foggy_forever_logo.jpg`;
const yosemite_biobytes    = `${base}photos/yosemite_biobytes/yosemite_biobytes.jpg`;


export default function HikesAndBytes() {
  const [selected, setSelected] = useState(null);
  const location                = useLocation();

  // Reset state when the location path is /hikes
  useEffect(() => {
    if (location.pathname === "/hikes") {
      setSelected(null);
    }
  }, [location]);

  const cards = [
    { key: "FoggyForever",       title: "Foggy Forever",        image: foggy_forever,        onClick: null },
    { key: "YosemiteBioBytes",   title: "Yosemite BioBytes",    image: yosemite_biobytes,    onClick: null },
    { key: "FrostyBytes",        title: "Frosty Bytes",         image: magaroja_logo,        onClick: () => setSelected("FrostyBytes") },
    { key: "DeployingCroissants",title: "Deploying Croissants", image: deploying_croissants, onClick: null },
  ];

  if (selected === "FrostyBytes") {
    return (
      <main className="sidebar-content" style={{ minHeight: '100vh' }}>
        <FrostyBytes />
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
