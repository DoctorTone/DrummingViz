import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";

const TimeLine = () => {
  const requestRef = useRef(0);
  const elemRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(31);
  const [isAnimating, setIsAnimating] = useState(false);

  const togglePlay = () => {
    setIsAnimating((prev) => !prev);
  };

  const animate = () => {
    elemRef.current!.style.left = `${positionRef.current++}%`;
    if (positionRef.current >= 68) {
      positionRef.current = 31;
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
