import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode,
  delay?: number,
  duration?: number,
  top?: boolean,
  bottom?: boolean,
  left?: boolean,
  right?: boolean,
  cascade?: boolean,
};

function Fade({
  children,
  delay = 0,
  duration = 600,
  top = false,
  bottom = false,
  left = false,
  right = false,
}: Props) {
  let x = 0;
  let y = 0;

  if (top) { y = -18; }
  if (bottom) { y = 18; }
  if (left) { x = -18; }
  if (right) { x = 18; }

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default Fade;
