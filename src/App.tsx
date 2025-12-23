import {
  Hero,
  About,
  TechnicalSection,
  LeadershipSection,
  Timeline,
  Footer
} from './components';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
       
        body {
          font-family: 'Inter', sans-serif;
        }
       
        h1, h2, h3, h4, blockquote {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
     
      <Hero />
      <About />
      <TechnicalSection />
      <LeadershipSection />
      <Timeline />
      <Footer />
    </div>
  );
}
