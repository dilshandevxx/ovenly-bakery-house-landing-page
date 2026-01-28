"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
           className="fixed inset-0 z-[100] bg-brown-900 flex items-center justify-center overflow-hidden"
           exit={{ y: "-100%" }}
           transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
             <motion.h1 
               initial={{ y: 20 }}
               animate={{ y: 0 }}
               className="font-serif text-6xl md:text-8xl text-cream-50"
             >
               Ovenly
             </motion.h1>
             <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] bg-cream-50/50 mt-4 max-w-[200px] mx-auto origin-left w-full"
             />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
