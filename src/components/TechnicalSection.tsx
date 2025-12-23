import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Award,
  BookOpen,
  Briefcase,
  HardHat,
  Network,
  Scale,
  ScrollText,
  MapPin,
  Lightbulb,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { fadeInUp } from '../constants/animations';

export const TechnicalSection = () => {
  const [activeTab, setActiveTab] = useState('case');

  const tabs = [
    { id: 'case', label: 'Case Via Gastronômica', icon: <MapPin size={18} /> },
    { id: 'innovation', label: 'Inovação em Materiais', icon: <Lightbulb size={18} /> },
    { id: 'philosophy', label: 'Filosofia & Normas', icon: <BookOpen size={18} /> },
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-amber-600">
            <Briefcase size={24} />
            <span className="uppercase tracking-widest font-bold text-sm">Competência Técnica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            A Vanguarda das Redes Subterrâneas
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Para o engenheiro Celso Ternes Leal, a rede subterrânea nunca foi apenas uma questão de estética urbana; tratava-se de uma <strong>mudança de paradigma na confiabilidade e segurança</strong> do sistema elétrico.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px]">
          <AnimatePresence mode='wait'>
            {activeTab === 'case' && (
              <motion.div
                key="case"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">O Case "Via Gastronômica" (Joinville)</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    O projeto da Rua Visconde de Taunay não foi uma simples obra de enterramento de cabos; foi um projeto piloto de <strong>Transferência Automática de Fontes</strong>. Leal e sua equipe implementaram um sistema em anel aberto operado radialmente.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="p-2 bg-amber-100 rounded-lg text-amber-700 mt-1"><Zap size={20} /></div>
                      <div>
                        <h4 className="font-bold text-slate-800">Automação</h4>
                        <p className="text-sm text-slate-600">As chaves possuem lógica descentralizada. Se uma fonte falha, o equipamento isola o trecho defeituoso e transfere a carga automaticamente.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="p-2 bg-amber-100 rounded-lg text-amber-700 mt-1"><Network size={20} /></div>
                      <div>
                        <h4 className="font-bold text-slate-800">Telemetria</h4>
                        <p className="text-sm text-slate-600">Integração via GPRS a um software SCADA, monitorando correntes e tensões no subsolo em tempo real.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex flex-col justify-center">
                  <h4 className="text-lg font-bold mb-4 text-slate-700">O Desafio Técnico</h4>
                  <p className="text-slate-600 italic mb-6">"A região demandava alta continuidade de serviço. Uma falha convencional (apagão) causaria prejuízos imediatos ao comércio local."</p>
                  <div className="w-full h-px bg-slate-200 mb-6"></div>
                  <h4 className="text-lg font-bold mb-4 text-slate-700">A Solução</h4>
                  <p className="text-slate-600">Uso de chaves seccionadoras subterrâneas de 4 vias com comando inteligente.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'innovation' && (
              <motion.div
                key="innovation"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif font-bold mb-6 text-slate-900">Inovação em Materiais e Padronização Civil</h3>
                <p className="text-slate-600 mb-8 max-w-3xl">
                  Celso foi um defensor ferrenho da padronização para reduzir o mito de que "rede subterrânea é cara demais".
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-4">
                      <HardHat size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Transformadores Pedestais</h4>
                    <p className="text-sm text-slate-600">Incentivo ao uso de equipamentos ao nível do solo (Pad-Mounted) e óleo vegetal isolante biodegradável para segurança contra incêndios.</p>
                  </div>
                  <div className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-4">
                      <TrendingUp size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Banco de Dutos PEAD</h4>
                    <p className="text-sm text-slate-600">Substituição de manilhas de concreto por dutos de Polietileno de Alta Densidade (PEAD), flexíveis e rápidos de instalar.</p>
                  </div>
                  <div className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-4">
                      <Scale size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Cabos de Alumínio</h4>
                    <p className="text-sm text-slate-600">Estudos técnicos comprovando que o uso de cabos de alumínio na Média Tensão reduz drasticamente custos e risco de furto.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Filosofia de Projeto e Normas</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-amber-700 flex items-center gap-2 mb-2"><TrendingUp size={18}/> Conceito "Flytap"</h4>
                      <p className="text-slate-600 text-sm">Sistema Radial com Recurso: Topologias que operam radialmente, mas possuem ligações com outros alimentadores para manobras rápidas.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-700 flex items-center gap-2 mb-2"><ShieldCheck size={18}/> Conectores Desconectáveis</h4>
                      <p className="text-slate-600 text-sm">Uso de terminais blindados (cotovelos) para operar a rede com segurança, facilitando testes sem grandes intervenções.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-700 flex items-center gap-2 mb-2"><ScrollText size={18}/> Visão Regulatória</h4>
                      <p className="text-slate-600 text-sm">Conformidade rigorosa com a NBR 10160 e planejamento de longo prazo (20 anos) para evitar "rasgar o asfalto" novamente.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={120} /></div>
                  <h4 className="text-xl font-serif font-bold mb-6 border-b border-amber-500 pb-2 inline-block">O "Padrão Celso"</h4>
                  <ul className="space-y-6 relative z-10">
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white shrink-0">1</div>
                      <div>
                        <p className="font-bold">Segurança Operacional</p>
                        <p className="text-xs text-slate-400">Equipamentos blindados e à prova de toque acidental.</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white shrink-0">2</div>
                      <div>
                        <p className="font-bold">Inteligência Distribuída</p>
                        <p className="text-xs text-slate-400">A rede toma decisões (Self-Healing) antes do operador humano.</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white shrink-0">3</div>
                      <div>
                        <p className="font-bold">Viabilidade Econômica</p>
                        <p className="text-xs text-slate-400">Uso inteligente de materiais para tornar o enterramento acessível.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

