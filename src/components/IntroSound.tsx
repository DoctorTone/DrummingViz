import { useEffect } from "react";
import introsound from "../assets/sounds/drumIntro.mp3";
import { playSound } from "react-sounds";

const IntroSound = () => {
  useEffect(() => {
    playSound(introsound);
  }, []);

  return null;
};

export default IntroSound;
