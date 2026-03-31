// src/components/sections/Home/Footer.tsx

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* 1. SEÇÃO DO MAPA (Sempre Colorido) */}
      <div className="w-full h-[400px] bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.6200676451!2d-8.6946654!3d39.1378888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18eb5f69c5e53b%3A0x6b45a0e0600f954!2sRestaurante%20A%20Cernelha!5e0!3m2!1spt-PT!2spt!4v1710000000000!5m2!1spt-PT!2spt" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* 2. CONTEÚDO DO RODAPÉ */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Coluna 1: Logo e Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif italic font-bold tracking-tighter">
              A Cernelha
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Restaurante tradicional ribatejano, com especialidade em grelhados no carvão e vinhos!
            </p>
            
            {/* REDES SOCIAIS ATUALIZADAS */}
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href="https://www.instagram.com/restauranteacernelha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/17J9ERy4nD/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Informações */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/50">
              Informações
            </h3>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li>243 770 970</li>
              <li>cernelha2014@gmail.com</li>
              <li className="leading-relaxed">
                Todos os dias das 12h às 15h e<br /> das 19h às 22h30
              </li>
              <li className="pt-2">
                Estrada Nacional 3, 2070-227 Cartaxo,<br /> Portugal
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/50">
              Empresa
            </h3>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Sobre nós</li>
              <li className="hover:text-white cursor-pointer transition-colors">Galeria</li>
              <li className="hover:text-white cursor-pointer transition-colors">Menu</li>
            </ul>
          </div>

          {/* Coluna 4: Suporte */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-white/50">
              Suporte
            </h3>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Política de cookies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Termos e Condições</li>
              <li className="font-bold text-white hover:text-[#05402d] cursor-pointer transition-colors">Política de privacidade</li>
            </ul>
          </div>

        </div>

        {/* Direitos Autorais */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} Cernelha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}