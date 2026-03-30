// src/components/sections/Home/Especialidades.tsx
import { useState, useEffect } from 'react';
import { getEspecialidades, type Especialidade } from '../../../services/especialidades';

export function Especialidades() {
  const [pratos, setPratos] = useState<Especialidade[]>([]);
  const [loading, setLoading] = useState(true);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  useEffect(() => {
    async function carregarEspecialidades() {
      try {
        const dados = await getEspecialidades();
        if (dados) setPratos(dados);
      } catch (error) {
        console.error("Falha ao carregar especialidades:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarEspecialidades();
  }, []);

  return (
    <section className="w-full bg-[#f4f2ee] py-16 flex flex-col items-center overflow-hidden">
      {/* Container mais contido para não espalhar tanto */}
      <div className="w-full max-w-6xl px-4">
        
        {/* TÍTULO: Margem reduzida de 16 para 10 */}
        <div className="flex items-center justify-center mb-10 gap-6 w-full">
          <div className="flex-1 h-[1px] bg-[#05402d]/30"></div>
          <h2 
            style={cinzel} 
            className="text-[#69151f] text-[28px] md:text-[34px] font-light tracking-[0.2em] uppercase whitespace-nowrap"
          >
            Especialidades
          </h2>
          <div className="flex-1 h-[1px] bg-[#05402d]/30"></div>
        </div>

        {loading ? (
          <div style={montserrat} className="text-center text-[#69151f] py-12 text-[11px] uppercase">
            A carregar iguarias...
          </div>
        ) : (
          /* Grid com gap menor (gap-8) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pratos.map((prato) => (
              <div key={prato.id} className="relative aspect-[3/4] p-4">
                
                {/* A IMAGEM */}
                <img 
                  src={prato.imagem} 
                  alt={prato.nome}
                  className="w-full h-full object-cover shadow-md"
                />
                
                {/* CAIXA VERMELHA (#69151f):
                    Ajustada para bottom-4 e right-4 para acompanhar o novo padding p-4
                */}
                <div className="absolute bottom-4 right-4 left-[35%] z-20">
                  <div className="bg-[#69151f] text-white p-4 flex flex-col justify-center min-h-[80px] shadow-lg">
                    <h3 
                      style={cinzel}
                      className="text-[11px] md:text-[13px] font-bold tracking-[0.05em] uppercase leading-tight"
                    >
                      {prato.nome}
                    </h3>
                    {prato.preco && (
                      <span 
                        style={montserrat}
                        className="text-sm font-light mt-1 block opacity-90"
                      >
                        {prato.preco}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}