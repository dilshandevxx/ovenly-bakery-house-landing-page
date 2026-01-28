"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-cream-50/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Menu Trigger */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gold-500 transition-colors"
        >
          <Menu className="w-5 h-5" />
          <span className="hidden md:inline">Menu</span>
        </button>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <span className={clsx(
            "font-serif text-3xl md:text-4xl tracking-tight transition-colors",
            isScrolled ? "text-brown-900" : "text-cream-50"
          )}>
            Ovenly
          </span>
        </Link>

        {/* Right: Cart */}
        <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gold-500 transition-colors">
          <span className="hidden md:inline">Cart (0)</span>
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed inset-0 bg-brown-900 text-cream-50 z-[60] flex flex-col p-8 md:w-1/3 w-full"
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="self-end p-2 hover:text-gold-500 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="flex flex-col gap-8 mt-12 text-center text-2xl font-serif">
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-500 transition-colors">Home</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-500 transition-colors">Shop</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-500 transition-colors">About Us</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-gold-500 transition-colors">Contact</Link>
        </div>
      </motion.div>
    </nav>
  );
}
