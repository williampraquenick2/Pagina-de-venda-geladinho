
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter experiência com vendas?",
      answer: "Absolutamente não. O método foi desenhado para quem nunca vendeu nem água na rua. Ensinamos como abordar, como precificar e como fechar vendas no impulso."
    },
    {
      question: "Quanto eu preciso investir para começar?",
      answer: "Você pode começar com apenas R$100,00 para comprar os primeiros ingredientes e materiais básicos (saquinhos, funil e o isopor/cooler)."
    },
    {
      question: "Como recebo o acesso ao material?",
      answer: "O envio é imediato e automático. Assim que seu pagamento for confirmado, você receberá um link de acesso no seu e-mail cadastrado."
    },
    {
      question: "É seguro vender na rua?",
      answer: "No material damos dicas de segurança, como escolher pontos movimentados e horários estratégicos, além de como lidar com a fiscalização local."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
