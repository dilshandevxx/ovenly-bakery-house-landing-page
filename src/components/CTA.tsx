"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-brown-900/60 z-10" />
         <Image
           src="/images/cta-bg.png"
           alt="Freshly Baked"
           fill
           className="object-cover"
         />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           <h2 className="font-serif text-4xl md:text-6xl text-cream-50 mb-6 leading-tight">
             Freshly Baked, <br />
             <span className="italic">Just for You</span>
           </h2>
           <p className="text-cream-200 mb-8 max-w-lg mx-auto text-lg font-light">
             Don't miss out on our daily specials. Pre-order now to secure your favorite treats.
           </p>
           
           <Link 
             href="#"
             className="inline-block bg-cream-50 text-brown-900 px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold-500 hover:text-white transition-all transform hover:scale-105"
           >
             Get Started
           </Link>
         </motion.div>
      </div>
    </section>
  );
}
