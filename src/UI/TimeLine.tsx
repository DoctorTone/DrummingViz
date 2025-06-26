import React from "react";
import Button from "@mui/material/Button";

const TimeLine = () => {
  const playTune = () => {
    const elem = document.getElementById("bar");
    elem!.style.transform = "translate(30px)";
  };

  return (
    <>
      <div id="timeLine" className="panel">
        <div id="bar"></div>
      </div>
      <div id="play" className="panel">
        <Button variant="contained" onClick={playTune}>
          Play
        </Button>
      </div>
    </>
  );
};

export default TimeLine;
