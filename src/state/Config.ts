import { Vector3 } from "three";

const SCENE = {
  CAMERA_POSITION: new Vector3(0, 1.25, 2),
};

const TIMELINE = {
  START_POS: 31,
  END_POS: 74,
  PLAY_SPEED: 15,
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

export { SCENE, TIMELINE, GROOVES };
