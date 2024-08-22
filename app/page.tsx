"use client";
import VideoJS from "./VideoJS";
import React from "react";
import videojs from "video.js";
import { VideoAnnotations } from "./VideoAnnotations";

export default function Home() {
  const playerRef = React.useRef(null);
  let myPlayer = null;
  let currentTime = 0, setCurrentTime = null, setPlayer: ((arg0: any) => void) | null = null;
  console.log("rendering home");

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://www3.cde.ca.gov/download/rod/big_buck_bunny.mp4',
      type: 'video/mp4'
    }]
  };

  const onChildMount = (dataFromChild: any) => {
    currentTime = dataFromChild[0];
    setCurrentTime = dataFromChild[1];
    setPlayer = dataFromChild[2];
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;
    setPlayer!(player);

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });

    player.on('timeupdate', () => {
      setCurrentTime!(player.currentTime());
    });
  };
  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <VideoAnnotations onMount={onChildMount} src={videoJsOptions.sources[0].src} />
    </>
  );
}
