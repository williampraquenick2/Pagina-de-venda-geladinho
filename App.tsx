import React from 'react';
import Hero from './components/Hero.tsx';
import Authority from './components/Authority.tsx';
import Benefits from './components/Benefits.tsx';
import Content from './components/Content.tsx';
import Bonus from './components/Bonus.tsx';
import Offer from './components/Offer.tsx';
import Guarantee from './components/Guarantee.tsx';
import FAQ from './components/FAQ.tsx';
import CTA from './components/CTA.tsx';
import Testimonials from './components/Testimonials.tsx';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Authority />
      <Benefits />
      <Content />
      <Testimonials />
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