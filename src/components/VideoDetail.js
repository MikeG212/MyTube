import React from "react";
import "../stylesheets/VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-player-container">
      <iframe title="Video Player" src={videoSrc} className="video-player" />
      <div className="video-title">
        <h4>
          {video.snippet.title} - {video.snippet.channelTitle}
        </h4>
        <div className="channel-title">{video.snippet.channelTitle}</div>
        <div className="video-description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
