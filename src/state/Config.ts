import { Vector3 } from "three";

const SCENE = {
  CAMERA_POSITION: new Vector3(0, 1.25, 2),
};

const TIMELINE = {
  START_POS: 31,
  END_POS: 74,
  PLAY_SPEED: 10.75,
  DELTA: 0.0167,
};

const GROOVES = [
  {
    title: "Groove 1",
    score: "drumScore1.png",
  },
  {
    title: "Groove 2",
    score: "drumScore2.png",
  },
  {
    title: "Groove 3",
    score: "drumScore3.png",
  },
];

enum DRUMS {
  NONE = -1,
  CRASH = 0,
  FLOOR,
  HIHAT,
  KICK,
  MIDTOM,
  RIDE,
  SNARE,
  UPPERTOM,
}

const SCORES = [
  { time: 0, drum: DRUMS.HIHAT },
  { time: 0, drum: DRUMS.KICK },
  { time: 0.5, drum: DRUMS.HIHAT },
  { time: 1, drum: DRUMS.HIHAT },
  { time: 1, drum: DRUMS.SNARE },
  { time: 1.5, drum: DRUMS.HIHAT },
  { time: 2, drum: DRUMS.HIHAT },
  { time: 2, drum: DRUMS.KICK },
  { time: 2.5, drum: DRUMS.HIHAT },
  { time: 3, drum: DRUMS.HIHAT },
  { time: 3, drum: DRUMS.SNARE },
  { time: 3.5, drum: DRUMS.HIHAT },
  { time: 4.0, drum: DRUMS.NONE },
];

export { SCENE, TIMELINE, GROOVES, DRUMS, SCORES };
