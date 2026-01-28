"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProduct() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
             <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/product-cinnamon.png"
                  alt="Cinnamon Roll Deluxe"
                  fill
                  className="object-cover"
                />
             </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block border border-brown-900/20 px-4 py-1 mb-6">
               <span className="text-xs uppercase tracking-widest text-brown-900 font-medium">Limited Edition</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-brown-900 mb-6 leading-tight">
              Cinnamon <br />
              <span className="italic font-light">Roll Deluxe</span>
            </h2>

            <p className="text-brown-800/80 mb-8 max-w-md mx-auto lg:mx-0">
               Soft, fluffy, and generously swirled with cinnamon, then smothered in our signature cream cheese frosting. An absolute favorite.
            </p>

            <Link 
              href="#"
              className="inline-flex items-center gap-3 bg-brown-900 text-cream-50 px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors"
            >
              Order Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
