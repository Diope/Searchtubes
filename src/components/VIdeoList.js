import React from 'react';
import VideoListItem from './VideoListItem';


const vids = ({videos, onVideoSelect}) => {
  if (videos) {
    return (
      videos.map((video) => {
        return (
          <VideoListItem 
            key={video.etag} 
            video={video}
            onVideoClick={onVideoSelect}  
            />
        )
      })
    )
  }
}

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {vids(props)}
    </ul>
  )
}
 
export default VideoList;