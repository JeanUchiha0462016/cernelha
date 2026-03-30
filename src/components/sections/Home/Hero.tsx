// src/components/sections/Home/Hero.tsx
import heroBg from '/src/assets/home/hero/fotos/elementossiteacernelha1.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  const allura = { fontFamily: "'Allura', cursive" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section 
      /* Reduzi a altura para 75vh e ajustei os paddings para ser mais compacto */
      className="relative w-full h-[75vh] flex items-end justify-start px-8 md:px-24 lg:px-32 pb-16 md:pb-24"
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-start gap-6 max-w-3xl">
        
        {/* Título: Reduzido ligeiramente para 52px para equilibrar com a nova altura */}
        <h1 
          style={allura}
          className="text-white text-[48px] md:text-[52px] leading-none drop-shadow-xl"
        >
          O melhor do ribatejo
        </h1>
        
        {/* Botão: Padding e fonte mais contidos */}
        <button 
          onClick={onOpenReservation}
          style={cinzel}
          className="bg-[#05402d] text-white text-[18px] md:text-[20px] px-8 py-3 tracking-[0.1em] uppercase hover:bg-[#043324] transition-all shadow-2xl rounded-sm"
        >
          Marcações
        </button>

      </div>
    </section>
  );
}