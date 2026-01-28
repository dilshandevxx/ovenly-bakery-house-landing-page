"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you accept wholesale orders?",
    answer: "Yes, we partner with cafes and restaurants across the city. Please contact us for our wholesale price list and delivery options."
  },
  {
    question: "Do you bake fresh every day?",
    answer: "Absolutely. Our team starts baking at 3 AM every morning to ensure that everything on our shelves is fresh from the oven."
  },
  {
    question: "Do you use preservatives or artificial ingredients?",
    answer: "Never. We believe in using only natural, high-quality ingredients. Our breads contain only flour, water, salt, and wild yeast."
  },
  {
    question: "Can I place an order online?",
    answer: "Yes! You can order through our website for pickup or local delivery. We recommend ordering 24 hours in advance for large orders."
  },
  {
    question: "Do you offer delivery service?",
    answer: "We offer local delivery within a 5-mile radius of our bakery. For larger event orders, we can arrange special delivery further afield."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-cream-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brown-900 mb-4">
            Frequently <span className="italic font-light">Asked Questions</span>
          </h2>
          <p className="text-brown-800/60 text-sm uppercase tracking-wider">Curious minds, tasty answers.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brown-900/10 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-serif text-xl text-brown-900 group-hover:text-gold-500 transition-colors">
                  {faq.question}
                </span>
                <span className="text-brown-900/40 group-hover:text-gold-500 transition-colors">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-brown-800/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
