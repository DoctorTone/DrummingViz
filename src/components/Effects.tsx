import { Sphere } from "@react-three/drei";
import useStore from "../state/store";

const Effects = () => {
  const hihatEffect = useStore((state) => state.hihatEffect);

  return (
    <>
      {hihatEffect && (
        <Sphere scale={0.04} position={[-1.1, 0.15, 0.3]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      )}
    </>
  );
};

export default Effects;
