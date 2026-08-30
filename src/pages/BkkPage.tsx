import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Sparkles, 
  Clock, 
  Code, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const BkkPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Main Coming Soon Banner Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-14 shadow-2xl border border-emerald-900/60 space-y-8">
        
        {/* Glow decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-400 text-slate-950 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              COMING SOON
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              Portal Rekrutmen Sedang Disiapkan
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-600/30 text-emerald-200 border border-emerald-400/30">
              Bursa Kerja Khusus (BKK) SMK Budi Murni 1
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bursa Kerja Khusus &amp; Karir Alumni
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
              Portal pendaftaran lowongan kerja, kemitraan industri (Astra Group, Telkom Indonesia, PT PLN, AHASS, dll.), jadwal rekrutmen langsung di kampus, dan penelusuran karir alumni (*Tracer Study*) sedang dalam proses penyusunan dan integrasi sistem oleh <strong>Pengembang Web</strong>.
            </p>
          </div>

          {/* Web Developer Credit Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-bold border border-emerald-400/30 shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Pembuat Web &amp; Pengembang Sistem:</p>
                <p className="text-xs text-emerald-300 font-extrabold">Rafa Aditya Nugroho</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] px-3 py-1 rounded-lg bg-white/10 text-slate-300 border border-white/10 font-medium inline-block">
                Status: Sinkronisasi Mitra Industri &amp; Lowongan Kerja
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Feature Preview Cards (What is coming) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Lowongan Kerja Mitra Industri</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Penyaluran langsung lulusan jurusan TKJ, TKR, TITL, dan TBSM ke perusahaan manufaktur, telekomunikasi, dan otomotif nasional.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Rekrutmen &amp; Tes Kampus</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pendaftaran online untuk jadwal psikotes, tes fisik, dan wawancara kerja langsung yang diselenggarakan di kampus SMK Budi Murni 1.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Tracer Study &amp; Jaringan Alumni</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pendataan status kerja, kuliah, maupun wirausaha serta forum jejaring karir profesional antar alumni lintas angkatan.
          </p>
        </div>

      </div>

      {/* Direct Contact & Consultation Help */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-slate-600">
          <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Bagi perusahaan yang ingin bekerjasama atau alumni yang memerlukan legalisir/info kerja, silakan hubungi tim BKK kami.</span>
        </div>
        <a
          href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Admin%20BKK%20SMK%20Budi%20Murni%201,%20saya%20ingin%20berkonsultasi%20mengenai%20kemitraan/lowongan%20kerja`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-2xs whitespace-nowrap"
        >
          Hubungi BKK via WhatsApp
        </a>
      </div>

    </div>
  );
};
