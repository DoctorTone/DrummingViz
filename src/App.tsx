import { Canvas } from "@react-three/fiber";
import { Box, Sky, Stage, OrbitControls } from "@react-three/drei";
import { SCENE } from "./state/Config";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.CAMERA_POSITION }}>
        <Sky
          distance={450000}
          sunPosition={[0, 1, 1]}
          inclination={0}
          azimuth={0.25}
        />
        <Stage adjustCamera={false} shadows="contact" environment="city">
          <Box>
            <meshStandardMaterial color="red" />
          </Box>
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
    </>
  );
}

export default App;
