"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Artisan Sourdough",
    price: "$8.00",
    image: "/images/product-sourdough.png",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-1 row-span-2",
  },
  {
    id: 2,
    name: "Butter Croissants",
    price: "$4.50",
    image: "/images/product-croissant.png",
    gridClass: "col-span-1",
  },
  {
    id: 3,
    name: "Signature Cakes",
    price: "$35.00",
    image: "/images/product-cake.png",
    gridClass: "col-span-1",
  },
  {
    id: 4,
    name: "Fresh Pastries",
    price: "$5.00",
    image: "/images/product-pastries.png",
    gridClass: "col-span-1 md:col-span-2 lg:col-span-1",
  },
];

export default function BestSellers() {
  return (
    <section id="shop" className="py-20 md:py-32 bg-cream-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center mb-16">
          <span className="text-brown-500 text-xs uppercase tracking-[0.2em] font-medium block mb-4">Crafted with Care</span>
          <h2 className="font-serif text-5xl md:text-6xl text-brown-900 mb-6">
            Our <span className="italic">Best</span> Sellers
          </h2>
          <p className="text-brown-800/60 max-w-md mx-auto">
            The most popular picks from our ovens to your table. expertly baked to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[400px]">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }} // cubic-bezier for "premium" feel
              className={`group relative overflow-hidden bg-white ${product.gridClass}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="self-end">
                   <div className="bg-cream-50 text-brown-900 rounded-full p-2">
                     <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
                
                <div>
                   <h3 className="font-serif text-3xl mb-1">{product.name}</h3>
                   <p className="font-medium tracking-wider">{product.price}</p>
                </div>
              </div>

              {/* Static Title (Visible when not hovering, optional, but good for UX) */}
              <div className="absolute bottom-6 left-6 text-cream-50 group-hover:opacity-0 transition-opacity duration-300">
                 <h3 className="font-serif text-2xl drop-shadow-md">{product.name}</h3>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <Link 
              href="#" 
              className="inline-block bg-brown-900 text-cream-50 px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-brown-800 transition-colors"
            >
              View Full Menu
            </Link>
        </div>

      </div>
    </section>
  );
}
