import { useEffect } from "react";
import { useCesium } from "./hooks";
import * as Cesium from "cesium";

function App() {
  const viewer1 = useCesium("map-container-1");
  const viewer2 = useCesium("map-container-2");

  useEffect(() => {
    if (viewer1) {
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
    }
  }, [viewer1]);

  useEffect(() => {
    if (viewer2) {
      viewer2.scene.primitives.add(Cesium.createOsmBuildings());
      viewer2.clock.currentTime = Cesium.JulianDate.fromIso8601(
        "2020-09-01T16:23:19.06128571429871954Z"
      );
      viewer2.scene.globe.depthTestAgainstTerrain = true;

      viewer2.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4140, 37.655, 400),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-15.0),
        },
      });
    }
  }, [viewer2]);

  return (
    <div id="App">
      <div id="map-container-1" />
      <div id="map-container-2" />
    </div>
  );
}

export default App;
