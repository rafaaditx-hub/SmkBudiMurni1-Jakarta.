import React from 'react';
import { 
  Target, 
  Compass, 
  CheckCircle2, 
  Calendar, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { SCHOOL_INFO, TEACHERS_LIST, TeacherData, FACILITIES } from '../data/schoolData';
import { PrincipalAvatar } from '../components/PrincipalAvatar';

export const ProfilePage: React.FC = () => {
  const missions = [
    'Menyelenggarakan proses pembelajaran vokasi yang terintegrasi dengan kebutuhan dunia usaha dan dunia industri (DUDI).',
    'Membina karakter peserta didik yang disiplin, bertanggung jawab, jujur, dan berakhlak mulia.',
    'Mengembangkan sarana dan prasarana laboratorium serta workshop kejuruan berstandar industri modern 4.0.',
    'Memperluas jejaring kemitraan strategis dalam penyaluran tenaga kerja (BKK) dan praktik kerja lapangan (PKL).',
    'Meningkatkan kompetensi pendidik dan tenaga kependidikan melalui sertifikasi profesi dan pelatihan industri berkelanjutan.'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
        <img 
          src="/assets/images/gedung-sekolah.jpg" 
          alt="Kampus SMK Budi Murni 1" 
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=80';
          }}
        />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{SCHOOL_INFO.foundation} • Berdiri {SCHOOL_INFO.establishedDate || '9 November 1984'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Profil & Sejarah SMK Budi Murni 1
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Lembaga pendidikan kejuruan berdedikasi tinggi yang berdiri sejak 9 November 1984 mencetak sumber daya manusia vokasi yang unggul, terampil, berdaya saing global, dan berkarakter akhlak mulia di Jakarta Timur.
          </p>
        </div>
      </div>

      {/* Identitas Sekolah Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase">NPSN Resmi</span>
          <p className="text-lg font-extrabold text-slate-900 mt-1">{SCHOOL_INFO.npsn}</p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase">Status Akreditasi</span>
          <p className="text-lg font-extrabold text-emerald-600 mt-1">{SCHOOL_INFO.accreditation}</p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase">Tahun Berdiri</span>
          <p className="text-lg font-extrabold text-blue-600 mt-1">9 Nov 1984 (40+ Tahun)</p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-bold uppercase">Kepala Sekolah</span>
          <p className="text-sm font-extrabold text-slate-900 mt-1 truncate">{SCHOOL_INFO.headmaster}</p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Visi Sekolah</h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-blue-50/60 p-5 rounded-2xl border border-blue-100">
            "Menjadi Sekolah Menengah Kejuruan yang unggul, berkarakter, berbasis teknologi industri modern, serta mampu menghasilkan lulusan yang cerdas, kompeten, berdaya saing global, dan berlandaskan iman dan takwa."
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Misi Sekolah</h2>
          <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
            {missions.map((misi, mIdx) => (
              <li key={mIdx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{misi}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sejarah Singkat SMK Budi Murni 1 (Requested by User) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-bold border border-amber-200">
            <Calendar className="w-3.5 h-3.5" />
            <span>Sejarah & Kilas Balik Pendirian (9 November 1984)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Perjalanan Sejarah SMK Budi Murni 1
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
            {SCHOOL_INFO.historyText}
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong>Komitmen Mutu Vokasi:</strong> Seluruh program keahlian diselaraskan dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dan sertifikasi Badan Nasional Sertifikasi Profesi (BNSP), didukung Bursa Kerja Khusus (BKK) resmi binaan Disnakertrans DKI Jakarta.
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 bg-slate-100 relative group">
            <img 
              src="/assets/images/gedung-sekolah.jpg" 
              alt="Kampus SMK Budi Murni 1 Jakarta" 
              className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/images/logo-smk.jpg" 
                  alt="Logo SMK" 
                  className="w-10 h-10 rounded-xl bg-white p-1 shadow-md shrink-0" 
                />
                <div>
                  <h4 className="text-white text-xs font-extrabold">Gedung Kampus SMK Budi Murni 1</h4>
                  <p className="text-slate-300 text-[10px]">Duren Sawit, Jakarta Timur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pimpinan & Dewan Guru (Sesuai Data PDF Jadwal 2026/2027) */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Tenaga Pendidik Profesional
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Pimpinan Sekolah & Dewan Guru (28 Pendidik)
          </h2>
          <p className="text-xs text-slate-500">
            Daftar 28 guru dan instruktur kompetensi keahlian yang mengampu KBM Tahun Pelajaran 2026/2027 (sumber: jadwal resmi kurikulum).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEACHERS_LIST.map((teacher: TeacherData) => {
            const isPrincipal = teacher.code === '1';
            return (
              <div 
                key={teacher.code}
                className={`bg-white rounded-2xl p-5 border transition-all flex flex-col justify-between space-y-3 ${
                  isPrincipal 
                    ? 'border-blue-300 ring-2 ring-blue-600/20 shadow-md sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-50/40 via-white to-white' 
                    : 'border-slate-200 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {isPrincipal ? (
                      <PrincipalAvatar size="lg" showBadge={true} />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-200 shrink-0 font-mono">
                        {teacher.code}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-slate-400">Kode Guru:</span>
                        <span className="font-mono font-extrabold text-blue-700 text-xs">{teacher.code}</span>
                        {isPrincipal && (
                          <span className="ml-1.5 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                            Kepala Sekolah
                          </span>
                        )}
                      </div>
                      <h3 className={`font-bold text-slate-900 leading-snug ${isPrincipal ? 'text-sm sm:text-base' : 'text-xs'}`}>
                        {teacher.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Mata Pelajaran:</span>
                    <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      {teacher.subject}
                    </span>
                  </div>
                  {teacher.role && (
                    <div className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md font-medium">
                      {teacher.role}
                    </div>
                  )}
                  {teacher.education && (
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{teacher.education}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ringkasan 7 Fasilitas Utama Sekolah */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Fasilitas Kampus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Sarana & Prasarana Penunjang Belajar
          </h2>
          <p className="text-xs text-slate-300">
            7 Fasilitas lengkap untuk menjamin kenyamanan belajar teori, praktik kejuruan, dan pembinaan karakter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {FACILITIES.map((fac) => (
            <div key={fac.id} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-amber-300 text-sm">{fac.name}</h3>
                <span className="text-[10px] font-mono text-slate-400">{fac.category}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">{fac.description}</p>
              <p className="text-[11px] text-blue-300 font-medium pt-1">✓ {fac.features[0]}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
