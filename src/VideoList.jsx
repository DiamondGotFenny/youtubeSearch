import React, { Component } from "react";
import VideoThumbs from "./VideoThumbs";

class VideoList extends Component {
  state = {};

  renderVideoThthumbnails = (videos, onVideoSelected) => {
    return videos.map(video => {
      return (
        <VideoThumbs
          video={video}
          key={video.id.videoId || video.id.channelId}
          onVideoSelected={onVideoSelected}
        />
      );
    });
  };
  render() {
    const { videos, onVideoSelected } = this.props;
    return (
      <div className="video-list ui relaxed divided list">
        {this.renderVideoThthumbnails(videos, onVideoSelected)}
      </div>
    );
  }
}

export default VideoList;
