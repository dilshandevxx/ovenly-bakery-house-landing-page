"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <Image
          src="/images/hero-bg.png"
          alt="Freshly baked croissants"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 container mx-auto"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cream-200 text-sm md:text-base tracking-[0.2em] uppercase mb-4"
        >
          Artisan Bakery & Cafe
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream-50 leading-[1.1] mb-8 max-w-4xl"
        >
          Freshly Baked. <br />
          Made <span className="italic font-light">with Love</span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="#shop" 
            className="group inline-flex items-center gap-3 bg-cream-50 text-brown-900 px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all hover:bg-gold-500 hover:text-white"
          >
            All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Floating review/badge element from reference could go here */}
      </motion.div>
    </div>
  );
}
