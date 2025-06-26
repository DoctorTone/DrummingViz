import { useEffect, useRef, useState } from "react";
import { TIMELINE } from "../state/Config";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FastRewindIcon from "@mui/icons-material/FastRewind";

const TimeLine = () => {
  const requestRef = useRef(0);
  const elemRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(TIMELINE.START_POS);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const reset = () => {
    setIsPlaying(false);
    positionRef.current = TIMELINE.START_POS;
    elemRef.current!.style.left = `${positionRef.current}%`;
  };

  const animate = () => {
    positionRef.current += TIMELINE.DELTA * TIMELINE.PLAY_SPEED;
    elemRef.current!.style.left = `${positionRef.current}%`;
    if (positionRef.current >= TIMELINE.END_POS) {
      positionRef.current = TIMELINE.START_POS;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    // Clean up on unmount
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying]);

  return (
    <>
      <div ref={elemRef} id="timeLine" className="panel"></div>
      <div id="play" className="panel">
        <IconButton onClick={reset}>
          <FastRewindIcon sx={{ fontSize: 60 }} />
        </IconButton>
        {isPlaying ? (
          <IconButton onClick={togglePlay}>
            <PauseCircleOutlineIcon sx={{ fontSize: 70 }} />
          </IconButton>
        ) : (
          <IconButton onClick={togglePlay}>
            <PlayCircleOutlineIcon sx={{ fontSize: 70 }} />
          </IconButton>
        )}
      </div>
    </>
  );
};

export default TimeLine;
