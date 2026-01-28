"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-cream-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="mb-12">
           <span className="text-brown-500 text-xs uppercase tracking-[0.2em] font-medium">Testimonials</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
             <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:ml-0 overflow-hidden">
                <Image
                  src="/images/testimonial-portrait.png"
                  alt="Happy Customer"
                  fill
                  className="object-cover"
                />
             </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
                <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-brown-900 mb-8 leading-tight">
                  <span className="italic font-light opacity-60 block text-lg md:text-xl mb-4 text-brown-500">What our customers say</span>
                  "Fresh, delicious, and <span className="italic text-brown-800">beautifully made</span>. 
                  I ordered cakes for a family celebration, and everyone loved them. Not too sweet, 
                  perfectly balanced, and stunning presentation. <span className="italic text-brown-800">Will definitely order again.</span>"
                </h2>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                   <div>
                      <h4 className="font-serif text-xl text-brown-900">Alexa Rosales</h4>
                      <div className="flex gap-1 text-gold-500 mt-1">
                         <Star className="w-4 h-4 fill-current" />
                         <Star className="w-4 h-4 fill-current" />
                         <Star className="w-4 h-4 fill-current" />
                         <Star className="w-4 h-4 fill-current" />
                         <Star className="w-4 h-4 fill-current" />
                      </div>
                   </div>

                   <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-full border border-brown-900/20 flex items-center justify-center hover:bg-brown-900 hover:text-cream-50 transition-colors">
                         <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-full border border-brown-900/20 flex items-center justify-center hover:bg-brown-900 hover:text-cream-50 transition-colors">
                         <ArrowRight className="w-5 h-5" />
                      </button>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
