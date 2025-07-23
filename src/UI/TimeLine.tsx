import { useEffect, useRef, useState } from "react";
import { SCORES, DRUMS } from "../state/Config";
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
import { SOUNDS } from "../state/Sounds";
import { getScreenConfiguration } from "../Utils/utils";

const TimeLine = () => {
  const screenSize = useStore((state) => state.screenSize);
  //@ts-ignore
  const [timeLine, setTimeLine] = useState({ start: 12.5, end: 97 });
  const startRef = useRef(12.5);
  const endRef = useRef(97);

  useEffect(() => {
    const configuration = getScreenConfiguration(
      screenSize.width,
      screenSize.height
    );
    setTimeLine({
      start: configuration.TIMELINE_START_POS,
      end: configuration.TIMELINE_END_POS,
    });
    startRef.current = configuration.TIMELINE_START_POS;
    endRef.current = configuration.TIMELINE_END_POS;
  }, [screenSize.width, screenSize.height]);

  const requestRef = useRef(0);
  const elemRef = useRef<HTMLDivElement>(null);
  const playingRef = useRef(false);
  const playingTimeRef = useRef(0);
  const noteIndexRef = useRef(0);
  const grooveRef = useRef("1");
  const interactionRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beats, setBeats] = useState(60);
  const beatsRef = useRef(60);
  const [drums] = useState(SOUNDS);
  const groove = useStore((state) => state.groove);
  const setGroove = useStore((state) => state.setGroove);
  const showEffect = useStore((state) => state.showEffect);
  const freePlay = useStore((state) => state.freePlay);
  let lastTime: number;
  let delta: number;
  let currentScore;

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const playDrum = (drum: number) => {
    if (drum === DRUMS.NONE) return;

    playSound(drums[drum]);
  };

  const onBeatsChange = (value: number) => {
    setBeats(value);

    beatsRef.current = value;
  };

  const onInteracting = (isInteracting: boolean) => {
    interactionRef.current = isInteracting;
  };

  const reset = () => {
    setIsPlaying(false);
    elemRef.current!.style.left = `${startRef.current}%`;
    playingTimeRef.current = 0;
    noteIndexRef.current = 0;
  };

  const getNextNotes = () => {
    const currentGroove = parseInt(grooveRef.current);
    currentScore = SCORES[currentGroove - 1];
    const nextNoteTime = currentScore[noteIndexRef.current].time;
    const notes = [];
    for (let i = noteIndexRef.current; i < currentScore.length; ++i) {
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

    if (playingRef.current) {
      // Timeline animation
      const timeScale = beatsRef.current / 60;
      playingTimeRef.current += delta * timeScale;

      let percent = playingTimeRef.current / 4;
      if (percent >= 1) {
        percent = 0;
      }
      elemRef.current!.style.left = `${
        startRef.current + (endRef.current - startRef.current) * percent
      }%`;

      // Play sounds
      const notes = getNextNotes();
      for (let i = 0; i < notes.length; ++i) {
        if (playingTimeRef.current >= notes[i].time) {
          playDrum(notes[i].drum);
          showEffect(notes[i].drum, true);
          ++noteIndexRef.current;
        }
      }
      if (noteIndexRef.current >= currentScore.length) {
        noteIndexRef.current = 0;
        playingTimeRef.current = 0;
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  const onGrooveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentGroove = (event.target as HTMLInputElement).value;
    grooveRef.current = currentGroove;
    setGroove(currentGroove);
  };

  useEffect(() => {
    preloadSounds(SOUNDS)
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
      {!freePlay && <div ref={elemRef} id="timeLine" className="panel"></div>}
      {!freePlay && (
        <div id="play" className="panel textCenter">
          <Typography variant="h6">Beats</Typography>
          <Donut
            diameter={100}
            min={15}
            max={180}
            step={1}
            value={beats}
            onValueChange={onBeatsChange}
            onInteractionChange={onInteracting}
            theme={{
              donutColor: "darkred",
            }}
            ariaLabelledBy={"my-label"}
          />
          <IconButton onClick={reset}>
            <FastRewindIcon sx={{ fontSize: 40 }} />
          </IconButton>
          {isPlaying ? (
            <IconButton onClick={togglePlay}>
              <PauseCircleOutlineIcon sx={{ fontSize: 40 }} />
            </IconButton>
          ) : (
            <IconButton onClick={togglePlay}>
              <PlayCircleOutlineIcon sx={{ fontSize: 40 }} />
            </IconButton>
          )}
        </div>
      )}
      {!freePlay && (
        <div id="grooveContainer" className="panel">
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
      )}
    </>
  );
};

export default TimeLine;
