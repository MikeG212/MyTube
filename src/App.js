import React from "react";
import youtube from "./api/youtube";
import "./stylesheets/App.css";

import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("star wars");
  }

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <div>
          <div>
            <div>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </div>
            <div className="video-container">
              <VideoDetail video={selectedVideo} />
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
