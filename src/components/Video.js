import React from "react";
import bannerVideo from "../video/video-banner.webm";

const Video = () => {
  return (
    <video autoplay muted loop id="syngular-video">
      <source src={bannerVideo} type="video/webm" />
    </video>
  );
};

export default Video;
