import Hero from "@/components/Hero";
import About from "@/components/About";
import BestSellers from "@/components/BestSellers";
import FeaturedProduct from "@/components/FeaturedProduct";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50">
      <Hero />
      <About />
      <BestSellers />
      <FeaturedProduct />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
