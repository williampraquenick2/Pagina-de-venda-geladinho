
import React from 'react';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Benefits from './components/Benefits';
import Content from './components/Content';
import Bonus from './components/Bonus';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import AIFlavorAssistant from './components/AIFlavorAssistant';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Authority />
      <Benefits />
      <Content />
      <Testimonials />
      <AIFlavorAssistant />
      <Bonus />
      <Offer />
      <Guarantee />
      <FAQ />
      <CTA />
      
      <footer className="bg-gray-900 text-white py-8 text-center px-4">
        <p className="text-sm opacity-60">
          © 2026 Sacolé Lucrativo™. Todos os direitos reservados.
          <br />
          Os resultados podem variar de pessoa para pessoa. O sucesso depende da sua dedicação.
        </p>
      </footer>
    </div>
  );
};

export default App;
