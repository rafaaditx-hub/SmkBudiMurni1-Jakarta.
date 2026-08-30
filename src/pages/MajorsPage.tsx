import React, { useState } from 'react';
import { 
  Cpu, 
  Wrench, 
  Zap, 
  Bike, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Building2, 
  ArrowRight,
  UserCheck,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  TrendingUp,
  MapPin,
  Star
} from 'lucide-react';
import { MAJORS, Major } from '../data/schoolData';

interface MajorsPageProps {
  selectedMajorId?: string;
  onNavigatePpdb: () => void;
}

export const MajorsPage: React.FC<MajorsPageProps> = ({ selectedMajorId = 'tkj', onNavigatePpdb }) => {
  const [activeMajorId, setActiveMajorId] = useState<string>(selectedMajorId);

  const currentMajor = MAJORS.find((m) => m.id === activeMajorId) || MAJORS[0];

  const getMajorIcon = (code: string) => {
    switch (code) {
      case 'TKJ': return <Cpu className="w-5 h-5" />;
      case 'TITL': return <Zap className="w-5 h-5" />;
      case 'TBSM': return <Bike className="w-5 h-5" />;
      case 'TKR': return <Wrench className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
          4 Program Keahlian Unggulan
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Kompetensi Keahlian, Peluang & Rekomendasi Karir
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Pilihan 4 jurusan strategis (TKJ, TITL, TBSM, TKR) yang diselaraskan dengan kebutuhan dunia industri, didukung bengkel modern, sertifikasi keahlian BNSP / LSP-P1, dan rekomendasi penempatan kerja di korporasi terkemuka.
        </p>
      </div>

      {/* 4 Major Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {MAJORS.map((m) => {
          const isActive = m.id === activeMajorId;
          return (
            <button
              key={m.id}
              id={`tab-major-${m.id}`}
              onClick={() => setActiveMajorId(m.id)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20 ring-2 ring-blue-400'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`p-2.5 rounded-xl text-xs font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                }`}>
                  {getMajorIcon(m.code)}
                </span>
                <span className={`text-xs font-mono font-extrabold ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                  {m.code}
                </span>
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base leading-tight">{m.shortName}</h3>
                <p className={`text-[11px] line-clamp-1 mt-1 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                  {m.tagline}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Major Showcase Detail */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left / Top: Major Photo & Lead Header */}
        <div className="lg:col-span-5 relative bg-slate-900 flex flex-col justify-end p-6 sm:p-8 min-h-[340px] lg:min-h-[580px]">
          <img 
            src={currentMajor.image} 
            alt={currentMajor.name} 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 transition-all duration-500 hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/assets/images/gedung-sekolah.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          
          <div className="relative z-10 space-y-3 text-white">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-lg text-xs font-extrabold uppercase tracking-wider">
                Jurusan {currentMajor.code}
              </span>
              <span className="px-2.5 py-1 bg-emerald-500/80 backdrop-blur-sm rounded-lg text-[10px] font-bold">
                Akreditasi A Unggul
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {currentMajor.name}
            </h2>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              {currentMajor.tagline}
            </p>

            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ketua Jurusan: <strong>{currentMajor.headOfMajor}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right / Content Details */}
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
          
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              Tentang Program Keahlian
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentMajor.description}
            </p>
          </div>

          {/* Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Kompetensi Unggulan yang Dikuasai
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentMajor.competencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities & Equipment */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-blue-600" />
              Sarana Bengkel & Laboratorium Praktik
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentMajor.facilities.map((fac, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Career Prospects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                Sertifikasi Kompetensi Resmi:
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {currentMajor.certifications.map((cert, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                Peluang Profesi & Karir:
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {currentMajor.careerProspects.map((car, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{car}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* REKOMENDASI TEMPAT KERJA MENARIK (REQUESTED BY USER) */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Rekomendasi Tempat Kerja & Penempatan Industri:
              </h4>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                MoU BKK Aktif
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentMajor.recommendedWorkplaces.map((workplace, wIdx) => (
                <div 
                  key={wIdx} 
                  className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between space-y-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold bg-blue-100 text-blue-800">
                        {workplace.badge}
                      </span>
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </div>
                    <h5 className="font-extrabold text-xs text-slate-900 leading-snug">{workplace.name}</h5>
                    <p className="text-[11px] font-bold text-blue-700">Peran: {workplace.role}</p>
                    <p className="text-[10px] text-slate-600 leading-relaxed">{workplace.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Tertarik mendalami keahlian di <strong>{currentMajor.shortName}</strong>?
            </div>
            <button
              id={`register-major-${currentMajor.id}`}
              onClick={onNavigatePpdb}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              <span>Daftar Jurusan {currentMajor.code} di PPDB</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
