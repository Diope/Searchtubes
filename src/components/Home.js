const KEY = require('../../constants.js');

import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import ytsearch from 'youtube-api-search';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVid: null
     }
     this.videoSearch('Digital Foundry')
  }


  videoSearch(term) {
    ytsearch({
      key: KEY.youtubeKey,
      term: term
    }, (videos) => {
      this.setState({
        videos,
        selectedVid: videos[0]
      });
    });
  }

  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVid}/>
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVid => this.setState({selectedVid})}
          />
      </div>
    )
  }
}

export default Home;