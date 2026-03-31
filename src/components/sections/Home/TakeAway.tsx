// src/components/sections/Home/TakeAway.tsx
import fotoMotoboy from "../../../assets/home/takeaway.tsx/foto/motoboy.jpg";
import fotoPrato from "../../../assets/home/takeaway.tsx/foto/prato.png";
import imgTouro from "../../../assets/home/touro/tourro.png";
import { Phone } from "lucide-react";

export function TakeAway() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const ticketClip = {
    clipPath: "polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%)"
  };

  return (
    <section id="takeaway" className="w-full bg-[#69151f] py-16 flex flex-col items-center overflow-hidden">
      
      <div className="max-w-4xl w-full px-6 flex flex-col items-center">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-8">
          <span style={montserrat} className="text-white text-[10px] font-bold tracking-[0.6em] uppercase opacity-90">
            Levantamentos
          </span>
          <h2 style={cinzel} className="text-white text-[32px] md:text-[45px] leading-tight uppercase mt-4 mb-6">
            Temos Take Away
          </h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-white/30"></div>
            <img src={imgTouro} alt="Touro" className="h-8 w-auto object-contain" />
            <div className="w-16 h-[1px] bg-white/30"></div>
          </div>
          <p style={montserrat} className="text-white text-[14px] md:text-[16px] font-light mb-12 tracking-wide">
            Leve o melhor da nossa tradição para casa!
          </p>
        </div>

        {/* LISTA DE PASSOS */}
        <div style={montserrat} className="w-full max-w-[320px] md:max-w-md space-y-4 mb-12 text-white/90 text-[12px] md:text-[13px] font-medium">
          <div className="flex items-start gap-3">
            <span className="text-white text-[10px] mt-1">▶</span> 
            <p>Consulte a nossa carta e escolha o seu pedido</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-white text-[10px] mt-1">▶</span> 
            <p>Entre em contato connosco para pedir o seu take away</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-white text-[10px] mt-1">▶</span> 
            <p>Levante o seu pedido no restaurante</p>
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex flex-row gap-4 mb-16">
          <button style={ticketClip} className="bg-[#05402d] text-white px-6 py-3 flex items-center gap-2 hover:brightness-110 transition-all shadow-xl">
            <Phone size={16} fill="white" />
            <span style={montserrat} className="font-bold text-[14px] md:text-[16px] uppercase tracking-wider">Ligar</span>
          </button>
          <button style={ticketClip} className="bg-[#05402d] text-white px-6 py-3 flex items-center justify-center hover:brightness-110 transition-all shadow-xl min-w-[130px] md:min-w-[160px]">
            <span style={montserrat} className="font-bold text-[14px] md:text-[16px] uppercase tracking-wider">Ver Carta</span>
          </button>
        </div>

        {/* MOLDURA FOTO - COMPRIMENTO AUMENTADO (w-full no mobile / w-[120%] no PC) */}
        <div className="relative w-full max-w-[380px] md:max-w-2xl translate-x-6 md:translate-x-20">
          <div className="w-[110%] md:w-[130%] aspect-[16/10] border-[6px] md:border-[10px] border-[#05402d] rounded-l-full overflow-hidden shadow-2xl">
            <img 
              src={fotoMotoboy} 
              alt="Serviço Take Away" 
              className="w-full h-full object-cover" 
              style={{ objectPosition: 'center 25%' }}
            />
          </div>

          {/* FOTO DO PRATO - AJUSTE MANUAL */}
          {/* Movi um pouco mais para a direita (-right-10) e para baixo (bottom-[-35px]) */}
          <div className="absolute -right-8 bottom-[-62px] md:-right-16 md:bottom-[-50px] w-[220px] md:w-[420px] z-20">
            <img 
              src={fotoPrato} 
              alt="Prato Take Away" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}