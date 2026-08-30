import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  UserPlus, 
  Briefcase, 
  BookOpen, 
  Award, 
  Sparkles,
  ChevronDown,
  Lock,
  User,
  LogOut,
  Building2,
  Cpu,
  Trophy,
  Newspaper,
  Palette,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { UserProfile } from '../lib/supabase';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPpdb: () => void;
  currentUser: UserProfile | null;
  onOpenAuthModal: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenPpdb,
  currentUser,
  onOpenAuthModal,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openSettings, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Requested Nav items with TKA Kemendikdasmen external link
  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'program', label: 'Program' },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'jadwal', label: 'Jadwal Pelajaran', badge: 'PDF' },
    { id: 'portal', label: 'Portal Siswa', badge: 'Login' },
    { id: 'kesiswaan', label: 'Kesiswaan' },
    { id: 'bkk', label: 'BKK & Karir' },
    { 
      id: 'tka-external', 
      label: 'TKA Kemendikdasmen', 
      badge: 'Resmi', 
      externalUrl: 'https://tka.kemendikdasmen.go.id/' 
    },
    { id: 'berita', label: 'Berita' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (target: string | { id: string; externalUrl?: string }) => {
    if (typeof target !== 'string' && target.externalUrl) {
      window.open(target.externalUrl, '_blank', 'noopener,noreferrer');
      setMobileMenuOpen(false);
      return;
    }
    const targetId = typeof target === 'string' ? target : target.id;
    setActiveTab(targetId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Information */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              PPDB TP 2026/2027 Dibuka: Gelombang 1
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">NPSN: {SCHOOL_INFO.npsn}</span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-semibold">{SCHOOL_INFO.accreditation} (Berdiri {SCHOOL_INFO.establishedYear})</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Admin%20SMK%20Budi%20Murni%201,%20saya%20ingin%20bertanya%20informasi%20sekolah`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-emerald-400 font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WA CS: {SCHOOL_INFO.whatsappDisplay}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">{SCHOOL_INFO.operationalHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-200/80' 
          : 'bg-white shadow-xs py-3 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & School Branding */}
          <button 
            id="nav-brand-logo"
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative">
              <img 
                src="/assets/images/logo-smk.jpg" 
                alt="Logo SMK Budi Murni 1" 
                className="w-10 h-10 object-contain rounded-xl border border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  SMK BUDI MURNI 1
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-full">
                  Jakarta Timur
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Cerdas • Terampil • Berkarakter • Siap Kerja
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-3 py-2 text-xs font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-bold shadow-xs'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.externalUrl && <ExternalLink className="w-3 h-3 opacity-70" />}
                    {link.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500 text-white">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs: Theme Switcher, PPDB & Supabase Auth Portal */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Theme Settings Button */}
            <button
              id="header-theme-settings-btn"
              onClick={openSettings}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-red-50 hover:text-red-600 border border-slate-200 transition-all group"
              title="Pengaturan Tema & Warna (Default: Merah)"
            >
              <Palette className="w-3.5 h-3.5 text-red-600 group-hover:rotate-45 transition-transform" />
              <span className="hidden xl:inline capitalize">{theme === 'merah' ? 'Warna Merah' : theme}</span>
            </button>

            {/* Supabase User / Login Button */}
            {currentUser ? (
              <button
                id="header-user-profile-btn"
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
                title="Kelola Akun Supabase"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden border border-blue-600">
                  <img src={currentUser.avatarUrl} alt={currentUser.fullName} className="w-full h-full object-cover" />
                </div>
                <span className="max-w-[100px] truncate">{currentUser.fullName}</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-blue-600 text-white rounded font-mono uppercase">{currentUser.role}</span>
              </button>
            ) : (
              <button
                id="header-login-btn"
                onClick={onOpenAuthModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Masuk / Akun</span>
              </button>
            )}

            {/* PPDB CTA */}
            <button
              id="header-ppdb-cta-btn"
              onClick={onOpenPpdb}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Daftar PPDB</span>
            </button>
          </div>

          {/* Mobile Menu & Auth Shortcuts */}
          <div className="flex lg:hidden items-center space-x-1.5">
            <button
              id="mobile-theme-btn"
              onClick={openSettings}
              className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold"
              title="Pengaturan Warna"
            >
              <Palette className="w-4 h-4" />
            </button>

            <button
              id="mobile-auth-shortcut-btn"
              onClick={onOpenAuthModal}
              className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px]">{currentUser ? 'Akun' : 'Masuk'}</span>
            </button>

            <button
              id="mobile-ppdb-shortcut-btn"
              onClick={onOpenPpdb}
              className="px-2.5 py-1.5 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-xs"
            >
              PPDB
            </button>

            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold rounded-xl text-left transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.label}
                      {link.externalUrl && <ExternalLink className="w-3.5 h-3.5 opacity-70" />}
                    </span>
                    {link.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white text-blue-700' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
                <button
                  id="mobile-drawer-theme-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSettings();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold rounded-xl text-xs transition-colors border border-red-200"
                >
                  <Palette className="w-4 h-4 text-red-600" />
                  <span>Pengaturan Tema & Warna ({theme})</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs"
                >
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span>{currentUser ? `Akun: ${currentUser.fullName} (${currentUser.role})` : 'Portal Login / Daftar Supabase'}</span>
                </button>

                <button
                  id="mobile-drawer-ppdb-btn"
                  onClick={() => {
                    handleNavClick('ppdb');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs shadow-md"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Daftar PPDB Online 2026/2027</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
