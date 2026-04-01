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
      /* Aumentei para min-h-[120vh] para a secção ser muito mais comprida que o ecrã */
      /* O py-32 e py-40 empurram o conteúdo, esticando o layout de cima para baixo */
      className="relative w-full min-h-[110vh] md:min-h-[80vh] flex items-center justify-center md:items-end md:justify-start px-6 md:px-24 py-32 md:py-40"
      style={{
        backgroundImage: `url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll' // Garante que a foto não faz zoom ao fazer scroll
      }}
    >
      {/* Overlay fixo */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col items-center md:items-start gap-10 w-full text-center md:text-left">
        
        {/* Mantive o tamanho da letra, apenas o layout cresceu */}
        <h1 
          style={allura}
          className="text-white text-[89px] md:text-[95px] leading-[0.9] drop-shadow-2xl"
        >
          O melhor do ribatejo
        </h1>
        
        <button 
          onClick={onOpenReservation}
          style={cinzel}
          className="bg-[#05402d] text-white text-[18px] md:text-[20px] w-[80%] max-w-[300px] md:w-auto px-10 py-5 tracking-[0.2em] uppercase hover:bg-[#043324] transition-all shadow-2xl font-bold"
        >
          Marcações
        </button>

      </div>
    </section>
  );
}