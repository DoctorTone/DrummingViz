import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stage, OrbitControls } from "@react-three/drei";
import Info from "./UI/Info";
import { DrumKit2 } from "./models/DrumKit2";
import { Suspense } from "react";
import Score from "./UI/Score";
import TimeLine from "./UI/TimeLine";
import Effects from "./components/Effects";
import IntroSound from "./components/IntroSound";
import Intro from "./UI/Intro";
import FreePlay from "./components/FreePlay";
import { getScreenConfiguration } from "./Utils/utils";

function App() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Canvas
        camera={{
          position: getScreenConfiguration(size.width, size.height)
            .CAMERA_POSITION,
        }}
      >
        <Sky
          distance={450000}
          sunPosition={[0, 1, 1]}
          inclination={0}
          azimuth={0.25}
        />
        <Stage adjustCamera={false} shadows="contact" environment="city">
          <Suspense fallback={null}>
            <DrumKit2 rotation-y={Math.PI} />
            <Effects />
          </Suspense>
        </Stage>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <Intro />
      <IntroSound />
      <Info />
      <Score />
      <TimeLine />
      <FreePlay />
    </>
  );
}

export default App;
