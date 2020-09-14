import React, { Component } from "react";
import SearchBox from "./SearchBox";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import http from "./httpService";
import youtube from "./Youtube";

class App extends Component {
  state = { query: "", videos: [], selectedVideo: null };

  handleInputChange = q => {
    this.setState({ query: q });
  };
  handleSubmit = async e => {
    e.preventDefault();

    const { data } = await http.getSearch(`${youtube.searchEndpoint}`, {
      params: { ...youtube.SearchReq.params, q: this.state.query }
    });
    this.setState({ videos: data.items, selectedVideo: data.items[0] });
    this.setState({ query: "" });
  };

  handleSelectedVideo = video => {
    const selectedVideo = video;
    this.setState({ selectedVideo });
  };

  render() {
    const { query, videos } = this.state;
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBox
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          value={query}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails
                videos={this.state.videos}
                selectedVideo={this.state.selectedVideo}
              />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onVideoSelected={this.handleSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
