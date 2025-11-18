import React, { useState } from 'react'; 
import { Outlet } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import App from '../App';
import '../VideoPlayer.css';

function ClassPage() {
  return (
    <div className="class-page-container">
      <VideoPlayer />
    </div>
  )
}

export default ClassPage;