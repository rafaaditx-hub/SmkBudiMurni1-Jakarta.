import React, { useState } from 'react';
import { 
  Building2, 
  BookOpen, 
  HeartPulse, 
  Wrench, 
  Trophy, 
  Cpu, 
  UserCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { FACILITIES, Facility, SCHOOL_INFO } from '../data/schoolData';

interface FacilitiesPageProps {
  onNavigatePpdb?: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigatePpdb }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Akademik', 'Praktik', 'Kesehatan', 'Olahraga', 'Ibadah', 'Layanan Siswa'];

  const filteredFacilities = FACILITIES.filter((item) => {
    return selectedCategory === 'ALL' || item.category === selectedCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-yellow-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-purple-600" />;
      default: return <Building2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-blue-900 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/30 text-blue-200 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Sarana & Prasarana Standar Nasional Pendidikan
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Fasilitas Lengkap SMK Budi Murni 1
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Menjamin ekosistem belajar yang nyaman, higienis, dan berteknologi tinggi mulai dari Perpustakaan Digital, UKS, Bengkel Otomotif, Lapangan Olahraga, Mushola Al-Ikhlas, Laboratorium Komputer Modern, hingga Ruang Konseling BK.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm font-bold'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'ALL' ? 'Semua Fasilitas (7 Fasilitas Utama)' : cat}
          </button>
        ))}
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map((fac) => (
          <div 
            key={fac.id}
            id={`facility-card-${fac.id}`}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div className="relative h-48 overflow-hidden bg-slate-900">
              <img 
                src={fac.image} 
                alt={fac.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm shadow-md">
                {getIcon(fac.icon)}
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-900/80 text-white border border-white/20">
                  {fac.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-white font-extrabold text-base leading-snug">
                  {fac.name}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {fac.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Keunggulan & Fitur:</h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {fac.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
                <strong className="text-slate-700 block mb-0.5">Spesifikasi Fasilitas:</strong>
                {fac.specs}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Comfort Standards */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">Standar K3 & Lingkungan 5S</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Seluruh area bengkel dan laboratorium menerapkan protokol keselamatan kerja, alat pemadam api (APAR), dan kebersihan 5S.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">Akses Internet Dedicated 500 Mbps</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Didukung jaringan serat optik Telkom di seluruh ruang kelas, perpustakaan, laboratorium komputer, dan area publik sekolah.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">Keamanan Kampus 24 Jam</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sistem pengawasan CCTV terintegrasi di setiap sudut kampus dan petugas keamanan profesional demi kenyamanan belajar.
          </p>
        </div>
      </div>

    </div>
  );
};
