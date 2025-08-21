import React, { useState } from "react";
import './css/justified_gallery.css';

export default function ImageGallery({ images, height = 200, margin = 8 }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedMedia = selectedIndex !== null ? images[selectedIndex] : null;

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      {/* Thumbnails */}
      <div className="fixed-thumbnail-gallery">
        {images.map((media, i) => {
          const width = media.orientation === "horizontal" ? 190 : 150;

          return (
            <div
              key={i}
              className={`fixed-thumbnail-wrapper ${media.type === "video" ? "video-thumbnail" : ""}`}
              style={{
                width        : `${width}px`,
                height       : `${height}px`,
                marginRight  : i !== images.length - 1 ? `${margin}px` : 0,
                marginBottom : `${margin}px`,
                position     : "relative",
                cursor       : "pointer"
              }}
              onClick={() => setSelectedIndex(i)}
            >
              {media.type === "video" ? (
                <video
                  src       = {media.src}
                  poster    = {media.poster}
                  className = "fixed-thumbnail"
                  style     = {{ width: "100%", height: "100%", objectFit: "cover" }}
                  muted
                  playsInline
                  onMouseEnter = {(e) => e.currentTarget.play()}
                  onMouseLeave = {(e) => e.currentTarget.pause()}
                />
              ) : (
                <img
                  src       = {media.thumb || media.src}
                  alt       = {media.description || ""}
                  className = "fixed-thumbnail"
                  style     = {{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen overlay */}
      {selectedMedia && (
        <div className="overlay" onClick={() => setSelectedIndex(null)}>
          <div className="overlay-content">
            <button className="nav-button left" onClick={handlePrev}>
              &#10094;
            </button>

            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="full-media"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt="Full size"
                className="full-media"
              />
            )}

            <button className="nav-button right" onClick={handleNext}>
              &#10095;
            </button>
          </div>

          <p className="description">{selectedMedia.description}</p>
        </div>
      )}
    </div>
  );
}
