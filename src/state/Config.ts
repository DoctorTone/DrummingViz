import { Vector3 } from "three";

const SCENE = {
  CAMERA_POSITION: new Vector3(0, 2.5, 4),
};

const TIMELINE = {
  START_POS: 12.5,
  END_POS: 97,
  PLAY_SPEED: 10.75 / 60,
  DEFAULT_BEATS_SECOND: 60,
};

const GROOVES = [
  {
    title: "Groove 1",
    score: "NewGroove1.png",
  },
  {
    title: "Groove 2",
    score: "NewGroove2.png",
  },
  {
    title: "Groove 3",
    score: "NewGroove3.png",
  },
];

const EFFECTS = {
  DURATION: 150,
};

const DRUMS = {
  NONE: -1,
  CRASH: 0,
  FLOOR: 1,
  HIHAT: 2,
  KICK: 3,
  MIDTOM: 4,
  RIDE: 5,
  SNARE: 6,
  UPPERTOM: 7,
};

const SCORES = [
  [
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
  ],
  [
    { time: 0, drum: DRUMS.HIHAT },
    { time: 0, drum: DRUMS.KICK },
    { time: 0.5, drum: DRUMS.HIHAT },
    { time: 1, drum: DRUMS.HIHAT },
    { time: 1, drum: DRUMS.SNARE },
    { time: 1.5, drum: DRUMS.HIHAT },
    { time: 2, drum: DRUMS.HIHAT },
    { time: 2.5, drum: DRUMS.HIHAT },
    { time: 2.5, drum: DRUMS.KICK },
    { time: 3, drum: DRUMS.HIHAT },
    { time: 3, drum: DRUMS.SNARE },
    { time: 3.5, drum: DRUMS.HIHAT },
    { time: 4.0, drum: DRUMS.NONE },
  ],
  [
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
    { time: 3.5, drum: DRUMS.SNARE },
    { time: 4.0, drum: DRUMS.NONE },
  ],
];

export { SCENE, TIMELINE, GROOVES, DRUMS, SCORES, EFFECTS };
