import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { TIMELINE } from "../state/Config";

const TimeLine = () => {
  const requestRef = useRef(0);
  const elemRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(TIMELINE.START_POS);
  const [isAnimating, setIsAnimating] = useState(false);

  const togglePlay = () => {
    setIsAnimating((prev) => !prev);
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
    if (isAnimating) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    // Clean up on unmount
    return () => cancelAnimationFrame(requestRef.current);
  }, [isAnimating]);

  return (
    <>
      <div ref={elemRef} id="timeLine" className="panel"></div>
      <div id="play" className="panel">
        <Button variant="contained" onClick={togglePlay}>
          Play
        </Button>
      </div>
    </>
  );
};

export default TimeLine;
