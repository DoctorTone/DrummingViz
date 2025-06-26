import { useEffect, useRef, useState } from "react";
import { TIMELINE } from "../state/Config";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Donut } from "react-dial-knob";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useStore from "../state/store";

const TimeLine = () => {
  const requestRef = useRef(0);
  const elemRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(TIMELINE.START_POS);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beats, setBeats] = useState(60);
  const groove = useStore((state) => state.groove);
  const setGroove = useStore((state) => state.setGroove);

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

  const onGrooveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroove((event.target as HTMLInputElement).value);
    console.log("Groove changed");
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
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Beats
        </Typography>
        <Donut
          diameter={150}
          min={0}
          max={120}
          step={1}
          value={beats}
          onValueChange={setBeats}
          theme={{
            donutColor: "darkred",
          }}
          ariaLabelledBy={"my-label"}
        />
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
        <div>
          <FormControl>
            <FormLabel
              id="grooves"
              sx={{ textAlign: "center", color: "black" }}
            >
              Groove
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="grooves"
              value={groove}
              onChange={onGrooveChange}
              name="radio-buttons-grooves"
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
