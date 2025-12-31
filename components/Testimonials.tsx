
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
    <section className="py-16 md:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black text-center mb-10 md:mb-12 uppercase tracking-tight text-gray-900 leading-tight">
          Vejam o que nossos <span className="text-pink-600">alunos</span> estão dizendo..
        </h2>

        <div className="relative group max-w-2xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-3xl shadow-xl border border-gray-100 bg-gray-50 aspect-[4/5] sm:aspect-[3/4] md:aspect-video">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="min-w-full h-full flex items-center justify-center bg-gray-50">
                  <img 
                    src={img} 
                    alt={`Depoimento ${idx + 1}`} 
                    className="max-h-full max-w-full object-contain p-4 md:p-6"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Hidden on small mobile */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
            >
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
            >
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-pink-600 w-6 md:w-8' : 'bg-gray-300 w-2 md:w-3'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 md:mt-8 px-4">
            <p className="text-sm md:text-base text-gray-500 font-medium italic leading-relaxed">
              "Resultados reais de quem aplicou o método e transformou o carnaval em lucro."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;