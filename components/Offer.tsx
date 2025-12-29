
import React from 'react';

const Offer: React.FC = () => {
  const handlePurchaseClick = () => {
    // Rastreia o evento de clique no botão de compra se o pixel estiver carregado
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <section id="offer" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div id="offer-card" className="bg-white text-gray-900 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 left-0 w-full h-2 carnival-gradient"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-none">Oferta de Lançamento</h2>
          <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Este material é atualizado para o Carnaval 2026. O acesso com este valor é <strong>extremamente limitado</strong>.
          </p>

          <div className="mb-10">
            <span className="text-2xl text-red-500 line-through font-bold opacity-60 block">De R$ 97,00</span>
            <span className="text-6xl md:text-8xl font-black text-pink-600 block my-2">R$ 19,90</span>
            <span className="text-xl font-bold text-gray-400 block uppercase tracking-widest">Pagamento Único</span>
          </div>

          <ul className="text-left max-w-md mx-auto space-y-4 mb-12">
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span className="font-bold">Acesso Vitalício e Imediato</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span className="font-bold">Conteúdo Completo (Passo a Passo)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span className="font-bold">6 Bônus Exclusivos Inclusos</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✓</span>
              <span className="font-bold">Sem mensalidades ou taxas ocultas</span>
            </li>
          </ul>

          <a 
            href="https://pay.cakto.com.br/q5n674x_703600"
            onClick={handlePurchaseClick}
            className="block w-full bg-pink-600 text-white font-black py-6 rounded-2xl text-2xl md:text-3xl uppercase shadow-xl hover:bg-pink-700 hover:scale-[1.02] transition-all mb-6 text-center no-underline"
          >
            Quero começar agora!
          </a>

          <div className="flex items-center justify-center gap-4 opacity-50">
            <img src="https://picsum.photos/id/1/40/25" alt="Mastercard" className="grayscale h-6" />
            <img src="https://picsum.photos/id/2/40/25" alt="Visa" className="grayscale h-6" />
            <img src="https://picsum.photos/id/3/40/25" alt="Pix" className="grayscale h-6" />
            <span className="text-xs font-bold">Checkout 100% Seguro</span>
          </div>
        </div>

        <div className="mt-12 text-center opacity-70">
          <p className="text-sm">⚠️ Restam apenas 12 vagas com o bônus da Planilha Profissional e Grupo VIP.</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;