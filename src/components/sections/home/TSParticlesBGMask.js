// import { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { useColorMode } from 'theme-ui';

const MODE_BG_RGB = {
  default: { r: 204, g: 204, b: 204 },
  dark: { r: 0, g: 0, b: 0 },
};

const MODE_BG = {
  default: 'url("images/bg/leaves-2.jpg")',
  dark: 'radial-gradient(#ababab, #eee)',
};

/**
 * WIP
 * - Use personal SVG
 * - scale based on device width
 * - calculate position based on viewpoint
 * - possibly set opacity to 0 on scroll
 * - clean config
 * @see {@link https://cdnjs.com/libraries/tsparticles/tutorials/how-to-use-tsparticles}
 * @see {@link https://particles.js.org/samples/index.html#background}
 */
function TSParticlesBGMask() {
  const [colorMode] = useColorMode();
  // const { theme: { rawColors } } = useThemeUI();

  // useEffect(() => {
  //   console.log('should rerender w/', colorMode);
  //   debugger;
  // }, [colorMode]);

  return (
    <Particles
      id="tsparticles"
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#333',
          },
          // image: 'radial-gradient(#ababab, #eee)',
          image: MODE_BG[colorMode] || MODE_BG.default,
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        backgroundMask: {
          cover: {
            color: {
              value: { ...(MODE_BG_RGB[colorMode] ? MODE_BG_RGB[colorMode] : MODE_BG_RGB.default) },
            },
          },
          enable: true,
        },
        detectRetina: true,
        fullScreen: {
          // this will remove display: 'fixed' pt.1
          enable: false,
          zIndex: 1,
        },
        interactivity: {
          // this will remove display: 'fixed' pt.2
          detectOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                force: 60,
              },
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 200,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: '#fff',
          },
          links: {
            color: {
              value: '#fff',
            },
            distance: 150,
            enable: true,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            path: {},
            outModes: {
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
            speed: 2,
            spin: {},
          },
          number: {
            density: {
              enable: true,
            },
            value: 40,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
            },
          },
          rotate: {
            value: 90,
            random: true,
          },
          shape: {
            type: 'image',
            image: {
              src: 'svg/decor/rectangle.svg',
            },
            stroke: {
              color: '#ff9800',
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 30,
              max: 60,
            },
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
        zLayers: 100,
      }}
    />
  );
}

export default TSParticlesBGMask;
