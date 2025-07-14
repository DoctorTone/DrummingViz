import { useEffect, useRef, useState } from "react";
import { SCORES, TIMELINE, DRUMS } from "../state/Config";
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
import { playSound, preloadSounds } from "react-sounds";
import crashSound from "../assets/sounds/crash.wav";
import floorTomSound from "../assets/sounds/floortom.wav";
import hihatSound from "../assets/sounds/hihat.wav";
import kickSound from "../assets/sounds/kick.wav";
import midTomSound from "../assets/sounds/midtom.wav";
import rideSound from "../assets/sounds/ride.wav";
import snareSound from "../assets/sounds/snare.wav";
import upperTomSound from "../assets/sounds/uppertom.wav";

const TimeLine = () => {
  const requestRef = useRef(0);
  const elemRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(TIMELINE.START_POS);
  const playingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beats, setBeats] = useState(60);
  const [drums] = useState([
    crashSound,
    floorTomSound,
    hihatSound,
    kickSound,
    midTomSound,
    rideSound,
    snareSound,
    upperTomSound,
  ]);
  const groove = useStore((state) => state.groove);
  const setGroove = useStore((state) => state.setGroove);
  const showEffect = useStore((state) => state.showEffect);
  let lastTime: number;
  let elapsed: number = 0;
  let delta: number;
  let noteIndex = 0;
  let currentScore;

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const playDrum = (drum: number) => {
    if (drum === DRUMS.NONE) return;

    playSound(drums[drum]);
  };

  const reset = () => {
    setIsPlaying(false);
    positionRef.current = TIMELINE.START_POS;
    elemRef.current!.style.left = `${positionRef.current}%`;
  };

  const getNextNotes = () => {
    const currentGroove = parseInt(groove);
    currentScore = SCORES[currentGroove - 1];
    const nextNoteTime = currentScore[noteIndex].time;
    const notes = [];
    for (let i = noteIndex; i < currentScore.length; ++i) {
      if (currentScore[i].time === nextNoteTime) {
        notes.push(currentScore[i]);
      } else {
        return notes;
      }
    }

    return notes;
  };

  const animate = (timestamp: number) => {
    // Timing
    const timeStamp_s = timestamp / 1000;
    if (lastTime === undefined) {
      lastTime = timeStamp_s;
    }
    delta = timeStamp_s - lastTime;
    lastTime = timeStamp_s;

    // DEBUG
    console.log("Playing = ", playingRef.current);

    if (playingRef.current) {
      elapsed += delta;
      // Timeline animation
      const timeScale = TIMELINE.PLAY_SPEED * beats;
      positionRef.current += delta * timeScale;
      elemRef.current!.style.left = `${positionRef.current}%`;
      if (positionRef.current >= TIMELINE.END_POS) {
        positionRef.current = TIMELINE.START_POS;
      }

      // Play sounds
      const notes = getNextNotes();
      for (let i = 0; i < notes.length; ++i) {
        if (elapsed >= notes[i].time * (TIMELINE.DEFAULT_BEATS / beats)) {
          playDrum(notes[i].drum);
          showEffect(notes[i].drum, true);
          ++noteIndex;
        }
      }
      if (noteIndex >= currentScore.length) {
        noteIndex = 0;
        elapsed = 0;
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  const onGrooveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroove((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    preloadSounds([
      crashSound,
      floorTomSound,
      hihatSound,
      kickSound,
      midTomSound,
      rideSound,
      snareSound,
      upperTomSound,
    ])
      .then(() => console.log("All sounds preloaded"))
      .catch((error) => console.error("Error loading sounds", error));
  }, []);

  useEffect(() => {
    playingRef.current = isPlaying;
    if (isPlaying && !requestRef.current) {
      requestRef.current = requestAnimationFrame(animate);
    }

    // Clean up on unmount
    // return () => cancelAnimationFrame(requestRef.current);
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
          min={15}
          max={180}
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
