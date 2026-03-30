// src/components/modals/ReservationModal.tsx
import { useState } from 'react';
import { createReservation } from '../../services/reservations';
import { GroupReservation } from './GroupReservation'; 

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [tipoReserva, setTipoReserva] = useState<'carta' | 'grupo'>('carta');
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null); // Agora vamos usar o 'error'!

  const [formData, setFormData] = useState({
    nome: '',
    telemovel: '',
    pessoas: '',
    data: '',
    hora: ''
  });

  if (!isOpen) return null;

  if (tipoReserva === 'grupo') {
    return (
      <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f4f2ee]">
        <GroupReservation onClose={() => setTipoReserva('carta')} />
      </div>
    );
  }

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
      setError('Erro ao enviar reserva. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#f4f2ee] w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-brand-red text-xl">✕</button>

        {!enviado ? (
          <>
            <div className="text-center mb-6">
              <span className="text-2xl block mb-2">🐂</span>
              <h2 className="text-brand-red text-2xl font-serif uppercase tracking-widest">Reservas</h2>
            </div>

            <div className="flex gap-2 justify-center mb-6">
              <button type="button" onClick={() => setTipoReserva('carta')} className="bg-brand-green text-white px-4 py-1 text-[10px] font-bold uppercase border-b-4 border-black/20">À Carta</button>
              <button type="button" onClick={() => setTipoReserva('grupo')} className="bg-brand-green/40 text-white px-4 py-1 text-[10px] font-bold uppercase hover:bg-brand-green/60 transition-colors">Grupo</button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-brand-red">Nome e Sobrenome</label>
                <input required name="nome" value={formData.nome} onChange={handleInputChange} type="text" className="w-full p-2 border border-brand-red/20 text-sm focus:outline-brand-red bg-white" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-brand-red">Número de telemóvel</label>
                <input required name="telemovel" value={formData.telemovel} onChange={handleInputChange} type="tel" className="w-full p-2 border border-brand-red/20 text-sm focus:outline-brand-red bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-brand-red">Pessoas</label>
                  <input required name="pessoas" value={formData.pessoas} onChange={handleInputChange} type="number" className="w-full p-2 border border-brand-red/20 text-sm focus:outline-brand-red bg-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-brand-red">Data</label>
                  <input required name="data" value={formData.data} onChange={handleInputChange} type="date" className="w-full p-2 border border-brand-red/20 text-xs focus:outline-brand-red bg-white" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-brand-red">Hora</label>
                <input required name="hora" value={formData.hora} onChange={handleInputChange} type="time" className="w-full p-2 border border-brand-red/20 text-xs focus:outline-brand-red bg-white" />
              </div>

              {/* MUDANÇA AQUI: Agora exibimos o erro se ele existir! */}
              {error && (
                <p className="text-red-600 text-[10px] font-bold text-center uppercase tracking-wider">
                  {error}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#63101d] text-white py-3 mt-4 font-bold uppercase tracking-widest disabled:opacity-50">
                {isSubmitting ? 'A Enviar...' : 'Reservar Mesa'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <h2 className="text-brand-red text-xl font-serif italic uppercase mb-8">À espera da confirmação!</h2>
            <div className="text-6xl mb-8">⏳</div>
            <button onClick={onClose} className="w-full bg-[#63101d] text-white py-3 font-bold uppercase">Ok, fico à espera!</button>
          </div>
        )}
      </div>
    </div>
  );
}