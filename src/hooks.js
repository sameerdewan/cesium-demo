import * as Cesium from "cesium";
import { useEffect, useState } from "react";

// This is a normal a$$ developer account. Feel free to steal this but tbh why not just use your own?
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NWEyMGQ1NC1iMGQ2LTQ0ZGQtYjQwZS01YWU1ZTQ5M2RkODciLCJpZCI6MTExNjE4LCJpYXQiOjE2NjYxNDg2NjB9.tgwuiDEQLh7cltSppC3DrkycIhOaYM6Yf8cRI6rCBjk";

Cesium.Ion.defaultAccessToken = accessToken;

// Returns an instance of viewer
export function useCesium(targetID) {
  const [viewer, setViewer] = useState();

  useEffect(() => {
    if (document.getElementById(targetID).childElementCount >= 1) return;
    setViewer(
      new Cesium.Viewer(targetID, {
        requestRenderMode: true,
        maximumRenderTimeChange: Infinity,
        timeline: false,
        animation: false,
        baseLayerPicker: false,
        sceneModePicker: false,
        terrainProvider: Cesium.createWorldTerrain(),
        imageryProvider: Cesium.createWorldImagery(),
      })
    );
  }, []); // eslint-disable-line

  return viewer;
}

// Only runs once the viewer is initialized
export function useCesiumEffect(viewer, fn = () => {}, deps = []) {
  useEffect(() => {
    if (viewer) {
      fn();
    }
  }, [viewer, ...deps]); // eslint-disable-line
}
