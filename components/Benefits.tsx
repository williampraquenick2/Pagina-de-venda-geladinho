
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Método testado",
      description: "Validado por pequenos vendedores em períodos sazonais de alta demanda.",
      icon: "🧠"
    },
    {
      title: "Aplicação rápida",
      description: "Siga o passo a passo e tenha seus primeiros produtos prontos em poucas horas.",
      icon: "⚡"
    },
    {
      title: "Baixo risco",
      description: "Investimento inicial a partir de R$100. Perfeito para quem não quer arriscar muito.",
      icon: "💰"
    },
    {
      title: "Processo guiado",
      description: "Você não precisa pensar em nada. Apenas siga o roteiro e execute.",
      icon: "📋"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase">Por que funciona?</h2>
          <p className="text-gray-600 text-lg">Esqueça a teoria. Aqui focamos no que traz dinheiro rápido.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
