import React from 'react';
import Fade from 'react-reveal/Fade';
import { Themed } from 'theme-ui'

import Section from 'components/sections/Section';

const HomeSection = React.forwardRef((props, ref) => {
  return (
    <Section id="home" {...props} ref={ref}>
      <Fade bottom>
        <Themed.h1>Hello.</Themed.h1>
      </Fade>
      <Fade bottom delay={1100}>
        <Themed.h2>Welcome.</Themed.h2>
      </Fade>
      <Fade bottom delay={2100}>
        <Themed.h3>This is a work in progress.</Themed.h3>
      </Fade>
      <Fade bottom delay={3400}>
        <Themed.p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium augue a 
          venenatis euismod. Mauris vestibulum eros et felis dignissim, nec condimentum magna 
          venenatis. Aliquam eleifend et quam at egestas. Ut at tincidunt ante, quis venenatis 
          arcu. Integer et neque semper neque viverra mollis vitae id urna. Class aptent taciti 
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eu viverra 
          mauris. Vivamus posuere tempus justo sit amet sollicitudin. Sed rutrum, mauris id commodo 
          pharetra, quam velit sodales metus, molestie aliquam lacus diam ut tortor. Morbi posuere 
          lectus velit, id accumsan nulla lacinia a. Integer efficitur, justo eget finibus 
          facilisis, metus nisl convallis felis, ac iaculis purus mauris vel mi. Curabitur congue 
          maximus pellentesque.
        </Themed.p>
      </Fade>
    </Section>
  );
});

export default HomeSection;
