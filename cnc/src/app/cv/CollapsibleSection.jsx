import React, { useState } from "react";
import './css/collapsible_section.css';

export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <div
        className="collapsible-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="compass-container">
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Compass outer circle */}
            <circle cx="50" cy="50" r="45" stroke="#1DA1F2" strokeWidth="6" fill="none" />

            {/* Rotating needle group */}
            <g className={`needle-group ${isOpen ? "rotated" : ""}`}>
              {/* North tip (red) */}
              <polygon points="50,15 54,50 46,50" fill="red" />
              {/* South tip (blue) */}
              <polygon points="50,85 54,50 46,50" fill="blue" />
            </g>

            {/* Center dot */}
            <circle cx="50" cy="50" r="3" fill="#1DA1F2" />
          </svg>
        </div>

        <span className="collapsible-title">{title}</span>
      </div>

      {isOpen && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
}
