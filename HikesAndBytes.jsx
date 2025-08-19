import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './css/sidebar.css';

import magaroja_logo        from '/home/ilia/Pictures/cnc/images/frosty_bytes/magaroja_snow.png';
import deploying_croissants from '/home/ilia/Pictures/cnc/images/deploying_croissants/dep_cr_logo.jpg';
import foggy_forever        from '/home/ilia/Pictures/cnc/images/foggy_forever/foggy_forever_logo.jpg';
import yosemite_biobytes    from '/home/ilia/Pictures/cnc/images/yosemite_biobytes/yosemite_biobytes.jpg';

import './css/hikes_and_bytes.css';

import NeoHoverCard from "./gadgets/NeoHoverCard";
import FrostyBytes  from './hikes_and_bytes/FrostyBytes';

export default function HikesAndBytes() {
  const [selected, setSelected] = useState(null);
  const location = useLocation();

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
