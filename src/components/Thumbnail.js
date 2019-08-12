import React from "react";
import "../stylesheets/Thumbnail.css";

const Thumbnail = ({ video, onVideoSelect }) => {
  return (
    <div className="thumbnail" onClick={() => onVideoSelect(video)}>
      <img
        className="thumbnail-image"
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="thumbnail-info">
        <h3>{video.snippet.title}</h3>
      </div>
    </div>
  );
};

export default Thumbnail;
