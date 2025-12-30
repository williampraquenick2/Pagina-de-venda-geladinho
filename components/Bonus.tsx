
import React from 'react';

const Bonus: React.FC = () => {
  const bonuses = [
    { title: "🎁 Checklist do Vendedor", val: 27, desc: "Tudo o que você precisa levar para a rua sem esquecer absolutamente nada." },
    { title: "🎁 Planilha de Lucros", val: 47, desc: "Ferramenta automática para calcular seu lucro diário e estoque." },
    { title: "🎁 Guia de Pontos de Venda", val: 37, desc: "Onde se posicionar em cada tipo de evento para máxima visibilidade." },
    { title: "🎁 Script de Abordagem Mestre", val: 37, desc: "O que dizer para convencer grupos grandes a comprarem de você." },
    { title: "🎁 Guia de Embalagens Criativas", val: 27, desc: "Como deixar seu produto irresistível visualmente sem gastar muito." },
    { title: "🎁 Comunidade VIP 2027", val: 97, desc: "Acesso ao grupo de suporte para trocar experiências com outros vendedores." }
  ];

  const totalValue = bonuses.reduce((acc, curr) => acc + curr.val, 0);

  return (
    <section className="py-20 px-4 bg-yellow-400">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase mb-4 tracking-tighter">Bônus Exclusivos</h2>
          <p className="text-black/80 text-xl font-bold">Aproveite agora: Tudo isso incluso apenas nesta oferta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">Grátis</div>
              <h4 className="text-xl font-black text-gray-900 mb-2 leading-tight">{bonus.title}</h4>
              <p className="text-pink-600 text-sm font-bold mb-4">Valor original: R$ {bonus.val},00</p>
              <p className="text-gray-700 leading-tight text-sm md:text-base">{bonus.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-black/10 p-10 rounded-[3rem] border-2 border-dashed border-black/20">
          <p className="text-2xl md:text-3xl font-black text-black mb-2 uppercase">
            VALOR TOTAL EM BÔNUS: <span className="line-through opacity-60">R$ {totalValue},00</span>
          </p>
          <p className="text-5xl md:text-7xl font-black text-pink-600 animate-pulse drop-shadow-sm">HOJE: R$ 0,00</p>
        </div>
      </div>
    </section>
  );
};

export default Bonus;