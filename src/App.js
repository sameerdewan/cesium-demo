import * as Cesium from "cesium";
import { useCesium, useCesiumEffect } from "./hooks";

function App() {
  const viewer1 = useCesium("map-container-1");

  useCesiumEffect(
    viewer1,
    () => {
      viewer1.scene.primitives.add(Cesium.createOsmBuildings());
      viewer1.clock.currentTime = Cesium.JulianDate.fromIso8601(
        "2020-09-01T16:23:19.06128571429871954Z"
      );
      viewer1.scene.globe.depthTestAgainstTerrain = true;

      viewer1.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-15.0),
        },
      });
    },
    [viewer1]
  );

  return (
    <div id="App">
      <div id="map-container-1" />
    </div>
  );
}

export default App;
