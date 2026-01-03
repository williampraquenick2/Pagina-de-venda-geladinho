
import React from 'react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-4xl max-h-[95vh] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row border-4 border-yellow-400 overflow-y-auto">
        
        {/* Botão Fechar - Fixo no topo para facilitar saída */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-black/20 hover:bg-black/40 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white md:text-black font-bold transition-colors shadow-lg"
        >
          ✕
        </button>

        {/* Lado Esquerdo: Oferta Básica */}
        <div className="flex-1 p-6 md:p-8 bg-gray-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2">Plano Inicial</span>
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4 uppercase">Sacolé Básico</h3>
          <ul className="text-xs md:text-sm space-y-1.5 md:space-y-2 mb-6 md:mb-8 text-gray-600 font-bold text-center md:text-left">
            <li>✔ +30 Receitas Alcoólicas</li>
            <li>✔ Guia de Precificação</li>
            <li>✔ Onde Comprar Barato</li>
            <li>✔ Técnicas de Conservação</li>
          </ul>
          <div className="mt-auto text-center">
            <span className="block text-gray-400 line-through text-xs md:text-sm">R$ 97,00</span>
            <span className="block text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6">R$ 9,90</span>
            <a 
              href="https://pay.cakto.com.br/q5n674x_703600"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-black uppercase text-[10px] md:text-sm hover:bg-gray-300 transition-colors"
            >
              Escolher Básico
            </a>
          </div>
        </div>

        {/* Lado Direito: Oferta PREMIUM (Destaque) */}
        <div className="flex-[1.3] p-6 md:p-12 bg-gray-900 text-white relative overflow-hidden flex flex-col items-center">
          {/* Selo Recomendado - Ajustado para mobile */}
          <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 md:px-6 md:py-1.5 font-black text-[8px] md:text-xs uppercase tracking-tighter transform rotate-45 translate-x-6 translate-y-2 md:translate-x-8 md:translate-y-4 shadow-lg">
            RECOMENDADO
          </div>
          
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4 inline-block">
            Oferta Imperdível
          </span>
          <h3 className="text-2xl md:text-5xl font-black mb-1 md:mb-2 uppercase italic text-yellow-400 tracking-tighter text-center">PREMIUM VIP</h3>
          <p className="text-[9px] md:text-sm text-gray-400 mb-6 md:mb-8 uppercase font-black text-center">Acesso Completo + 5 Super Bônus Secretos</p>

          <div className="w-full bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 mb-6 md:mb-8">
            <h4 className="text-yellow-400 font-black text-[10px] md:text-sm uppercase mb-3 md:mb-4 flex items-center gap-2">
              🚀 EXCLUSIVO DESTE PACOTE:
            </h4>
            <ul className="text-[10px] md:text-sm space-y-2.5 md:space-y-3 font-bold">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>TOP 5 RECEITAS SECRETAS (Dobram o lucro)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>GUIA DE ESCALA: Tenha seus vendedores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>PACK DE ARTES: Postagens prontas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>SUPORTE PRIORITÁRIO: WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>WORKSHOP EM VÍDEO: Preparo acelerado</span>
              </li>
            </ul>
          </div>

          <div className="mt-auto text-center w-full">
            <span className="block text-gray-500 line-through text-[10px] md:text-sm">Valor Real: R$ 197,00</span>
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="text-4xl md:text-6xl font-black text-white">R$ 14,90</span>
                <span className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase leading-tight text-left">Pagamento<br/>Único</span>
            </div>
            
            <a 
              href="https://pay.cakto.com.br/cskjvqo"
              className="block w-full bg-yellow-400 text-black py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest shadow-[0_4px_0_rgb(202,138,4)] md:shadow-[0_6px_0_rgb(202,138,4)] hover:shadow-[0_2px_0_rgb(202,138,4)] hover:translate-y-[2px] md:hover:translate-y-[4px] active:shadow-none active:translate-y-[4px] md:active:translate-y-[6px] transition-all border-2 border-yellow-500 animate-pulse text-center"
            >
              QUERO ACESSO PREMIUM
            </a>
            <p className="mt-3 md:mt-4 text-[8px] md:text-[10px] text-gray-500 font-bold uppercase">Acesso imediato enviado para o seu e-mail</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PremiumModal;
