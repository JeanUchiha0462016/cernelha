// src/components/sections/Home/Reviews.tsx

import iconeCarta from "../../../assets/home/reviews/icone/icone-da-parte-a-carta.png";

export function Reviews() {
  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const avaliacoes = [
    {
      nome: "Fernando L",
      tipo: "Cliente",
      texto: "Este restaurante tem vindo a ganhar prestígio, no Cartaxo, e vem na linha do Restaurante O Toucinho - Almeirim, no que respeita à sopa de Pedra, que era a referência da Região. Aqui ..",
      estrelas: 4,
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      nome: "Tony Serafim",
      tipo: "Guia local",
      texto: "Went here for lunch after visiting the headquarters of Casa das Peles, what a lovely surprise! Cernelha is a truly authentic Portuguese restaurant with great food and wonderful staff. We...",
      estrelas: 5,
      inicial: "T",
      corFundo: "bg-[#1a4d4e]"
    },
    {
      nome: "Shirley \"Muse Faery\" NKL",
      tipo: "Guia local",
      texto: "Delicious traditional Portuguese food! Very popular with the locals. We ate grilled octopus as the main dish and espetada de lulas e camarão (grilled squid and prawns with...",
      estrelas: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nome: "João Meijinhos",
      tipo: "Guia local",
      texto: "Good food for a low price. Portions are huge, easily feeds 2. Service is okay.",
      estrelas: 4,
      inicial: "J",
      corFundo: "bg-[#d48c2c]"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 flex justify-center relative overflow-hidden">
      
      {/* SELO CERNALHA - POSICIONAMENTO CORRIGIDO
          - Se quiseres subir MAIS, diminui o valor de 420px (ex: 380px).
          - Se quiseres descer, aumenta (ex: 450px).
      */}
      <div 
        className="absolute hidden xl:block z-20 pointer-events-none"
        style={{ 
          left: 'calc(50% - 640px)', 
          top: '50px', 
          transform: 'translateX(-50%) rotate(-15deg)' 
        }}
      >
        <img 
          src={iconeCarta} 
          alt="Selo Cernelha" 
          className="w-64 h-auto"
        />
      </div>

      <div className="max-w-7xl w-full z-10">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span 
            style={{ ...montserrat, fontSize: '11px' }} 
            className="text-[#05402d] font-bold tracking-[0.6em] uppercase mb-4"
          >
            R E V I E W S
          </span>
          
          <h2 
            style={{ ...cinzel, fontSize: '34px' }} 
            className="text-[#69151f] leading-tight uppercase mt-2 mb-6"
          >
            Comentários
          </h2>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
            <span className="text-2xl">🐂</span>
            <div className="w-12 h-[1px] bg-[#05402d]"></div>
          </div>

          <p 
            style={{ ...montserrat, fontSize: '11px' }} 
            className="text-[#69151f] font-medium tracking-wide uppercase"
          >
            Alguns comentários e avaliações deixados pelos nossos clientes.
          </p>
        </div>

        {/* GRID DE REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {avaliacoes.map((item, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#f1efea' }} 
              className="p-8 flex flex-col items-center text-center rounded-lg shadow-sm h-full"
            >
              <div className="mb-6">
                {item.img ? (
                  <img src={item.img} alt={item.nome} className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-white" />
                ) : (
                  <div className={`w-16 h-16 rounded-full ${item.corFundo} flex items-center justify-center text-white text-2xl font-bold shadow-sm`}>
                    {item.inicial}
                  </div>
                )}
              </div>

              <div className="flex gap-1 mb-6 text-yellow-500 text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < item.estrelas ? "★" : "☆"}</span>
                ))}
              </div>

              <p 
                style={{ ...montserrat, fontSize: '10px' }} 
                className="text-[#05402d] leading-relaxed mb-8 flex-1 italic"
              >
                "{item.texto}"
              </p>

              <div className="mt-auto">
                <h4 
                  style={{ ...montserrat, fontSize: '11px' }} 
                  className="text-[#69151f] font-bold uppercase tracking-tight"
                >
                  {item.nome}
                </h4>
                <p 
                  style={{ ...montserrat, fontSize: '11px' }} 
                  className="text-[#69151f] opacity-70 uppercase tracking-widest mt-1"
                >
                  {item.tipo}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#69151f]"></div>
          <div className="w-2 h-2 rounded-full bg-[#69151f]/20"></div>
          <div className="w-2 h-2 rounded-full bg-[#69151f]/20"></div>
        </div>
      </div>
    </section>
  );
}