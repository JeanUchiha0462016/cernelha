// src/components/modals/ReservationModal.tsx
import { useState, useEffect } from 'react';
import { createReservation } from '../../services/reservations';
import { GroupReservation } from './GroupReservation'; 
import imgEspera from '../../assets/modals/ReservationModal/icone-de-espera.png';
import imgTouro from '../../assets/home/touro/tourro.png';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'carta' | 'grupo';
}

export function ReservationModal({ isOpen, onClose, initialType = 'carta' }: ReservationModalProps) {
  const [tipoReserva, setTipoReserva] = useState<'carta' | 'grupo'>(initialType);
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const [formData, setFormData] = useState({
    nome: '', telemovel: '', pessoas: '', data: '', hora: ''
  });

  const ticketClip = {
    clipPath: "polygon(0% 20%, 5% 0%, 95% 0%, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0% 80%)"
  };

  useEffect(() => {
    if (isOpen) {
      setTipoReserva(initialType);
      setEnviado(false);
      setError(null);
      if (window.innerWidth < 768) document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await createReservation({
        nome_cliente: formData.nome,
        telefone_cliente: formData.telemovel,
        numero_pessoas: Number(formData.pessoas),
        data_reserva: formData.data,
        hora_reserva: formData.hora,
        tipo_reserva: 'carta',
      });
      setEnviado(true);
    } catch (err) {
      setError('Erro ao processar a reserva.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:items-center md:justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm hidden md:block" onClick={onClose}></div>
      
      <div className="relative bg-[#f4f2ee] w-full h-full md:h-auto md:max-w-[550px] md:rounded-sm md:shadow-2xl overflow-y-auto z-10">
        <div className="p-8 md:p-12 min-h-full flex flex-col">
          <button onClick={onClose} className="absolute top-6 right-6 text-[#69151f] text-2xl z-20">✕</button>

          {tipoReserva === 'grupo' ? (
            <div className="w-full flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <GroupReservation onClose={() => { setTipoReserva('carta'); onClose(); }} />
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              {!enviado ? (
                <>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-20 bg-[#05402d]/20"></div>
                    <img src={imgTouro} alt="Touro" className="h-8 w-auto" />
                    <div className="h-[1px] w-20 bg-[#05402d]/20"></div>
                  </div>

                  <h2 style={cinzel} className="text-[#69151f] text-center text-3xl md:text-4xl uppercase mb-10 tracking-[0.2em]">
                    Reservas
                  </h2>

                  <div className="flex gap-6 justify-center mb-12">
                    <button 
                      type="button" onClick={() => setTipoReserva('carta')} style={ticketClip}
                      className={`px-12 py-3 text-[11px] font-bold tracking-widest transition-all
                        ${(tipoReserva as string) === 'carta' ? 'bg-[#05402d] text-white' : 'bg-[#05402d]/10 text-[#05402d] opacity-50'}`}
                    >
                      Á CARTA
                    </button>

                    <button 
                      type="button" onClick={() => setTipoReserva('grupo')} style={ticketClip}
                      className={`px-12 py-3 text-[11px] font-bold tracking-widest transition-all
                        ${(tipoReserva as string) === 'grupo' ? 'bg-[#05402d] text-white' : 'bg-[#05402d]/10 text-[#05402d] opacity-50'}`}
                    >
                      GRUPO
                    </button>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase tracking-wider">Nome Sobrenome</label>
                      <input required name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Ex: João Maria"
                        className="w-full p-4 bg-white border border-[#69151f]/20 outline-none" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-1">
                         <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase tracking-wider">Telemóvel</label>
                         <input required name="telemovel" value={formData.telemovel} onChange={handleInputChange} placeholder="912..."
                           className="w-full p-4 bg-white border border-[#69151f]/20 outline-none" />
                       </div>
                       <div className="space-y-1">
                         <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase tracking-wider">Pessoas</label>
                         <input required name="pessoas" value={formData.pessoas} onChange={handleInputChange} placeholder="00"
                           className="w-full p-4 bg-white border border-[#69151f]/20 outline-none" />
                       </div>
                    </div>

                    <div className="space-y-1">
                      <label style={montserrat} className="block text-[13px] text-[#69151f] font-semibold uppercase tracking-wider">Data e Hora</label>
                      <div className="flex border border-[#69151f]/20 bg-white divide-x divide-[#69151f]/20">
                        <input required name="data" value={formData.data} onChange={handleInputChange} type="date" className="flex-1 p-4 text-[12px] text-[#69151f]/70 outline-none bg-transparent" />
                        <input required name="hora" value={formData.hora} onChange={handleInputChange} type="time" className="flex-1 p-4 text-[12px] text-[#69151f]/70 outline-none bg-transparent" />
                      </div>
                    </div>

                    {error && <p className="text-red-600 text-xs font-bold text-center uppercase">{error}</p>}

                    <button type="submit" disabled={isSubmitting} style={montserrat}
                      className="w-full bg-[#69151f] text-white py-5 font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all">
                      {isSubmitting ? 'A Processar...' : 'Reservar Mesa'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                  <h2 style={cinzel} className="text-[#69151f] text-2xl uppercase mb-10 tracking-widest font-bold">À espera da confirmação!</h2>
                  <img src={imgEspera} alt="Aguarde" className="w-20 h-20 mb-10 animate-pulse" />
                  <button onClick={onClose} className="w-full bg-[#05402d] text-white py-5 font-bold uppercase tracking-widest">Ok, fico à espera!</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}