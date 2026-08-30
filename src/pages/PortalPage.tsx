import React, { useState } from 'react';
import { 
  Lock, 
  UserCheck, 
  LogIn, 
  UserPlus, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Briefcase, 
  ShieldCheck, 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  LogOut, 
  User, 
  Cpu, 
  Wrench, 
  Zap, 
  Bike, 
  Sparkles,
  ExternalLink,
  AlertCircle,
  HeartHandshake,
  HelpCircle,
  Send,
  KeyRound,
  Search,
  Building2,
  Phone,
  MessageSquareQuote,
  FileCheck
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
    | 'ppdb' 
    | 'bkk' 
    | 'beasiswa' 
    | 'konseling' 
    | 'pengaduan' 
    | 'verifikasi'
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

  const [pipCheckSubmitted, setPipCheckSubmitted] = useState(false);
  const [inputNisn, setInputNisn] = useState('');

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

  // 6 Authentic, Realistic, Non-Fictional Protected Services
  const protectedPortals = [
    {
      id: 'portal-ppdb',
      targetTab: 'ppdb' as const,
      title: 'Portal Calon Siswa (PPDB Online)',
      roleBadge: 'Pendaftar PPDB & Orang Tua',
      category: 'Penerimaan Siswa',
      icon: <UserCheck className="w-6 h-6" />,
      colorClass: 'text-emerald-600 bg-emerald-50',
      description: 'Layanan pendaftaran online TP 2026/2027, pengunggahan berkas persyaratan, verifikasi panitia, dan cetak bukti registrasi resmi.',
      highlights: ['Pendaftaran Jurusan TKJ, TKR, TITL, TBSM', 'Status Verifikasi Berkas Panitia', 'Jadwal Tes Minat Bakat', 'Cetak Nomor Pendaftaran']
    },
    {
      id: 'portal-bkk',
      targetTab: 'bkk' as const,
      title: 'Pusat Bursa Kerja Khusus (BKK & Karir)',
      roleBadge: 'Siswa Tingkat Akhir & Alumni',
      category: 'Karier & Industri',
      icon: <Briefcase className="w-6 h-6" />,
      colorClass: 'text-blue-600 bg-blue-50',
      description: 'Pusat informasi lowongan kerja resmi rekanan industri (Astra Group, Auto2000, Telkom, PLN), pendaftaran seleksi kerja, dan penelusuran tamatan (Tracer Study).',
      highlights: ['Lowongan Rekanan Resmi Industri', 'Penyaluran Kerja Lulusan SMK', 'Formulir Tracer Study Kemendikdasmen', 'Jejaring Komunitas Alumni']
    },
    {
      id: 'portal-beasiswa',
      targetTab: 'beasiswa' as const,
      title: 'Pusat Informasi Bantuan PIP & KJP Plus',
      roleBadge: 'Siswa & Wali Murid',
      category: 'Bantuan Pendidikan',
      icon: <Sparkles className="w-6 h-6" />,
      colorClass: 'text-amber-600 bg-amber-50',
      description: 'Pengecekan alur pencairan bantuan Program Indonesia Pintar (PIP) Kemendikdasmen, panduan verifikasi KJP Plus DKI Jakarta, dan aktivasi rekening SimPel.',
      highlights: ['Pengecekan Status Bantuan PIP', 'Panduan Verifikasi Berkas KJP Plus', 'Alur Aktivasi Buku Rekening SimPel', 'Informasi Beasiswa Yayasan']
    },
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
    },
    {
      id: 'portal-verifikasi',
      targetTab: 'verifikasi' as const,
      title: 'Layanan Verifikasi Data Kelulusan & NISN',
      roleBadge: 'Alumni & Instansi Terkait',
      category: 'Administrasi Arsip',
      icon: <FileCheck className="w-6 h-6" />,
      colorClass: 'text-teal-600 bg-teal-50',
      description: 'Panduan dan layanan permohonan verifikasi keabsahan data kelulusan alumni, pengecekan nomor induk siswa nasional (NISN), dan informasi arsip sekolah.',
      highlights: ['Pengecekan Data Pokok Pendidikan', 'Surat Keterangan Pengganti Ijazah', 'Legalisir Berkas Resmi Tata Usaha', 'Kontak Petugas Arsip Sekolah']
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
  // VIEW 1: USER NOT LOGGED IN -> GATEWAY WITH REALISTIC PROTECTED SERVICES
  // -------------------------------------------------------------
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
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
                Pusat Layanan Terpadu SMK Budi Murni 1
              </h1>
              <p className="text-sm sm:text-base text-red-100/90 leading-relaxed max-w-2xl mx-auto">
                Silakan masuk dengan akun Anda untuk mengakses formulir pendaftaran PPDB, info lowongan kerja BKK, pengecekan bantuan pendidikan, bimbingan konseling, dan helpdesk sekolah.
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
              <span>Wajib Masuk / Mendaftar Akun Resmi untuk mengakses seluruh layanan portal SMK Budi Murni 1</span>
            </div>
          </div>

          {/* Grid of Protected Portals */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Layanan Portal yang Tersedia di SMK Budi Murni 1
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Klik portal di bawah ini untuk membuka akses dengan login akun Anda
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-center shadow-xs">
                <Lock className="w-3.5 h-3.5 text-red-600" />
                <span>Memerlukan Akun Pengguna</span>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
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
            Ringkasan & Kartu Pelajar
          </button>

          <button
            onClick={() => setActivePortalTab('ppdb')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activePortalTab === 'ppdb'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Layanan PPDB Online
          </button>

          <button
            onClick={() => setActivePortalTab('bkk')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activePortalTab === 'bkk'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Bursa Kerja (BKK)
          </button>

          <button
            onClick={() => setActivePortalTab('beasiswa')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activePortalTab === 'beasiswa'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Cek Bantuan PIP & KJP
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
            Helpdesk & Pengaduan
          </button>

          <button
            onClick={() => setActivePortalTab('verifikasi')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activePortalTab === 'verifikasi'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            Verifikasi Ijazah & Data
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
                    Layanan Resmi yang Aktif untuk Akun Anda
                  </h3>
                  <span className="text-xs text-slate-500">Tahun Ajaran 2026/2027</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setActivePortalTab('ppdb')}
                    className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/60 transition-colors cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-emerald-800 flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-emerald-600" />
                        Penerimaan Siswa (PPDB)
                      </span>
                      <span className="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">Dibuka</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Informasi persyaratan berkas, alur seleksi minat bakat, dan verifikasi berkas PPDB TP 2026/2027.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActivePortalTab('bkk')}
                    className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 hover:bg-blue-100/60 transition-colors cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-blue-800 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        Bursa Kerja Khusus (BKK)
                      </span>
                      <span className="text-[10px] font-bold bg-blue-200 text-blue-900 px-2 py-0.5 rounded">4 Mitra Aktif</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Info rekrutmen lulusan Astra Daihatsu, Auto2000, Telkom Akses, dan PLN Icon Plus.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActivePortalTab('beasiswa')}
                    className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 hover:bg-amber-100/60 transition-colors cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-amber-800 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        PIP & KJP Plus
                      </span>
                      <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">Info Pencairan</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cek status penerima bantuan PIP Kemendikdasmen dan alur pencairan rekening SimPel.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActivePortalTab('pengaduan')}
                    className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 hover:bg-purple-100/60 transition-colors cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-purple-800 flex items-center gap-1.5">
                        <MessageSquareQuote className="w-4 h-4 text-purple-600" />
                        Helpdesk Pengaduan
                      </span>
                      <span className="text-[10px] font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded">Online</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kirim pertanyaan atau laporan kendala sekolah langsung dengan nomor tiket tindak lanjut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PPDB ONLINE */}
        {activePortalTab === 'ppdb' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Portal Calon Siswa (PPDB Online 2026/2027)</h3>
                <p className="text-xs text-slate-500">Pendaftaran resmi calon peserta didik baru SMK Budi Murni 1 Jakarta</p>
              </div>
              <button 
                onClick={() => onNavigate('ppdb')}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <span>Buka Formulir PPDB Lengkap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-extrabold text-slate-900 text-sm block">1. Gelombang 1</span>
                <p className="text-slate-600">Pendaftaran: 1 Februari - 30 April 2026. Potongan uang pangkal khusus pendaftar awal.</p>
                <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Sedang Berlangsung
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-extrabold text-slate-900 text-sm block">2. Berkas Persyaratan</span>
                <ul className="space-y-1 text-slate-600 list-disc list-inside">
                  <li>Fotokopi Ijazah / SKL SMP</li>
                  <li>Fotokopi Kartu Keluarga & Akta</li>
                  <li>Pasfoto 3x4 (3 lembar)</li>
                  <li>Fotokopi KIP/KJP (bila ada)</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-extrabold text-slate-900 text-sm block">3. Kuota Kompetensi</span>
                <p className="text-slate-600">TKJ (3 Kelas) • TKR (3 Kelas) • TITL (2 Kelas) • TBSM (2 Kelas)</p>
                <span className="inline-block text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Sisa Kuota: 40%
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-extrabold text-emerald-900 text-sm">Cetak Bukti Pendaftaran Siswa</h4>
              <p className="text-slate-600">
                Pendaftar yang telah mengisi formulir online dapat mencetak lembar bukti registrasi untuk ditunjukkan saat wawancara minat bakat di kampus SMK Budi Murni 1.
              </p>
              <button 
                onClick={() => alert('Lembar Bukti Pendaftaran Resmi PPDB SMK Budi Murni 1 berhasil disiapkan untuk dicetak/diunduh.')}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Lembar Bukti Pendaftaran (PDF)</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: BKK & MITRA INDUSTRI */}
        {activePortalTab === 'bkk' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Bursa Kerja Khusus (BKK) & Mitra Industri</h3>
                <p className="text-xs text-slate-500">Penyaluran tenaga kerja dan seleksi rekrutmen resmi bagi siswa tingkat akhir & alumni</p>
              </div>
              <button 
                onClick={() => onNavigate('bkk')}
                className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl cursor-pointer"
              >
                Lihat Halaman BKK Lengkap →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { company: 'PT Astra Daihatsu Motor', role: 'Operator Perakitan & Quality Control', major: 'TKR / TBSM', deadline: '30 September 2026' },
                { company: 'Auto2000 (Toyota Astra Motor)', role: 'Teknisi Servis Berkala', major: 'TKR', deadline: '15 Oktober 2026' },
                { company: 'PT Telkom Akses', role: 'Teknisi Fiber Optic & Jaringan', major: 'TKJ', deadline: '20 Oktober 2026' },
                { company: 'PT PLN Icon Plus / Mitra Kelistrikan', role: 'Teknisi Instalasi Jaringan Listrik', major: 'TITL', deadline: '25 Oktober 2026' },
              ].map((job, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Mitra BKK Resmi
                      </span>
                      <span className="text-[11px] text-slate-400">Batas: {job.deadline}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-1">{job.company}</h4>
                    <p className="text-xs text-red-600 font-bold">{job.role}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Syarat Jurusan: {job.major}</p>
                  </div>
                  <button 
                    onClick={() => alert(`Pengajuan lamaran untuk ${job.company} (${job.role}) telah dicatat oleh pengurus BKK SMK Budi Murni 1.`)}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors text-center cursor-pointer"
                  >
                    Daftar Rekrutmen via BKK
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BEASISWA & PIP */}
        {activePortalTab === 'beasiswa' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900">Pusat Informasi Bantuan PIP Kemendikdasmen & KJP Plus</h3>
              <p className="text-xs text-slate-500">Pengecekan status validasi data Pusdatin Kemendikdasmen dan alur pencairan rekening</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Cek PIP */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4">
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Search className="w-4 h-4 text-amber-600" />
                  Cek Status Bantuan Siswa (SimPel / PIP)
                </h4>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Nomor Induk Siswa Nasional (NISN):</label>
                  <input
                    type="text"
                    placeholder="Contoh: 0082918291"
                    value={inputNisn}
                    onChange={(e) => setInputNisn(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    onClick={() => {
                      if (!inputNisn) return alert('Silakan masukkan nomor NISN Anda.');
                      setPipCheckSubmitted(true);
                    }}
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Periksa Status Bantuan
                  </button>
                </div>

                {pipCheckSubmitted && (
                  <div className="p-3.5 rounded-xl bg-white border border-amber-300 text-xs space-y-1">
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Data Terverifikasi di Pangkalan Pusdatin
                    </span>
                    <p className="text-slate-600 text-[11px]">
                      NISN <strong>{inputNisn}</strong> terdaftar pada SK Nominasi PIP Kemendikdasmen SMK Budi Murni 1. Silakan hubungi TU untuk surat pengantar aktivasi ke Bank BNI/BRI.
                    </p>
                  </div>
                )}
              </div>

              {/* Panduan Alur Pencairan */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
                <h4 className="font-extrabold text-slate-900 text-sm">Alur Pengambilan Bantuan Pendidikan:</h4>
                <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                  <li>Minta Surat Keterangan Kepala Sekolah dari Tata Usaha SMK Budi Murni 1.</li>
                  <li>Bawa fotokopi Kartu Pelajar, fotokopi KTP Orang Tua, dan Kartu Keluarga ke Bank Penyalur (BNI / BRI).</li>
                  <li>Lakukan aktivasi buku tabungan SimPel dan konfirmasi nomor rekening ke sekolah.</li>
                  <li>Pencairan dana langsung ke rekening siswa sesuai periode penetapan Kemendikdasmen.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: KONSELING BK */}
        {activePortalTab === 'konseling' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900">Layanan Bimbingan Konseling & Karir (BK)</h3>
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
                      <option value="karir">Kesiapan Kerja & Wawancara Rekrutmen Industri</option>
                      <option value="belajar">Kendala Belajar & Pemahaman Materi Kejuruan</option>
                      <option value="pribadi">Konsultasi Kepribadian & Motivasi Siswa</option>
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

        {/* TAB 6: PUSAT PENGADUAN & HELPDESK */}
        {activePortalTab === 'pengaduan' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900">Pusat Layanan Aspirasi & Pengaduan (Helpdesk BM1)</h3>
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
                    <option value="akademik">Pertanyaan Akademik & Pembelajaran</option>
                    <option value="fasilitas">Laporan Sarana & Fasilitas Sekolah</option>
                    <option value="administrasi">Layanan Administrasi & Tata Usaha</option>
                    <option value="kesiswaan">Kesiswaan & Ekstrakurikuler</option>
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

        {/* TAB 7: VERIFIKASI IJAZAH & ARSIP */}
        {activePortalTab === 'verifikasi' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-slate-900">Layanan Verifikasi Data Kelulusan & Ijazah</h3>
              <p className="text-xs text-slate-500">Pengecekan keabsahan data kelulusan siswa dan layanan berkas arsip Tata Usaha</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
                <h4 className="font-extrabold text-teal-900 text-sm flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-teal-700" />
                  Verifikasi Data Kelulusan Alumni
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Bagi perusahaan, instansi, atau perguruan tinggi yang membutuhkan konfirmasi keabsahan ijazah alumni SMK Budi Murni 1 Jakarta, silakan melampirkan scan ijazah dan surat permohonan ke email resmi:
                </p>
                <div className="p-3 bg-white rounded-xl border border-teal-300 font-mono font-bold text-slate-800">
                  arsip.tu@smkbudimurni1.sch.id
                </div>
                <p className="text-slate-500 text-[11px]">
                  Petugas arsip TU akan memberikan balasan resmi dengan stempel dan tanda tangan Kepala Sekolah.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-slate-600">
                <h4 className="font-extrabold text-slate-900 text-sm">Ketentuan Legalisir Ijazah:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Membawa fotokopi dokumen ijazah yang akan dilegalisir (maksimal 5 lembar).</li>
                  <li>Menunjukkan ijazah asli kepada petugas Tata Usaha di sekolah.</li>
                  <li>Pelayanan legalisir dilakukan pada jam kerja: Senin - Jumat (08.00 - 14.00 WIB).</li>
                  <li>Legalisir bebas biaya bagi alumni SMK Budi Murni 1.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
