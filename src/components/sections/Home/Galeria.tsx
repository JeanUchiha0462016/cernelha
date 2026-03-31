// src/components/sections/Home/Galeria.tsx

// Importação das fotos
import foto1 from "../../../assets/home/galeria/fotos/1.jpeg";
import foto2 from "../../../assets/home/galeria/fotos/2.jpeg";
import foto3 from "../../../assets/home/galeria/fotos/3.jpeg";
import foto4 from "../../../assets/home/galeria/fotos/4.jpeg";
import foto5 from "../../../assets/home/galeria/fotos/5.jpeg";
import foto6 from "../../../assets/home/galeria/fotos/6.jpeg";
import imgTouro from "../../../assets/home/touro/tourro.png"; // Importação do Touro Oficial

export function Galeria() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  return (
    <section id="galeria" className="w-full bg-[#f1efea] py-24 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16">
          <span 
            style={montserrat} 
            className="text-[#05402d] text-[11px] font-bold tracking-[0.4em] uppercase"
          >
            Galeria
          </span>
          
          <h2 
            style={cinzel} 
            className="text-[#69151f] text-[34px] leading-tight uppercase mt-4 mb-6"
          >
            O Nosso Espaço
          </h2>
          
          {/* DIVISOR COM O TOURO OFICIAL */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-16 h-[1px] bg-[#05402d]"></div>
            <div className="px-1">
              <img 
                src={imgTouro} 
                alt="Touro Cernelha" 
                className="h-8 w-auto object-contain mix-blend-multiply" 
              />
            </div>
            <div className="w-16 h-[1px] bg-[#05402d]"></div>
          </div>

          <p 
            style={montserrat} 
            className="text-[#69151f] text-[11px] font-medium uppercase tracking-[0.1em]"
          >
            Entra dentro do nosso mundo de culinária tradicional e ambiente fantástico.
          </p>
        </div>

        {/* LAYOUT DE MOSAICO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* LADO ESQUERDO */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="aspect-square overflow-hidden shadow-lg group">
              <img 
                src={foto1} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Galeria 1"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden shadow-md group">
                <img src={foto4} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Galeria 4" />
              </div>
              <div className="aspect-square overflow-hidden shadow-md group">
                <img src={foto5} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Galeria 5" />
              </div>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden shadow-md group">
                <img src={foto2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Galeria 2" />
              </div>
              <div className="aspect-square overflow-hidden shadow-md group">
                <img src={foto3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Galeria 3" />
              </div>
            </div>

            <div className="aspect-square overflow-hidden shadow-lg group">
              <img 
                src={foto6} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Galeria 6"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}