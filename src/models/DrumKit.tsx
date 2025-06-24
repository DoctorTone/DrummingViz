import { useGLTF } from "@react-three/drei";

const DrumKit = () => {
  const drumKit = useGLTF("./models/drum_kit.glb");

  return <primitive object={drumKit.scene} />;
};

export default DrumKit;
