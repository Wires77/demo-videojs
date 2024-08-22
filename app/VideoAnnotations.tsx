import React, { useEffect, useState } from 'react';
import {annotations} from "./annotations";
import Player from 'video.js/dist/types/player';

export const VideoAnnotations = (props: {src: string, onMount: Function, addVideo: Function}) => {
    let filteredAnnotations: any[] = [];
    console.log("rendering annotations");
    const [currentTime, setCurrentTime] = useState(0);
    const [player, setPlayer] = useState<null | Player>(null);

    useEffect(() => {
        props.onMount([currentTime, setCurrentTime, setPlayer]);
    }, [props.onMount, currentTime]);
    if (!annotations[props.src]) {
        return null;
    } else {
        filteredAnnotations = annotations[props.src].annotations.filter((annotation: any) => {
            return annotation.start < currentTime && annotation.end > currentTime;
        });
    }
    
    return (
        <div>
            {filteredAnnotations.map((annotation: any, index: number) => (
                <button key={annotation.label} onClick={() => {
                    player && player.pause();
                    props.addVideo(annotation.video);
                }}>
                    {annotation.label}
                </button>
            ))}
        </div>
    );
  }