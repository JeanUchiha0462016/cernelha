// src/components/common/Header.tsx
import { useState } from 'react';
import logoImg from '../../assets/common/header/Logo-da-cernelha.png';
import navIcon from '../../assets/common/header/icone-navbar.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cinzel = { fontFamily: "'Cinzel', serif" };
  // Removi a variável 'montserrat' daqui para eliminar o erro TS6133

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="w-full py-5 md:py-8 bg-[#f1efea] flex items-center justify-center px-6 md:px-8 sticky top-0 z-[60] shadow-sm">
        <div className="flex items-center max-w-7xl w-full justify-between md:justify-center relative">
          
          {/* Links da Esquerda (Desktop) */}
          <nav className="hidden md:block flex-1 text-right">
            <ul style={cinzel} className="flex justify-end gap-12 text-[15px] font-bold tracking-[0.2em] uppercase">
              <li className="text-[#05402d] hover:text-[#69151f] transition-all cursor-pointer">
                <a href="#menu">Menu</a>
              </li>
              <li className="text-[#05402d] hover:text-[#69151f] transition-all cursor-pointer">
                <a href="#takeaway">Take Away</a>
              </li>
            </ul>
          </nav>

          {/* Logo Central */}
          <div className="flex-shrink-0">
            <a href="#hero">
              <img 
                src={logoImg} 
                alt="A Cernelha" 
                className="h-14 md:h-24 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Links da Direita (Desktop) */}
          <nav className="hidden md:block flex-1 text-left">
            <ul style={cinzel} className="flex justify-start gap-12 text-[15px] font-bold tracking-[0.2em] uppercase">
              <li className="text-[#69151f] hover:text-[#05402d] transition-all cursor-pointer">
                <a href="#reservas">Reservas</a>
              </li>
              <li className="text-[#69151f] hover:text-[#05402d] transition-all cursor-pointer">
                <a href="#galeria">Galeria</a>
              </li>
            </ul>
          </nav>

          {/* ÍCONE DE NAVEGAÇÃO MOBILE */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 absolute right-0 focus:outline-none"
          >
            <img 
              src={navIcon} 
              alt="" 
              className="w-9 h-auto object-contain" 
            />
          </button>
        </div>
      </header>

      {/* SIDEBAR MOBILE */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      >
        <nav 
          className={`absolute right-0 top-0 h-full w-[280px] bg-[#f1efea] p-10 shadow-2xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={toggleMenu} className="absolute top-8 right-8 text-[#69151f] text-2xl font-bold">✕</button>

          <div className="mt-12 flex flex-col gap-10">
            <ul style={cinzel} className="flex flex-col gap-8 text-[18px] font-bold tracking-widest uppercase">
              <li><a href="#menu" onClick={toggleMenu} className="text-[#05402d]">Menu</a></li>
              <li><a href="#takeaway" onClick={toggleMenu} className="text-[#05402d]">Take Away</a></li>
              <li><a href="#reservas" onClick={toggleMenu} className="text-[#69151f]">Reservas</a></li>
              <li><a href="#galeria" onClick={toggleMenu} className="text-[#69151f]">Galeria</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}