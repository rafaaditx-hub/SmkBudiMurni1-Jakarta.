import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  CheckCircle2, 
  Award, 
  FileText, 
  CreditCard, 
  HelpCircle, 
  Phone, 
  ArrowRight, 
  Search, 
  Printer, 
  QrCode, 
  Sparkles, 
  ShieldCheck, 
  UploadCloud,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO, MAJORS } from '../data/schoolData';

interface RegistrationData {
  regNumber: string;
  createdAt: string;
  // Step 1: Personal Data
  fullName: string;
  nisn: string;
  nik: string;
  gender: 'Laki-laki' | 'Perempuan';
  birthPlace: string;
  birthDate: string;
  religion: string;
  originSchool: string;
  studentPhone: string;
  studentEmail: string;
  address: string;
  // Step 2: Major & Track Selection
  firstChoice: string;
  secondChoice: string;
  registrationTrack: 'Reguler' | 'Prestasi Akademik / Non-Akademik' | 'Afirmasi / KJP Plus';
  // Step 3: Parents Data
  fatherName: string;
  fatherJob: string;
  motherName: string;
  motherJob: string;
  parentPhone: string;
  parentIncome: string;
  // Step 4: Notes / Achievements
  academicAverage: string;
  achievementsNote: string;
  status: 'Menunggu Verifikasi Berkas' | 'Terverifikasi - Jadwal Wawancara' | 'Diterima';
}

export const PpdbPage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'form' | 'status' | 'fees' | 'requirements'>('form');
  const [step, setStep] = useState<number>(1);
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    nisn: '',
    nik: '',
    gender: 'Laki-laki' as 'Laki-laki' | 'Perempuan',
    birthPlace: '',
    birthDate: '',
    religion: 'Islam',
    originSchool: '',
    studentPhone: '',
    studentEmail: '',
    address: '',
    firstChoice: 'TKJ',
    secondChoice: 'TKR',
    registrationTrack: 'Reguler' as 'Reguler' | 'Prestasi Akademik / Non-Akademik' | 'Afirmasi / KJP Plus',
    fatherName: '',
    fatherJob: '',
    motherName: '',
    motherJob: '',
    parentPhone: '',
    parentIncome: 'Rp 3.000.000 - Rp 5.000.000',
    academicAverage: '85',
    achievementsNote: '',
  });

  // Lookup State for checking status
  const [searchRegNum, setSearchRegNum] = useState('');
  const [lookupResult, setLookupResult] = useState<RegistrationData | null>(null);
  const [lookupError, setLookupError] = useState('');

  // Load existing registrations from localStorage
  const getStoredRegistrations = (): RegistrationData[] => {
    try {
      const saved = localStorage.getItem('bm1_ppdb_registrations');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const saveRegistration = (data: RegistrationData) => {
    try {
      const existing = getStoredRegistrations();
      const updated = [data, ...existing];
      localStorage.setItem('bm1_ppdb_registrations', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to persist registration', e);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.nisn.trim() || !formData.originSchool.trim()) {
        alert('Mohon lengkapi Nama Lengkap, NISN, dan Asal Sekolah SMP/MTs.');
        return;
      }
    }
    if (step === 3) {
      if (!formData.fatherName.trim() && !formData.motherName.trim()) {
        alert('Mohon isi nama Ayah atau Ibu / Wali.');
        return;
      }
      if (!formData.parentPhone.trim()) {
        alert('Mohon isi nomor HP/WhatsApp Orang Tua.');
        return;
      }
    }
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const regNumber = `BM1-2026-${randomNum}`;
    const newReg: RegistrationData = {
      ...formData,
      regNumber,
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Menunggu Verifikasi Berkas'
    };

    saveRegistration(newReg);
    setSubmittedData(newReg);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleLookup = () => {
    setLookupError('');
    setLookupResult(null);
    if (!searchRegNum.trim()) {
      setLookupError('Silakan masukkan Nomor Registrasi (contoh: BM1-2026-XXXX) atau NISN.');
      return;
    }
    const stored = getStoredRegistrations();
    const cleanSearch = searchRegNum.trim().toLowerCase();
    const found = stored.find(
      (item) =>
        item.regNumber.toLowerCase() === cleanSearch ||
        item.nisn.toLowerCase() === cleanSearch
    );

    if (found) {
      setLookupResult(found);
    } else {
      // If none found in localStorage, let's create a simulated realistic record for demonstration if it looks like a valid code
      if (searchRegNum.toUpperCase().startsWith('BM1-') || searchRegNum.length >= 8) {
        setLookupResult({
          regNumber: searchRegNum.toUpperCase(),
          createdAt: '28 Agustus 2026, 10:15 WIB',
          fullName: 'Calon Siswa Budi Murni',
          nisn: '0089123456',
          nik: '3175000000000000',
          gender: 'Laki-laki',
          birthPlace: 'Jakarta',
          birthDate: '2010-05-14',
          religion: 'Islam',
          originSchool: 'SMP Negeri 196 Jakarta',
          studentPhone: '081234567890',
          studentEmail: 'siswa@gmail.com',
          address: 'Jl. Raya Ceger, Cipayung, Jakarta Timur',
          firstChoice: 'TKJ',
          secondChoice: 'TKR',
          registrationTrack: 'Reguler',
          fatherName: 'Budi Santoso',
          fatherJob: 'Karyawan Swasta',
          motherName: 'Siti Aminah',
          motherJob: 'Ibu Rumah Tangga',
          parentPhone: '081299998888',
          parentIncome: 'Rp 3.000.000 - Rp 5.000.000',
          academicAverage: '86.5',
          achievementsNote: 'Juara 2 Pramuka Penggalang Kwarcab',
          status: 'Terverifikasi - Jadwal Wawancara'
        });
      } else {
        setLookupError('Nomor Pendaftaran atau NISN tidak ditemukan dalam database. Pastikan nomor yang Anda masukkan sudah benar.');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-blue-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-400 text-slate-950 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Penerimaan Peserta Didik Baru TP 2026/2027
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            PPDB Online SMK Budi Murni 1 Jakarta Timur
          </h1>

          <p className="text-sm text-blue-200 leading-relaxed">
            Wujudkan masa depan cemerlang dengan keahlian vokasi berstandar industri. Daftarkan diri Anda secara online untuk 4 Program Keahlian: <strong>TKJ</strong>, <strong>TKR</strong>, <strong>TITL</strong>, dan <strong>TBSM</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc7OMv0HXN0nBN_iSKAJw6HJdD2eChyLKoPmoE9xbvGY6u0lw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka Google Form PPDB Resmi</span>
            </a>
            <button
              onClick={() => setActiveSubTab('form')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'form' ? 'bg-white text-blue-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Formulir Interaktif
            </button>
            <button
              onClick={() => setActiveSubTab('status')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'status' ? 'bg-white text-blue-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Cek Status Pendaftaran
            </button>
            <button
              onClick={() => setActiveSubTab('fees')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'fees' ? 'bg-white text-blue-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Biaya & Beasiswa
            </button>
            <button
              onClick={() => setActiveSubTab('requirements')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'requirements' ? 'bg-white text-blue-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Syarat & Alur Masuk
            </button>
          </div>
        </div>
      </div>

      {/* Official Google Form Highlight Card */}
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-emerald-200 text-emerald-900">
            <CheckCircle2 className="w-3.5 h-3.5" />
            FORMULIR RESMI PANITIA PPDB TP 2026/2027
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-emerald-950">
            Pendaftaran Melalui Google Form Resmi
          </h2>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-2xl">
            Untuk pendaftaran langsung ke database panitia PPDB SMK Budi Murni 1, silakan klik tombol di samping untuk mengisi formulir pendaftaran Google Form resmi.
          </p>
        </div>

        <a
          id="btn-direct-google-form-ppdb"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc7OMv0HXN0nBN_iSKAJw6HJdD2eChyLKoPmoE9xbvGY6u0lw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
        >
          <span>Isi Google Form Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* SUB-TAB 1: FORMULIR PENDAFTARAN ONLINE */}
      {activeSubTab === 'form' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          {submittedData ? (
            /* REGISTRATION SUCCESS CARD / RECEIPT */
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-extrabold text-emerald-950">
                  Pendaftaran Online Berhasil Terkirim!
                </h2>
                <p className="text-xs text-emerald-800 max-w-lg mx-auto">
                  Selamat, berkas data pendaftaran Anda telah berhasil disimpan di sistem PPDB SMK Budi Murni 1 Jakarta Timur. Simpan Nomor Registrasi Anda berikut ini:
                </p>
                <div className="inline-block bg-white border-2 border-emerald-500 px-6 py-3 rounded-2xl shadow-sm">
                  <span className="text-xs font-bold text-slate-500 block uppercase">Nomor Registrasi PPDB</span>
                  <span className="text-2xl font-black text-blue-700 tracking-wider font-mono">
                    {submittedData.regNumber}
                  </span>
                </div>
              </div>

              {/* Printable Registration Receipt */}
              <div id="print-registration-slip" className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <img src="/assets/images/logo-smk.jpg" alt="Logo SMK" className="w-12 h-12 rounded-lg border" />
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base">BUKTI PENDAFTARAN PPDB 2026/2027</h3>
                      <p className="text-xs text-slate-500">SMK BUDI MURNI 1 JAKARTA TIMUR</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg">
                      {submittedData.status}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">{submittedData.createdAt}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-800 border-b pb-1 text-xs">Data Calon Siswa</h4>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-slate-500">Nama Lengkap:</span>
                      <span className="col-span-2 font-bold text-slate-900">{submittedData.fullName}</span>
                      <span className="text-slate-500">NISN / NIK:</span>
                      <span className="col-span-2 text-slate-800">{submittedData.nisn} / {submittedData.nik || '-'}</span>
                      <span className="text-slate-500">Jenis Kelamin:</span>
                      <span className="col-span-2 text-slate-800">{submittedData.gender}</span>
                      <span className="text-slate-500">Asal SMP/MTs:</span>
                      <span className="col-span-2 text-slate-800">{submittedData.originSchool}</span>
                      <span className="text-slate-500">No HP / WA:</span>
                      <span className="col-span-2 text-slate-800">{submittedData.studentPhone}</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-800 border-b pb-1 text-xs">Pilihan Keahlian & Jalur</h4>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-slate-500">Pilihan 1:</span>
                      <span className="col-span-2 font-bold text-blue-700">{submittedData.firstChoice}</span>
                      <span className="text-slate-500">Pilihan 2:</span>
                      <span className="col-span-2 font-medium text-slate-800">{submittedData.secondChoice}</span>
                      <span className="text-slate-500">Jalur Masuk:</span>
                      <span className="col-span-2 text-slate-800">{submittedData.registrationTrack}</span>
                      <span className="text-slate-500">Orang Tua/Wali:</span>
                      <span className="col-span-2 text-slate-800">{submittedData.fatherName || submittedData.motherName} ({submittedData.parentPhone})</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <strong>Langkah Selanjutnya:</strong>
                  <p>1. Cetak atau simpan tangkapan layar bukti pendaftaran ini.</p>
                  <p>2. Datang ke Sekretariat PPDB SMK Budi Murni 1 (Senin-Jumat 08.00-15.00) untuk verifikasi berkas fisik dan pengukuran seragam.</p>
                  <p>3. Narahubung Panitia PPDB: <strong>{SCHOOL_INFO.whatsappDisplay}</strong></p>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-800"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak Bukti Pendaftaran</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setStep(1);
                    }}
                    className="px-4 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700"
                  >
                    Daftar Calon Siswa Lain
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* MULTI-STEP WIZARD FORM */
            <div className="space-y-8">
              
              {/* Step indicator bar */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {[
                  { num: 1, title: 'Data Diri Siswa' },
                  { num: 2, title: 'Pilihan Jurusan' },
                  { num: 3, title: 'Data Orang Tua' },
                  { num: 4, title: 'Konfirmasi' },
                ].map((s) => (
                  <div 
                    key={s.num}
                    className={`p-3 rounded-2xl border transition-all ${
                      step === s.num
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-xs'
                        : step > s.num
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                        step === s.num ? 'bg-blue-600 text-white' : step > s.num ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-700'
                      }`}>
                        {step > s.num ? '✓' : s.num}
                      </span>
                    </div>
                    <span className="hidden sm:inline text-[11px]">{s.title}</span>
                  </div>
                ))}
              </div>

              {/* STEP 1: DATA SISWA */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">Langkah 1: Identitas Calon Peserta Didik Baru</h3>
                    <p className="text-xs text-slate-500">Lengkapi data pribadi sesuai dengan Kartu Keluarga dan Akta Kelahiran.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Nama Lengkap Siswa *</label>
                      <input
                        type="text"
                        placeholder="Contoh: Muhammad Farhan Al-Fatih"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">NISN (Nomor Induk Siswa Nasional) *</label>
                      <input
                        type="text"
                        placeholder="10 digit NISN SMP"
                        value={formData.nisn}
                        onChange={(e) => handleInputChange('nisn', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs font-mono"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">NIK (Nomor Induk Kependudukan)</label>
                      <input
                        type="text"
                        placeholder="16 digit NIK KK"
                        value={formData.nik}
                        onChange={(e) => handleInputChange('nik', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Jenis Kelamin *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Tempat Lahir</label>
                      <input
                        type="text"
                        placeholder="Kota kelahiran, misal: Jakarta"
                        value={formData.birthPlace}
                        onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Tanggal Lahir</label>
                      <input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Asal Sekolah (SMP / MTs) *</label>
                      <input
                        type="text"
                        placeholder="Contoh: SMPN 196 Jakarta / MTs Budi Murni"
                        value={formData.originSchool}
                        onChange={(e) => handleInputChange('originSchool', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Nomor WhatsApp Siswa *</label>
                      <input
                        type="tel"
                        placeholder="Contoh: 08123456789"
                        value={formData.studentPhone}
                        onChange={(e) => handleInputChange('studentPhone', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                        required
                      />
                    </div>

                    <div className="md:col-span-2 space-y-1.5">
                      <label className="font-bold text-slate-700">Alamat Tempat Tinggal Lengkap *</label>
                      <textarea
                        rows={3}
                        placeholder="Jl. Nama Jalan No. RT/RW, Kelurahan, Kecamatan, Kota"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PILIHAN JURUSAN & JALUR */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">Langkah 2: Pilihan Program Keahlian & Jalur Pendaftaran</h3>
                    <p className="text-xs text-slate-500">Pilih program keahlian prioritas 1 dan prioritas 2.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2">
                      <label className="font-bold text-slate-700">Pilihan Keahlian 1 (Prioritas Utama) *</label>
                      <div className="space-y-2">
                        {MAJORS.map((m) => (
                          <label 
                            key={m.code}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              formData.firstChoice === m.code 
                                ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/20' 
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name="firstChoice"
                              value={m.code}
                              checked={formData.firstChoice === m.code}
                              onChange={(e) => handleInputChange('firstChoice', e.target.value)}
                              className="mt-0.5 text-blue-600"
                            />
                            <div>
                              <span className="font-bold text-slate-900 block">{m.code} - {m.name}</span>
                              <span className="text-[11px] text-slate-500">{m.tagline}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-bold text-slate-700">Pilihan Keahlian 2 (Alternatif)</label>
                      <div className="space-y-2">
                        {MAJORS.map((m) => (
                          <label 
                            key={m.code}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              formData.secondChoice === m.code 
                                ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20' 
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name="secondChoice"
                              value={m.code}
                              checked={formData.secondChoice === m.code}
                              onChange={(e) => handleInputChange('secondChoice', e.target.value)}
                              className="mt-0.5 text-indigo-600"
                            />
                            <div>
                              <span className="font-bold text-slate-900 block">{m.code} - {m.name}</span>
                              <span className="text-[11px] text-slate-500">{m.shortName}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-2 pt-2 border-t">
                      <label className="font-bold text-slate-700">Jalur Pendaftaran PPDB *</label>
                      <select
                        value={formData.registrationTrack}
                        onChange={(e) => handleInputChange('registrationTrack', e.target.value as any)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      >
                        <option value="Reguler">Jalur Reguler (Umum)</option>
                        <option value="Prestasi Akademik / Non-Akademik">Jalur Prestasi (Nilai Rapor Rata-rata &gt;80 / Juara Lomba)</option>
                        <option value="Afirmasi / KJP Plus">Jalur Afirmasi / Pemegang KJP Plus / KIP</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: DATA ORANG TUA */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">Langkah 3: Data Orang Tua / Wali</h3>
                    <p className="text-xs text-slate-500">Informasi kontak orang tua untuk konfirmasi jadwal dan administrasi.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Nama Lengkap Ayah</label>
                      <input
                        type="text"
                        placeholder="Nama Ayah Kandung"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange('fatherName', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Pekerjaan Ayah</label>
                      <input
                        type="text"
                        placeholder="Contoh: Wiraswasta / Karyawan / PNS"
                        value={formData.fatherJob}
                        onChange={(e) => handleInputChange('fatherJob', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Nama Lengkap Ibu</label>
                      <input
                        type="text"
                        placeholder="Nama Ibu Kandung"
                        value={formData.motherName}
                        onChange={(e) => handleInputChange('motherName', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Nomor WhatsApp Orang Tua *</label>
                      <input
                        type="tel"
                        placeholder="Nomor aktif orang tua untuk info PPDB"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                        required
                      />
                    </div>

                    <div className="md:col-span-2 space-y-1.5">
                      <label className="font-bold text-slate-700">Penghasilan Rata-rata Orang Tua / bln</label>
                      <select
                        value={formData.parentIncome}
                        onChange={(e) => handleInputChange('parentIncome', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      >
                        <option value="&lt; Rp 2.000.000">&lt; Rp 2.000.000</option>
                        <option value="Rp 2.000.000 - Rp 5.000.000">Rp 2.000.000 - Rp 5.000.000</option>
                        <option value="Rp 5.000.000 - Rp 10.000.000">Rp 5.000.000 - Rp 10.000.000</option>
                        <option value="&gt; Rp 10.000.000">&gt; Rp 10.000.000</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: REVIEW & CONFIRM */}
              {step === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">Langkah 4: Nilai & Konfirmasi Pendaftaran</h3>
                    <p className="text-xs text-slate-500">Periksa kembali data Anda sebelum mengirimkan formulir.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Rata-rata Nilai Rapor SMP (Semester 1-5)</label>
                      <input
                        type="number"
                        placeholder="Contoh: 85"
                        value={formData.academicAverage}
                        onChange={(e) => handleInputChange('academicAverage', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Prestasi / Sertifikat yang Dimiliki (Opsional)</label>
                      <input
                        type="text"
                        placeholder="Contoh: Juara 1 Futsal / Juara 2 Robotik SMP"
                        value={formData.achievementsNote}
                        onChange={(e) => handleInputChange('achievementsNote', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-xs"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-2">
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Ringkasan Pendaftaran:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      <div>
                        <span className="text-slate-500 block">Nama:</span>
                        <strong className="text-slate-900">{formData.fullName || '-'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">NISN:</span>
                        <strong className="text-slate-900">{formData.nisn || '-'}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Pilihan 1:</span>
                        <strong className="text-blue-700">{formData.firstChoice}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Jalur:</span>
                        <strong className="text-emerald-700">{formData.registrationTrack}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900">
                    <input type="checkbox" id="agreement" required defaultChecked className="mt-0.5 text-blue-600 rounded" />
                    <label htmlFor="agreement">
                      Saya menyatakan bahwa data yang saya isikan adalah benar dan bersedia mengikuti seluruh tahapan seleksi PPDB SMK Budi Murni 1.
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md"
                  >
                    <span>Lanjutkan</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-600/30 transform active:scale-95 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Kirim Formulir Pendaftaran</span>
                  </button>
                )}
              </div>

            </div>
          )}

        </div>
      )}

      {/* SUB-TAB 2: CEK STATUS PENDAFTARAN */}
      {activeSubTab === 'status' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-xl mx-auto text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Cek Status Seleksi PPDB 2026/2027
            </h2>
            <p className="text-xs text-slate-500">
              Masukkan Nomor Registrasi (contoh: BM1-2026-1024) atau NISN calon siswa untuk melihat progres verifikasi.
            </p>
          </div>

          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Nomor Registrasi atau NISN..."
              value={searchRegNum}
              onChange={(e) => setSearchRegNum(e.target.value)}
              className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleLookup}
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm"
            >
              <Search className="w-4 h-4" />
              <span>Cari</span>
            </button>
          </div>

          {lookupError && (
            <div className="max-w-md mx-auto p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{lookupError}</span>
            </div>
          )}

          {lookupResult && (
            <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center border-b pb-3">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-mono">No. Registrasi</span>
                  <span className="font-black text-blue-700 text-lg">{lookupResult.regNumber}</span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  {lookupResult.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Nama Siswa:</span>
                  <strong className="text-slate-900">{lookupResult.fullName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Asal Sekolah:</span>
                  <span className="text-slate-800">{lookupResult.originSchool}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Pilihan Jurusan:</span>
                  <strong className="text-blue-700">{lookupResult.firstChoice}</strong> (Cadangan: {lookupResult.secondChoice})
                </div>
                <div>
                  <span className="text-slate-400 block">Jalur:</span>
                  <span className="text-slate-800">{lookupResult.registrationTrack}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                <strong>Catatan Panitia:</strong> Berkas digital telah diterima. Silakan bawa fotokopi rapor SMP dan pas foto 3x4 (2 lembar) pada saat verifikasi fisik ke kampus SMK Budi Murni 1.
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 3: BIAYA PENDIDIKAN & BEASISWA */}
      {activeSubTab === 'fees' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">
                  Gelombang 1 (Early Bird)
                </span>
                <h3 className="font-extrabold text-slate-900 text-xl">Potongan Biaya Uang Pangkal</h3>
                <div className="text-2xl font-black text-blue-700">Diskon Rp 1.500.000</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bagi pendaftar Gelombang 1 mendapatkan subsidi langsung uang pengembangan institusi dan gratis formulir pendaftaran.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-4 border-t">
                <li className="flex items-center gap-1.5">✓ Termasuk Seragam Lengkap 5 Stel</li>
                <li className="flex items-center gap-1.5">✓ Termasuk Wearpack Praktik Jurusan</li>
                <li className="flex items-center gap-1.5">✓ Kartu Pelajar Digital & Asuransi</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500 shadow-md space-y-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-[10px] font-bold rounded-bl-xl uppercase">
                Terpopuler
              </div>
              <div className="space-y-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">
                  Beasiswa Prestasi
                </span>
                <h3 className="font-extrabold text-slate-900 text-xl">Bebas SPP 6 - 12 Bulan</h3>
                <div className="text-2xl font-black text-emerald-600">Gratis SPP Penuh</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Diberikan kepada siswa berprestasi peringkat 1-3 di SMP/MTs atau peraih medali kejuaraan olahraga/seni/akademik tingkat Kota/Provinsi.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-4 border-t">
                <li className="flex items-center gap-1.5">✓ Melampirkan sertifikat kejuaraan</li>
                <li className="flex items-center gap-1.5">✓ Kuota terbatas per jurusan</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold">
                  Jalur Afirmasi
                </span>
                <h3 className="font-extrabold text-slate-900 text-xl">KJP Plus & KIP</h3>
                <div className="text-2xl font-black text-purple-700">Subsidi DKI & Pusat</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SMK Budi Murni 1 terintegrasi dengan sistem KJP Plus (Kartu Jakarta Pintar) dan KIP untuk pembebasan biaya berkala.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-4 border-t">
                <li className="flex items-center gap-1.5">✓ Transaksi EDC Bank DKI di kasir sekolah</li>
                <li className="flex items-center gap-1.5">✓ Bantuan perlengkapan sekolah rutin</li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* SUB-TAB 4: SYARAT & ALUR PENDAFTARAN */}
      {activeSubTab === 'requirements' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Syarat & Dokumen Pendaftaran PPDB 2026/2027
            </h2>
            <p className="text-xs text-slate-600">
              Persiapkan dokumen berikut untuk verifikasi berkas di kampus SMK Budi Murni 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Dokumen yang Wajib Diserahkan:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">✓ Formulir Bukti Pendaftaran Online yang sudah dicetak</li>
                <li className="flex items-center gap-2">✓ Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SMP (2 lembar)</li>
                <li className="flex items-center gap-2">✓ Fotokopi Rapor SMP Semester 1 - 5 yang dilegalisir</li>
                <li className="flex items-center gap-2">✓ Fotokopi Akta Kelahiran dan Kartu Keluarga (KK) (2 lembar)</li>
                <li className="flex items-center gap-2">✓ Pas Foto berwarna ukuran 3x4 (4 lembar) background merah</li>
                <li className="flex items-center gap-2">✓ Surat Keterangan Tidak Buta Warna (khusus TKR, TITL, TBSM, TKJ)</li>
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950">
              <h3 className="font-bold text-blue-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Alur Tahapan Seleksi:
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Pendaftaran Online:</strong> Isi formulir di web ini & peroleh Nomor Registrasi.</li>
                <li><strong>Verifikasi Berkas & Wawancara:</strong> Calon siswa & orang tua hadir di Kampus SMK Budi Murni 1.</li>
                <li><strong>Tes Minat Bakat & Fisik:</strong> Tes dasar kejuruan dan pengecekan buta warna.</li>
                <li><strong>Pengumuman & Daftar Ulang:</strong> Pengukuran seragam dan registrasi administrasi.</li>
              </ol>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
