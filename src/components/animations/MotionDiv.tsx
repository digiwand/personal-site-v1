import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { motion, type MotionProps } from 'framer-motion';

/**
 * framer-motion@6 types predate React 19 and drop `children` on `motion.div`.
 */
type Props = MotionProps & ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode,
};

const MotionDiv = motion.div as unknown as (props: Props) => ReactNode;

export default MotionDiv;
