import React from 'react';
import { 
  Sparkles, 
  Clock, 
  Newspaper, 
  Bell, 
  Calendar, 
  Flame, 
  Code, 
  ArrowRight,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const NewsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Main Coming Soon Banner Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 text-white p-8 sm:p-14 shadow-2xl border border-slate-700/80 space-y-8">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              COMING SOON
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Dalam Tahap Penyusunan
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-600/30 text-blue-200 border border-blue-400/30">
              SMK Budi Murni 1 Jakarta
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Portal Berita &amp; Pengumuman Sekolah
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Fitur berita resmi dan pengumuman kegiatan sekolah sedang dalam proses persiapan dan kurasi materi oleh <strong>Pengembang Web</strong> untuk menyajikan informasi terbaru, liputan kegiatan, Uji Kompetensi Kejuruan (UKK), prestasi siswa, dan agenda akademik SMK Budi Murni 1 secara real-time.
            </p>
          </div>

          {/* Web Developer Credit Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold border border-amber-400/30 shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Pembuat Web &amp; Pengembang:</p>
                <p className="text-xs text-amber-300 font-extrabold">Rafa Aditya Nugroho</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] px-3 py-1 rounded-lg bg-white/10 text-slate-300 border border-white/10 font-medium inline-block">
                Status: Menyiapkan Konten Berita Terbaru
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Feature Preview Cards (What is coming) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Newspaper className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Liputan Kegiatan KBM &amp; Ekskul</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Dokumentasi lengkap praktikum bengkel 4 jurusan kejuruan, kepramukaan, rohis, seni musik, dan olahraga.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Galeri Prestasi &amp; Kejuaraan</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Publikasi kemenangan lomba LKS (Lomba Kompetensi Siswa), kejuaraan olahraga, dan penghargaan tingkat nasional.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Bell className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Pengumuman Resmi &amp; Agenda</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pemberitahuan ujian semester, jadwal libur, kalender akademik, serta rekrutmen magang &amp; lowongan BKK.
          </p>
        </div>

      </div>

      {/* Direct Contact / Info Help */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-slate-600">
          <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Untuk informasi mendesak seputar sekolah dan pendaftaran, silakan hubungi Customer Service kami.</span>
        </div>
        <a
          href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Admin%20SMK%20Budi%20Murni%201,%20saya%20ingin%20menanyakan%20informasi%20terbaru`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-2xs whitespace-nowrap"
        >
          Hubungi via WhatsApp
        </a>
      </div>

    </div>
  );
};
