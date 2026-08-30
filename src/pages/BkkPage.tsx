import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  UserCheck,
  Send,
  Sparkles
} from 'lucide-react';
import { JOB_VACANCIES, JobVacancy, SCHOOL_INFO } from '../data/schoolData';

export const BkkPage: React.FC = () => {
  const [selectedMajor, setSelectedMajor] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [appliedJob, setAppliedJob] = useState<JobVacancy | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantGradYear, setApplicantGradYear] = useState('2026');
  const [applySuccess, setApplySuccess] = useState(false);

  const filteredJobs = JOB_VACANCIES.filter((job) => {
    const matchMajor = selectedMajor === 'ALL' || job.majorTarget.includes(selectedMajor);
    const matchSearch = !search || 
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.position.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());
    return matchMajor && matchSearch;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) {
      alert('Mohon isi nama dan nomor WhatsApp.');
      return;
    }
    setApplySuccess(true);
    setTimeout(() => {
      setAppliedJob(null);
      setApplySuccess(false);
      setApplicantName('');
      setApplicantPhone('');
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-emerald-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-400 text-slate-950">
            <Briefcase className="w-3.5 h-3.5" />
            Bursa Kerja Khusus (BKK) Resmi Disnaker
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Penyaluran Karir & Kemitraan Industri
          </h1>
          <p className="text-sm text-emerald-100 leading-relaxed">
            BKK SMK Budi Murni 1 memfasilitasi rekrutmen kerja kampus, penempatan magang (PKL), dan penyaluran karir bagi lulusan SMK ke puluhan perusahaan mitra industri berskala nasional dan internasional.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Rekrutmen Kampus Berkala</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tes seleksi tulis, psikotes, dan wawancara kerja yang diadakan langsung di aula kampus sekolah oleh HRD mitra industri.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <UserCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Pelatihan Soft Skills & Interview</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pembekalan etika kerja industri, simulasi wawancara kerja, dan penyusunan Curriculum Vitae (CV) standar HRD profesional.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Database & Tracer Study Alumni</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pemantauan karir berkelanjutan bagi para alumni untuk kesempatan promosi dan lowongan kerja jenjang lanjutan.
          </p>
        </div>
      </div>

      {/* Lowongan Kerja Aktif */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Lowongan Kerja Aktif Mitra Industri
            </h2>
            <p className="text-xs text-slate-500">
              Peluang karir terbuka khusus bagi siswa tingkat akhir dan alumni SMK Budi Murni 1.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {['ALL', 'TKJ', 'TKR', 'TITL', 'TBSM'].map((major) => (
              <button
                key={major}
                onClick={() => setSelectedMajor(major)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedMajor === major 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {major === 'ALL' ? 'Semua Jurusan' : major}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div 
              key={job.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[11px] font-bold">
                    {job.type}
                  </span>
                  <div className="flex gap-1">
                    {job.majorTarget.map((m) => (
                      <span key={m} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-bold">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">{job.position}</h3>
                  <p className="text-xs font-semibold text-blue-700 mt-0.5">{job.company}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  {job.salaryRange && (
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <DollarSign className="w-3.5 h-3.5 shrink-0" />
                      <span>{job.salaryRange}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>Batas Lamar: {job.deadline}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t text-xs">
                  <span className="font-bold text-slate-700 block">Kualifikasi:</span>
                  <ul className="space-y-1 text-slate-600">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-600">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                id={`btn-apply-job-${job.id}`}
                onClick={() => setAppliedJob(job)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Daftar / Lamar via BKK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL APPLY FORM */}
      {appliedJob && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start border-b pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Formulir Rekrutmen BKK</span>
                <h3 className="font-extrabold text-slate-900 text-base">{appliedJob.position}</h3>
                <p className="text-xs text-slate-500">{appliedJob.company}</p>
              </div>
              <button 
                onClick={() => setAppliedJob(null)}
                className="text-slate-400 hover:text-slate-600 p-1 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {applySuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 text-sm">Lamaran Berhasil Diteruskan ke BKK!</h4>
                <p className="text-xs text-slate-500">
                  Tim BKK SMK Budi Murni 1 akan menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal seleksi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Nama Lengkap Alumni / Siswa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap Anda"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nomor WhatsApp Aktif *</label>
                    <input
                      type="tel"
                      required
                      placeholder="08123456789"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Tahun Lulus</label>
                    <select
                      value={applicantGradYear}
                      onChange={(e) => setApplicantGradYear(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    >
                      <option value="2026">2026 (Kelas XII / Fresh Graduate)</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl text-[11px] text-blue-900 space-y-1">
                  <strong>Catatan BKK:</strong> Berkas CV, KTP, dan Ijazah / Sertifikat Kompetensi diserahkan langsung saat pemanggilan tes di Ruang BKK SMK Budi Murni 1.
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setAppliedJob(null)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-xl"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Lamaran</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
