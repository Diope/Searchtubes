import React from 'react';

const VideoListItem = ({video}) => {
  console.log(video);
  return (
   <div>
    <h2>
      {video.snippet.title}
    </h2>
    <div>
      <img src={video.snippet.thumbnails.default.url} alt=""/>
    </div>
  </div>

    
  )
}
 
export default VideoListItem;