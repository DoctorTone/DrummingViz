import { useEffect } from "react";
import introsound from "../assets/sounds/drumIntro.mp3";
import { playSound } from "react-sounds";

const Intro = () => {
  useEffect(() => {
    playSound(introsound);
  }, []);

  return null;
};

export default Intro;
