
import React from "react";
import '../style/BackgroundVideo.css';
import video from '../video/fondo.mp4';

const BackgroundVideo = () => {
    return(
        <header className="header content">
            <div className="header-video">
                <video src={video} autoPlay loop muted></video>
            </div>

            {/*<div className="header-overlay"></div>*/}
            
            <div className="header-content">
                <h1>BISAGRAS PERUANAS SAC</h1>
            </div>
        </header>
    );
};

export default BackgroundVideo;