import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { fadeInUp } from '../constants/animations';

export const About = () => (
  <section className="py-12 sm:py-16 md:py-24 bg-white text-slate-800 w-full overflow-x-hidden">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 sm:mb-8 text-slate-900 border-l-4 border-amber-600 pl-4 sm:pl-6">
            Formação e Raízes Técnicas
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-slate-600 font-light sm:text-justify">
            <p>
              No complexo ecossistema da infraestrutura energética brasileira, certas figuras se destacam não apenas pela competência técnica, mas pela habilidade de transitar entre o "chão de fábrica" das subestações e as mesas de decisão das entidades de classe. O engenheiro eletricista <strong>Celso Ternes Leal</strong> é um desses nomes. Com uma carreira que se confunde com a própria modernização da rede elétrica de Santa Catarina, Leal consolidou-se como uma referência em sistemas de distribuição e um defensor incansável da valorização profissional.
            </p>
            <p>
              Graduado em Engenharia Elétrica pela <strong>Universidade Federal de Santa Catarina (UFSC)</strong>, um dos polos de excelência do setor no país, Celso Ternes Leal construiu sua base técnica em uma época de expansão crítica da eletrificação no estado. Não se contentando apenas com a graduação, buscou especializações focadas em <strong>Distribuição de Energia Elétrica</strong>, uma área que exige um equilíbrio fino entre cálculo pesado e gestão logística.
            </p>
            <div className="bg-slate-50 p-6 border-l-2 border-slate-200">
              <h3 className="font-serif font-bold text-xl mb-2 text-slate-800">Três Décadas de CELESC</h3>
              <p>
                A espinha dorsal da carreira de Leal foi sua atuação por mais de 30 anos na <strong>Centrais Elétricas de Santa Catarina (Celesc)</strong>. Para um engenheiro de carreira, três décadas em uma concessionária deste porte significam vivenciar todas as transformações tecnológicas do setor — da era eletromecânica à digitalização das redes.
              </p>
              <p className="mt-4 font-medium text-amber-700 italic">
                "Durante seu tempo na estatal, Leal não foi apenas um executor de projetos, mas um agente de inovação."
              </p>
            </div>
            <p>
              Ele esteve envolvido diretamente no planejamento e na expansão da capacidade energética que sustentou o crescimento industrial catarinense. Seu trabalho envolveu desde a concepção de subestações até a complexa gestão de redes de distribuição que atendem milhões de consumidores.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-slate-100 rounded-lg overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full mt-8 lg:mt-0"
        >
          {/* Abstract Engineering Placeholder Image */}
          <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-8 text-slate-400">
            <Network size={64} className="mb-4 text-slate-300" />
            <span className="uppercase tracking-widest text-sm font-semibold">Engenharia em Ação</span>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full opacity-30">
              <div className="h-32 bg-slate-400 rounded"></div>
              <div className="h-32 bg-slate-300 rounded translate-y-8"></div>
              <div className="h-32 bg-slate-300 rounded -translate-y-8"></div>
              <div className="h-32 bg-slate-400 rounded"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
            <p className="text-white font-serif text-lg">"A engenharia é a arte de viabilizar o futuro."</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

