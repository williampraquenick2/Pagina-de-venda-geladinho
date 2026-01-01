
import React from 'react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-16 md:py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div id="offer-card" className="bg-white text-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 text-center shadow-2xl relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 left-0 w-full h-2 carnival-gradient"></div>
          
          <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight leading-none">Oferta de Lançamento</h2>
          <p className="text-base md:text-xl mb-8 md:mb-10 text-gray-600 max-w-2xl mx-auto">
            Este material é atualizado para o Carnaval 2026. O acesso com este valor é <strong>extremamente limitado</strong>.
          </p>

          <div className="mb-8 md:mb-10">
            <span className="text-lg md:text-2xl text-red-500 line-through font-bold opacity-60 block">De R$ 97,00</span>
            <span className="text-5xl md:text-8xl font-black text-pink-600 block my-1 md:my-2">R$ 14,90</span>
            <span className="text-sm md:text-xl font-bold text-gray-400 block uppercase tracking-widest">Pagamento Único</span>
          </div>

          <ul className="text-left max-w-xs md:max-w-md mx-auto space-y-3 md:space-y-4 mb-10 md:mb-12 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-2xl">✓</span>
              <span className="font-bold">Acesso Vitalício e Imediato</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-2xl">✓</span>
              <span className="font-bold">Conteúdo Completo Passo a Passo</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-2xl">✓</span>
              <span className="font-bold">6 Bônus Exclusivos Inclusos</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-lg md:text-2xl">✓</span>
              <span className="font-bold">Sem mensalidades</span>
            </li>
          </ul>

          <a 
            href="https://pay.cakto.com.br/q5n674x_703600"
            className="block w-full bg-pink-600 text-white font-black py-5 md:py-6 rounded-2xl text-xl md:text-3xl uppercase shadow-xl hover:bg-pink-700 active:scale-95 transition-all mb-6 text-center no-underline"
          >
            Quero começar agora!
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 opacity-50 px-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="grayscale h-4 md:h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="grayscale h-3 md:h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="grayscale h-5 md:h-6" />
            <div className="w-full md:w-auto text-[10px] md:text-xs font-bold uppercase tracking-wider">Checkout 100% Seguro</div>
          </div>
        </div>

        <div className="mt-10 text-center opacity-70 px-6">
          <p className="text-xs md:text-sm">⚠️ Restam apenas 12 vagas com o bônus da Planilha Profissional e Grupo VIP hoje.</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
