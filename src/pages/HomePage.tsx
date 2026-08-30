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
  MapPin
} from 'lucide-react';
import { SCHOOL_INFO, MAJORS } from '../data/schoolData';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectMajor: (majorId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectMajor }) => {
  const getMajorIcon = (code: string) => {
    switch (code) {
      case 'TKJ': return <Cpu className="w-5 h-5" />;
      case 'TKR': return <Wrench className="w-5 h-5" />;
      case 'TITL': return <Zap className="w-5 h-5" />;
      case 'TBSM': return <Bike className="w-5 h-5" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
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
                PPDB 2026/2027 Dibuka
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 backdrop-blur-sm">
                Jakarta Timur
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Pusat Pendidikan Vokasi Unggulan & Siap Kerja di Jakarta Timur
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              SMK Budi Murni 1 menyiapkan peserta didik dengan keahlian teknologi terkini di bidang <strong>Jaringan Komputer (TKJ)</strong>, <strong>Otomotif Roda 4 (TKR)</strong>, <strong>Listrik Industri (TITL)</strong>, dan <strong>Sepeda Motor (TBSM)</strong> dengan kurikulum berbasis industri dan penyaluran kerja terpercaya.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="hero-ppdb-register-btn"
                onClick={() => onNavigate('ppdb')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all transform active:scale-95"
              >
                <span>Daftar PPDB Online 2026/2027</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-schedule-btn"
                onClick={() => onNavigate('jadwal')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 backdrop-blur-sm hover:text-white transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Lihat Jadwal Pelajaran TP 2026-2027</span>
              </button>

              <a
                id="hero-download-pdf-btn"
                href="/docs/jadwal-pelajaran-2026-2027.pdf"
                download="Jadwal-Pelajaran-SMK-Budi-Murni-1-TP-2026-2027.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-300 bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm transition-colors"
                title="Unduh Dokumen PDF Jadwal Resmi"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Unduh PDF Jadwal</span>
              </a>
            </div>

            {/* Quick feature pill row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sertifikasi BNSP / LSP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Teaching Factory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bursa Kerja Khusus (BKK)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Beasiswa Berprestasi</span>
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

      {/* 3. SAMBUTAN KEPALA SEKOLAH & PROFIL SINGKAT */}
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
            <div className="absolute -bottom-3 sm:-bottom-4 -right-2 sm:-right-4 lg:-right-6 bg-blue-700 text-white px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-xl border-2 border-white flex items-center gap-2.5 z-10">
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
                Selamat datang di website resmi <strong>SMK Budi Murni 1 Jakarta</strong>. Sebagai salah satu lembaga pendidikan kejuruan terdepan, kami berkomitmen teguh menyelaraskan pendidikan vokasi dengan perkembangan industri modern melalui integrasi kurikulum berbasis kompetensi, workshop terstandarisasi industri, dan pembentukan karakter integritas tinggi.
              </p>
              <p>
                Dengan 4 konsentrasi keahlian unggulan (TKJ, TKR, TITL, TBSM), kami terus memperluas jaringan kerjasama dengan dunia usaha dan dunia industri (DUDI) untuk menjamin kualitas lulusan yang langsung terserap di dunia kerja, berjiwa wirausaha tangguh, maupun melanjutkan studi ke jenjang perguruan tinggi.
              </p>
            </div>

            {/* Principal Signature Info */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">Budiman Sitorus, SE.</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Kepala Sekolah SMK Budi Murni 1 Jakarta</p>
              </div>
              <button
                id="home-learn-profile-btn"
                onClick={() => onNavigate('profil')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group"
              >
                <span>Lihat Profil Lengkap</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PROGRAM KEAHLIAN / JURUSAN UNGGULAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Kompetensi Keahlian
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            4 Program Keahlian Standar Industri 4.0
          </h2>
          <p className="text-sm text-slate-600">
            Didukung bengkel praktik modern, instruktur berpengalaman dari dunia industri, dan sertifikasi BNSP resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MAJORS.map((major) => (
            <div 
              key={major.id}
              id={`card-major-${major.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img 
                  src={major.image} 
                  alt={major.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to building image if specific major image fails
                    e.currentTarget.src = '/assets/images/gedung-sekolah.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                
                {/* Badge Code */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-blue-600 text-white shadow-md flex items-center gap-1.5">
                    {getMajorIcon(major.code)}
                    {major.code}
                  </span>
                </div>

                {/* Major Title inside photo */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug group-hover:text-blue-200 transition-colors">
                    {major.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mt-1.5 leading-relaxed font-medium">
                    {major.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {major.description}
                </p>

                {/* Key Competencies Chips */}
                <div className="space-y-2.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Kompetensi Utama:</h4>
                  <div className="flex flex-wrap gap-2">
                    {major.competencies.slice(0, 3).map((comp, cIdx) => (
                      <span key={cIdx} className="text-xs px-3 py-1 rounded-xl bg-slate-100 text-slate-700 font-medium">
                        {comp}
                      </span>
                    ))}
                    {major.competencies.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-xl bg-blue-50 text-blue-700 font-bold">
                        +{major.competencies.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>

                {/* Industry Partners preview */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Mitra:</span> {major.industryPartners[0]}
                  </div>

                  <button
                    id={`btn-detail-major-${major.id}`}
                    onClick={() => {
                      onSelectMajor(major.id);
                      onNavigate('jurusan');
                    }}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Detail Jurusan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KEUNGGULAN SEKOLAH & TEACHING FACTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Kenapa Memilih Kami?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Keunggulan Belajar di SMK Budi Murni 1
          </h2>
          <p className="text-sm text-slate-600">
            Fasilitas komprehensif, budaya disiplin, dan lingkungan edukatif yang siap mengantarkan siswa menuju kesuksesan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Teaching Factory & Lab Modern</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Suasana belajar didesain menyerupai lingkungan kerja industri nyata. Siswa membiasakan diri dengan standar operasional prosedur (SOP) perusahaan sejak kelas X.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Bursa Kerja Khusus (BKK) Aktif</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Layanan rekrutmen kerja kampus berkala sebelum kelulusan bekerjasama dengan 65+ mitra industri terpercaya di kawasan industri Jakarta, Bekasi, Karawang, dan Jabodetabek.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Sertifikasi BNSP & LSP-P1</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh siswa dibekali sertifikat kompetensi resmi berlisensi Badan Nasional Sertifikasi Profesi (BNSP) yang diakui secara nasional maupun internasional.
            </p>
          </div>
        </div>
      </section>

      {/* 6. MITRA INDUSTRI DUDI */}
      <section className="bg-slate-100 py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Jaringan Kemitraan Strategis
            </h3>
            <p className="text-lg font-bold text-slate-900">
              Bekerjasama dengan 65+ Perusahaan Multinasional & BUMN
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Astra Honda Motor', category: 'Otomotif Roda 2' },
              { name: 'Auto2000 (Toyota)', category: 'Otomotif Roda 4' },
              { name: 'PT Telkom Indonesia', category: 'Telekomunikasi & IT' },
              { name: 'PT PLN (Persero)', category: 'Kelistrikan Energi' },
              { name: 'Yamaha Motor Mfg', category: 'Otomotif Roda 2' },
              { name: 'Schneider Electric', category: 'Otomasi Industri' },
            ].map((partner, pIdx) => (
              <div 
                key={pIdx} 
                className="bg-white rounded-2xl p-4 text-center border border-slate-200/80 shadow-xs flex flex-col justify-center items-center h-24 hover:border-blue-400 transition-colors"
              >
                <span className="font-extrabold text-xs text-slate-800">{partner.name}</span>
                <span className="text-[10px] text-slate-500 mt-1">{partner.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PPDB CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
              Penerimaan Siswa Baru
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Siap Menjadi Ahli Vokasi Masa Depan?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Daftarkan diri Anda sekarang untuk TP 2026/2027. Kuota kelas terbatas untuk menjamin rasio praktik optimal di bengkel & lab.
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
