// src/components/sections/Home/Menu.tsx
import { useState, useEffect, useRef } from 'react';
import { getPratos, type Prato } from '../../../services/menu';
import imgTouro from '../../../assets/home/touro/tourro.png';

export function Menu() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("CARNES DE BOI");
  const [pratos, setPratos] = useState<Prato[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  useEffect(() => {
    async function carregarMenu() {
      try {
        const dados = await getPratos();
        if (dados) setPratos(dados);
      } catch (error) {
        console.error("Erro ao carregar o menu:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarMenu();
  }, []);

  const categorias = [
    "VEGETARIANO", "SOPAS", "ENTRADAS", "CARNES DE BOI", 
    "CARNES DE PORCO", "CARNES DE BORREGO", "PEIXES", 
    "MARISCO", "GUARNIÇÕES EXTRAS", "BEBIDAS"
  ];

  const pratosExibidos = pratos.filter(p => p.categoria === categoriaAtiva);

  // Função para scroll das categorias no mobile (ERRO CLIENTWIDTH RESOLVIDO)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 150 : scrollLeft + 150;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="w-full bg-[#f1efea] pt-16 pb-0 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-12">
          <span style={montserrat} className="text-[#05402d] text-[10px] font-bold tracking-[0.5em] uppercase">
            Menu
          </span>
          <h2 style={cinzel} className="text-[#69151f] text-3xl md:text-5xl uppercase mt-2 mb-4">
            Os Nossos Pratos
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-[1.5px] bg-[#05402d]"></div>
            <img src={imgTouro} alt="Touro" className="h-8 w-auto mix-blend-multiply" />
            <div className="w-16 h-[1.5px] bg-[#05402d]"></div>
          </div>

          <p style={montserrat} className="text-[#69151f] text-[10px] md:text-[11px] font-medium tracking-wide text-center">
            Todos os nossos grelhados são feitos no carvão.
          </p>
        </div>

        {/* BARRA DE CATEGORIAS (ESTILO BILHETE COM CANTOS RECORTADOS) */}
        <div className="relative flex items-center mb-12 group">
          {/* Seta Esquerda Mobile */}
          <button 
            onClick={() => scroll('left')} 
            className="md:hidden absolute left-2 z-10 text-white text-[10px] bg-[#05402d] w-6 h-6 flex items-center justify-center rounded-full shadow-lg"
          >
            ◀
          </button>
          
          <div 
            ref={scrollRef}
            className="w-full bg-[#05402d] text-white py-5 px-8 overflow-x-auto no-scrollbar relative"
            style={{ 
              clipPath: "polygon(0% 15%, 2% 0%, 98% 0%, 100% 15%, 100% 85%, 98% 100%, 2% 100%, 0% 85%)" 
            }}
          >
            <ul className="flex items-center justify-start md:justify-center gap-8 min-w-max">
              {categorias.map((cat) => (
                <li 
                  key={cat} 
                  onClick={() => setCategoriaAtiva(cat)}
                  style={montserrat}
                  className={`text-[9px] md:text-[10px] font-bold tracking-widest cursor-pointer transition-all border-b-2 py-1
                    ${categoriaAtiva === cat ? "border-white" : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Seta Direita Mobile */}
          <button 
            onClick={() => scroll('right')} 
            className="md:hidden absolute right-2 z-10 text-white text-[10px] bg-[#05402d] w-6 h-6 flex items-center justify-center rounded-full shadow-lg"
          >
            ▶
          </button>
        </div>

        {/* LISTA DE PRATOS */}
        {loading ? (
          <div style={montserrat} className="text-center py-20 text-[#69151f] text-[10px] uppercase tracking-widest animate-pulse">
            A preparar iguarias...
          </div>
        ) : (
          <div className="flex flex-col gap-8 mb-20">
            {pratosExibidos.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                
                {/* Imagem Circular */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border border-[#05402d]/20 bg-white">
                  <img 
                    src={item.imagem || imgTouro} 
                    alt={item.nome} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Nome, Linha Conectora e Preços */}
                <div className="flex-1 flex items-center justify-between gap-2">
                  <div className="flex items-center flex-1 gap-2">
                    <span style={montserrat} className="text-[#69151f] text-[10px] md:text-[11px] font-bold uppercase leading-tight">
                      {item.nome}
                    </span>
                    <div className="flex-1 border-b border-[#05402d]/30 relative top-[2px]"></div>
                  </div>

                  <div style={montserrat} className="flex gap-4 text-[10px] md:text-[11px] font-bold text-[#69151f] whitespace-nowrap">
                    {item.preco_meia && (
                      <span className="flex items-center gap-1">
                        <span className="text-[12px] font-medium opacity-80">½</span> {item.preco_meia}€
                      </span>
                    )}
                    {item.preco && <span>{item.preco}€</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RODAPÉ DO MENU (Barra Castanha #69151f) */}
      <div className="w-full bg-[#69151f] py-5 flex justify-center mt-10">
        <span style={cinzel} className="text-white text-[12px] md:text-[14px] font-bold tracking-[0.5em] uppercase">
          Menu
        </span>
      </div>

      {/* ESTILO PARA ESCONDER A BARRA DE SCROLL */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}