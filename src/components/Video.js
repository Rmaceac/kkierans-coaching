import React from 'react';
import '../App.css';
import './Video.css';

export default function Video({ src, title }) {
  return (
    <div className='video-container'>
      <video src={src} autoPlay loop muted></video>
      <h1>{title}</h1>
    </div>
  )
}