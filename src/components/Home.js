const KEY = require('../../constants.js');

import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import ytsearch from 'youtube-api-search';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }
  }

  componentDidMount () {
    ytsearch({
      key: KEY.youtubeKey,
      term: 'Monster Hunter World'
    }, (videos) => {
      this.setState({
        videos
      });
    });
  }

  render () {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default Home;