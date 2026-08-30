import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  User, 
  CheckCircle2, 
  Users, 
  Target, 
  Sparkles, 
  Clock, 
  Flag, 
  Flame, 
  MapPin,
  ShieldCheck,
  Award,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { EXTRACURRICULARS, OSIS_INFO } from '../data/schoolData';
import { getEkskulLogo2D } from '../components/EkskulLogos2D';

export const ActivitiesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ekskul' | 'osis' | 'prestasi'>('ekskul');
  const [selectedEkskulId, setSelectedEkskulId] = useState<string | null>(null);

  const selectedEkskul = EXTRACURRICULARS.find(e => e.id === selectedEkskulId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Kesiswaan & Pengembangan Karakter
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kesiswaan, Ekstrakurikuler & OSIS SMK Budi Murni 1
          </h1>
          <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
            Wadah pembinaan minat, bakat, kepemimpinan, dan akhlak mulia siswa. Melalui 4 kegiatan ekstrakurikuler pilihan dan organisasi OSIS, peserta didik dibekali karakter disiplin dan sportivitas tinggi.
          </p>
        </div>
      </div>

      {/* Main Section Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        <button
          id="btn-tab-ekskul"
          onClick={() => setActiveTab('ekskul')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'ekskul'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>4 Ekstrakurikuler Resmi</span>
        </button>

        <button
          id="btn-tab-osis"
          onClick={() => setActiveTab('osis')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'osis'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Users className="w-4 h-4 text-indigo-400" />
          <span>Organisasi OSIS & Visi Misi</span>
        </button>

        <button
          id="btn-tab-prestasi"
          onClick={() => setActiveTab('prestasi')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'prestasi'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Galeri Prestasi</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-400 text-slate-950 font-bold uppercase">
            Sedang Memproses
          </span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: 4 EKSTRAKURIKULER RESMI (CLEAN 2D LOGOS & GRID)    */}
      {/* ========================================================= */}
      {activeTab === 'ekskul' && (
        <div className="space-y-10">
          
          {/* Info Notice Banner */}
          <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-amber-400/30 text-amber-950 font-bold shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Jadwal Resmi Ekstrakurikuler: Sehabis Pulang Sekolah
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Seluruh 4 cabang ekstrakurikuler dilaksanakan rutin <strong>Sehabis Pulang Sekolah</strong> di lingkungan kampus SMK Budi Murni 1 Jakarta dengan bimbingan pelatih profesional.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono font-bold px-3.5 py-1.5 bg-amber-200 text-amber-950 rounded-xl whitespace-nowrap border border-amber-300">
                4 Cabang Ekskul
              </span>
            </div>
          </div>

          {/* Weekly Schedule Overview Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  Matriks Pelaksanaan Mingguan
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                  Jadwal 4 Ekstrakurikuler SMK Budi Murni 1
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 font-mono">
                TP 2026/2027
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXTRACURRICULARS.map((item) => {
                const hari = item.schedule.split('(')[0].trim();
                return (
                  <div 
                    key={item.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5"
                  >
                    <div className="shrink-0">
                      {getEkskulLogo2D(item.id, "w-12 h-12")}
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {hari}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-sm">{item.name}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Sehabis Pulang Sekolah</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4 Ekstrakurikuler Cards Grid with 2D Custom Logos */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Profil & Program 4 Ekstrakurikuler
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pilih cabang ekstrakurikuler untuk mengembangkan bakat olahraga, seni religi, dan kepanduan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXTRACURRICULARS.map((item) => {
                const hariText = item.schedule.split('(')[0].trim();
                return (
                  <div
                    key={item.id}
                    id={`ekskul-card-${item.id}`}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-5">
                      
                      {/* Card Header: 2D Logo, Title & Category */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 transition-colors shrink-0 shadow-2xs">
                            {getEkskulLogo2D(item.id, "w-16 h-16")}
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                              Ekstrakurikuler
                            </span>
                            <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs font-medium text-slate-500 mt-0.5">
                              {item.category === 'Wajib' ? 'Ekskul Wajib Kepanduan' : 'Ekskul Pilihan Prestasi'}
                            </p>
                          </div>
                        </div>

                        <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono shrink-0 ${
                          item.category === 'Wajib' 
                            ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Information Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center gap-2 text-blue-700 text-xs font-bold">
                            <Calendar className="w-4 h-4 shrink-0" />
                            <span>Hari & Waktu:</span>
                          </div>
                          <p className="font-extrabold text-xs sm:text-sm text-slate-900">
                            {hariText} (Sehabis Pulang Sekolah)
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold">
                            <MapPin className="w-4 h-4 shrink-0" />
                            <span>Tempat Latihan:</span>
                          </div>
                          <p className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                        <User className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Pembina / Pelatih: <strong>{item.coach}</strong></span>
                      </div>

                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Aktif & Terbuka untuk Seluruh Siswa</span>
                      </span>

                      <button
                        id={`btn-detail-${item.id}`}
                        onClick={() => setSelectedEkskulId(item.id)}
                        className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 text-xs font-extrabold flex items-center gap-1.5 transition-all"
                      >
                        <span>Info Lengkap</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits & Registration Section */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Pendaftaran & Partisipasi Siswa
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Cara Bergabung dengan Ekstrakurikuler SMK Budi Murni 1
              </h3>
              <p className="text-sm text-blue-200 leading-relaxed">
                Setiap siswa baru wajib mengikuti Ekstrakurikuler Pramuka dan dianjurkan memilih minimal 1 ekstrakurikuler peminatan (Futsal, Hadroh, atau Basket) sesuai potensi diri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold w-fit">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-white text-sm">1. Formulir Pendaftaran</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Daftar saat masa Pengenalan Lingkungan Sekolah (MPLS) atau langsung ke sekretariat OSIS di Ruang Kesiswaan.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-400 text-slate-950 font-bold w-fit">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-white text-sm">2. Temu Perdana & Pembina</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Menghadiri sesi perkenalan, pengenalan tata tertib latihan, dan koordinasi seragam perlengkapan latihan.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold w-fit">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-white text-sm">3. Latihan Rutin & Lomba</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Mengikuti jadwal rutin sehabis pulang sekolah dan berkesempatan mewakili sekolah dalam kejuaraan resmi.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: ORGANISASI OSIS                                    */}
      {/* ========================================================= */}
      {activeTab === 'osis' && (
        <div className="space-y-10">
          
          {/* OSIS Intro Header */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 font-mono">
                    Wadah Kepemimpinan Siswa
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {OSIS_INFO.name}
                  </h2>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                Motto: "{OSIS_INFO.motto}"
              </div>
            </div>

            {/* Visi & Misi Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              
              {/* Visi OSIS */}
              <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 font-mono uppercase">
                    <Target className="w-3.5 h-3.5" />
                    Visi OSIS
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight text-white">
                    Visi Utama OSIS SMK Budi Murni 1
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    "{OSIS_INFO.vision}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/15 flex items-center gap-2 text-xs text-amber-300 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Mewujudkan Pemimpin Muda Vokasi yang Tangguh</span>
                </div>
              </div>

              {/* Misi OSIS */}
              <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 font-mono uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Misi OSIS
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Misi Kepengurusan OSIS
                </h3>

                <div className="space-y-3 pt-2">
                  {OSIS_INFO.missions.map((misi, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {misi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Struktur & Sekbid Kepengurusan OSIS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Struktur & Seksi Bidang (Sekbid) OSIS
                </h3>
                <p className="text-xs text-slate-500">
                  Koordinasi kepengurusan siswa yang membidangi seluruh aspek kesiswaan di SMK Budi Murni 1
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OSIS_INFO.management.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors space-y-2"
                >
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 uppercase">
                    Sekbid #{idx + 1}
                  </span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.role}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Kerja Unggulan OSIS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Program Kerja Unggulan OSIS
                </h3>
                <p className="text-xs text-slate-500">
                  Kegiatan rutin tahunan yang diselenggarakan oleh kepengurusan OSIS SMK Budi Murni 1
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 font-mono">
                TP 2026/2027
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OSIS_INFO.workPrograms.map((prog, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {prog.category}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        {prog.schedule}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">{prog.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: PRESTASI SISWA (COMING SOON)                       */}
      {/* ========================================================= */}
      {activeTab === 'prestasi' && (
        <div className="space-y-8">
          
          {/* Coming Soon Notice Card */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl border border-slate-800 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Trophy Icon with glowing ring */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-400/20 border border-amber-400/30 text-amber-400 shadow-inner">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase bg-amber-400 text-slate-950 font-mono tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Coming Soon • Sedang Memproses Prestasi Siswa
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Galeri Prestasi & Penghargaan Siswa
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Saat ini tim kesiswaan sedang memproses dan memverifikasi data rekapitulasi prestasi kejuaraan siswa SMK Budi Murni 1 Jakarta, meliputi piagam medali LKS (Lomba Kompetensi Siswa), piala kejuaraan turnamen Futsal & Basket antarpelajar, festival seni Hadroh, serta capaian akademik resmi.
              </p>
            </div>

            {/* Status Checklist / Preview */}
            <div className="pt-6 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs">Sedang Memproses Rekapitulasi LKS</h4>
                  <p className="text-[11px] text-slate-400">Verifikasi piagam Lomba Kompetensi Siswa Bidang IT, Otomotif & Kelistrikan</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs">Sedang Memproses Piala Kejuaraan</h4>
                  <p className="text-[11px] text-slate-400">Piala Turnamen Futsal, Basket & Seni Religi Hadroh</p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Data prestasi lengkap akan segera ditampilkan secara transparan dan terpublikasi di portal resmi ini.
            </div>
          </div>

        </div>
      )}

      {/* Modal Dialog for Ekskul Detail */}
      {selectedEkskul && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 relative overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100">
                  {getEkskulLogo2D(selectedEkskul.id, "w-14 h-14")}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">Detail Ekstrakurikuler</span>
                  <h3 className="text-xl font-extrabold text-slate-900">{selectedEkskul.name}</h3>
                  <p className="text-xs text-slate-500">{selectedEkskul.category === 'Wajib' ? 'Ekskul Wajib Kepanduan' : 'Ekskul Pilihan Prestasi'}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedEkskulId(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Tutup modal"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedEkskul.description}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-600">Hari Latihan:</span>
                <span className="font-extrabold text-blue-600">{selectedEkskul.schedule.split('(')[0].trim()}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-600">Waktu Pelaksanaan:</span>
                <span className="font-extrabold text-slate-900">Sehabis Pulang Sekolah</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-600">Lokasi:</span>
                <span className="font-extrabold text-slate-900">{selectedEkskul.location}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-600">Pembina / Pelatih:</span>
                <span className="font-extrabold text-slate-900">{selectedEkskul.coach}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedEkskulId(null)}
              className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md"
            >
              Tutup Info
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
