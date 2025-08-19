import React from "react";
import { useNavigate } from "react-router-dom";

import "./css/sidebar.css";
import logo from './svg/commit_compass_logo.svg';

import UnderlineHoverButton from "./gadgets/UnderlineHoverButton";

export default function Sidebar({ children }) {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <aside className="sidebar">
        <img src={logo} alt="Logo" width={180} />
        <h2>Commit & Compass</h2>
        <nav>
          <UnderlineHoverButton hover_name="Feed"            onUserClick={() => navigate("/")} />
          <UnderlineHoverButton hover_name="Firefly Compass" onUserClick={() => navigate("/compass")} />

          <div className="sidebar-separator" />  {/* Separator */}
          
          <UnderlineHoverButton hover_name="ML & Data Science"    onUserClick={() => navigate("/ml")} />
          <UnderlineHoverButton hover_name="Software Engineering" onUserClick={() => navigate("/sw_eng")} />

          <div className="sidebar-separator" />  {/* Separator */}
          <UnderlineHoverButton hover_name="Hikes & Bytes"        onUserClick={() => navigate("/hikes")} />
          <UnderlineHoverButton hover_name="Coder's Garden"       onUserClick={() => navigate("/codersgarden")} />

          <div className="sidebar-separator" />  {/* Separator */}
          <UnderlineHoverButton hover_name="Hire me"           onUserClick={() => navigate("/cv")} />
          <UnderlineHoverButton hover_name="Contact"           onUserClick={() => navigate("/contact")} />
        </nav>
      </aside>

      <main className="sidebar-content">
        {children}
      </main>
    </div>
  );
}
