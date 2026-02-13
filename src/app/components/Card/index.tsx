"use client";
import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 90 }}   
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-1 text-lg"
    >
    {children}
    </motion.div>
  );
}
