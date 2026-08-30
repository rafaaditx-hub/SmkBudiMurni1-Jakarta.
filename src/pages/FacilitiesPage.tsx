import React, { useState } from 'react';
import { 
  Building2, 
  BookOpen, 
  HeartPulse, 
  Wrench, 
  Trophy, 
  Cpu, 
  UserCheck, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { FACILITIES, Facility } from '../data/schoolData';

interface FacilitiesPageProps {
  onNavigatePpdb?: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigatePpdb }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Akademik', 'Ibadah', 'Layanan Siswa'];

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
            Sarana &amp; Prasarana Standar Nasional Pendidikan
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Fasilitas Lengkap SMK Budi Murni 1
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Menjamin ekosistem belajar yang nyaman, bersih, dan berteknologi tinggi mulai dari Perpustakaan Digital, Mushola, Laboratorium Komputer Modern, hingga Ruang Konseling BK.
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
            {cat === 'ALL' ? `Semua Fasilitas (${FACILITIES.length} Fasilitas)` : cat}
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
            <div className="relative h-52 overflow-hidden bg-slate-900">
              <img 
                src={fac.image} 
                alt={fac.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/images/gedung-sekolah.jpg';
                }}
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
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
