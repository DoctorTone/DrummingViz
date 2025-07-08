import { useEffect } from "react";
import { Sphere } from "@react-three/drei";
import useStore from "../state/store";
import { DRUMS, EFFECTS } from "../state/Config";

const Effects = () => {
  const effects = useStore((state) => state.effects);
  const showEffect = useStore((state) => state.showEffect);

  useEffect(() => {
    if (effects[DRUMS.HIHAT]) {
      setTimeout(() => {
        showEffect(DRUMS.HIHAT, false);
      }, EFFECTS.DURATION);
    }

    if (effects[DRUMS.SNARE]) {
      setTimeout(() => {
        showEffect(DRUMS.SNARE, false);
      }, EFFECTS.DURATION);
    }

    if (effects[DRUMS.KICK]) {
      setTimeout(() => {
        showEffect(DRUMS.KICK, false);
      }, EFFECTS.DURATION);
    }
  }, [effects]);

  return (
    <>
      {effects[DRUMS.HIHAT] && (
        <Sphere scale={0.04} position={[-1.1, 0.15, 0.3]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      )}
      {effects[DRUMS.SNARE] && (
        <Sphere scale={0.04} position={[-0.6, -0.175, 0.45]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      )}
      {effects[DRUMS.KICK] && (
        <Sphere scale={0.04} position={[0, -0.9, 0.25]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      )}
    </>
  );
};

export default Effects;
