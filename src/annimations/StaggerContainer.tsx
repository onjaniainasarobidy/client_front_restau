import { motion } from "framer-motion";

export function StaggerContainer({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} 
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.28,
            delayChildren: 0.2,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
