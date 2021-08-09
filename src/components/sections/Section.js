import React from 'react';
import PropTypes from 'prop-types';

import PROP_TYPE from 'constants/prop-types';

/**
 * Used to be observed by IntersectionObserver. These forwardRefs are a bit excessive. 
 * Consider using React.Context to control the Nav states and move the IntersectionObserver
 * closer
 */
const SectionTrackingPixel = ({ sectionId, forwardedRef }) => {
  return (
    <div className="trackingPixel"
      sx={{ 
        position: 'absolute',
        height: '1px', 
        width: '1px', 
        top: '25vh',
      }}
      section-id={sectionId}
      ref={forwardedRef}
    />
  )
};

const propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};

const Section = React.forwardRef((props, ref) => {
  return (
    <section id={props.id} {...props}
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        px: [4, 6, 6]
      }}
    >
      <SectionTrackingPixel sectionId={props.id} forwardedRef={ref} />
      
      {props.children}
    </section>
  );
});

Section.propTypes = propTypes;

export default Section;