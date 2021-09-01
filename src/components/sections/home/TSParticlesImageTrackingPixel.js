/**
 * Save for potential scroll down effect
 */
// import { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// const propTypes = {
//   setHasScrolled: PropTypes.func.isRequired,
// };

// function TSParticlesImageTrackingPixel({ setHasScrolled }) {
//   const scrolledDownRef = useRef();
//   const scrolledDownObserverRef = useRef();

//   const handleScrolledDownObserver = ([entry]) => {
//     setHasScrolled(!(entry.intersectionRatio > 0));
//   };

//   useEffect(() => {
//     if (scrolledDownObserverRef.current) { scrolledDownObserverRef.current.disconnect(); }

//     scrolledDownObserverRef.current = new IntersectionObserver(handleScrolledDownObserver);

//     const { current: currentObserver } = scrolledDownObserverRef;
//     const currentRef = scrolledDownRef.current;

//     if (currentRef) {
//       currentObserver.observe(currentRef);
//     }
//     return () => { currentObserver.disconnect(); };
//   });

//   // -- Renders -----------------------------------------------------------------------------------

//   return (
//     <div
//       sx={{
//         position: 'absolute',
//         height: '1px',
//         width: '1px',
//         bottom: '10px',
//       }}
//       ref={scrolledDownRef}
//     />
//   );
// }

// TSParticlesImageTrackingPixel.propTypes = propTypes;

// export default TSParticlesImageTrackingPixel;
