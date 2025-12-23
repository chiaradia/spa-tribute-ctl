import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../constants/animations';

interface TimelineItemProps {
  year: string;
  title: string;
  desc: string;
  side: 'left' | 'right';
}

const TimelineItem = ({ year, title, desc, side }: TimelineItemProps) => (
  <motion.div
    variants={fadeInUp}
    className={`flex items-center justify-between w-full mb-6 sm:mb-8 md:flex-row ${side === 'left' ? 'md:flex-row-reverse' : ''} flex-col md:flex-row`}
  >
    <div className="hidden md:block w-5/12"></div>
    <div className="z-20 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-amber-600 rounded-full shadow-lg border-2 sm:border-4 border-white mb-4 md:mb-0">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
    </div>
    <div className={`w-full md:w-5/12 p-4 sm:p-6 bg-white rounded-lg shadow-md border-l-4 border-slate-200 text-left`}>
      <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider">{year}</span>
      <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">{title}</h3>
      <p className="text-slate-600 text-xs sm:text-sm">{desc}</p>
    </div>
    <div className="hidden md:block w-5/12"></div>
  </motion.div>
);

export const Timeline = () => (
  <section className="py-12 sm:py-16 md:py-24 bg-slate-50 overflow-hidden w-full">
    <div className="container mx-auto px-4 sm:px-6 relative max-w-7xl w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2 px-2">Linha do Tempo</h2>
        <p className="text-sm sm:text-base text-slate-500 px-2">Uma jornada dedicada à engenharia elétrica</p>
      </motion.div>

      <div className="relative wrap overflow-hidden h-full max-w-5xl mx-auto">
        {/* Vertical Line - Hidden on mobile */}
        <div className="hidden md:block absolute border-opacity-20 border-slate-900 h-full border-l-2 left-1/2" style={{ transform: 'translateX(-50%)' }}></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <TimelineItem
            side="right"
            year="1970/1980"
            title="Formação e Início"
            desc="Graduação em Engenharia Elétrica pela UFSC. Ingresso na Celesc, onde construiria carreira de +30 anos."
          />
          <TimelineItem
            side="left"
            year="1990/2000"
            title="Gestão Técnica"
            desc="Ascensão na Divisão de Projetos e Construção (DVPC). Especializações em Distribuição e modernização da rede."
          />
          <TimelineItem
            side="right"
            year="2011 – 2015"
            title="Liderança Classista"
            desc="Presidente da ACE (dois mandatos). Revitalização da entidade e inserção no debate público."
          />
          <TimelineItem
            side="left"
            year="2012"
            title="Destaque no SENDI"
            desc="Apresentação sobre 'Transferência Automática de Fontes em Redes Subterrâneas' (Via Gastronômica Joinville)."
          />
          <TimelineItem
            side="right"
            year="2014"
            title="Educador e Organizador"
            desc="Idealizador do II Seminário Nacional de Redes Subterrâneas. Professor de Pós-Graduação na FACENS."
          />
          <TimelineItem
            side="left"
            year="2015 – 2016"
            title="Vice-Presidência CREA-SC"
            desc="Atuação focada na valorização da ART e fiscalização ética. Assumiu presidência interina."
          />
          <TimelineItem
            side="right"
            year="~2016"
            title="Novos Rumos"
            desc="Aposentadoria da Celesc após 32 anos. Fundação da CEMAED Engenharia e consultoria sênior."
          />
          <TimelineItem
            side="left"
            year="2020 – Presente"
            title="Legado Ativo"
            desc="Referência nacional em consultoria. Palestrante em webinars sobre padronização de redes modernas."
          />
        </motion.div>
      </div>
    </div>
  </section>
);

