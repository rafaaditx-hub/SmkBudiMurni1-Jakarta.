import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Users, 
  Cpu, 
  Wrench, 
  Zap, 
  Bike,
  Sparkles, 
  Phone, 
  GraduationCap, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Download, 
  Building2, 
  ChevronRight,
  Clock,
  Newspaper,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Target
} from 'lucide-react';
import { SCHOOL_INFO, NEWS_ARTICLES, NewsItem } from '../data/schoolData';
import { PrincipalAvatar } from '../components/PrincipalAvatar';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectMajor: (majorId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION (SELAMAT DATANG DI SMK BUDI MURNI 1) */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/gedung-sekolah.jpg" 
            alt="Gedung Kampus SMK Budi Murni 1" 
            className="w-full h-full object-cover object-center brightness-40 scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-blue-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl space-y-6">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white border border-blue-400/30 backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                Akreditasi A Unggul
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white border border-emerald-400/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                PPDB TP 2026/2027 Dibuka
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 backdrop-blur-sm">
                NPSN: {SCHOOL_INFO.npsn}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Pusat Pendidikan Vokasi Unggulan & Berkarakter di Jakarta Timur
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Selamat datang di portal resmi <strong>SMK Budi Murni 1 Jakarta</strong>. Kami berkomitmen mencetak lulusan berdaya saing global melalui pembelajaran terintegrasi industri modern, penguatan karakter akhlak mulia, dan sertifikasi kompetensi nasional.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="hero-ppdb-register-btn"
                onClick={() => onNavigate('ppdb')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all transform active:scale-95"
              >
                <span>Pendaftaran PPDB 2026/2027</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-schedule-btn"
                onClick={() => onNavigate('jadwal')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 backdrop-blur-sm hover:text-white transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Jadwal Pelajaran TP 2026-2027</span>
              </button>
            </div>

            {/* Quick feature pill row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kurikulum Merdeka Vokasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sertifikasi BNSP / LSP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bursa Kerja Khusus (BKK)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Teaching Factory Modern</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:border-blue-200 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1">
                <h4 className="text-xs font-bold text-slate-800">{stat.label}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-1">{stat.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SAMBUTAN RESMI KEPALA SEKOLAH (DENGAN FOTO ASLI BUDIMAN SITORUS, SE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo / Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-4/3 lg:aspect-square">
              <img 
                src="/assets/images/gedung-sekolah.jpg" 
                alt="Kampus SMK Budi Murni 1" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 space-y-2">
                <span className="text-amber-300 font-extrabold text-xs uppercase tracking-wider font-mono">
                  Yayasan Perguruan Budi Murni
                </span>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-wide leading-relaxed">
                  SMK Budi Murni 1 Jakarta
                </h3>
              </div>
            </div>

            {/* Floating Accreditation Badge */}
            <div className="absolute -bottom-3 sm:-bottom-4 -right-2 sm:-right-4 lg:-right-6 bg-blue-700 text-white px-3.5 py-2.5 rounded-xl shadow-xl border-2 border-white flex items-center gap-2.5 z-10">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 shrink-0" />
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-200 leading-tight">Status Akreditasi</div>
                <div className="text-[11px] sm:text-xs font-extrabold whitespace-nowrap">Terakreditasi A (Unggul)</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
              <Building2 className="w-3.5 h-3.5" />
              Sambutan Kepala Sekolah
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Membangun Generasi Vokasi Berakhlak Mulia & Berdaya Saing Global
            </h2>

            <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
              <p>
                <em>Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua.</em>
              </p>
              <p>
                Selamat datang di website resmi <strong>SMK Budi Murni 1 Jakarta</strong>. Sebagai lembaga pendidikan vokasi terdepan di Jakarta Timur, kami terus berkomitmen menghadirkan ekosistem belajar yang adaptif terhadap transformasi industri global.
              </p>
              <p>
                Melalui penguatan budaya kerja industri, sarana laboratorium terstandarisasi, serta pembinaan karakter profil Pelajar Pancasila, kami mendidik setiap peserta didik agar memiliki kompetensi teknis yang unggul, berintegritas tinggi, dan siap diserap oleh dunia usaha maupun melanjutkan ke jenjang perguruan tinggi.
              </p>
            </div>

            {/* Principal Signature Info */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <PrincipalAvatar size="lg" showBadge={true} />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">Budiman Sitorus, SE.</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Kepala Sekolah SMK Budi Murni 1 Jakarta</p>
                </div>
              </div>
              <button
                id="home-learn-profile-btn"
                onClick={() => onNavigate('tentang')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group"
              >
                <span>Lihat Profil Lengkap</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. NILAI UTAMA SEKOLAH (4 PILAR KARAKTER VOKASI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Prinsip Pendidikan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            4 Pilar Keunggulan Peserta Didik Budi Murni
          </h2>
          <p className="text-sm text-slate-600">
            Fondasi komprehensif yang ditanamkan dalam setiap proses kegiatan belajar mengajar di SMK Budi Murni 1.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Cerdas (Intelektual)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Memiliki pemikiran kritis, penalaran kuantitatif terapan, dan daya analisis problem solving sesuai standar asesmen nasional Kemendikdasmen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Terampil (Vokasi)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mampu mengoperasikan perangkat, mesin, dan sistem berstandar industri dengan sertifikasi lisensi BNSP / LSP-P1 resmi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Berkarakter (Integritas)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menjunjung tinggi kejujuran, disiplin kerja 5R (Ringkas, Rapi, Resik, Rawat, Rajin), serta norma sopan santun dan toleransi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-amber-300 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">Siap Kerja (DUDI)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tersambung langsung dengan 65+ mitra industri terpercaya melalui Bursa Kerja Khusus (BKK) dan program magang PKL bersertifikat.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PENGUMUMAN & BERITA TERKINI SEKOLAH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Pembaruan Resmi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
              Berita & Pengumuman Sekolah Terbaru
            </h2>
          </div>
          <button
            onClick={() => onNavigate('berita')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            <span>Semua Berita & Galeri</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.slice(0, 3).map((item: NewsItem) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">
                    {item.category}
                  </span>
                  <span className="font-mono">{item.date}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('berita')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PUSAT NAVIGASI LAYANAN TERPISAH (CLEAN DIRECT ROUTING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Eksplorasi Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pusat Layanan & Informasi Resmi
          </h2>
          <p className="text-sm text-slate-600">
            Setiap informasi tersaji terstruktur dan terpisah sesuai kebutuhan Anda tanpa pencampuran konten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Profil Sekolah */}
          <button
            onClick={() => onNavigate('tentang')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Tentang & Profil Sekolah</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Visi, misi, sejarah pendirian, dewan guru & tenaga kependidikan, serta legalitas akreditasi A.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Card 2: Program Keahlian */}
          <button
            onClick={() => onNavigate('program')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Program Keahlian (4 Jurusan)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Detail kompetensi keahlian TKJ, TKR, TITL, dan TBSM lengkap dengan kurikulum dan prospek kerja.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Card 3: Fasilitas */}
          <button
            onClick={() => onNavigate('fasilitas')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Fasilitas Sarana Prasarana</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Lab komputer jaringan, perpustakaan digital, mushola ber-AC, dan ruang konseling bimbingan karir BK.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Card 4: Jadwal Pelajaran */}
          <button
            onClick={() => onNavigate('jadwal')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Jadwal Pelajaran TP 2026/2027</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Jadwal resmi KBM per hari dan kelas, pengampu guru, jam belajar, dan unduh scan PDF resmi.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Card 5: Layanan Portal */}
          <button
            onClick={() => onNavigate('portal')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Layanan Portal Siswa</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Layanan Bimbingan Konseling & Karir (BK) dan Pusat Layanan Aspirasi & Pengaduan (Helpdesk).
              </p>
            </div>
            <span className="text-xs font-bold text-indigo-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Card 6: Kesiswaan */}
          <button
            onClick={() => onNavigate('kesiswaan')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Kesiswaan & Ekstrakurikuler</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Organisasi OSIS, seluruh ekstrakurikuler wajib & pilihan, pembinaan karakter, dan galeri prestasi.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Card 7: BKK & Alumni */}
          <button
            onClick={() => onNavigate('bkk')}
            className="text-left bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">BKK & Penyaluran Alumni</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bursa Kerja Khusus berizin, info lowongan rekanan industri, magang PKL, dan tracer study.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              Buka Halaman <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </button>

        </div>
      </section>

      {/* 8. PPDB BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
              Penerimaan Siswa Baru
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Siap Bergabung dengan SMK Budi Murni 1?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Pendaftaran peserta didik baru TP 2026/2027 telah dibuka. Kuota kelas terbatas untuk menjamin rasio praktik optimal di bengkel & lab.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              id="cta-bottom-ppdb-btn"
              onClick={() => onNavigate('ppdb')}
              className="px-6 py-3.5 bg-white text-blue-900 font-extrabold rounded-xl text-sm shadow-md hover:bg-blue-50 transition-colors"
            >
              Formulir Pendaftaran Online
            </button>
            <a
              id="cta-bottom-wa-btn"
              href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Panitia%20PPDB%20SMK%20Budi%20Murni%201,%20saya%20ingin%20konsultasi%20pendaftaran`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Konsultasi WA</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
