// src/components/sections/Home/Reviews.tsx
import { useState, useEffect, useRef } from 'react';
import iconeCarta from "../../../assets/home/reviews/icone/icone-da-parte-a-carta.png";
import imgTouro from "../../../assets/home/touro/tourro.png";

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(1); 
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const avaliacoes = [
    {
      nome: "Fernando L",
      tipo: "Cliente",
      texto: "Este restaurante tem vindo a ganhar prestígio, no Cartaxo, e vem na linha do Restaurante O Toucinho - Almeirim, no que respeita à sopa de Pedra, que era a referência da Região. Aqui ..",
      estrelas: 4,
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      nome: "Tony Serafim",
      tipo: "Guia local",
      texto: "Went here for lunch after visiting the headquarters of Casa das Peles, what a lovely surprise! Cernelha is a truly authentic Portuguese restaurant with great food and wonderful staff. We...",
      estrelas: 5,
      inicial: "T",
      corFundo: "bg-[#1a4d4e]"
    },
    {
      nome: "Shirley \"Muse Faery\" NKL",
      tipo: "Guia local",
      texto: "Delicious traditional Portuguese food! Very popular with the locals. We ate grilled octopus as the main dish and espetada de lulas e camarão (grilled squid and prawns with...",
      estrelas: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nome: "João Meijinhos",
      tipo: "Guia local",
      texto: "Good food for a low price. Portions are huge, easily feeds 2. Service is okay.",
      estrelas: 4,
      inicial: "J",
      corFundo: "bg-[#d48c2c]"
    }
  ];

  // CENTRALIZAÇÃO INICIAL (MOBILE)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current && window.innerWidth < 768) {
        const container = scrollRef.current;
        const targetChild = container.children[1] as HTMLElement; // Foca no 2º
        if (targetChild) {
          const scrollPos = targetChild.offsetLeft - (container.offsetWidth / 2) + (targetChild.offsetWidth / 2);
          container.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || isDown) return;
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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    handleScroll();
  };

  return (
    <section id="reviews" className="w-full bg-white py-16 md:py-24 flex flex-col items-center overflow-hidden relative">
      
      {/* SELO CERNALHA (DESKTOP) */}
      <div 
        className="absolute hidden xl:block z-0 pointer-events-none opacity-5"
        style={{ left: '2%', top: '5%', transform: 'rotate(-15deg)' }}
      >
        <img src={iconeCarta} alt="Selo Cernelha" className="w-64 h-auto" />
      </div>

      {/* CABEÇALHO CENTRALIZADO */}
      <div className="text-center mb-12 px-6 z-10 w-full flex flex-col items-center">
        <span style={montserrat} className="text-[#05402d] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">
          Reviews
        </span>
        <h2 style={cinzel} className="text-[#69151f] text-3xl md:text-5xl uppercase mb-4">
          Comentários
        </h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[#05402d]/30"></div>
          <img src={imgTouro} alt="Touro" className="h-7 w-auto mix-blend-multiply" />
          <div className="w-12 h-[1px] bg-[#05402d]/30"></div>
        </div>
        <p style={montserrat} className="text-[#69151f] text-[10px] md:text-[11px] font-bold tracking-widest uppercase opacity-80 max-w-sm mx-auto">
          Alguns comentários e avaliações deixados pelos nossos clientes.
        </p>
      </div>

      {/* ÁREA DOS COMENTÁRIOS */}
      <div className="w-full flex justify-center">
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
            px-[10vw] md:px-10 pb-12 no-scrollbar
            cursor-grab active:cursor-grabbing
            w-full max-w-7xl
          "
        >
          {avaliacoes.map((item, index) => (
            <div 
              key={index} 
              className={`
                min-w-[80vw] md:min-w-0 bg-[#f1efea] p-8 md:p-6 flex flex-col items-center text-center rounded-sm shadow-lg transition-all duration-500
                ${index === activeIndex ? 'scale-105 md:scale-100 z-10 opacity-100' : 'scale-95 md:scale-100 opacity-40 blur-[0.5px] md:blur-0 md:opacity-100'}
              `}
            >
              {/* AVATAR */}
              <div className="mb-6 pointer-events-none">
                {item.img ? (
                  <img src={item.img} alt={item.nome} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mx-auto" />
                ) : (
                  <div className={`w-16 h-16 rounded-full ${item.corFundo} flex items-center justify-center text-white text-xl font-bold shadow-md mx-auto`}>
                    {item.inicial}
                  </div>
                )}
              </div>

              {/* ESTRELAS */}
              <div className="flex gap-1 justify-center mb-6 text-yellow-500 text-[10px]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < item.estrelas ? "★" : "☆"}</span>
                ))}
              </div>

              {/* TEXTO */}
              <p style={montserrat} className="text-[#05402d] text-[12px] md:text-[11px] leading-relaxed mb-8 flex-1 italic opacity-90">
                "{item.texto}"
              </p>

              {/* RODAPÉ DO CARD */}
              <div className="mt-auto pointer-events-none">
                <h4 style={montserrat} className="text-[#69151f] text-[12px] font-bold uppercase tracking-tight">
                  {item.nome}
                </h4>
                <p style={montserrat} className="text-[#69151f] text-[10px] opacity-60 uppercase tracking-widest mt-1 font-medium">
                  {item.tipo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PONTOS DE NAVEGAÇÃO (MOBILE) */}
      <div className="flex justify-center gap-3 mt-4 md:hidden">
        {avaliacoes.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#69151f] w-6' : 'bg-gray-300 w-1.5'}`}
          ></div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}