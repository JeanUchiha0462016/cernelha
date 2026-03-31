// src/components/sections/Home/Sobre.tsx
import imgTopoDireita from '../../../assets/home/sobre/fotos/Fica-no-topo-a-direita.jpg';
import imgBaixoEsquerda from '../../../assets/home/sobre/fotos/Fica-embaixo-a-esquerda-com-borda.jpeg';
import imgAssinatura from '../../../assets/home/sobre/assinatura/asssinatura.png';
import imgTouro from '../../../assets/home/touro/tourro.png';

export function Sobre() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section className="w-full bg-[#f4f2ee] py-16 md:py-24 px-6 md:px-8 flex justify-center overflow-hidden">
      
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center md:translate-x-[80px]">

        {/* COLUNA DA ESQUERDA (CONTEÚDO) */}
        <div className="flex flex-col items-center md:items-start z-10">
          
          <div className="w-full flex flex-col items-center md:items-start">
            
            <div className="w-full flex flex-col items-center mb-8 md:mb-10">
              <span
                style={montserrat}
                className="text-[#05402d] text-[11px] font-bold tracking-[0.4em] uppercase mb-4"
              >
                Sobre Nós
              </span>

              <h2
                style={cinzel}
                className="text-[#69151f] text-[28px] md:text-[34px] leading-tight uppercase mb-6 text-center"
              >
                Somos um restaurante <br className="hidden md:block" /> experiente
              </h2>

              <div className="flex items-center justify-center">
                <div className="w-10 md:w-12 h-[1px] bg-[#05402d]/40"></div>
                <div className="px-4">
                  <img 
                    src={imgTouro} 
                    alt="Touro Cernelha" 
                    className="h-6 md:h-8 w-auto object-contain mix-blend-multiply" 
                  />
                </div>
                <div className="w-10 md:w-12 h-[1px] bg-[#05402d]/40"></div>
              </div>
            </div>

            <p
              style={montserrat}
              className="text-[#69151f] text-[12px] md:text-[11px] leading-relaxed text-center md:text-justify w-full max-w-lg mb-10 md:mb-12"
            >
              O Restaurante A Cernelha é um restaurante de cozinha portuguesa que honra a nossa tradição gastronómica, privilegiando os autênticos grelhados no carvão. Somos uma referência no Ribatejo, destacando-nos pela excelente qualidade e generosas quantidades, grande variedade de pratos, atendimento simpático e preços justos. A uma extensa carta de vinhos representa orgulhosamente a cidade que nos acolhe, o Cartaxo, conhecida como capital do vinho. Trabalhamos todos os dias, incluindo feriados, para proporcionar uma verdadeira experiência da gastronomia ribatejana.
            </p>
          </div>

          <div className="w-full flex flex-col items-center md:items-start mb-12 md:mb-20">
            <img 
              src={imgAssinatura} 
              alt="Assinatura Patroa" 
              className="h-14 md:h-20 w-auto object-contain mix-blend-multiply opacity-90"
            />
            <span
              style={cinzel}
              className="text-black text-[13px] md:text-[14.9px] font-bold tracking-[0.15em] uppercase mt-2"
            >
              Ass. Patroa
            </span>
          </div>
        </div>

        {/* COLUNA DA DIREITA (FOTOS) */}
        <div className="relative h-[580px] md:h-[650px] w-full">
          
          {/* Foto Principal (Equipa) */}
          <div className="absolute top-0 left-0 md:right-0 md:left-auto w-full md:w-[80%] h-[80%] md:h-full z-10">
            <img src={imgTopoDireita} alt="Nossa Equipa" className="w-full h-full object-cover shadow-xl" />
          </div>

          {/* Badge +12 Anos */}
          <div className="absolute top-6 right-0 md:right-auto md:-left-20 md:top-[10%] bg-[#69151f] text-white py-4 px-8 md:py-8 md:px-16 flex flex-col items-center justify-center z-30 shadow-2xl min-w-max">
            <span className="text-3xl md:text-6xl font-bold mb-1">+12</span>
            <span style={cinzel} className="text-[8px] md:text-xs font-bold tracking-[0.3em] uppercase text-center leading-relaxed">
              Anos de Experiência
            </span>
          </div>

          {/* Foto Interior com Borda Verde: EXPANDIDA PARA CIMA E ESQUERDA */}
          <div className="absolute bottom-0 right-0 w-[75%] md:w-[70%] aspect-square md:right-auto md:-left-20 z-20 border-[8px] md:border-[12px] border-[#05402d] shadow-2xl overflow-hidden bg-white">
            <img src={imgBaixoEsquerda} alt="Restaurante Interior" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}