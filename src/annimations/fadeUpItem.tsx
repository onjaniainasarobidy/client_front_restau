import { motion } from "framer-motion";

export function FadeUpItem({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }} // déclenche quand 30% visible
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
