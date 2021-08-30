import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  Image,
  Grid,
  Text,
} from 'theme-ui';

import Section from 'components/sections/Section';
import {
  SVGGit,
  SVGNextJS,
  SVGNodeJS,
} from 'components/svg/tech';

import { SECTION_ID } from 'constants/section';

function TechSection(props, ref) {
  return (
    <div>
      <Section
        id={SECTION_ID.TECH}
        ref={ref}
        sx={{
          background: (t) => `${t.colors.backgroundTech}`,
          minHeight: '0',
          py: [5, 6, 6],
          zIndex: 1,
        }}
      >

        <Fade>
          <Text
            variant="sectionHeading"
            sx={{
              color: (t) => `${t.colors.backgroundTechHeader}`,
              pb: 6,
            }}
          >
            RECENT TECHNOLOGIES
          </Text>
        </Fade>

        <Fade bottom cascade>
          <Grid
            gap={5}
            columns={[2, null, 5]}
            sx={{
              justifyItems: 'center',
              pb: 4,
            }}
          >
            <SVGNextJS sx={{ variant: 'images.tech' }} />
            <Image alt="ReactJS" src="svg/tech/reactjs.svg" variant="tech" />
            <Image alt="EmberJS" src="svg/tech/emberjs.svg" variant="tech" />
            <Image alt="HTML5" src="svg/tech/html5.svg" variant="tech" />
            <Image alt="SASS" src="svg/tech/sass.svg" variant="tech" />
            <Image alt="Chai" src="svg/tech/chai.svg" variant="tech" />
            <Image alt="Mocha" src="svg/tech/mocha.svg" variant="tech" />
            <Image alt="AMP Email" src="svg/tech/amp.svg" variant="tech" />
            <SVGNodeJS sx={{ variant: 'images.tech' }} />
            <SVGGit sx={{ variant: 'images.tech' }} />
          </Grid>
        </Fade>
      </Section>

      <Section
        sx={{
          background: (t) => `${t.colors.backgroundTechTools}`,
          minHeight: '0',
          py: [5, 6, 6],
          zIndex: 1,
        }}
      >
        <Fade>
          <Text
            variant="sectionHeading"
            sx={{
              color: (t) => `${t.colors.backgroundTechToolsHeader}`,
              pb: 6,
            }}
          >
            RECENT TOOLS
          </Text>
        </Fade>

        <Fade bottom cascade>
          <Grid
            gap={5}
            columns={[2, null, 6]}
            sx={{
              justifyItems: 'center',
              pb: 4,
            }}
          >
            <Image alt="VS Code" src="svg/tech/vscode.svg" variant="tech" />
            <Image alt="iTerm 2" src="svg/tech/iterm2.svg" variant="tech" />
            <Image alt="Chrome DevTools" src="svg/tech/chromedevtools.svg" variant="tech" />
            <Image alt="Dash" src="images/tech/dash@2x.png" variant="tech" />
            <Image alt="Alfred" src="images/tech/alfred@2x.png" variant="tech" />
            <Image alt="MacOS" src="svg/tech/macos.svg" variant="tech" />
          </Grid>
        </Fade>
      </Section>
    </div>
  );
}

export default React.forwardRef(TechSection);
