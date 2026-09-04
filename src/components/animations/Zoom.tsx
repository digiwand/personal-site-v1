import { ReactNode } from 'react';
import MotionDiv from 'components/animations/MotionDiv';

type Props = {
  children: ReactNode,
  delay?: number,
  duration?: number,
};

function Zoom({ children, delay = 0, duration = 600 }: Props) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: 'easeOut' }}
    >
      {children}
    </MotionDiv>
  );
}

export default Zoom;
