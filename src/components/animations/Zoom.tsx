import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode,
  delay?: number,
  duration?: number,
};

function Zoom({ children, delay = 0, duration = 600 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default Zoom;
