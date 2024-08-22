"use client";
import React from "react";
import { VideoWithAnnotations } from "./VideoWithAnnotations";

export default function Home() {
  const [videos, setVideos] = React.useState([{src: "https://www3.cde.ca.gov/download/rod/big_buck_bunny.mp4"}]);

  const addVideo = (src: string) => {
    setVideos([...videos, {src: src}]);
  }
  return (
    <>
      {videos.map((video, index) => (
        <VideoWithAnnotations key={video.src} src={video.src} addVideo={addVideo} />
      ))}
    </>
  );
}
