// src/pages/Home.tsx
import { useState } from 'react';
import { Header } from '../components/common/Header';
import { Hero } from '../components/sections/Home/Hero';
import { Sobre } from '../components/sections/Home/Sobre';
import { Especialidades } from '../components/sections/Home/Especialidades';
import { Menu } from '../components/sections/Home/Menu';
import { TakeAway } from '../components/sections/Home/TakeAway';
import { Celebridades } from '../components/sections/Home/Celebridades';
import { Reservas } from '../components/sections/Home/Reservas';
import { Galeria } from '../components/sections/Home/Galeria';
import { Reviews } from '../components/sections/Home/Reviews';
import { Footer } from '../components/common/Footer';
import { ReservationModal } from '../components/modals/ReservationModal';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationType, setReservationType] = useState<'carta' | 'grupo'>('carta');

  // Função mestre para abrir o modal com o tipo correto
  const openModal = (type: 'carta' | 'grupo') => {
    setReservationType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f2ee] flex flex-col font-sans text-gray-900 overflow-x-hidden">
      <Header />
      
      <main className="flex-1 flex flex-col w-full">
        <Hero onOpenReservation={() => openModal('carta')} />
        <Sobre />
        <Especialidades />
        <Menu />
        
        {/* Passamos a função para a seção de Reservas */}
        <Reservas onOpenReservation={openModal} />
        
        <Celebridades />
        <Galeria />
        <TakeAway />
        <Reviews />
      </main>

      <Footer />

      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialType={reservationType}
      />
    </div>
  );
}