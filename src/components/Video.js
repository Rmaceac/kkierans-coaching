import '../App.css';
import './Video.css';

const Video = ({ src, title }) => {
  return (
    <div className='video-container'>
      <video src={src} autoPlay loop muted></video>
      <h1>{title}</h1>
    </div>
  )
}

export default Video;