import { motion } from "framer-motion";

export function PopInRight({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.85, rotate: 6 }}
      animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
      whileHover={{
        scale: 1.03,
        rotate: -1,
        y: -4,
        boxShadow: "0px 12px 28px rgba(0,0,0,0.15)",
        transition: { duration: 0.15, ease: "easeOut" } 
      }}
      whileTap={{
        scale: 0.97,
        transition: { duration: 0.1 }
      }}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
}
