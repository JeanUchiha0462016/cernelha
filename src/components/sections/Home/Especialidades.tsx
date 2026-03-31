// src/components/sections/Home/Especialidades.tsx
import { useState, useEffect, useRef } from 'react';
import { getEspecialidades, type Especialidade } from '../../../services/especialidades';

export function Especialidades() {
  const [pratos, setPratos] = useState<Especialidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1); // Foco no 2º prato (índice 1)
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const dados = await getEspecialidades();
        if (dados) {
          setPratos(dados);
          
          // FORÇAR O FOCO NO MEIO AO CARREGAR
          setTimeout(() => {
            if (scrollRef.current && dados.length > 1) {
              const container = scrollRef.current;
              const targetChild = container.children[1] as HTMLElement; // Segundo prato
              if (targetChild) {
                const scrollPos = targetChild.offsetLeft - (container.offsetWidth / 2) + (targetChild.offsetWidth / 2);
                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
              }
            }
          }, 300);
        }
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarEspecialidades();
  }, []);

  // Lógica de Scroll para atualizar a bolinha e o zoom
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

  // Funções de Arrastar (Drag) para PC e Mobile
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
  };

  const stopDragging = () => setIsDown(false);

  return (
    <section id="especialidades" className="w-full bg-[#f4f2ee] py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-12 px-4">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-10 md:w-14 h-[2px] bg-[#05402d]"></div>
          <span style={cinzel} className="text-[#69151f] text-xl md:text-2xl uppercase tracking-widest">
            As Nossas
          </span>
          <div className="w-10 md:w-14 h-[2px] bg-[#05402d]"></div>
        </div>
        <h2 style={cinzel} className="text-[#69151f] text-4xl md:text-5xl font-bold uppercase tracking-tight">
          Especialidades!
        </h2>
      </div>

      <div className="w-full max-w-7xl px-4">
        {loading ? (
          <div style={montserrat} className="text-center text-[#69151f] py-20 text-[11px] uppercase tracking-widest font-bold">
            A preparar iguarias...
          </div>
        ) : (
          <div className="relative">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              onMouseMove={handleMouseMove}
              className="
                flex md:grid md:grid-cols-3 gap-6 md:gap-8
                overflow-x-auto md:overflow-visible 
                snap-x snap-mandatory md:snap-none 
                no-scrollbar px-[10%] md:px-0 pb-12
                cursor-grab active:cursor-grabbing
              "
            >
              {pratos.map((prato, index) => (
                <div 
                  key={prato.id} 
                  className={`
                    min-w-[80vw] md:min-w-0 relative snap-center transition-all duration-500
                    ${index === activeIndex ? 'scale-105 md:scale-100 z-10 opacity-100' : 'scale-90 md:scale-100 opacity-40 blur-[0.5px] md:blur-0 md:opacity-100'}
                  `}
                >
                  <div className="aspect-[4/5] overflow-hidden shadow-2xl bg-white rounded-sm pointer-events-none">
                    <img 
                      src={prato.imagem} 
                      alt={prato.nome}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* CAIXA VERMELHA */}
                    <div className="absolute bottom-6 right-0 w-[85%] md:w-[80%] z-20">
                      <div className="bg-[#69151f] text-white p-5 md:p-6 shadow-xl">
                        <h3 style={cinzel} className="text-[12px] md:text-[14px] font-bold uppercase leading-tight mb-3 tracking-wide">
                          {prato.nome}
                        </h3>
                        <div className="flex items-baseline gap-0.5">
                          <span style={montserrat} className="text-xl md:text-2xl font-bold">
                            {prato.preco}
                          </span>
                          <span style={montserrat} className="text-sm">€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS (A bolinha vermelha acompanha o activeIndex) */}
            <div className="flex justify-center gap-3 mt-4 md:hidden">
              {pratos.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#69151f] w-6' : 'bg-gray-300 w-2'}`}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}