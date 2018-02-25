const KEY = require('../../constants.js');

import React, {Component} from 'react';
import SearchBar from './SearchBar';

import ytsearch from 'youtube-api-search';

class App extends Component {
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
        <SearchBar/>
      </div>
    )
  }
}

export default App;