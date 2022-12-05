import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export const BackGround = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  // const particleLoaded = useCallback(async () => {
  //   const c = document.querySelector('canvas.particles-canvas');
  //   c?.removeAttribute('style');
  // }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particleLoaded}
      canvasClassName={`particles`}
      options={{
        fullScreen: false,
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          shape: {
            type: ['circle'],
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 30,
            random: {
              enable: true,
              minimumValue: 15,
            },
          },
          rotate: {
            value: 0,
            direction: 'clockwise',
            animation: {
              speed: 5,
              enable: true,
            },
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            out_mode: 'out',
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'light',
            },
            resize: true,
          },
          modes: {
            light: {
              area: {
                gradient: {
                  start: '3b5e98',
                  stop: '#17163e',
                },
              },
              shadow: {
                color: '#17163e',
              },
            },
          },
        },
        detectRetina: true,
        background: {
          //   color: '#404040',
        },
      }}
    />
  );
};
