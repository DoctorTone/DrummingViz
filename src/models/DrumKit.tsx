import type { JSX } from "react";
import { useGLTF } from "@react-three/drei";

const DrumKit = (props: JSX.IntrinsicElements["group"]) => {
  const drumKit = useGLTF("./models/drumKit2.glb");

  return (
    <group {...props}>
      <primitive object={drumKit.scene} />
    </group>
  );
};

export default DrumKit;
