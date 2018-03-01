const KEY = require('../../constants.js');

import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import ytsearch from 'youtube-api-search';
import _ from 'lodash';

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

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 270);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
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