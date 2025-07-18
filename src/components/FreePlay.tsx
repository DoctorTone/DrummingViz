import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import useStore from "../state/store";
import { playSound, preloadSounds } from "react-sounds";
import { SOUNDS } from "../state/Sounds";
import { DRUMS } from "../state/Config";

const FreePlay = () => {
  const [freePlay, setFreePlay] = useState(false);
  const hitState = useStore((state) => state.hitState);

  const toggleFreePlay = () => {
    setFreePlay((play) => !play);
  };

  useEffect(() => {
    preloadSounds(SOUNDS)
      .then(() => console.log("All sounds preloaded"))
      .catch((error) => console.error("Error loading sounds", error));
  }, []);

  useEffect(() => {
    if (!freePlay) return;

    switch (hitState) {
      case "Ride":
        playSound(SOUNDS[DRUMS.RIDE]);
        break;

      default:
        break;
    }
  }, [hitState]);

  return (
    <>
      <div id="freePlay" className="panel">
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={toggleFreePlay} />}
            label="Free Play"
          />
        </FormGroup>
      </div>
    </>
  );
};

export default FreePlay;
