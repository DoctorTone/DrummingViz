import { Vector3 } from "three";

const RESOLUTIONS = {
  SMALL: 600,
  MEDIUM: 900,
  LARGE: 1200,
  X_LARGE: 1536,
};

const SCENE = {
  CAMERA_POSITION: new Vector3(0, 2.5, 4),
};

const CONFIG_TYPE = {
  SMALL: 0,
  LANDSCAPE: 1,
  LARGE: 2,
  PORTRAIT: 3,
  TABLET: 4,
  X_LARGE: 5,
};

const CONFIGURATIONS = [
  {
    CAMERA_POSITION: new Vector3(0, 2.5, 4),
    TIMELINE_START_POS: 12.5,
    TIMELINE_END_POS: 97,
  },
  {
    CAMERA_POSITION: new Vector3(0, 1.5, 1.75),
    TIMELINE_START_POS: 27,
    TIMELINE_END_POS: 78.5,
  },
  {
    CAMERA_POSITION: new Vector3(0, 1.25, 2),
    TIMELINE_START_POS: 27,
    TIMELINE_END_POS: 78.5,
  },
  {
    CAMERA_POSITION: new Vector3(0, 1.25, 3),
    TIMELINE_START_POS: 20,
    TIMELINE_END_POS: 88,
  },
  {
    CAMERA_POSITION: new Vector3(0, 1.25, 2.15),
    TIMELINE_START_POS: 23.5,
    TIMELINE_END_POS: 83.5,
  },
  {
    CAMERA_POSITION: new Vector3(0, 1.25, 2.15),
    TIMELINE_START_POS: 27.5,
    TIMELINE_END_POS: 78.5,
  },
];

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

export {
  SCENE,
  TIMELINE,
  GROOVES,
  DRUMS,
  SCORES,
  EFFECTS,
  RESOLUTIONS,
  CONFIGURATIONS,
  CONFIG_TYPE,
};
