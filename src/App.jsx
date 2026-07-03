import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#FAF7F2]" />
      <div className="hero-bg-circles pointer-events-none" />
      <div className="hero-bg-grid pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Hero />
          </motion.div>
          <About />
          <Skills />
          <Services />
          <Experience />
          <Projects />
          <Technologies />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
