import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode,
  delay?: number,
  duration?: number,
};

function Pulse({ children, delay = 0, duration = 620 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.95, scale: 1 }}
      whileInView={{ opacity: 1, scale: [1, 1.06, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

export default Pulse;
