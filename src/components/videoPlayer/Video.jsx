import React, {useRef} from 'react';
import './v.css'
import video from '../../asset/video.mov'

const Video = ({play, setPlay}) => {
  
  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target===player.current) {
      setPlay(false);
    }
  }
  
  return (
    <div className={`v ${play?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default Video;
