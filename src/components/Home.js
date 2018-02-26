const KEY = require('../../constants.js');

import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'

import ytsearch from 'youtube-api-search';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }
  }

  componentDidMount () {
    ytsearch({
      key: KEY.youtubeKey,
      term: 'Beyonce'
    }, (videos) => {
      this.setState({
        videos
      });
    });
  }

  render () {
    return (
      <div>
        <VideoList videos={this.state.videos}/>
        <SearchBar/>
      </div>
    )
  }
}

export default Home;