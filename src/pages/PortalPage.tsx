import React, { useState } from 'react';
import { 
  Lock, 
  LogIn, 
  UserPlus, 
  GraduationCap, 
  Printer, 
  CheckCircle2, 
  ChevronRight, 
  LogOut, 
  User, 
  Cpu, 
  Wrench, 
  Zap, 
  Bike, 
  Sparkles,
  ShieldCheck, 
  HeartHandshake, 
  MessageSquareQuote, 
  Send, 
  KeyRound, 
  Phone
} from 'lucide-react';
import { UserProfile } from '../lib/supabase';
import { CLASS_WALAS_INFO } from '../data/scheduleData';
import { SCHOOL_INFO } from '../data/schoolData';

interface PortalPageProps {
  currentUser: UserProfile | null;
  onOpenAuthModal: (mode?: 'login' | 'register') => void;
  onLogout: () => void;
  onNavigate: (tab: string) => void;
}

export const PortalPage: React.FC<PortalPageProps> = ({
  currentUser,
  onOpenAuthModal,
  onLogout,
  onNavigate
}) => {
  const [activePortalTab, setActivePortalTab] = useState<
    | 'overview' 
    | 'konseling' 
    | 'pengaduan'
  >('overview');

  // Interactive form states for logged-in user
  const [counselingSubmitted, setCounselingSubmitted] = useState(false);
  const [counselingName, setCounselingName] = useState('');
  const [counselingTopic, setCounselingTopic] = useState('kuliah');
  const [counselingDate, setCounselingDate] = useState('');

  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketCategory, setTicketCategory] = useState('akademik');
  const [ticketMessage, setTicketMessage] = useState('');
  const [generatedTicketId, setGeneratedTicketId] = useState('');

  // Selected major logic
  const userMajor = currentUser?.major || 'TKJ';
  const matchingClass = CLASS_WALAS_INFO.find((c) => c.major === userMajor) || CLASS_WALAS_INFO[0];

  const getMajorIcon = (m: string) => {
    switch (m) {
      case 'TKJ': return <Cpu className="w-4 h-4 text-red-600" />;
      case 'TKR': return <Wrench className="w-4 h-4 text-emerald-600" />;
      case 'TITL': return <Zap className="w-4 h-4 text-amber-600" />;
      case 'TBSM': return <Bike className="w-4 h-4 text-red-600" />;
      default: return <GraduationCap className="w-4 h-4 text-red-600" />;
    }
  };

  // The 2 authentic protected services requested: BK and Helpdesk
  const protectedPortals = [
    {
      id: 'portal-konseling',
      targetTab: 'konseling' as const,
      title: 'Layanan Bimbingan Konseling & Karir (BK)',
      roleBadge: 'Siswa & Orang Tua',
      category: 'Bimbingan Siswa',
      icon: <HeartHandshake className="w-6 h-6" />,
      colorClass: 'text-rose-600 bg-rose-50',
      description: 'Layanan reservasi konsultasi tatap muka bersama guru BK sekolah untuk perencanaan studi lanjut ke Politeknik Negeri, penjurusan karir kerja, dan solusi belajar.',
      highlights: ['Reservasi Konsultasi Guru BK', 'Konsultasi Masuk Politeknik Negeri', 'Pemetaan Minat Bakat Vokasi', 'Layanan Bimbingan Rahasia']
    },
    {
      id: 'portal-pengaduan',
      targetTab: 'pengaduan' as const,
      title: 'Pusat Layanan Aspirasi & Pengaduan (Helpdesk)',
      roleBadge: 'Seluruh Sivitas & Masyarakat',
      category: 'Layanan Informasi',
      icon: <MessageSquareQuote className="w-6 h-6" />,
      colorClass: 'text-purple-600 bg-purple-50',
      description: 'Kanal resmi penyampaian aspirasi, saran, pertanyaan, atau laporan kendala sekolah langsung kepada pihak manajemen dengan nomor tiket tindak lanjut.',
      highlights: ['Nomor Tiket Aduan Resmi', 'Respon Langsung Manajemen Sekolah', 'Kerahasiaan Identitas Pelapor Terjamin', 'Pemantauan Status Penanganan']
    }
  ];

  // Submit helpdesk ticket
  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketMessage.trim()) return;
    const newId = `BM1-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedTicketId(newId);
    setTicketSubmitted(true);
  };

  // -------------------------------------------------------------
  // VIEW 1: USER NOT LOGGED IN -> GATEWAY
  // -------------------------------------------------------------
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Notice Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-red-900/40 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Lock Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 text-amber-400 mb-2 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-amber-400 text-slate-950 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                Akses Layanan Terproteksi
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Portal Siswa SMK Budi Murni 1
              </h1>
              <p className="text-sm sm:text-base text-red-100/90 leading-relaxed max-w-2xl mx-auto">
                Silakan masuk dengan akun Anda untuk mengakses Layanan Bimbingan Konseling &amp; Karir (BK) serta Pusat Layanan Aspirasi &amp; Pengaduan (Helpdesk) sekolah.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                id="portal-gate-login-btn"
                onClick={() => onOpenAuthModal('login')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk ke Akun Portal</span>
              </button>

              <button
                id="portal-gate-register-btn"
                onClick={() => onOpenAuthModal('register')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 border border-red-400/30 transition-all transform active:scale-95 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>Daftar Akun Baru</span>
              </button>
            </div>

            {/* Mandatory Login Notice */}
            <div className="pt-4 border-t border-red-900/40 flex items-center justify-center gap-2 text-xs text-red-200">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Wajib Masuk / Mendaftar Akun Resmi untuk mengakses layanan Bimbingan Konseling &amp; Helpdesk</span>
            </div>
          </div>

          {/* Grid of Protected Portals (2 Services) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Layanan Portal Siswa
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Klik layanan di bawah ini untuk membuka akses dengan login akun Anda
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-center shadow-xs">
                <Lock className="w-3.5 h-3.5 text-red-600" />
                <span>Memerlukan Akun Pengguna</span>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protectedPortals.map((portal) => (
                <div 
                  key={portal.id}
                  id={`card-${portal.id}-locked`}
                  onClick={() => onOpenAuthModal('login')}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-red-300 transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${portal.colorClass} flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform`}>
                        {portal.icon}
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {portal.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-red-600" />
                          Login
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block font-mono">
                        Sasaran: {portal.roleBadge}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-base group-hover:text-red-600 transition-colors mt-0.5">
                        {portal.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {portal.description}
                    </p>

                    {/* Features list bullet points */}
                    <div className="pt-2 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Layanan yang Disediakan:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5 text-[11px] text-slate-600 font-medium">
                        {portal.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
                    <span className="flex items-center gap-1">
                      <KeyRound className="w-3.5 h-3.5" />
                      Login untuk Akses Layanan
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Information Hotline Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900">Bantuan Akses Akun Sekolah</h4>
                  <p className="text-xs text-slate-500">
                    Mengalami kendala login atau lupa kata sandi? Hubungi Tim Administrasi Sekolah di WhatsApp: {SCHOOL_INFO.whatsappDisplay}
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Admin%20SMK%20Budi%20Murni%201,%20saya%20memerlukan%20bantuan%20akun%20portal`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs whitespace-nowrap transition-colors"
              >
                Chat Petugas TU
              </a>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: USER IS LOGGED IN -> INTERACTIVE WORKING PORTAL
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Identity & Top Dashboard Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <img 
                src={currentUser.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'} 
                alt={currentUser.fullName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-red-600 shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 p-1.5 bg-red-600 text-white rounded-lg shadow-xs">
                {getMajorIcon(currentUser.major || 'TKJ')}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {currentUser.fullName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-red-100 text-red-800 font-mono">
                  {currentUser.role}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-slate-100 text-slate-800">
                  {currentUser.major}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Akun Aktif
                </span>
              </div>
              <p className="text-xs text-slate-500 flex flex-wrap items-center gap-2 sm:gap-3">
                <span>No. Induk: <strong>{currentUser.nisnOrNip || '0082918291'}</strong></span>
                <span>•</span>
                <span>Wali Kelas: <strong>{matchingClass.walasName}</strong></span>
                <span>•</span>
                <span>TP 2026/2027</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
            <button
              id="portal-profile-manage-btn"
              onClick={() => onOpenAuthModal()}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-4 h-4 text-red-600" />
              <span>Kelola Akun</span>
            </button>

            <button
              id="portal-logout-btn"
              onClick={onLogout}
              className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Keluar dari akun portal"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 text-xs font-bold scrollbar-none">
          <button
            onClick={() => setActivePortalTab('overview')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activePortalTab === 'overview'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Ringkasan &amp; Kartu Pelajar
          </button>

          <button
            onClick={() => setActivePortalTab('konseling')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activePortalTab === 'konseling'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            Bimbingan Konseling (BK)
          </button>

          <button
            onClick={() => setActivePortalTab('pengaduan')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activePortalTab === 'pengaduan'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Helpdesk &amp; Pengaduan
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activePortalTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Kartu Pelajar Digital Resmi */}
            <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-lg border border-red-900/40 relative overflow-hidden flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-red-800/40 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-white text-xs">
                      BM1
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-wider uppercase text-red-200 font-mono">
                        KARTU TANDA PELAJAR
                      </h4>
                      <p className="text-[10px] text-slate-400">SMK Budi Murni 1 Jakarta</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                    AKTIF 2026/2027
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={currentUser.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'} 
                    alt="Foto Siswa" 
                    className="w-20 h-24 rounded-xl object-cover border border-white/20 shadow-md"
                  />
                  <div className="space-y-1 text-xs">
                    <p className="font-extrabold text-sm text-white">{currentUser.fullName}</p>
                    <p className="text-slate-300 font-mono text-[11px]">NISN: {currentUser.nisnOrNip || '0082918291'}</p>
                    <p className="text-amber-300 font-semibold">{matchingClass.className} • {currentUser.major}</p>
                    <p className="text-[10px] text-slate-400">Status: Peserta Didik Reguler</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-red-800/40 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono">NPSN: {SCHOOL_INFO.npsn}</span>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold flex items-center gap-1 border border-white/20 cursor-pointer"
                >
                  <Printer className="w-3 h-3 text-amber-400" />
                  <span>Cetak Kartu</span>
                </button>
              </div>
            </div>

            {/* Ringkasan Status & Akses Cepat */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    Layanan Resmi Portal Siswa
                  </h3>
                  <span className="text-xs text-slate-500">Tahun Ajaran 2026/2027</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setActivePortalTab('konseling')}
                    className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 hover:bg-rose-100/60 transition-colors cursor-pointer space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-rose-800 flex items-center gap-1.5">
                        <HeartHandshake className="w-4 h-4 text-rose-600" />
                        Bimbingan Konseling (BK)
                      </span>
                      <span className="text-[10px] font-bold bg-rose-200 text-rose-900 px-2 py-0.5 rounded">Reservasi</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Layanan janji temu konsultasi penjurusan karir, studi lanjut Politeknik Negeri, dan bimbingan belajar.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActivePortalTab('pengaduan')}
                    className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200/80 hover:bg-purple-100/60 transition-colors cursor-pointer space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-purple-800 flex items-center gap-1.5">
                        <MessageSquareQuote className="w-4 h-4 text-purple-600" />
                        Helpdesk &amp; Pengaduan
                      </span>
                      <span className="text-[10px] font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded">Online</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kirim pertanyaan atau laporan kendala sekolah langsung dengan nomor tiket tindak lanjut manajemen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: KONSELING BK */}
        {activePortalTab === 'konseling' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900">Layanan Bimbingan Konseling &amp; Karir (BK)</h3>
              <p className="text-xs text-slate-500">Reservasi jadwal bimbingan privat studi lanjut Politeknik Negeri atau kesiapan kerja</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4">
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-rose-600" />
                  Ajukan Janji Temu Guru BK
                </h4>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setCounselingSubmitted(true);
                }} className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nama Lengkap Siswa:</label>
                    <input 
                      type="text" 
                      defaultValue={currentUser.fullName}
                      onChange={(e) => setCounselingName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Topik Konsultasi:</label>
                    <select 
                      value={counselingTopic}
                      onChange={(e) => setCounselingTopic(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                    >
                      <option value="kuliah">Studi Lanjut ke Politeknik Negeri (PNJ, Polman Astra)</option>
                      <option value="karir">Kesiapan Kerja &amp; Wawancara Rekrutmen Industri</option>
                      <option value="belajar">Kendala Belajar &amp; Pemahaman Materi Kejuruan</option>
                      <option value="pribadi">Konsultasi Kepribadian &amp; Motivasi Siswa</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Pilihan Hari / Tanggal Temu:</label>
                    <input 
                      type="date" 
                      value={counselingDate}
                      onChange={(e) => setCounselingDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Kirim Permohonan Janji Temu
                  </button>
                </form>

                {counselingSubmitted && (
                  <div className="p-3 rounded-xl bg-white border border-rose-300 text-xs text-rose-900 font-medium">
                    Janji temu konseling berhasil diajukan. Guru BK akan menghubungi Anda via WhatsApp sekolah untuk konfirmasi jam pelaksanaan di Ruang BK.
                  </div>
                )}
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
                <h4 className="font-extrabold text-slate-900 text-sm">Informasi Dewan Guru BK SMK Budi Murni 1:</h4>
                <p>
                  Layanan Bimbingan Konseling bersifat <strong>rahasia, suportif, dan profesional</strong>. Seluruh peserta didik berhak berkonsultasi mengenai rencana masa depan, pemilihan kampus, maupun permasalahan pribadi.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">Lokasi: Ruang Bimbingan Konseling (Lantai 2)</p>
                  <p>Jam Pelayanan: Senin - Jumat (08.00 - 15.00 WIB)</p>
                  <p className="text-slate-500">Guru BK Pendamping: Dra. Hj. Nurhayati / Tim Kesiswaan</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PUSAT PENGADUAN & HELPDESK */}
        {activePortalTab === 'pengaduan' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900">Pusat Layanan Aspirasi &amp; Pengaduan (Helpdesk BM1)</h3>
              <p className="text-xs text-slate-500">Sampaikan saran, pertanyaan, atau laporan kendala sekolah langsung kepada pihak manajemen</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form onSubmit={handleCreateTicket} className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4 text-xs">
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <MessageSquareQuote className="w-4 h-4 text-purple-600" />
                  Formulir Tiket Aspirasi / Laporan
                </h4>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Kategori Laporan:</label>
                  <select 
                    value={ticketCategory}
                    onChange={(e) => setTicketCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="akademik">Pertanyaan Akademik &amp; Pembelajaran</option>
                    <option value="fasilitas">Laporan Sarana &amp; Fasilitas Sekolah</option>
                    <option value="administrasi">Layanan Administrasi &amp; Tata Usaha</option>
                    <option value="kesiswaan">Kesiswaan &amp; Ekstrakurikuler</option>
                    <option value="saran">Saran Pengembangan Sekolah</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Pesan / Isi Laporan:</label>
                  <textarea 
                    rows={4}
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    placeholder="Tuliskan aspirasi atau laporan Anda secara jelas dan santun..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Tiket Pengaduan</span>
                </button>
              </form>

              <div className="space-y-4">
                {ticketSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Tiket Berhasil Diterbitkan!</span>
                    </div>
                    <p className="text-slate-600">
                      Laporan Anda telah tercatat dengan Nomor Tiket:
                    </p>
                    <p className="text-xl font-mono font-black text-slate-900 bg-white p-3 rounded-xl border border-emerald-300 text-center">
                      {generatedTicketId}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Tim Administrasi SMK Budi Murni 1 akan menindaklanjuti laporan Anda paling lambat dalam 2x24 jam kerja.
                    </p>
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-sm">Prinsip Layanan Pengaduan BM1:</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Setiap laporan ditangani secara objektif dan rahasia.</li>
                      <li>Pelapor berhak menerima informasi kemajuan penanganan laporan.</li>
                      <li>Tidak dipungut biaya apapun (gratis).</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
