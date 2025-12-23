import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp } from '../constants/animations';
import celsoImage from '../assets/celso.png';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white w-full">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 w-full h-full">
      <img 
        src={celsoImage} 
        alt="Celso Ternes Leal" 
        className="w-full h-full object-cover object-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
    </div>
    
    {/* Abstract Background representing grid/connections */}
    <div className="absolute inset-0 opacity-20 w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" />
        <path d="M0 0 L100 100" stroke="white" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" />
        <path d="M50 0 L50 100" stroke="white" strokeWidth="0.2" />
        <path d="M0 50 L100 50" stroke="white" strokeWidth="0.2" />
      </svg>
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <span className="inline-block py-1 px-2 sm:px-3 border border-amber-600/50 rounded-full text-amber-500 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 font-medium">
          Engenharia & Liderança
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight px-2">
          O Legado da <span className="text-amber-500">Distribuição</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-slate-300 font-light mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          A Trajetória e as Contribuições de Celso Ternes Leal para a Engenharia Catarinense
        </p>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-sm sm:text-lg text-slate-400 italic font-serif px-2">
          "Do chão de fábrica das subestações às mesas de decisão."
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400"
    >
      <ChevronDown size={24} className="sm:w-8 sm:h-8" />
    </motion.div>
  </section>
);

