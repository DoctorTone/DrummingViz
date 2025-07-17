import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import useStore from "../state/store";
import rideSound from "../assets/sounds/ride.wav";
import { playSound } from "react-sounds";

const FreePlay = () => {
  const [freePlay, setFreePlay] = useState(false);
  const hitState = useStore((state) => state.hitState);

  const toggleFreePlay = () => {
    setFreePlay((play) => !play);
  };

  useEffect(() => {
    if (!freePlay) return;

    switch (hitState) {
      case "Ride":
        playSound(rideSound);
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
