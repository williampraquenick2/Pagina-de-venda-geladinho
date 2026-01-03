
import React from 'react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-3xl max-h-[95vh] md:max-h-[90vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row border-4 border-yellow-400 overflow-y-auto">
        
        {/* Botão Fechar - Fixo no topo com maior destaque para mobile */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 z-50 bg-black/40 hover:bg-black/60 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white font-bold transition-colors shadow-lg"
        >
          ✕
        </button>

        {/* Lado Esquerdo: Oferta Básica (Mais compacto no mobile) */}
        <div className="flex-1 p-4 md:p-6 bg-gray-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Plano Inicial</span>
          <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3 uppercase text-center leading-none">Sacolé Básico</h3>
          <ul className="text-[10px] md:text-xs space-y-0.5 md:space-y-1.5 mb-4 md:mb-6 text-gray-600 font-bold text-center">
            <li>✔ +30 Receitas Alcoólicas</li>
            <li>✔ Guia de Precificação</li>
            <li>✔ Técnicas de Conservação</li>
          </ul>
          <div className="text-center">
            <span className="block text-gray-400 line-through text-[10px] md:text-xs">R$ 97,00</span>
            <span className="block text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-5">R$ 9,90</span>
            <a 
              href="https://pay.cakto.com.br/q5n674x_703600"
              className="inline-block bg-gray-200 text-gray-800 px-5 py-2 md:px-6 md:py-2.5 rounded-xl font-black uppercase text-[9px] md:text-[11px] hover:bg-gray-300 transition-colors"
            >
              Escolher Básico
            </a>
          </div>
        </div>

        {/* Lado Direito: Oferta PREMIUM (Destaque) */}
        <div className="flex-[1.2] p-4 pb-8 md:p-8 bg-gray-900 text-white relative overflow-hidden flex flex-col items-center">
          {/* Selo Recomendado - Ajustado para não sobrepor o fechar no mobile */}
          <div className="absolute top-0 right-0 bg-yellow-400 text-black px-5 py-1 font-black text-[7px] md:text-[10px] uppercase tracking-tighter transform rotate-45 translate-x-6 translate-y-3 shadow-lg z-10">
            VIP
          </div>
          
          <span className="bg-yellow-400 text-black px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-2 md:mb-3 inline-block">
            Oferta Imperdível
          </span>
          <h3 className="text-2xl md:text-4xl font-black mb-1 uppercase italic text-yellow-400 tracking-tighter text-center leading-none">PREMIUM VIP</h3>
          <p className="text-[9px] md:text-[11px] text-gray-400 mb-4 md:mb-6 uppercase font-black text-center">Acesso Completo + Bônus de Elite</p>

          <div className="w-full bg-white/5 p-3 md:p-5 rounded-xl border border-white/10 mb-4 md:mb-6">
            <h4 className="text-yellow-400 font-black text-[9px] md:text-[11px] uppercase mb-2 md:mb-3 flex items-center gap-2">
              🚀 CONTEÚDO EXCLUSIVO:
            </h4>
            <ul className="text-[10px] md:text-[11px] space-y-2 md:space-y-4 font-bold leading-tight">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>MÉTODO ESCALA: Lucro alto sem sair de casa com equipe própria.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>AULA MESTRE: A 2ª forma oculta de fazer dinheiro no Carnaval.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">★</span> 
                <span>ESTRATÉGIA 40 MIN: O segredo para zerar o estoque recorde.</span>
              </li>
            </ul>
          </div>

          <div className="mt-auto text-center w-full">
            <span className="block text-gray-500 line-through text-[9px] md:text-[11px] mb-1">Valor Real: R$ 197,00</span>
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                <span className="text-4xl md:text-5xl font-black text-white leading-none">R$ 14,90</span>
                <span className="text-[8px] md:text-[9px] text-gray-400 font-bold uppercase leading-none text-left">Pagamento<br/>Único</span>
            </div>
            
            <a 
              href="https://pay.cakto.com.br/cskjvqo"
              className="block w-full bg-yellow-400 text-black py-4 md:py-5 rounded-xl font-black text-lg md:text-xl uppercase tracking-widest shadow-[0_4px_0_rgb(202,138,4)] hover:shadow-[0_2px_0_rgb(202,138,4)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all border-2 border-yellow-500 animate-pulse text-center leading-none"
            >
              QUERO ACESSO PREMIUM
            </a>
            <p className="mt-2 md:mt-3 text-[7px] md:text-[9px] text-gray-500 font-bold uppercase tracking-wider">Acesso imediato enviado por e-mail</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PremiumModal;
