import React from 'react';
import VideoListItem from './VideoListItem';


const vids = ({videos}) => {
  if (videos) {
    return (
      videos.map((video) => {
        return (
          <VideoListItem key={video.etag} video={video}/>
        )
      })
    )
  }
}

const VideoList = (props) => {
  return (
    <ul>
      {vids(props)}
    </ul>
  )
}
 
export default VideoList;