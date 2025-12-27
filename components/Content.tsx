
import React from 'react';

const Content: React.FC = () => {
  const modules = [
    { title: "🍹 10 receitas alcoólicas", desc: "As combinações que mais vendem no Carnaval." },
    { title: "💵 Precificação Lucrativa", desc: "Como cobrar para cobrir custos e ter lucro real." },
    { title: "🛒 Onde Comprar Barato", desc: "Dicas para economizar nos ingredientes." },
    { title: "📍 Pontos Estratégicos", desc: "Onde e quando estar para vender tudo." },
    { title: "❄️ Conservação Segura", desc: "Como manter tudo gelado por horas na rua." },
    { title: "🚀 Técnicas de Venda", desc: "Gatilhos mentais para zerar o estoque rápido." },
    { title: "📊 Planilha Profissional", desc: "Controle total das suas finanças." },
    { title: "📱 Divulgação Gratuita", desc: "Use as redes sociais a seu favor." }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase">O Que Você Vai Aprender</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {modules.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-pink-50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-black text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 uppercase">Para quem é?</h3>
            <ul className="space-y-2 opacity-80">
              <li>✔ Pessoas comuns em busca de renda extra</li>
              <li>✔ Quem mora em cidades com blocos e festas</li>
              <li>✔ Quem busca algo simples e prático</li>
            </ul>
          </div>
          <div className="h-px w-full md:w-px md:h-24 bg-white/20"></div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-2 uppercase text-red-500">Para quem NÃO é?</h3>
            <ul className="space-y-2 opacity-80">
              <li>❌ Quem busca dinheiro fácil sem esforço</li>
              <li>❌ Quem não segue instruções</li>
              <li>❌ Quem espera enriquecimento imediato</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
