// src/components/common/Header.tsx
import { useState } from 'react';
import logoImg from '../../assets/common/header/Logo-da-cernelha.png';
import navIcon from '../../assets/common/header/icone-navbar.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cinzel = { fontFamily: "'Cinzel', serif" };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 z-[60] w-full bg-[#f1efea]">
      {/* HEADER PRINCIPAL */}
      <header className="w-full py-4 md:py-8 flex items-center justify-center px-6 relative border-b border-black/5">
        
        {/* Links da Esquerda (Desktop) - Adicionei pr-16 (padding right) */}
        <nav className="hidden md:block flex-1 text-right md:pr-16 lg:pr-24">
          <ul style={cinzel} className="flex justify-end gap-12 text-[15px] font-bold tracking-[0.2em] uppercase">
            <li className="text-[#05402d] hover:text-[#69151f] transition-all cursor-pointer">
              <a href="#menu">Menu</a>
            </li>
            <li className="text-[#05402d] hover:text-[#69151f] transition-all cursor-pointer">
              <a href="#takeaway">Take Away</a>
            </li>
          </ul>
        </nav>

        {/* LOGO - Centralizada */}
        <div className="flex-shrink-0">
          <a href="#hero">
            <img 
              src={logoImg} 
              alt="A Cernelha" 
              className="h-12 md:h-24 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Links da Direita (Desktop) - Adicionei pl-16 (padding left) */}
        <nav className="hidden md:block flex-1 text-left md:pl-16 lg:pl-24">
          <ul style={cinzel} className="flex justify-start gap-12 text-[15px] font-bold tracking-[0.2em] uppercase">
            <li className="text-[#69151f] hover:text-[#05402d] transition-all cursor-pointer">
              <a href="#reservas">Reservas</a>
            </li>
            <li className="text-[#69151f] hover:text-[#05402d] transition-all cursor-pointer">
              <a href="#galeria">Galeria</a>
            </li>
          </ul>
        </nav>

        {/* BOTÃO MENU (Mobile) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="text-2xl text-[#69151f] font-light px-2">✕</span>
          ) : (
            <img 
              src={navIcon} 
              alt="Abrir Menu" 
              className="w-8 h-auto object-contain" 
            />
          )}
        </button>
      </header>

      {/* MENU MOBILE */}
      <div 
        className={`md:hidden w-full bg-[#f1efea] overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] border-b border-black/10 shadow-xl' : 'max-h-0'
        }`}
      >
        <nav className="px-10 py-10">
          <ul style={cinzel} className="flex flex-col gap-8 text-[18px] font-bold tracking-[0.2em] uppercase">
            <li><a href="#menu" onClick={toggleMenu} className="text-[#05402d]">Menu</a></li>
            <li><a href="#takeaway" onClick={toggleMenu} className="text-[#05402d]">Take Away</a></li>
            <li><a href="#reservas" onClick={toggleMenu} className="text-[#69151f]">Reservas</a></li>
            <li><a href="#galeria" onClick={toggleMenu} className="text-[#69151f]">Galeria</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}