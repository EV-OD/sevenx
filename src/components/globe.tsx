import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from '@react-spring/web'




const Globe = () => {
    const canvasRef = useRef();
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [{ r }, api] = useSpring(() => ({
      r: 0,
      config: {
        mass: 1,
        tension: 280,
        friction: 40,
        precision: 0.001,
      },
    }));

    useEffect(() => {
      let phi = 8.9;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 8.9,
        theta: 0,
        dark: 1,
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [251 / 255, 200 / 255, 21 / 255],
        glowColor: [1.2, 1.2, 1.2],
        markers: [
          // longitude latitude
          { location: [27.6706, 84.4385], size: 0.1 }
          
        ],
        // onRender: (state) => {
        //   // Called on every animation frame.
        //   // `state` will be an empty object, return updated params.

        //           // This prevents rotation while dragging
        // if (!pointerInteracting.current) {
        //     // Called on every animation frame.
        //     // `state` will be an empty object, return updated params.
        //     phi += 0.01;
        //   } 
        //   state.phi = phi + r.get()
        // }
      });
  
      return () => {
        globe.destroy();
      };
    }, []);
    return (
        <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = 'grabbing';
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 200,
              });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 100,
              });
            }
          }}
      />
    )
}

export default Globe;

