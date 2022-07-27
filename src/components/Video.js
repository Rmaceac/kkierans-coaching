import React from 'react'

export default function Video() {
  return (
    <div className='video-container'>
      <video src='/../../public/videos/vid-1.mp4' autoPlay loop muted></video>
      <h1>Unbound and Held</h1>
      <p>Helping you overcome stress & anxiety, naturally.</p>
    </div>
  )
}
