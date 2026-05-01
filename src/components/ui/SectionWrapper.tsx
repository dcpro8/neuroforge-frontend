import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn('w-full py-12 flex flex-col gap-8', className)}
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <span className="w-8 h-[2px] bg-cyan-500 rounded-full inline-block" />
          {title}
        </h2>
        {description && (
          <p className="text-slate-400 max-w-2xl ml-11">{description}</p>
        )}
      </motion.div>
      <motion.div variants={itemVariants} className="ml-11">
        {children}
      </motion.div>
    </motion.section>
  );
};
