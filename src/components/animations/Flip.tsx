import { ReactNode } from 'react';
import MotionDiv from 'components/animations/MotionDiv';

type Props = {
  children: ReactNode,
  delay?: number,
  duration?: number,
  top?: boolean,
};

function Flip({
  children,
  delay = 0,
  duration = 550,
  top = false,
}: Props) {
  return (
    <MotionDiv
      initial={top ? { opacity: 0, rotateX: 70 } : { opacity: 0, rotateY: 70 }}
      whileInView={{ opacity: 1, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: 'easeOut' }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </MotionDiv>
  );
}

export default Flip;
