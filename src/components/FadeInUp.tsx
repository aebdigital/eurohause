"use client";

import { motion } from "framer-motion";

export default function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.8,
  y = 30,
  keyId
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number;
  y?: number;
  keyId?: string;
}) {
  return (
    <motion.div
      key={keyId}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
