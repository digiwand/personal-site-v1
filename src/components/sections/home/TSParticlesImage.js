/* eslint max-len: ["error", { "code": 120, "ignoreComments": true }] */
import { useState } from 'react';
import Particles from 'react-tsparticles';
import { useColorMode, useThemeUI } from 'theme-ui';

import TSParticlesImageTrackingPixel from 'components/sections/home/TSParticlesImageTrackingPixel';

/**
 * WIP
 * - Use personal SVG
 * - scale based on device width
 * - calculate position based on viewpoint
 * - possibly set opacity to 0 on scroll
 * - clean config
 */
function TSParticlesImage() {
  const [colorMode] = useColorMode();
  const { theme: { rawColors } } = useThemeUI();

  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    /**
     * This outer div is needed so that IntersectionObserver can view TSParticlesImageTrackingPixel
     * It appears IntersectionObserver does not like when the element's opacity is 0.
     */
    <div>
      <div
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          right: '0',
          top: '0',
          transition: 'opacity 0.5s',
          // height: '80vh',
          // width: '80vw',

          // height: '833.5px',
          // width: '636px',
          '&[has-scrolled="true"]': {
            opacity: '0',
            zIndex: '-1',
          },
        }}
        has-scrolled={hasScrolled.toString()}
      >
        <Particles
          id="tsparticles"
          sx={{
            // currently redundant css w/ parent div
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            right: '0',
            bottom: '0',

            // scale 1
            // height: '833.5px',
            // width: '636px',

            // scale .75
            // height: '628px',
            // width: '477px',
          }}
          // init={particlesInit}
          // loaded={particlesLoaded}
          options={{
            autoPlay: true,
            // background: {
            //   color: {
            //     value: "transparent"
            //   },
            // },
            // fullScreen: {
            // enable: true,
            // zIndex: 1
            // },
            detectRetina: false,
            fpsLimit: 30,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                // reconsider this.
                /** @see {@link https://particles.js.org/docs/interfaces/Options_Interfaces_Interactivity_Events_IClickEvent.IClickEvent.html} */
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                /** @see {@link https://particles.js.org/docs/classes/Options_Classes_Interactivity_Events_HoverEvent.HoverEvent.html} */
                onHover: {
                  enable: true,
                  mode: 'grab',
                  // mode: ['grab', 'connect'],
                },
                /**
                 * @todo - further inspect. This seems to allow resize to work well
                 * minus when using Rectangle app
                 */
                resize: false,
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: 'ease-out-quad',
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1,
                },
                bounce: {
                  distance: 200,
                },
                bubble: {
                  distance: 40,
                  duration: 2,
                  mix: false,
                  opacity: 8,
                  size: 6,
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4,
                },
              },
            },
            motion: {
              /** If set to true, reduces animations for users with prefer-reduced-motion enabled */
              disable: true,
              reduce: {
                factor: 4,
                value: true,
              },
            },
            particles: {
              color: {
                value: [
                  // '#546CBB',
                  // '#ceadff',
                  // '#6550cb',
                  `${rawColors.primary || '#546CBB'}`,
                  `${rawColors.primaryLight || '#ceadff'}`,
                  `${rawColors.primaryDark || '#6550cb'}`,
                ],
              },
              destroy: {
                mode: 'none',
                split: {
                  count: 1,
                  factor: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 3,
                  },
                  rate: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                },
              },
              life: {
                count: 0,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: {
                    enable: false,
                    minimumValue: 0.0001,
                  },
                  value: 0,
                  sync: false,
                },
              },
              links: {
                blink: false,
                color: {
                  value: 'random',
                },
                consent: false,
                distance: 40,
                enable: true,
                frequency: 1,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: '#00ff00',
                  },
                  enable: false,
                },
                // triangles: {
                //   enable: false,
                //   frequency: 1
                // },
                width: 1,
                // @todo what does this do?
                warp: false,
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                decay: 0,
                distance: {},
                direction: 'none',
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                },
                outModes: {
                  default: 'bounce',
                  bottom: 'bounce',
                  left: 'bounce',
                  right: 'bounce',
                  top: 'bounce',
                },
                random: false,
                size: false,
                speed: 1,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: '#000000',
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                limit: 0,
                value: 220,
              },
              opacity: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: {
                  min: 0.05,
                  max: 0.4,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 2,
                  sync: false,
                  destroy: 'none',
                  minimumValue: 0.05,
                  startValue: 'random',
                },
              },
              reduceDuplicates: false,
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: 'clockwise',
                path: false,
              },
              shadow: {
                blur: 0,
                color: {
                  value: '#000000',
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {},
                type: 'circle',
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 1,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 40,
                  sync: false,
                  destroy: 'none',
                  minimumValue: 0.1,
                  startValue: 'random',
                },
              },
              stroke: {
                width: 0,
              },
              tilt: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: 'clockwise',
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: 50,
              },
              zIndex: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
            },
            pauseOnBlur: false,
            pauseOnOutsideViewport: false,
            responsive: [
              // { maxWidth: 200 },
              // { maxWidth: 400 },
              // { maxWidth: 883 },
            ],
            // themes: [],
            /** @see {@link https://particles.js.org/docs/interfaces/Plugins_PolygonMask_Options_Interfaces_IPolygonMask.IPolygonMask.html} */
            polygon: {
              draw: {
                enable: true,
                stroke: {
                  color: {
                    value: colorMode === 'light' ? '#222' : 'rgba(255,255,255,0.2)',
                  },
                  width: 0.5,
                  opacity: 0.2,
                },
              },
              enable: true,
              inline: {
                arrangement: 'equidistant',
              },
              move: {
                radius: 10,
                type: 'path',
              },
              // @todo maybe this can be dynamic based on screen size
              scale: 0.75,
              type: 'inline',
              url: '/svg/deer.svg',
              position: {
                x: 45,
                y: 20,
              },
            },
          }}
        />

      </div>
      <TSParticlesImageTrackingPixel setHasScrolled={setHasScrolled} />
    </div>
  );
}

export default TSParticlesImage;
