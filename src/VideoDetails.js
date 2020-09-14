import React from "react";

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>No videos yet</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <div>
        <div className="ui embed">
          <iframe
            title="Video Player"
            width="560"
            height="315"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
