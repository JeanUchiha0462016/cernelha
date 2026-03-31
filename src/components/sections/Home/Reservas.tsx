// src/components/sections/Home/Reservas.tsx
import iconeCarta from '../../../assets/home/reservas/icones/icone-da-parte-a-carta.png';
import touroPng from '../../../assets/home/touro/tourro.png';

interface ReservasProps {
  onOpenReservation: (type: 'carta' | 'grupo') => void;
}

export function Reservas({ onOpenReservation }: ReservasProps) {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section id="reservas" className="w-full bg-[#69151f] py-12 px-6 flex justify-center items-center">
      <div className="max-w-5xl w-full">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-10">
          <h2 style={cinzel} className="text-white text-[38px] md:text-[45px] leading-tight uppercase mb-4">
            Reservas
          </h2>
          
          {/* DIVISOR COM O TOURO */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-[1px] bg-white/30"></div>
            <img 
              src={touroPng} 
              alt="Touro Cernelha" 
              className="h-8 md:h-10 w-auto object-contain" 
            />
            <div className="w-16 h-[1px] bg-white/30"></div>
          </div>

          <p style={montserrat} className="text-white text-[14px] md:text-[15px] font-light tracking-wide opacity-90">
            Faz as tuas reservas e marca já a tua mesa.
          </p>
        </div>

        {/* GRID DE CARDS - RETÂNGULOS DEITADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: À Carta */}
          <div 
            onClick={() => onOpenReservation('carta')}
            className="cursor-pointer bg-[#f4f2ee] rounded-[25px] border-[8px] border-[#05402d] p-5 md:p-6 flex items-center justify-between group hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            <div className="flex-1 pr-4">
              <h3 style={montserrat} className="text-[24px] md:text-[28px] font-bold text-black mb-1">Á Carta</h3>
              <p style={montserrat} className="text-black text-[11px] md:text-[12px] leading-snug max-w-[180px]">
                Reserva normal, escolha do prato através da carta, no restaurante.
              </p>
            </div>
            
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0">
              <img 
                src={iconeCarta} 
                alt="Ícone À Carta" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          {/* Card 2: Grupo */}
          <div 
            onClick={() => onOpenReservation('grupo')}
            className="cursor-pointer bg-[#f4f2ee] rounded-[25px] border-[8px] border-[#05402d] p-5 md:p-6 flex items-center justify-between group hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            <div className="flex-1 pr-4">
              <h3 style={montserrat} className="text-[24px] md:text-[28px] font-bold text-black mb-1">Grupo</h3>
              <p style={montserrat} className="text-black text-[11px] md:text-[12px] leading-snug max-w-[180px]">
                Reserva coletiva com menu pre-defenido e preço p/pessoa estipulado.
              </p>
            </div>
            
            <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0">
               <img 
                src={touroPng} 
                alt="Touro Grupo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}