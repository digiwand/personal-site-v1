import React from 'react';

/**
 * Used to be observed by IntersectionObserver. These forwardRefs are a bit excessive. 
 * Consider using React.Context to control the Nav states and move the IntersectionObserver
 * closer
 */
const SectionTrackingPixel = React.forwardRef((props, ref) => {
  return (
    <div className="trackingPixel"
      sx={{ 
        position: 'absolute',
        height: '1px', 
        width: '1px', 
        top: '25vh',
      }}
      section-id={props.sectionId}
      ref={ref}
    />
  )
});

const Section = React.forwardRef((props, ref) => {
  /** @todo doesn't seem to be vausing an issue buf ref gets passed here too through ...props  */
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
      <SectionTrackingPixel sectionId={props.id} ref={ref} />
      {props.children}
    </section>
  );
});

export default Section;