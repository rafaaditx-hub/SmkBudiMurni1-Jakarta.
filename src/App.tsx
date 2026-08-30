import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';
import { PpdbPage } from './pages/PpdbPage';
import { MajorsPage } from './pages/MajorsPage';
import { ProfilePage } from './pages/ProfilePage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { BkkPage } from './pages/BkkPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { PortalPage } from './pages/PortalPage';
import { TkaPage } from './pages/TkaPage';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';
import { supabase, UserProfile } from './lib/supabase';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [selectedMajorId, setSelectedMajorId] = useState<string>('tkj');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('bm1_user_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Hapus akun demo tersimpan agar wajib login / daftar akun resmi
        if (parsed?.id?.startsWith('demo-') || parsed?.email?.includes('demo')) {
          localStorage.removeItem('bm1_user_profile');
          return null;
        }
        return parsed;
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to Supabase Auth changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const metadata = session.user.user_metadata || {};
        const profile: UserProfile = {
          id: session.user.id,
          email: session.user.email || '',
          fullName: metadata.full_name || metadata.name || session.user.email?.split('@')[0] || 'User',
          role: metadata.role || 'siswa',
          major: metadata.major || 'TKJ',
          nisnOrNip: metadata.nisn || metadata.sub || '2026-BM1',
          avatarUrl: metadata.avatar_url || metadata.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        };
        setCurrentUser(profile);
        localStorage.setItem('bm1_user_profile', JSON.stringify(profile));
      } else if (event === 'SIGNED_OUT') {
        setCurrentUser(null);
        localStorage.removeItem('bm1_user_profile');
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleAuthSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    localStorage.setItem('bm1_user_profile', JSON.stringify(user));
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn('Sign out notice:', e);
    }
    setCurrentUser(null);
    localStorage.removeItem('bm1_user_profile');
  };

  const handleSelectMajor = (majorId: string) => {
    setSelectedMajorId(majorId);
    setActiveTab('program');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPpdb = () => {
    setActiveTab('ppdb');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPpdb={handleOpenPpdb}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <HomePage 
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectMajor={handleSelectMajor}
          />
        )}

        {(activeTab === 'tentang' || activeTab === 'profil') && (
          <ProfilePage />
        )}

        {(activeTab === 'program' || activeTab === 'jurusan') && (
          <MajorsPage 
            selectedMajorId={selectedMajorId}
            onNavigatePpdb={handleOpenPpdb}
          />
        )}

        {activeTab === 'fasilitas' && (
          <FacilitiesPage onNavigatePpdb={handleOpenPpdb} />
        )}

        {activeTab === 'jadwal' && (
          <SchedulePage />
        )}

        {activeTab === 'portal' && (
          <PortalPage 
            currentUser={currentUser}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            onLogout={handleLogout}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'kesiswaan' && (
          <ActivitiesPage />
        )}

        {activeTab === 'bkk' && (
          <BkkPage />
        )}

        {activeTab === 'tka' && (
          <TkaPage />
        )}

        {activeTab === 'berita' && (
          <NewsPage />
        )}

        {activeTab === 'ppdb' && (
          <PpdbPage />
        )}

        {activeTab === 'kontak' && (
          <ContactPage />
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            id="btn-scroll-top"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 text-white shadow-lg hover:bg-slate-800 backdrop-blur-sm transition-all transform hover:scale-110 active:scale-95"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Direct Chat Float */}
        <a
          id="btn-float-whatsapp"
          href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Admin%20SMK%20Budi%20Murni%201,%20saya%20ingin%20bertanya%20informasi%20sekolah`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-full shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 active:scale-95 group"
          title="Hubungi Admin via WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-semibold">WA CS BM1</span>
        </a>

      </div>

      {/* Supabase Authentication Modal (Login / Daftar / Lupa Password) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onAuthSuccess={handleAuthSuccess}
        onLogout={handleLogout}
      />

      {/* Footer */}
      <Footer 
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
};
