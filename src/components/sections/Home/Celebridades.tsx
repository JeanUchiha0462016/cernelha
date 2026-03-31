// src/components/sections/Home/Celebridades.tsx
import { useState, useEffect, useRef } from 'react';
import imgTouro from '../../../assets/home/touro/tourro.png';

// Importação das fotos
import imgFlavio from '../../../assets/home/celebridades/fotos/flacio-furtado.jpg';
import imgMiguel from '../../../assets/home/celebridades/fotos/miguel-rocha-vieira.jpg';
import imgSonia from '../../../assets/home/celebridades/fotos/sonia-taraves.jpg';
import imgTony from '../../../assets/home/celebridades/fotos/tony-carreira.jpg';

const celebridades = [
  { id: 1, nome: "FLÁVIO FURTADO", cargo: "Apresentador", bio: "Conhecida cara da televisão portuguesa e presença habitual nos ecrãs nacionais.", imagem: imgFlavio },
  { id: 2, nome: "MIGUEL ROCHA VIEIRA", cargo: "Chef", bio: "Chefe português com 3 estrelas michelin e um dos maiores embaixadores da nossa gastronomia.", imagem: imgMiguel },
  { id: 3, nome: "SÓNIA TAVARES", cargo: "Vocalista The Gift", bio: "Cantora icónica da banda The Gift, uma das vozes mais potentes de Portugal.", imagem: imgSonia },
  { id: 4, nome: "TONY CARREIRA", cargo: "Cantor", bio: "O maior nome da música romântica em Portugal, com uma carreira de décadas cheia de sucessos.", imagem: imgTony }
];

export function Celebridades() {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  // Centraliza no 2º item ao carregar
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current && window.innerWidth < 768) {
        const container = scrollRef.current;
        const target = container.children[1] as HTMLElement;
        if (target) {
          const offset = target.offsetLeft - (container.offsetWidth / 2) + (target.offsetWidth / 2);
          container.scrollTo({ left: offset, behavior: 'smooth' });
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, i) => {
      const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  };

  // Mouse Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="celebridades" className="w-full bg-[#f4f2ee] py-16 md:py-24 overflow-hidden">
      
      <div className="text-center mb-12 px-6">
        <span style={montserrat} className="text-[#05402d] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">Curiosidades</span>
        <h2 style={cinzel} className="text-[#69151f] text-3xl md:text-4xl font-bold uppercase mb-4">Celebridades</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[#05402d]/40"></div>
          <img src={imgTouro} alt="Touro" className="h-6 w-auto mix-blend-multiply" />
          <div className="w-12 h-[1px] bg-[#05402d]/40"></div>
        </div>
        <p style={montserrat} className="text-[#69151f] text-[13px] italic opacity-80 max-w-sm mx-auto">Algumas caras conhecidas que já visitaram o nosso espaço.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={() => setIsDown(false)}
          onMouseLeave={() => setIsDown(false)}
          onMouseMove={handleMouseMove}
          className="
            flex md:grid md:grid-cols-4 gap-6 md:gap-8
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            px-[15%] md:px-8 pb-12 no-scrollbar
            cursor-grab active:cursor-grabbing
          "
        >
          {celebridades.map((pessoa, index) => (
            <div 
              key={pessoa.id} 
              className={`
                min-w-[75vw] md:min-w-0 relative snap-center transition-all duration-500
                ${index === activeIndex ? 'scale-105 opacity-100' : 'scale-95 opacity-40 blur-[0.5px] md:blur-0 md:opacity-100'}
              `}
            >
              <div className="aspect-[3/4] overflow-hidden shadow-2xl bg-white mb-6 rounded-sm pointer-events-none">
                <img src={pessoa.imagem} alt={pessoa.nome} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left px-2">
                <h3 style={cinzel} className="text-[#69151f] text-lg md:text-xl font-bold uppercase mb-1">{pessoa.nome}</h3>
                <p style={montserrat} className="text-[#05402d] text-[10px] font-bold italic uppercase mb-3 tracking-widest">{pessoa.cargo}</p>
                <p style={montserrat} className="text-[#69151f] text-[12px] leading-relaxed opacity-90">{pessoa.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS Mobile */}
        <div className="flex justify-center gap-3 mt-4 md:hidden">
          {celebridades.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#69151f] w-6' : 'bg-gray-300 w-1.5'}`}></div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}