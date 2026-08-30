import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SCHOOL_INFO, MAJORS } from '../data/schoolData';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Grid / Info Band */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 mb-14">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Akreditasi A Unggul</h4>
              <p className="text-xs text-slate-400">Standar Mutu Pendidikan Nasional Teruji & Diakui</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Bursa Kerja Khusus (BKK)</h4>
              <p className="text-xs text-slate-400">Penyaluran Kerja & Magang ke 65+ Mitra Industri</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">LSP-P1 BNSP Terlisensi</h4>
              <p className="text-xs text-slate-400">Lulusan bersertifikasi profesi nasional siap kerja</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/images/logo-smk.jpg" 
                alt="Logo SMK Budi Murni 1" 
                className="w-10 h-10 object-contain rounded-lg bg-white p-0.5 border border-slate-700"
              />
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block">
                  SMK BUDI MURNI 1
                </span>
                <span className="text-xs text-blue-400 font-medium">{SCHOOL_INFO.foundation}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Mendidik generasi muda menjadi insan yang cerdas, berkarakter, berakhlak mulia, serta menguasai keterampilan vokasi teknologi terkini berstandar industri 4.0.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-200">NPSN:</strong> {SCHOOL_INFO.npsn}</div>
              <div><strong className="text-slate-200">Status:</strong> Swasta Terakreditasi A</div>
            </div>
          </div>

          {/* Column 2: Program Keahlian */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Program Keahlian
            </h3>
            <ul className="space-y-2.5 text-xs">
              {MAJORS.map((m) => (
                <li key={m.id}>
                  <button
                    id={`footer-major-${m.id}`}
                    onClick={() => onNavigate('jurusan')}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-300 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{m.code} - {m.shortName}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  id="footer-nav-jadwal"
                  onClick={() => onNavigate('jadwal')}
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Jadwal Pelajaran 2026/2027</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Menu Utama
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-blue-400 transition-colors">
                  • Beranda Sekolah
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profil')} className="hover:text-blue-400 transition-colors">
                  • Visi, Misi & Sejarah
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-amber-400 transition-colors font-bold text-amber-300">
                  • Portal Siswa & Guru (Wajib Login)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ppdb')} className="hover:text-blue-400 transition-colors font-semibold text-emerald-400">
                  • PPDB Online 2026/2027
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bkk')} className="hover:text-blue-400 transition-colors">
                  • Bursa Kerja Khusus (BKK)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kesiswaan')} className="hover:text-blue-400 transition-colors">
                  • Kesiswaan, Ekskul & OSIS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('berita')} className="hover:text-blue-400 transition-colors">
                  • Berita & Pengumuman
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontak')} className="hover:text-blue-400 transition-colors">
                  • Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Kontak & Lokasi
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{SCHOOL_INFO.operationalHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 SMK Budi Murni 1 Jakarta Timur. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Slogan: <em>{SCHOOL_INFO.slogan}</em></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
