// src/components/modals/GroupReservation.tsx
import { useState } from 'react';
import { createReservation } from '../../services/reservations';

// Importação dos ícones (ajustados conforme o teu projeto)
import imgData from '../../assets/modals/GroupReservation/data.png';
import imgDetalhes from '../../assets/modals/GroupReservation/detalhes do evento.png';
import imgEmail from '../../assets/modals/GroupReservation/email.png';
import imgHorario from '../../assets/modals/GroupReservation/horario.png';
import imgEspera from '../../assets/modals/GroupReservation/icone-de-espera.png';
import imgPessoas from '../../assets/modals/GroupReservation/pessoas.png';
import imgResponsavel from '../../assets/modals/GroupReservation/responsavel.png';
import imgTelemovel from '../../assets/modals/GroupReservation/telemovel.png';
import imgTouro from '../../assets/home/touro/tourro.png';

export function GroupReservation({ onClose }: { onClose?: () => void }) {
  const [menuSelecionado, setMenuSelecionado] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const montserrat = { fontFamily: "'Montserrat', sans-serif" };
  const cinzel = { fontFamily: "'Cinzel', serif" };

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    hora: '',
    data: '',
    pessoas: '',
    detalhes: ''
  });

  const menus = [
    { id: 1, titulo: "MENU 1", desc: "Entrada, prato principal e bebida à discrição.", preco: "23€", sub: "p/pessoa" },
    { id: 3, titulo: "MENU 3", desc: "Entrada, prato principal de carne, prato principal de peixe, bebida à discrição e sobremesa.", preco: "32€", sub: "p/pessoa" },
    { id: 2, titulo: "MENU 2", desc: "Entrada, prato principal, bebida à discrição e sobremesa.", preco: "27€", sub: "p/pessoa" },
    { id: 4, titulo: "MENU PERSONALIZADO", desc: "Ementa personalizável", preco: "preço €", sub: "sob consulta" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const menuInfo = menuSelecionado ? `[Menu: ${menus.find(m => m.id === menuSelecionado)?.titulo}] ` : '';
    
    try {
      await createReservation({
        nome_cliente: formData.nome,
        telefone_cliente: formData.telefone,
        email_cliente: formData.email,
        data_reserva: formData.data,
        hora_reserva: formData.hora,
        numero_pessoas: Number(formData.pessoas),
        tipo_reserva: 'grupo',
        observacoes: menuInfo + formData.detalhes
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="flex flex-col items-center justify-center p-10 text-center bg-[#f4f2ee] h-full min-h-screen">
        <img src={imgEspera} alt="Sucesso" className="w-20 h-20 mb-8 animate-pulse" />
        <h3 style={cinzel} className="text-2xl font-bold text-[#69151f] mb-4 uppercase">Pedido Enviado!</h3>
        <p style={montserrat} className="text-gray-600 mb-10 text-sm">A nossa equipa entrará em contacto em breve para confirmar a sua reserva.</p>
        <button onClick={onClose} className="w-full bg-[#69151f] text-white py-4 font-bold uppercase tracking-widest">Fechar</button>
      </section>
    );
  }

  return (
    <section className="bg-[#f4f2ee] min-h-screen w-full pb-10">
      {/* BOTÃO VOLTAR E TÍTULO TOPO */}
      <div className="pt-6 px-6 flex items-center mb-10">
        <button onClick={onClose} className="text-[#69151f] text-2xl mr-4">‹</button>
        <div className="flex-1 text-center">
          <span style={montserrat} className="text-[#05402d] text-[10px] font-extrabold uppercase tracking-[0.3em]">Reserva em Grupo</span>
        </div>
      </div>

      <div className="px-6 flex flex-col items-center">
        {/* CABEÇALHO */}
        <div className="text-center mb-8">
          <h2 style={cinzel} className="text-[#69151f] text-[32px] md:text-[36px] leading-tight uppercase mb-4">Eventos & Celebrações</h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#69151f]/20"></div>
            <img src={imgTouro} alt="Touro" className="h-7 w-auto mix-blend-multiply opacity-80" />
            <div className="w-12 h-[1px] bg-[#69151f]/20"></div>
          </div>

          <p style={montserrat} className="text-[#69151f]/70 font-medium text-[12px] leading-relaxed max-w-xs mx-auto">
            Preencha os detalhes para o seu evento. A nossa equipa entrará em contacto para personalizar tudo ao pormenor.
          </p>
        </div>

        <form className="w-full max-w-lg space-y-10" onSubmit={handleSubmit}>
          
          {/* CAMPOS DE INPUT COM LINHA */}
          <div className="space-y-8">
            {/* Nome */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgResponsavel} alt="icon" className="w-4 h-4 opacity-70" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Nome</label>
              </div>
              <input required name="nome" placeholder="O seu nome completo" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 focus:border-[#69151f]/50 transition-colors" />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgEmail} alt="icon" className="w-4 h-4 opacity-70" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Email</label>
              </div>
              <input name="email" placeholder="o.seu.email@gmail.com (opcional)" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 focus:border-[#69151f]/50 transition-colors" />
            </div>

            {/* Data */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgData} alt="icon" className="w-4 h-4 opacity-70" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Data</label>
              </div>
              <input required name="data" placeholder="00/00/00" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 focus:border-[#69151f]/50 transition-colors" />
            </div>

            {/* Telemovel */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgTelemovel} alt="icon" className="w-4 h-4 opacity-70" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Telemóvel</label>
              </div>
              <input required name="telefone" placeholder="O seu contacto direto" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 focus:border-[#69151f]/50 transition-colors" />
            </div>

            {/* Horário */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgHorario} alt="icon" className="w-4 h-4 opacity-70" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Horário</label>
              </div>
              <input required name="hora" placeholder="00:00" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 focus:border-[#69151f]/50 transition-colors" />
            </div>

            {/* Pessoas */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src={imgPessoas} alt="icon" className="w-4 h-4 opacity-70" />
                <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Pessoas</label>
              </div>
              <input required name="pessoas" type="number" placeholder="00" onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 focus:border-[#69151f]/50 transition-colors" />
            </div>
          </div>

          {/* SEÇÃO MENU */}
          <div className="space-y-4">
            <h3 style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-[0.2em] mb-4">MENU</h3>
            <div className="space-y-3">
              {menus.map((menu) => (
                <div 
                  key={menu.id} 
                  onClick={() => setMenuSelecionado(menu.id)} 
                  className={`p-4 cursor-pointer border transition-all duration-300 relative rounded-sm ${
                    menuSelecionado === menu.id 
                    ? 'border-[#69151f] bg-white ring-1 ring-[#69151f]/30' 
                    : 'border-[#69151f]/20 bg-white/40'
                  }`}
                >
                  <p className="text-[9px] font-bold text-[#05402d] uppercase mb-2 text-center w-full border-b border-[#69151f]/10 pb-1">{menu.titulo}</p>
                  <div className="flex justify-between items-center gap-4 mt-2">
                     <p style={montserrat} className="text-[11px] text-gray-700 leading-tight flex-1">{menu.desc}</p>
                     <div className="text-right min-w-[70px]">
                        <p className="text-[13px] font-bold text-black leading-none">{menu.preco}</p>
                        <p className="text-[9px] text-black font-medium">{menu.sub}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DETALHES DO EVENTO */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src={imgDetalhes} alt="icon" className="w-4 h-4 opacity-70" />
              <label style={montserrat} className="text-[10px] font-bold text-[#05402d] uppercase tracking-widest">Detalhes do Evento</label>
            </div>
            <textarea 
              name="detalhes" 
              placeholder="Descreva o tipo de evento, preferências alimentares, necessidades especiais..." 
              onChange={handleInputChange} 
              className="w-full bg-transparent border-b border-black/20 pb-2 pt-1 outline-none text-black text-sm placeholder-black/20 min-h-[80px] resize-none focus:border-[#69151f]/50 transition-all" 
            />
          </div>

          {/* BOTÃO E AVISO FINAL */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              style={montserrat}
              className="w-full bg-[#69151f] text-white py-4 font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'A PROCESSAR...' : 'SOLICITAR RESERVA'}
            </button>
            
            <p style={montserrat} className="text-[9px] font-bold text-[#69151f]/60 uppercase tracking-[0.1em] text-center">
              A NOSSA EQUIPA ENTRARÁ EM CONTACTO EM ATÉ 12 HORAS
            </p>
          </div>

        </form>
      </div>
    </section>
  );
}