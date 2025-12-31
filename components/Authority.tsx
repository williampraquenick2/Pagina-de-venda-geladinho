
import React, { useState, useEffect } from 'react';

const Authority: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://i.imgur.com/3sathKg.jpeg",
    "https://i.imgur.com/mTsq5w9.jpeg",
    "https://i.imgur.com/SBdxcTA.jpeg",
    "https://i.imgur.com/lV7tHox.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const pains = [
    "Sente pressão para conseguir renda extra urgente",
    "Quer aproveitar o Carnaval, mas não sabe o que vender",
    "Acredita que precisa de muito dinheiro para começar",
    "Tem medo de investir e perder o pouco que tem",
    "Já tentou outras formas de ganhar dinheiro e se frustrou"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Você não está sem sorte. <br/><span className="text-pink-600">Está sem o método certo.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Todos os anos é a mesma cena: ruas lotadas, blocos cheios, pessoas felizes — e dinheiro circulando o tempo todo. 
            Enquanto muitos lucram, a maioria apenas assiste as oportunidades passarem.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mb-16">
          <p className="text-xl font-bold text-gray-800 mb-6">Talvez você se reconheça aqui:</p>
          <ul className="space-y-4">
            {pains.map((pain, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-pink-500 text-xl">❌</span>
                <span className="text-gray-700 md:text-lg">{pain}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xl font-bold text-pink-600">👉 Isso não é falta de capacidade. É falta de direção.</p>
        </div>

        <div className="text-center">
          <div className="inline-block p-1 carnival-gradient rounded-3xl shadow-2xl w-full">
            <div className="bg-white px-6 py-10 md:px-8 md:py-12 rounded-[1.4rem]">
              <h3 className="text-3xl md:text-4xl font-black text-pink-600 mb-4 uppercase tracking-tighter">Método Sacolé Lucrativo™</h3>
              <p className="text-lg text-gray-600 mb-8 font-medium">
                Validado na prática. Criado para iniciantes. Focado em resultado real.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100 group hover:bg-pink-100 transition-colors">
                  <span className="block font-black text-pink-700 text-lg mb-1 uppercase">🧠 Estratégias Reais</span>
                  <span className="text-sm text-pink-800/80">Baseado no que vendedores ambulantes experientes usam todos os anos para dominar as ruas.</span>
                </div>
                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 group hover:bg-yellow-100 transition-colors">
                  <span className="block font-black text-orange-700 text-lg mb-1 uppercase">🍹 Mix Alcoólico Premium</span>
                  <span className="text-sm text-orange-800/80">Receitas secretas que as pessoas procuram desesperadamente no calor intenso dos blocos.</span>
                </div>
              </div>

              {/* Image Carousel - Ajustado para exibir imagens inteiras */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square sm:aspect-video bg-gray-50 border border-gray-100">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((img, idx) => (
                    <div key={idx} className="min-w-full h-full flex items-center justify-center p-2">
                      <img 
                        src={img} 
                        alt={`Sacolé Exemplo ${idx + 1}`} 
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Dots Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentSlide === idx ? 'bg-pink-600 w-6' : 'bg-pink-200'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="mt-6 text-sm text-gray-400 font-medium italic">
                Aprenda a produzir sacolés irresistíveis como estes e lucre muito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
