import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  FileText, 
  GraduationCap, 
  HelpCircle, 
  Info, 
  Layers, 
  Lightbulb, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  AlertTriangle,
  XCircle,
  Wrench,
  Zap,
  Bike,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TKA_DATA } from '../data/schoolData';

export const TkaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jadwal' | 'syarat' | 'mapel' | 'larangan' | 'regulasi'>('jadwal');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedMajorFilter, setSelectedMajorFilter] = useState<'ALL' | 'TKJ' | 'TKR' | 'TITL' | 'TBSM'>('ALL');

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const getMajorIcon = (code: string) => {
    switch (code) {
      case 'TKJ': return <Cpu className="w-5 h-5 text-red-600" />;
      case 'TKR': return <Wrench className="w-5 h-5 text-emerald-600" />;
      case 'TITL': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'TBSM': return <Bike className="w-5 h-5 text-red-600" />;
      default: return <GraduationCap className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* 1. HERO HEADER: OFFICIAL MINISTRY BRANDING */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-red-900/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 font-mono shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Kemendikdasmen RI
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/80 text-red-100 border border-red-400/30 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Permendikdasmen No. 9 Tahun 2025
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/15">
              Standar Evaluasi Vokasi Nasional
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Tes Kemampuan Akademik (TKA) Kemendikdasmen
          </h1>

          <p className="text-sm sm:text-base text-red-100/90 leading-relaxed font-normal">
            Pusat informasi resmi penyelenggaraan <strong>Tes Kemampuan Akademik (TKA)</strong> tingkat nasional di bawah kepemimpinan Menteri Pendidikan Dasar dan Menengah <strong>Prof. Dr. Abdul Mu’ti, M.Ed.</strong> Menstandarkan capaian literasi, numerasi terapan, dan kejuruan murid SMK Budi Murni 1 menuju lulusan vokasi yang kompeten dan berkarakter.
          </p>

          {/* Ministry Note Box */}
          <div className="pt-2">
            <div className="inline-flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/15 text-xs sm:text-sm text-slate-200">
              <Info className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <p>
                <strong>Halaman Khusus TKA:</strong> Informasi jadwal resmi, syarat keikutsertaan, mata pelajaran pilihan kejuruan, tata tertib larangan, dan alokasi waktu ujian terangkum lengkap di halaman ini tanpa tercampur dengan aktivitas umum sekolah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION TABS (5 CORE TKA MODULES) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
        
        {/* Tab 1: Jadwal & Waktu Resmi */}
        <button
          id="tab-tka-jadwal"
          onClick={() => setActiveTab('jadwal')}
          className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'jadwal'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>Jadwal & Waktu Resmi TKA</span>
        </button>

        {/* Tab 2: Syarat Pengikut TKA */}
        <button
          id="tab-tka-syarat"
          onClick={() => setActiveTab('syarat')}
          className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'syarat'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Syarat-Syarat Pengikut TKA</span>
        </button>

        {/* Tab 3: Mata Pelajaran yang Dipilih */}
        <button
          id="tab-tka-mapel"
          onClick={() => setActiveTab('mapel')}
          className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'mapel'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-300" />
          <span>Mata Pelajaran yang Dipilih</span>
        </button>

        {/* Tab 4: Hal yang Tidak Diperbolehkan */}
        <button
          id="tab-tka-larangan"
          onClick={() => setActiveTab('larangan')}
          className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'larangan'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <XCircle className="w-4 h-4 text-rose-300" />
          <span>Larangan Selama TKA</span>
        </button>

        {/* Tab 5: Regulasi & FAQ */}
        <button
          id="tab-tka-regulasi"
          onClick={() => setActiveTab('regulasi')}
          className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'regulasi'
              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <FileText className="w-4 h-4 text-indigo-300" />
          <span>Regulasi & FAQ</span>
        </button>

      </div>

      {/* -----------------------------------------------------------------
          TAB 1: JADWAL & WAKTU RESMI TKA (TANPA RUANGAN, HANYA INFO SESI & JAM)
          ----------------------------------------------------------------- */}
      {activeTab === 'jadwal' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Informative notice: No specific room needed */}
          <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="font-extrabold text-slate-900 text-base">
                Informasi Jadwal Pelaksanaan & Pembagian Waktu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {TKA_DATA.officialSchedule.timeNotice}
              </p>
            </div>
          </div>

          {/* Alokasi Waktu Ujian Resmi per Mata Uji */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Alokasi Waktu Resmi Pengerjaan CBT
              </h3>
              <p className="text-xs text-slate-500">
                Durasi waktu standar nasional Kemendikdasmen untuk setiap kelompok mata uji
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TKA_DATA.officialSchedule.officialTimeSchedule.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-red-300 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-100 text-red-700 font-mono">
                        Mata Uji {idx + 1}
                      </span>
                      <span className="text-base font-black text-slate-900 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-xl">
                        <Clock className="w-4 h-4 text-red-600" />
                        {item.duration}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      {item.subject}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Waktu pengerjaan dihitung otomatis oleh sistem CBT Kemendikdasmen.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Tahapan TKA 2026/2027 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Timeline Resmi Tahapan TKA TP 2026/2027
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Alur persiapan dari sinkronisasi DNT hingga penerbitan Sertifikat Hasil TKA (SHTKA)
              </p>
            </div>

            <div className="space-y-4">
              {TKA_DATA.officialSchedule.timeline.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-slate-50/50 transition-all gap-3"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-red-50 text-red-700 font-bold flex items-center justify-center text-xs shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">{item.activity}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs whitespace-nowrap self-start sm:self-center font-mono">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Aturan Waktu & Durasi Pengerjaan */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Ketentuan Durasi Pengerjaan & Batas Waktu
                </h3>
                <p className="text-xs text-slate-500">Standar durasi pengerjaan per subtes Kemendikdasmen</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Mata Pelajaran Umum</span>
                <p className="text-xl font-extrabold text-red-600">90 Menit</p>
                <span className="text-[11px] text-slate-500 block">Literasi, Numerasi & Bahasa Inggris</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Mata Pelajaran Kejuruan</span>
                <p className="text-xl font-extrabold text-red-600">75 Menit</p>
                <span className="text-[11px] text-slate-500 block">Mata uji pilihan sesuai jurusan</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Toleransi Keterlambatan</span>
                <p className="text-xl font-extrabold text-amber-600">Maks. 15 Menit</p>
                <span className="text-[11px] text-slate-500 block">Tanpa tambahan waktu pengerjaan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-bold text-slate-800">Tata Waktu Pelaksanaan CBT:</span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {TKA_DATA.examDurationRules.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* -----------------------------------------------------------------
          TAB 2: SYARAT-SYARAT PENGIKUT TKA
          ----------------------------------------------------------------- */}
      {activeTab === 'syarat' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 uppercase font-mono">
                Kriteria Peserta Ujian
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Syarat-Syarat Pengikut TKA SMK Budi Murni 1
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {TKA_DATA.participantRequirements.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TKA_DATA.participantRequirements.items.map((req, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0 text-sm">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-900">{req.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Status Validasi Data Siswa
                </h4>
                <p className="text-xs text-slate-300">
                  Data peserta terverifikasi otomatis melalui sinkronisasi Dapodik sekolah dengan Pusdatin Kemendikdasmen.
                </p>
              </div>
              <span className="px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-white border border-white/20 whitespace-nowrap">
                Terverifikasi 100%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* -----------------------------------------------------------------
          TAB 3: MATA PELAJARAN (MAPEL) YANG DIPILIH
          ----------------------------------------------------------------- */}
      {activeTab === 'mapel' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Rules Banner */}
          <div className="bg-red-50 rounded-3xl p-6 border border-red-200 space-y-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-600 text-white font-mono">
              Ketentuan Pemilihan Mata Uji
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {TKA_DATA.subjectChoices.selectionRule}
            </p>
          </div>

          {/* Section A: Mapel Umum Wajib Nasional */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  1. Mata Pelajaran Inti Nasional (Wajib Ditempuh Semua Siswa)
                </h3>
                <p className="text-xs text-slate-500">
                  3 mata uji fondasi akademik yang diujikan secara serentak
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                3 Mata Uji
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TKA_DATA.subjectChoices.generalSubjects.map((sub, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-red-300 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-red-50 text-red-600 font-bold flex items-center justify-center text-xs">
                        0{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {sub.duration}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">{sub.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{sub.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Pilihan Mata Uji Kejuruan per Jurusan */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  2. Mata Pelajaran Pilihan Kejuruan (Sesuai Konsentrasi Keahlian)
                </h3>
                <p className="text-xs text-slate-500">
                  Siswa memilih 2 mata uji pilihan yang sesuai dengan kompetensi kejuruan yang ditekuni
                </p>
              </div>

              {/* Major Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {(['ALL', 'TKJ', 'TKR', 'TITL', 'TBSM'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMajorFilter(m)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedMajorFilter === m
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {m === 'ALL' ? 'Semua Jurusan' : m}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TKA_DATA.subjectChoices.vocationalChoices
                .filter((vc) => selectedMajorFilter === 'ALL' || vc.majorCode === selectedMajorFilter)
                .map((vc) => (
                  <div 
                    key={vc.majorCode}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 hover:border-red-300 transition-all"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center font-bold">
                        {getMajorIcon(vc.majorCode)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-red-600">{vc.majorCode}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">Vokasi</span>
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base">{vc.majorName}</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Daftar Pilihan Mata Uji Kejuruan:
                      </span>
                      {vc.options.map((opt) => (
                        <div 
                          key={opt.code}
                          className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-900">{opt.name}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                              75 Menit
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{opt.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      )}

      {/* -----------------------------------------------------------------
          TAB 4: HAL-HAL YANG TIDAK DIPERBOLEHKAN (LARANGAN SELAMA TKA)
          ----------------------------------------------------------------- */}
      {activeTab === 'larangan' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Warning Banner */}
          <div className="bg-rose-50 rounded-3xl p-6 sm:p-8 border border-rose-200 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-rose-600 text-white font-mono">
                Tata Tertib Ketat Kemendikdasmen
              </span>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Hal-Hal yang TIDAK Diperbolehkan Selama Pelaksanaan TKA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {TKA_DATA.prohibitions.summary}
              </p>
            </div>
          </div>

          {/* Grid of Prohibitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TKA_DATA.prohibitions.items.map((item, idx) => {
              const isSevere = item.severity === 'Pembatalan SHTKA & Gugur';
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isSevere 
                      ? 'bg-rose-50/40 border-rose-200' 
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                    isSevere ? 'bg-rose-600 text-white' : 'bg-slate-100 text-rose-600'
                  }`}>
                    <XCircle className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                        item.severity === 'Pembatalan SHTKA & Gugur'
                          ? 'bg-rose-600 text-white'
                          : item.severity === 'Diskualifikasi Ujian'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-200 text-slate-800'
                      }`}>
                        {item.severity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sanction Notice Footer */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-slate-300">
              <strong>Pemberitahuan Sanksi:</strong> {TKA_DATA.prohibitions.sanctionNotice}
            </p>
          </div>

        </div>
      )}

      {/* -----------------------------------------------------------------
          TAB 5: REGULASI RESMI & TANYA JAWAB (FAQ)
          ----------------------------------------------------------------- */}
      {activeTab === 'regulasi' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Legal Bases */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Dasar Hukum & Regulasi Resmi TKA Kemendikdasmen
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Landasan yuridis penyelenggaraan tes terstandar nasional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TKA_DATA.ministryInfo.legalBases.map((lb, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2 hover:border-red-300 transition-all"
                >
                  <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-mono font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900">{lb.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{lb.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Official References */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">
              Tautan & Referensi Resmi Kemendikdasmen
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TKA_DATA.officialReferences.map((ref, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-all flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-900">{ref.title}</h4>
                    <span className="text-xs font-mono text-red-600 font-bold block">{ref.source}</span>
                    <p className="text-[11px] text-slate-500">{ref.note}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Tanya Jawab Seputar TKA Kemendikdasmen (FAQ)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Jawaban atas pertanyaan yang paling sering diajukan orang tua dan siswa
              </p>
            </div>

            <div className="space-y-3">
              {TKA_DATA.faq.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-sm text-slate-900"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-red-600 shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
