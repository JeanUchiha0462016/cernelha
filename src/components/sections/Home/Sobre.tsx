// src/components/sections/Home/Sobre.tsx
import imgTopoDireita from '/src/assets/home/sobre/fotos/Fica-no-topo-a-direita.jpg';
import imgBaixoEsquerda from '/src/assets/home/sobre/fotos/Fica-embaixo-a-esquerda-com-borda.jpeg';

export function Sobre() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section className="w-full bg-[#f4f2ee] py-24 px-8 flex justify-center overflow-hidden">
      
      {/* O SEGREDO ESTÁ AQUI: 
          Adicionei 'md:translate-x-[80px]'. 
          Isto move a grelha inteira (texto + fotos) para a direita como um bloco só.
      */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-stretch md:translate-x-[80px]">

        {/* COLUNA DA ESQUERDA (TEXTO) 
            Repus as margens originais para não deformar o layout interno.
        */}
        <div className="flex flex-col justify-between z-10 pt-16 pb-4">
          <div className="w-full flex flex-col items-start text-left">
            <div className="w-full flex flex-col items-center md:items-start mb-5">
              <span
                style={montserrat}
                className="text-[#05402d] text-[11px] font-bold tracking-[0.4em] uppercase mb-4"
              >
                Sobre Nós
              </span>

              <h2
                style={cinzel}
                className="text-[#69151f] text-[34px] leading-tight uppercase mb-6 text-center md:text-left"
              >
                Somos um restaurante <br /> experiente
              </h2>

              <div className="flex items-center justify-center md:justify-start mb-8">
                <div className="w-12 h-[1px] bg-[#05402d]/40"></div>
                <div className="px-4 text-[#05402d] text-2xl">🐂</div>
                <div className="w-12 h-[1px] bg-[#05402d]/40"></div>
              </div>
            </div>

            <p
              style={montserrat}
              className="text-[#69151f] text-[11px] leading-relaxed text-justify w-full max-w-lg mb-12"
            >
              O Restaurante A Cernelha é um restaurante de cozinha portuguesa que honra a nossa tradição gastronómica, privilegiando os autênticos grelhados no carvão. Somos uma referência no Ribatejo, destacando-nos pela excelente qualidade e generosas quantidades, grande variedade de pratos, atendimento simpático e preços justos. A nossa extensa carta de vinhos representa orgulhosamente a cidade que nos acolhe, o Cartaxo, conhecida como capital do vinho. Trabalhamos todos os dias, incluindo feriados, para proporcionar uma verdadeira experiência da gastronomia ribatejana.
            </p>
          </div>

          <div className="w-full flex flex-col items-start md:mb-20">
            <span className="text-4xl md:text-5xl text-gray-800" style={{ fontFamily: 'cursive' }}>
              Assinatura
            </span>
            <span
              style={cinzel}
              className="text-black text-[14.9px] font-bold tracking-[0.15em] uppercase mt-2"
            >
              Ass. Patroa
            </span>
          </div>
        </div>

        {/* COLUNA DA DIREITA (FOTOS) 
            As posições relativas entre as fotos e o texto mantêm-se intactas.
        */}
        <div className="relative h-[550px] md:h-[650px] w-full">
          
          <div className="absolute top-[10%] -left-8 md:-left-20 bg-[#69151f] text-white py-8 px-12 md:px-16 flex flex-col items-center justify-center z-30 shadow-2xl min-w-max">
            <span className="text-4xl md:text-6xl font-bold mb-1">+12</span>
            <span style={cinzel} className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-center leading-relaxed">
              Anos de Experiência
            </span>
          </div>

          <div className="absolute top-0 right-0 w-[80%] h-full z-10">
            <img src={imgTopoDireita} alt="Ambiente" className="w-full h-full object-cover shadow-xl" />
          </div>

          <div className="absolute bottom-0 -left-8 md:-left-20 w-[75%] h-[55%] z-20 border-[12px] border-[#05402d] shadow-2xl">
            <img src={imgBaixoEsquerda} alt="Destaque" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}