function Section({ children, ...props }) {
  const SectionTrackingPixel = () => (
    <div className="trackingPixel"
      sx={{ 
        position: 'absolute',
        height: '1px', 
        width: '1px', 
        top: '25vh', 
      }}
      section-id={props.id}
    />
  );
  
  return (
    <section id={props.id} {...props}
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '100vh',
        p: 0,
      }}
    >
      {/* 
        Don't move SectionTrackingPixel. It needs to be right here for 
        the selector 'section[id] > .trackingPixel' to work 
      */}
      <SectionTrackingPixel />
      {children}
    </section>
  );
}

export default Section;