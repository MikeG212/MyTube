import React from "react";
import Thumbnail from "./Thumbnail";
import "../stylesheets/VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <Thumbnail key={id} video={video} onVideoSelect={onVideoSelect} />
  ));
  return <div className="video-list-container">{listOfVideos}</div>;
};

export default VideoList;
