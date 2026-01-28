"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-cream-50/10 pb-20">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
               <span className="font-serif text-5xl md:text-7xl">Ovenly</span>
            </Link>
            <p className="text-cream-200/60 max-w-sm mb-8">
              Artisan bakery crafting moments of joy with every bite. Baked fresh daily with organic ingredients and love.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center hover:bg-cream-50 hover:text-brown-900 transition-colors">
                 <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center hover:bg-cream-50 hover:text-brown-900 transition-colors">
                 <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center hover:bg-cream-50 hover:text-brown-900 transition-colors">
                 <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-cream-200/60">
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Shop</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Wholesale</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-serif text-xl mb-6">Legal</h4>
            <ul className="space-y-4 text-cream-200/60">
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
             <h4 className="font-serif text-xl mb-6">Stay Updated</h4>
             <p className="text-cream-200/60 mb-4 text-sm">Subscribe to get the latest news and special offers.</p>
             <form className="flex flex-col gap-4">
               <input 
                 type="email" 
                 placeholder="Your email address" 
                 className="bg-transparent border-b border-cream-50/20 py-3 text-cream-50 placeholder:text-cream-200/30 focus:outline-none focus:border-gold-500 transition-colors"
               />
               <button className="self-start text-xs uppercase tracking-widest font-bold hover:text-gold-500 transition-colors">
                 Subscribe
               </button>
             </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-cream-200/40 text-xs uppercase tracking-wider">
           <p>© 2026 Ovenly Bakery. More templates at <a href="#" className="hover:text-cream-50">gola.io</a></p>
           <div className="flex gap-8 mt-4 md:mt-0">
             <span>Baked with Next.js</span>
           </div>
        </div>

      </div>
    </footer>
  );
}
