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

const TechSection = (props, ref) => (
  <Section
    id="tech"
    ref={ref}
    sx={{
      background: (t) => `${t.colors.background2}`,
    }}
  >
    <Fade bottom>
      <Text variant="sectionHeading">
        Recent Technologies
      </Text>

      <Grid
        gap={5}
        columns={[2, null, 5]}
        sx={{
          justifyItems: 'center',
          pb: 5,
        }}
      >
        <SVGNextJS sx={{ variant: 'images.tech' }} />
        <Image alt="HTML5" src="svg/tech/reactjs.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/emberjs.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/html5.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/sass.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/chai.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/mocha.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/amp.svg" variant="tech" />
        <SVGNodeJS sx={{ variant: 'images.tech' }} />
        <SVGGit sx={{ variant: 'images.tech' }} />
      </Grid>

      <Text variant="sectionHeading">
        Recent Tools
      </Text>

      <Grid
        gap={5}
        columns={[2, null, 6]}
        sx={{
          justifyItems: 'center',
        }}
      >
        <Image alt="HTML5" src="svg/tech/vscode.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/iterm2.svg" variant="tech" />
        <Image alt="HTML5" src="svg/tech/chromedevtools.svg" variant="tech" />
        <Image alt="HTML5" src="images/tech/dash@2x.png" variant="tech" />
        <Image alt="HTML5" src="images/tech/alfred@2x.png" variant="tech" />
        <Image alt="HTML5" src="svg/tech/macos.svg" variant="tech" />
      </Grid>
    </Fade>
  </Section>
);

export default React.forwardRef(TechSection);
