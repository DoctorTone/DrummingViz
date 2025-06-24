import type { JSX } from "react";
import { useGLTF } from "@react-three/drei";

const DrumKit = (props: JSX.IntrinsicElements["group"]) => {
  const drumKit = useGLTF("./models/drum_kit.glb");

  return (
    <group {...props}>
      <primitive object={drumKit.scene} />
    </group>
  );
};

export default DrumKit;
