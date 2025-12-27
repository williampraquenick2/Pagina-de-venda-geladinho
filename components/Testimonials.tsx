
import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://i.imgur.com/RTOlItJ.png",
    "https://i.imgur.com/3ij687b.png",
    "https://i.imgur.com/9liA9pK.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 uppercase tracking-tight text-gray-900">
          Vejam o que nossos <span className="text-pink-600">alunos</span> estão dizendo..
        </h2>

        <div className="relative group max-w-2xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-gray-100 bg-gray-50 aspect-[3/4] md:aspect-video">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="min-w-full h-full flex items-center justify-center bg-gray-50">
                  <img 
                    src={img} 
                    alt={`Depoimento ${idx + 1}`} 
                    className="max-h-full max-w-full object-contain p-2"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-pink-600 w-8' : 'bg-gray-300 w-3'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 font-medium italic">
              Resultados reais de quem aplicou o método e transformou o carnaval em lucro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
