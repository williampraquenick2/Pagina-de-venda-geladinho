
import React from 'react';

const Authority: React.FC = () => {
  const pains = [
    "Vê o Carnaval passar e continua com as contas apertadas",
    "Tem vontade de empreender mas morre de medo de perder dinheiro",
    "Acha que precisa de uma estrutura gigante para começar",
    "Já tentou vender algo e sentiu vergonha ou não soube o que falar"
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tighter uppercase">
            O Carnaval é uma <span className="text-pink-600 italic">máquina de dinheiro</span>, mas você está apenas assistindo.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Enquanto milhões de reais circulam nos blocos, 99% das pessoas continuam sem um plano real. O problema não é a crise, é a falta de um <span className="font-bold text-black underline">processo validado</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight">O que te trava hoje:</p>
            <ul className="space-y-4">
              {pains.map((pain, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✕</span>
                  </div>
                  <span className="text-gray-700 font-bold leading-tight">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="carnival-gradient rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col justify-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase leading-none tracking-tighter">
              A Virada de Chave: <br/><span className="text-yellow-300">Sacolé Lucrativo™</span>
            </h3>
            <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed font-bold">
              Nós transformamos a maior festa do mundo em lucro no seu bolso. Sem segredos, sem enrolação. Apenas o que funciona na rua, no calor do momento.
            </p>
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="text-3xl">🚀</span>
              <div>
                <p className="font-black text-sm uppercase leading-none">Início Imediato</p>
                <p className="text-[10px] opacity-70 font-bold uppercase">Comece a produzir hoje mesmo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
