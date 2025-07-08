import { Sphere } from "@react-three/drei";
import useStore from "../state/store";
import { DRUMS } from "../state/Config";

const Effects = () => {
  const effects = useStore((state) => state.effects);

  return (
    <>
      {effects[DRUMS.HIHAT] && (
        <Sphere scale={0.04} position={[-1.1, 0.15, 0.3]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      )}
    </>
  );
};

export default Effects;
