
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/guarantee/400/400" 
            alt="7 Dias de Garantia" 
            className="rounded-full shadow-2xl border-4 border-yellow-400"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase">Garantia Profissional de 7 Dias</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Você testa o método por 7 dias. Se não enxergar valor real, se achar que não é para você ou se simplesmente mudar de ideia, devolvemos <strong>100% do seu dinheiro</strong>.
          </p>
          <p className="text-pink-600 font-bold text-xl uppercase tracking-wider">
            Sem perguntas. Sem risco. O peso está nas minhas costas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
