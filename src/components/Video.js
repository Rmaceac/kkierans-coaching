import React from 'react';
import '../App.css';
import './Video.css';

export default function Video() {
  return (
    <div className='video-container'>
      <video src='/videos/vid-1.mp4' autoPlay loop muted></video>
      <h1>Meet Kat</h1>
    </div>
  )
}
