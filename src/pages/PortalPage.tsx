import React, { useState } from 'react';
import { 
  Lock, 
  UserCheck, 
  LogIn, 
  UserPlus, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  FileText, 
  Download, 
  Printer, 
  QrCode, 
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
  AlertCircle
} from 'lucide-react';
import { UserProfile } from '../lib/supabase';
import { CLASS_WALAS_INFO, TEACHER_DICT, MASTER_SCHEDULE_RAW, PERIOD_TIMES } from '../data/scheduleData';
import { SCHOOL_INFO, MAJORS } from '../data/schoolData';

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
  const [activePortalTab, setActivePortalTab] = useState<'overview' | 'jadwal' | 'akademik' | 'presensi' | 'elearning' | 'bkk'>('overview');

  // Find student's class or walas info
  const userMajor = currentUser?.major || 'TKJ';
  const matchingClass = CLASS_WALAS_INFO.find((c) => c.major === userMajor) || CLASS_WALAS_INFO[0];

  const getMajorIcon = (m: string) => {
    switch (m) {
      case 'TKJ': return <Cpu className="w-4 h-4 text-blue-600" />;
      case 'TKR': return <Wrench className="w-4 h-4 text-emerald-600" />;
      case 'TITL': return <Zap className="w-4 h-4 text-amber-600" />;
      case 'TBSM': return <Bike className="w-4 h-4 text-red-600" />;
      default: return <GraduationCap className="w-4 h-4 text-blue-600" />;
    }
  };

  // -------------------------------------------------------------
  // VIEW 1: USER NOT LOGGED IN -> GATEWAY / ACCESS BARRIER
  // -------------------------------------------------------------
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Notice Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Lock Icon Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 text-amber-400 mb-2 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-amber-400 text-slate-950 font-mono">
                Penting: Akses Terproteksi
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Portal Layanan Digital SMK Budi Murni 1
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Wajib <strong>Daftar</strong> atau <strong>Login</strong> dengan akun SMK Budi Murni 1 terlebih dahulu untuk mengakses layanan jadwal pelajaran personal, e-learning, presensi, rapor digital, dan administrasi sekolah.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                id="portal-gate-login-btn"
                onClick={() => onOpenAuthModal('login')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all transform active:scale-95"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk ke Akun Portal</span>
              </button>

              <button
                id="portal-gate-register-btn"
                onClick={() => onOpenAuthModal('register')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all transform active:scale-95"
              >
                <UserPlus className="w-4 h-4" />
                <span>Daftar Akun Baru (Gratis)</span>
              </button>
            </div>

            {/* Hint for majors */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Pilihan Jurusan Terdaftar:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 font-mono font-bold">TKJ</span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-emerald-300 font-mono font-bold">TKR</span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-red-300 font-mono font-bold">TBSM</span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-amber-300 font-mono font-bold">TITL</span>
            </div>
          </div>

          {/* Grid of Protected Portals */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">
                  Layanan Portal yang Tersedia di SMK Budi Murni 1
                </h2>
                <p className="text-xs text-slate-500">
                  Klik portal di bawah ini untuk membuka akses dengan login akun Anda
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* 1. Portal Siswa & E-Learning */}
              <div 
                id="card-portal-siswa-locked"
                onClick={() => onOpenAuthModal('login')}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    Wajib Login
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                  Portal Siswa & E-Learning
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Akses jadwal kelas personal, tugas online, materi kejuruan (TKJ, TKR, TBSM, TITL), presensi kehadiran digital, dan kartu pelajar.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Buka Portal Siswa</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* 2. Portal Guru & Tenaga Pendidik */}
              <div 
                id="card-portal-guru-locked"
                onClick={() => onOpenAuthModal('login')}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    Wajib Login
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                  Portal Guru & Wali Kelas
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Input nilai rapor Kurikulum Merdeka, absensi digital siswa per jam tatap muka, jurnal mengajar, dan komunikasi wali kelas.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                  <span>Buka Portal Guru</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* 3. Portal Calon Siswa (PPDB Online) */}
              <div 
                id="card-portal-ppdb-locked"
                onClick={() => onOpenAuthModal('register')}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    PPDB 2026/2027
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-600 transition-colors">
                  Portal Calon Siswa (PPDB)
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pantau verifikasi berkas PPDB, jadwal tes wawancara & kesehatan, cetak bukti formulir pendaftaran, dan informasi daftar ulang.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Daftar / Cek Status PPDB</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* 4. Portal BKK & Alumni */}
              <div 
                id="card-portal-bkk-locked"
                onClick={() => onOpenAuthModal('login')}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    Wajib Login
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                  Portal Alumni & BKK Kerja
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Informasi rekrutmen kerja Astra, Auto2000, PLN, Telkom, formulir tracer study alumni, dan layanan legalisir ijazah online.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                  <span>Buka Portal BKK</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* 5. Rapor Digital & Nilai */}
              <div 
                id="card-portal-rapor-locked"
                onClick={() => onOpenAuthModal('login')}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    Wajib Login
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-purple-600 transition-colors">
                  E-Rapor Digital
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Laporan capaian kompetensi semester, riwayat nilai mata pelajaran umum & kejuruan, serta sertifikat prestasi siswa.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
                  <span>Akses E-Rapor</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* 6. Perpustakaan Digital */}
              <div 
                id="card-portal-elibrary-locked"
                onClick={() => onOpenAuthModal('login')}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    Wajib Login
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-teal-600 transition-colors">
                  E-Library & Modul SMK
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Koleksi buku panduan teknis bengkel, modul pembelajaran interaktif, jobsheet praktik kejuruan, dan referensi LSP-P1.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                  <span>Buka E-Library</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: USER IS LOGGED IN -> FULL INTERACTIVE PORTAL DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Identity & Top Dashboard Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <img 
                src={currentUser.avatarUrl} 
                alt={currentUser.fullName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-blue-600 shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 p-1.5 bg-blue-600 text-white rounded-lg shadow-xs">
                {getMajorIcon(currentUser.major || 'TKJ')}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {currentUser.fullName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800">
                  {currentUser.role}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-slate-100 text-slate-800">
                  {currentUser.major}
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-3">
                <span>No. Induk: <strong>{currentUser.nisnOrNip || '2026-BM1-001'}</strong></span>
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
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              <User className="w-4 h-4 text-blue-600" />
              <span>Edit Profil</span>
            </button>

            <button
              id="portal-logout-btn"
              onClick={onLogout}
              className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
              title="Keluar dari akun portal"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar</span>
            </button>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActivePortalTab('overview')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
              activePortalTab === 'overview'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Dashboard Saya
          </button>

          <button
            onClick={() => setActivePortalTab('jadwal')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activePortalTab === 'jadwal'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Jadwal Belajar Kelas ({matchingClass.className})
          </button>

          <button
            onClick={() => setActivePortalTab('akademik')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activePortalTab === 'akademik'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Rapor & Nilai
          </button>

          <button
            onClick={() => setActivePortalTab('presensi')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activePortalTab === 'presensi'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Presensi Kehadiran
          </button>

          <button
            onClick={() => setActivePortalTab('elearning')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activePortalTab === 'elearning'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Modul E-Learning & Tugas
          </button>

          <button
            onClick={() => setActivePortalTab('bkk')}
            className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activePortalTab === 'bkk'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Bursa Kerja BKK & Magang
          </button>
        </div>

        {/* TAB 1: OVERVIEW & DIGITAL ID CARD */}
        {activePortalTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Digital Identity Card (Kartu Pelajar / Guru Digital) */}
            <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 text-white rounded-3xl p-6 shadow-xl border border-blue-700/50 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="/assets/images/logo-smk.jpg" 
                    alt="Logo" 
                    className="w-9 h-9 rounded-lg bg-white p-0.5" 
                  />
                  <div>
                    <h3 className="font-extrabold text-sm tracking-tight text-white">SMK BUDI MURNI 1</h3>
                    <p className="text-[10px] text-blue-200 font-mono">KARTU DIGITAL RESMI</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-mono uppercase">
                  {currentUser.role}
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <img 
                  src={currentUser.avatarUrl} 
                  alt={currentUser.fullName}
                  className="w-20 h-24 object-cover rounded-xl border-2 border-white/80 shadow-md shrink-0 bg-slate-800"
                />
                <div className="space-y-1 text-xs">
                  <div className="text-base font-extrabold text-white leading-tight">{currentUser.fullName}</div>
                  <div className="text-blue-200">No. Induk: <strong className="font-mono text-white">{currentUser.nisnOrNip || '2026-BM1-001'}</strong></div>
                  <div className="text-blue-200">Program: <strong className="text-amber-300">{currentUser.major}</strong></div>
                  <div className="text-blue-200">Kelas: <strong className="text-white">{matchingClass.className}</strong></div>
                  <div className="text-[10px] text-slate-300">Wali Kelas: {matchingClass.walasName}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <QrCode className="w-8 h-8 text-white p-1 bg-white/10 rounded-lg" />
                  <div>
                    <span className="font-mono text-[9px] block text-slate-400">AUTHENTICATED ID</span>
                    <span className="font-bold text-emerald-400 text-[10px]">VERIFIED 2026/2027</span>
                  </div>
                </div>
                <button 
                  onClick={() => window.print()} 
                  className="px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-xs font-bold text-white flex items-center gap-1 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics & Announcements */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Presensi Semester</span>
                  <div className="text-2xl font-extrabold text-emerald-600">98.5%</div>
                  <p className="text-[10px] text-slate-500">Hadir 45 dari 46 hari</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Rata-Rata Nilai</span>
                  <div className="text-2xl font-extrabold text-blue-600">88.4</div>
                  <p className="text-[10px] text-slate-500">Peringkat 3 di {matchingClass.className}</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Uji Kompetensi LSP</span>
                  <div className="text-2xl font-extrabold text-amber-600">Siap Uji</div>
                  <p className="text-[10px] text-slate-500">Sertifikasi BNSP 2026</p>
                </div>
              </div>

              {/* School Announcements for Users */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Pengumuman Akademik Terbaru
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-100 flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Jadwal Pelajaran Semester Ganjil TP 2026/2027 Aktif</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Wali Kelas <strong>{matchingClass.walasName}</strong> mengimbau seluruh siswa kelas {matchingClass.className} memeriksa ruang bengkel dan laboratorium praktik masing-masing.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Pendaftaran Uji Sertifikasi LSP-P1 BNSP</h4>
                      <p className="text-slate-600 text-[11px] mt-0.5">
                        Bagi siswa tingkat XI dan XII Jurusan {currentUser.major}, formulir pendaftaran uji kompetensi dapat diunduh pada tab Modul E-Learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: JADWAL KELAS SAYA */}
        {activePortalTab === 'jadwal' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Jadwal Pelajaran Kelas {matchingClass.className}
                </h3>
                <p className="text-xs text-slate-500">
                  Wali Kelas: <strong>{matchingClass.walasName}</strong> (Kode Guru [{matchingClass.walasCode}]) • Jurusan {currentUser.major}
                </p>
              </div>
              <button
                onClick={() => onNavigate('jadwal')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Buka Jadwal Seluruh Sekolah</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Timetable Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-bold uppercase">
                  <tr>
                    <th className="p-3">Hari</th>
                    <th className="p-3">Jam Ke</th>
                    <th className="p-3">Waktu</th>
                    <th className="p-3">Mata Pelajaran & Kode Guru</th>
                    <th className="p-3">Nama Guru Pengampu</th>
                    <th className="p-3">Ruang / Lab</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'].map((day) => {
                    const dayEntries = MASTER_SCHEDULE_RAW.filter((item) => item.day === day);
                    const colIndex = CLASS_WALAS_INFO.findIndex((c) => c.classId === matchingClass.classId);
                    
                    return dayEntries.map((row, rIdx) => {
                      const entry = row.slots[colIndex] || '-';
                      const isUpacaraOrIbadah = entry.includes('UPACARA') || entry.includes('IBADAH');
                      
                      // Parse teacher code
                      const match = entry.match(/^([A-Za-z\-]+)(\d+)$/);
                      const teacherCode = match ? match[2] : '';
                      const teacher = TEACHER_DICT[teacherCode];

                      return (
                        <tr key={`${day}-${row.period}`} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          {rIdx === 0 && (
                            <td rowSpan={dayEntries.length} className="p-3 font-bold text-blue-900 bg-blue-50/50 border-r border-slate-200 align-top">
                              {day}
                            </td>
                          )}
                          <td className="p-3 font-mono font-bold text-slate-900">{row.period}</td>
                          <td className="p-3 text-[11px] text-slate-500 font-mono">{PERIOD_TIMES[row.period] || '-'}</td>
                          <td className="p-3 font-extrabold text-blue-950">
                            {isUpacaraOrIbadah ? (
                              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">{entry}</span>
                            ) : (
                              <span className="px-2 py-0.5 rounded bg-blue-100/80 text-blue-900">{entry}</span>
                            )}
                          </td>
                          <td className="p-3 text-slate-600">
                            {teacher ? `${teacher.name} (${teacher.mapel})` : '-'}
                          </td>
                          <td className="p-3 font-mono text-[11px] text-slate-500">
                            {currentUser.major === 'TKJ' ? 'Lab Komputer TKJ' : currentUser.major === 'TKR' ? 'Bengkel Otomotif TKR' : currentUser.major === 'TBSM' ? 'Bengkel Sepeda Motor' : 'Lab Listrik TITL'}
                          </td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: AKADEMIK & RAPOR */}
        {activePortalTab === 'akademik' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Transkrip Nilai Akademik & Capaian Belajar</h3>
                <p className="text-xs text-slate-500">Semester Ganjil TP 2026/2027 • Kurikulum Merdeka</p>
              </div>
              <button 
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Unduh E-Rapor PDF</span>
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <tr>
                    <th className="p-3">Mata Pelajaran</th>
                    <th className="p-3">Kelompok</th>
                    <th className="p-3 text-center">KKTP / KKM</th>
                    <th className="p-3 text-center">Nilai Angka</th>
                    <th className="p-3 text-center">Predikat</th>
                    <th className="p-3">Capaian Kompetensi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { mapel: `Konsentrasi Keahlian ${currentUser.major}`, type: 'Kejuruan', kkm: 75, nilai: 92, predikat: 'A (Sangat Baik)', note: 'Sangat terampil dalam pengujian dan implementasi standar industri' },
                    { mapel: 'Matematika Terapan', type: 'Umum', kkm: 70, nilai: 86, predikat: 'B+ (Baik)', note: 'Menguasai perhitungan logika sistem kejuruan' },
                    { mapel: 'Bahasa Inggris Industri', type: 'Umum', kkm: 70, nilai: 88, predikat: 'A- (Sangat Baik)', note: 'Lancar dalam memahami technical manual dan komunikasi kerja' },
                    { mapel: 'Projek IPAS', type: 'Umum', kkm: 70, nilai: 85, predikat: 'B+ (Baik)', note: 'Aktif dalam percobaan sains terapan lingkungan kerja' },
                    { mapel: 'Pendidikan Agama & Budi Pekerti', type: 'Umum', kkm: 75, nilai: 90, predikat: 'A (Sangat Baik)', note: 'Menunjukkan akhlak mulia dan toleransi yang baik' },
                    { mapel: 'PPKN & Karakter Bangsa', type: 'Umum', kkm: 75, nilai: 89, predikat: 'A- (Sangat Baik)', note: 'Disiplin dan memahami nilai-nilai Pancasila' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">{row.mapel}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.type === 'Kejuruan' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="p-3 text-center font-mono">{row.kkm}</td>
                      <td className="p-3 text-center font-bold text-blue-600 font-mono text-sm">{row.nilai}</td>
                      <td className="p-3 text-center font-bold text-emerald-600">{row.predikat}</td>
                      <td className="p-3 text-slate-600 text-[11px]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: PRESENSI */}
        {activePortalTab === 'presensi' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Rekapitulasi Presensi Digital Siswa</h3>
              <p className="text-xs text-slate-500">Tahun Pelajaran 2026/2027 • Pemindaian Kartu Pelajar Digital / Fingerprint</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="text-xs font-bold text-emerald-800">Hadir Tepat Waktu</div>
                <div className="text-2xl font-extrabold text-emerald-700 mt-1">45 Hari</div>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <div className="text-xs font-bold text-blue-800">Izin Sekolah</div>
                <div className="text-2xl font-extrabold text-blue-700 mt-1">1 Hari</div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="text-xs font-bold text-amber-800">Sakit (Surat Dokter)</div>
                <div className="text-2xl font-extrabold text-amber-700 mt-1">0 Hari</div>
              </div>
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                <div className="text-xs font-bold text-red-800">Alpa / Tanpa Keterangan</div>
                <div className="text-2xl font-extrabold text-red-700 mt-1">0 Hari</div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Catatan Wali Kelas (<strong>{matchingClass.walasName}</strong>): Kedisiplinan dan kehadiran sangat baik, pertahankan predikat kehadiran 100% untuk syarat magang industri!
              </span>
            </div>
          </div>
        )}

        {/* TAB 5: E-LEARNING & MODUL */}
        {activePortalTab === 'elearning' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Modul Pembelajaran & Materi Kejuruan {currentUser.major}</h3>
              <p className="text-xs text-slate-500">Materi resmi guru pengampu untuk persiapan praktik bengkel dan ujian LSP-P1</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: `Modul Praktik Dasar Kejuruan ${currentUser.major}`, teacher: matchingClass.walasName, size: '2.4 MB', type: 'PDF Jobsheet' },
                { title: 'Panduan Uji Kompetensi Keahlian (UKK) BNSP 2026', teacher: 'Tim Penguji LSP-P1', size: '1.8 MB', type: 'Buku Panduan' },
                { title: 'Kesehatan & Keselamatan Kerja (K3) Industri 5S', teacher: 'Koordinator Bengkel', size: '3.1 MB', type: 'SOP Standar' },
                { title: 'Tugas Proyek Mandiri Pemeliharaan Sistem', teacher: matchingClass.walasName, size: '950 KB', type: 'Tugas Online' },
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                      {m.type}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs">{m.title}</h4>
                    <p className="text-[11px] text-slate-500">Pengampu: {m.teacher} • Ukuran: {m.size}</p>
                  </div>
                  <button 
                    onClick={() => alert(`Mengunduh materi: ${m.title}`)}
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: BKK & LOWONGAN KERJA */}
        {activePortalTab === 'bkk' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Bursa Kerja Khusus (BKK) & Penyaluran Industri</h3>
                <p className="text-xs text-slate-500">Lowongan kerja dan magang PKL prioritas bagi siswa & alumni SMK Budi Murni 1</p>
              </div>
              <button 
                onClick={() => onNavigate('bkk')}
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl"
              >
                Lihat Semua Lowongan BKK →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { company: 'PT Astra Daihatsu Motor', role: 'Operator Perakitan & QC', major: 'TKR / TBSM', deadline: '30 September 2026' },
                { company: 'Auto2000 (Toyota Astra Motor)', role: 'Teknisi Servis Berkala', major: 'TKR', deadline: '15 Oktober 2026' },
                { company: 'PT Telkom Akses (Telkom Group)', role: 'Teknisi Jaringan & Fiber Optic', major: 'TKJ', deadline: '20 Oktober 2026' },
                { company: 'PT PLN Tarakan / Mitra Kelistrikan', role: 'Teknisi Instalasi Gedung', major: 'TITL', deadline: '25 Oktober 2026' },
              ].map((job, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Mitra BKK BM1
                      </span>
                      <span className="text-[11px] text-slate-400">Batas: {job.deadline}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-1">{job.company}</h4>
                    <p className="text-xs text-blue-700 font-bold">{job.role}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Syarat Jurusan: {job.major}</p>
                  </div>
                  <button 
                    onClick={() => onNavigate('bkk')}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors text-center"
                  >
                    Lamar via BKK SMK Budi Murni 1
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
