import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>
  }
  
  const videoId = video.id.videoId;
  const tempDescrip = video.snippet.description
  const descripString = tempDescrip.substring(0,120);
  const finalDescriptionString = descripString + "..."
  const url = `https://youtube.com/embed/${videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <h3>{video.snippet.title}</h3>
        <hr/>
        <p>{finalDescriptionString}</p>
      </div>
    </div>
  )
}
 
export default VideoDetail;