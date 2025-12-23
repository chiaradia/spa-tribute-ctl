import { motion } from 'framer-motion';
import { Landmark, Users, ScrollText, Network } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants/animations';

export const LeadershipSection = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-slate-500">
            <Landmark size={24} />
            <span className="uppercase tracking-widest font-bold text-sm">Diplomacia Técnica</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
            Liderança Institucional: ACE e CREA-SC
          </h2>
          <p className="text-lg text-slate-600">
            A atuação de Celso Ternes Leal dentro do <strong>CREA-SC</strong> foi marcada pelo que podemos chamar de "Diplomacia Técnica". Ele não separava a engenharia da política; ao contrário, usava sua autoridade técnica para legitimar pautas políticas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative my-16 p-10 bg-slate-50 border-l-4 border-amber-600 rounded-r-lg"
        >
          <div className="absolute top-4 left-4 text-slate-200">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.017 12.9866 10.421 11.2335 12.555 10.6696C12.835 10.595 13.045 10.364 13.045 10.076V7.276C13.045 6.84 12.636 6.541 12.235 6.666C9.176 7.625 7 10.637 7 16V21H14.017ZM21 21L21 18C21 16.8954 20.105 16 19 16H15.983C16 12.9866 17.404 11.2335 19.538 10.6696C19.818 10.595 20.028 10.364 20.028 10.076V7.276C20.028 6.84 19.619 6.541 19.218 6.666C16.159 7.625 13.983 10.637 13.983 16V21H21Z" />
            </svg>
          </div>
          <blockquote className="text-2xl font-serif text-slate-800 text-center relative z-10 italic">
            "Quem estudou isso na faculdade é quem deve assinar."
          </blockquote>
          <p className="text-center text-sm text-slate-500 mt-4 font-bold uppercase tracking-wide">— Celso Ternes Leal, sobre responsabilidade técnica</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-slate-900">
            <div className="mb-4 text-amber-600"><Users size={32}/></div>
            <h3 className="font-bold text-lg mb-3">Fóruns Técnicos</h3>
            <p className="text-sm text-slate-600">
              A estratégia de criar eventos de alto nível para constranger positivamente o poder público. "Se temos a técnica e o custo se paga em 20 anos, por que a legislação municipal ainda impede?"
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-slate-900">
            <div className="mb-4 text-amber-600"><ScrollText size={32}/></div>
            <h3 className="font-bold text-lg mb-3">Atuação Interna</h3>
            <p className="text-sm text-slate-600">
              A defesa da ART como "documento de autoria" e não apenas boleto. Articulou para facilitar a emissão de Certidões de Acervo Técnico (CAT), vitais para licitações.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-slate-900">
            <div className="mb-4 text-amber-600"><Network size={32}/></div>
            <h3 className="font-bold text-lg mb-3">Ponte com a Sociedade</h3>
            <p className="text-sm text-slate-600">
              Representação no COMDES e consultoria para a Assembleia Legislativa (ALESC), garantindo que estudos de viabilidade técnica precedessem promessas políticas.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-12 bg-slate-100 p-6 rounded-lg text-center">
          <h4 className="font-bold text-slate-900 mb-2">O Estilo "Leal" de Liderança</h4>
          <p className="text-slate-600 text-sm">
            Enquanto alguns conselheiros adotavam posturas combativas, Celso era conhecido por criar consenso. Atuava como mediador, fazendo jus ao sobrenome "Leal", respeitado inclusive por grupos opositores.
          </p>
        </div>
      </div>
    </div>
  </section>
);

