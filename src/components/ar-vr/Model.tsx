import React from "react";
import "@google/model-viewer/";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}
export default function Model() {
  
  const glbSrc = "src/assets/laptop_asus_rog_zephyrus_g15_-_made_with_blender.glb";
  const iosSrc="https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.usdz?v=1614846692051";

  return (
    <div>
      <model-viewer
        id="first"
        src={glbSrc}
        ios-src={iosSrc}
        seamless-poster
        environment-image="neutral"
        exposure="1.0"
        interaction-prompt-threshold="0"
        shadow-intensity="1"
        ar
        
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        auto-rotate
        camera-controls
        camera-orbit="0deg 90deg 0deg 8.37364m"
        alt="3D model"
        className="border "
      >
        <button slot="ar-button" className="p-1 px-4 ml-16 bg-orange-300 border mt-28 rounded-xl">
          View in your space !
        </button>
      </model-viewer>
    </div>
  );
}
