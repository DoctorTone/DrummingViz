import { Ring } from "@react-three/drei";

const Wave = () => {
  return (
    <Ring scale={0.1} position={[0, -0.75, 0.5]}>
      <meshStandardMaterial color={"#c465e0"} />
    </Ring>
  );
};

export default Wave;
