import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp } from '../constants/animations';

export const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
    {/* Abstract Background representing grid/connections */}
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" />
        <path d="M0 0 L100 100" stroke="white" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" />
        <path d="M50 0 L50 100" stroke="white" strokeWidth="0.2" />
        <path d="M0 50 L100 50" stroke="white" strokeWidth="0.2" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <span className="inline-block py-1 px-3 border border-amber-600/50 rounded-full text-amber-500 text-sm tracking-widest uppercase mb-6 font-medium">
          Engenharia & Liderança
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          O Legado da <span className="text-amber-500">Distribuição</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          A Trajetória e as Contribuições de Celso Ternes Leal para a Engenharia Catarinense
        </p>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-lg text-slate-400 italic font-serif">
          "Do chão de fábrica das subestações às mesas de decisão."
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400"
    >
      <ChevronDown size={32} />
    </motion.div>
  </section>
);

