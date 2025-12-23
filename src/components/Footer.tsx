export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
    
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Tributo Profissional.</p>
        <p className="mt-2 md:mt-0">Artigo redigido por Especialista em Setor Elétrico. Baseado na trajetória de Celso Ternes Leal.</p>
      </div>
    </div>
  </footer>
);

