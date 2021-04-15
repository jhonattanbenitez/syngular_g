import React from "react";
import bannerVideo from "../video/video-banner.webm";

const Video = () => {
  return (
    <video autoPlay muted loop id="syngular-video" width="640" height="480">
      <source src={bannerVideo} type="video/webm" />
    </video>
  );
};

export default Video;
