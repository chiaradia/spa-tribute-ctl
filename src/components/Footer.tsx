export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-8 sm:py-12 md:py-16 border-t border-slate-800 w-full overflow-x-hidden">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl w-full">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
        <div>
          <h4 className="text-white font-serif text-lg mb-6 border-b border-amber-600 inline-block pb-2">Formação</h4>
          <p className="text-sm leading-relaxed">Engenheiro Eletricista pela UFSC com especializações em Distribuição de Energia Elétrica.</p>
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-6 border-b border-amber-600 inline-block pb-2">Inovação</h4>
          <p className="text-sm leading-relaxed">Pioneiro em Redes Subterrâneas e Automação Smart Grid (Caso Via Gastronômica/Joinville).</p>
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-6 border-b border-amber-600 inline-block pb-2">Liderança</h4>
          <p className="text-sm leading-relaxed">Ex-Presidente da ACE e Ex-Vice-Presidente do CREA-SC. Defensor da valorização profissional.</p>
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-6 border-b border-amber-600 inline-block pb-2">Carreira</h4>
          <p className="text-sm leading-relaxed">+30 anos de atuação na Celesc e fundador da CEMAED Engenharia.</p>
        </div>
      </div>
    
      <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 text-center md:text-left gap-2">
        <p>&copy; {new Date().getFullYear()} Tributo Profissional.</p>
        <p className="md:mt-0">Artigo redigido por Especialista em Setor Elétrico. Baseado na trajetória de Celso Ternes Leal.</p>
      </div>
    </div>
  </footer>
);

