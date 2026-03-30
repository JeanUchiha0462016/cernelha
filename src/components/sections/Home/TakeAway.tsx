// src/components/sections/Home/TakeAway.tsx

import fotoMotoboy from "../../../assets/home/takeaway.tsx/foto/motoboy.jpg";
import fotoPrato from "../../../assets/home/takeaway.tsx/foto/prato.png";

// Importação dos ícones
import iconeLigar from "../../../assets/home/takeaway.tsx/icone/ligar.jpg";
import iconeVerCarta from "../../../assets/home/takeaway.tsx/icone/ver carta.jpg";

export function TakeAway() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section 
      id="takeaway" 
      className="relative w-full bg-[#69151f] py-24 md:py-32 flex justify-center overflow-hidden min-h-[750px]"
    >
      
      {/* 1. BLOCO DE TEXTO CENTRALIZADO */}
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center z-10">
        
        <div className="w-full md:w-[45%] md:translate-x-[-13%] flex flex-col items-center text-center">
          
          <span 
            style={{ ...montserrat, fontSize: '11px' }} 
            className="text-white font-bold tracking-[0.8em] uppercase mb-4 opacity-90"
          >
            L E V A N T A M E N T O S
          </span>
          
          <h2 
            style={{ ...cinzel, fontSize: '33.9px' }} 
            className="text-white leading-tight uppercase mt-2 mb-6"
          >
            TEMOS TAKE AWAY
          </h2>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
          </div>

          <p 
            style={montserrat} 
            className="text-white text-[14px] font-bold mb-8 normal-case tracking-normal"
          >
            Leve o melhor da nossa tradição para casa!
          </p>

          <div 
            style={{ ...montserrat, fontSize: '10px' }} 
            className="space-y-4 mb-12 text-white uppercase tracking-[0.15em] leading-relaxed flex flex-col items-start"
          >
            <div className="flex items-center gap-3">
              <span className="text-[8px]">▶</span> 
              <p>Consulte a nossa carta e escolha o seu pedido</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[8px]">▶</span> 
              <p>Entre em contato connosco para pedir o seu take away</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[8px]">▶</span> 
              <p>Levante o seu pedido no restaurante</p>
            </div>
          </div>

          {/* BOTÕES COM "CROP" POR CÓDIGO */}
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            
            {/* Botão Ligar */}
            <div className="w-[180px] h-[70px] overflow-hidden rounded-xl shadow-2xl group cursor-pointer">
              <img 
                src={iconeLigar} 
                alt="Ligar" 
                /* scale-[1.4] faz a parte verde crescer e "esmagar" o vermelho para fora da borda */
                className="w-full h-full object-cover scale-[1.4] transition-transform duration-300 group-hover:scale-[1.5]"
              />
            </div>
            
            {/* Botão Ver Carta */}
            <div className="w-[180px] h-[70px] overflow-hidden rounded-xl shadow-2xl group cursor-pointer">
              <img 
                src={iconeVerCarta} 
                alt="Ver Carta" 
                className="w-full h-full object-cover scale-[1.4] transition-transform duration-300 group-hover:scale-[1.5]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* 2. MOLDURA DO MOTOBOY */}
      <div className="absolute right-[-5%] top-[15%] w-[65%] h-[400px] md:h-[500px] bg-[#05402d] rounded-l-full flex items-center pl-3 shadow-2xl z-0 overflow-hidden">
        <div className="w-full h-[94%] rounded-l-full overflow-hidden">
          <img 
            src={fotoMotoboy} 
            alt="Serviço Take Away" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            style={{ objectPosition: 'center 10%' }} 
          />
        </div>
      </div>

      {/* 3. FOTO DO PRATO */}
      <div className="absolute right-[-4px] bottom-[3px] w-[300px] md:w-[480px] pointer-events-none z-20">
        <img 
          src={fotoPrato} 
          alt="Prato Tradicional" 
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
        />
      </div>

    </section>
  );
}