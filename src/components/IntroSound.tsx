import { useEffect } from "react";
import introsound from "../assets/sounds/drumIntro.mp3";
import { playSound } from "react-sounds";
import useStore from "../state/store";

const IntroSound = () => {
  const animateDrums = useStore((state) => state.animateDrums);

  useEffect(() => {
    if (animateDrums) {
      playSound(introsound);
    }
  }, [animateDrums]);

  return null;
};

export default IntroSound;
