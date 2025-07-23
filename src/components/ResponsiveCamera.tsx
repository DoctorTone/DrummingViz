import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { getScreenConfiguration } from "../Utils/utils";

const ResponsiveCamera = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { camera } = useThree();

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const configuration = getScreenConfiguration(size.width, size.height);
    camera.position.copy(configuration.CAMERA_POSITION);
    camera.updateProjectionMatrix();
    // DEBUG
    console.log("Cam pos set to ", camera.position);
  }, [size.width, size.height]);

  return null;
};

export default ResponsiveCamera;
