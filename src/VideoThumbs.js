import React from "react";
import "./css/VideoThumbs.css";

const VideoThumbs = ({ video, onVideoSelected }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelected(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoThumbs;
