import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Features from "@/components/Features";
import Tips from "@/components/Tips";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <BeforeAfter />
        <Tips />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
