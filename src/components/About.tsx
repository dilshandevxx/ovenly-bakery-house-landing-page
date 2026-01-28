"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Years of Baking Happiness", value: "10+" },
  { label: "Breads Baked Monthly", value: "5K+" },
  { label: "Real & Natural Ingredients", value: "100%" },
  { label: "Happy Customers served", value: "1K+" },
];

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-cream-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Spacer/Label */}
        <div className="mb-12">
          <span className="text-brown-500 text-xs uppercase tracking-[0.2em] font-medium">About Us</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl text-brown-900 mb-8 leading-tight"
            >
              Baking Happiness <br />
              <span className="italic font-light">Every Day</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brown-800/80 leading-relaxed max-w-lg mb-8"
            >
              At Ovenly, we believe that baking is an act of love. From our crispy baguettes to our signature sourdough, every loaf is crafted with patience and precision.
              <br /><br />
              We use only the finest organic ingredients to ensure that every bite is a moment of pure delight.
            </motion.p>

            <motion.a 
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-2 text-brown-900 uppercase text-xs tracking-widest font-bold border-b border-brown-900/30 pb-1 hover:border-brown-900 hover:gap-4 transition-all w-fit"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto overflow-hidden">
               <Image
                 src="/images/about-bakers.png"
                 alt="Baking with love"
                 fill
                 className="object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
          </motion.div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-brown-900/10 pt-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="text-center md:text-left"
            >
              <h3 className="font-serif text-4xl md:text-5xl text-brown-900 mb-2">{stat.value}</h3>
              <p className="text-brown-800/60 text-xs uppercase tracking-wider max-w-[150px] mx-auto md:mx-0">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
