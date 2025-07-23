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
import ResponsiveCamera from "./components/ResponsiveCamera";

function App() {
  return (
    <>
      <Canvas>
        <ResponsiveCamera />
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
