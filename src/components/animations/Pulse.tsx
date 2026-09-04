import { ReactNode } from 'react';
import MotionDiv from 'components/animations/MotionDiv';

type Props = {
  children: ReactNode,
  delay?: number,
  duration?: number,
};

function Pulse({ children, delay = 0, duration = 620 }: Props) {
  return (
    <MotionDiv
      initial={{ opacity: 0.95, scale: 1 }}
      whileInView={{ opacity: 1, scale: [1, 1.06, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: 'easeInOut' }}
    >
      {children}
    </MotionDiv>
  );
}

export default Pulse;
