import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  Award, 
  FileText, 
  Printer, 
  Download, 
  Search, 
  CheckCircle2, 
  XCircle, 
  UserCheck, 
  BookOpen, 
  ChevronRight, 
  Building2, 
  Sparkles,
  AlertCircle,
  Wrench,
  Smartphone,
  FileCheck,
  Scale
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface PasalItem {
  number: number;
  title: string;
  babId: string;
  babTitle: string;
  points: string[];
  notes?: string;
  badges?: string[];
}

export const TataTertibPage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeChapter, setActiveChapter] = useState<string>('all');

  const chapters = [
    { id: 'all', title: 'Semua Bab' },
    { id: 'bab1', title: 'Bab I: Kehadiran' },
    { id: 'bab2', title: 'Bab II: Seragam & Kerapian' },
    { id: 'bab3', title: 'Bab III: Budaya 5S & 5R' },
    { id: 'bab4', title: 'Bab IV: Larangan Keras' },
    { id: 'bab5', title: 'Bab V: Sanksi & Poin' },
    { id: 'bab6', title: 'Bab VI: Penghargaan' },
    { id: 'bab7', title: 'Bab VII: Penutup' }
  ];

  const allPasalList: PasalItem[] = [
    {
      number: 1,
      title: 'Waktu Belajar, Kehadiran & Upacara Bendera',
      babId: 'bab1',
      babTitle: 'BAB I: WAKTU KEHADIRAN, PROSES KBM & KETERLAMBATAN',
      badges: ['06.45 WIB', 'Senin - Jumat', 'Upacara Bendera'],
      points: [
        'Hari belajar efektif diselenggarakan selama 5 (lima) hari kerja, yaitu hari Senin sampai dengan Jumat.',
        'Bel tanda masuk berbunyi tepat pukul 06.45 WIB. Seluruh siswa wajib sudah berada di lingkungan sekolah sebelum bel berbunyi.',
        'Pintu gerbang sekolah ditutup tepat pukul 07.00 WIB untuk memulai Kegiatan Belajar Mengajar (KBM) dan pembiasaan literasi/doa pagi.',
        'KBM teori maupun praktikum bengkel kejuruan (TKJ, TKR, TITL, TBSM) berlangsung dari pukul 07.00 WIB hingga selesai sesuai jadwal pelajaran resmi.',
        'Setiap hari Senin pagi dan Upacara Peringatan Hari Besar Nasional, seluruh peserta didik wajib mengikuti Upacara Bendera secara khidmat dan tertib.'
      ]
    },
    {
      number: 2,
      title: 'Keterlambatan Siswa & Prosedur Izin Masuk',
      babId: 'bab1',
      babTitle: 'BAB I: WAKTU KEHADIRAN, PROSES KBM & KETERLAMBATAN',
      badges: ['Piket', 'Teguran', 'Pemanggilan Ortu'],
      points: [
        'Peserta didik yang hadir di sekolah setelah pukul 07.00 WIB dikategorikan terlambat.',
        'Siswa terlambat wajib melapor kepada Guru Piket untuk dicatat identitasnya dan diberikan Surat Izin Masuk Kelas setelah mendapatkan pembinaan kedisiplinan.',
        'Keterlambatan sebanyak 3 (tiga) kali dalam kurun waktu 1 (satu) bulan akan diberikan peringatan lisan dan pembinaan khusus oleh Wali Kelas.',
        'Keterlambatan lebih dari 3 kali akan diteruskan kepada Guru Bimbingan Konseling (BK) untuk pemanggilan orang tua/wali murid ke sekolah.'
      ]
    },
    {
      number: 3,
      title: 'Ketidakhadiran (Sakit/Izin/Alfa) & Izin Keluar Sekolah',
      babId: 'bab1',
      babTitle: 'BAB I: WAKTU KEHADIRAN, PROSES KBM & KETERLAMBATAN',
      badges: ['Surat Dokter', 'Surat Izin', 'Tanpa Keterangan'],
      points: [
        'Siswa yang berhalangan hadir karena sakit wajib menyerahkan Surat Keterangan Dokter atau surat pemberitahuan resmi yang ditandatangani orang tua/wali.',
        'Siswa yang berhalangan karena keperluan mendesak wajib mengajukan permohonan izin tertulis kepada pihak sekolah sebelum hari pelaksanaan.',
        'Ketidakhadiran tanpa surat keterangan sah dinyatakan sebagai Alfa (Tanpa Keterangan) dan dihitung dalam akumulasi poin pelanggaran kesiswaan.',
        'Peserta didik dilarang meninggalkan lingkungan sekolah selama jam pelajaran berlangsung tanpa izin tertulis dari Guru Piket dan Guru Pengajar saat itu.'
      ]
    },
    {
      number: 4,
      title: 'Ketentuan Seragam Harian & Seragam Praktik Bengkel/Lab',
      babId: 'bab2',
      babTitle: 'BAB II: PAKAIAN SERAGAM SEKOLAH, ATRIBUT & KERAPIAN DIRI',
      badges: ['Putih Abu-abu', 'Batik Yayasan', 'Wearpack Bengkel'],
      points: [
        'Senin & Selasa: Kemeja putih lengan pendek/panjang rapi dimasukkan ke celana/rok abu-abu standar (tidak ketat/pensil/cutbray), berdasi abu-abu, ikat pinggang hitam berlogo, kaus kaki putih polos, dan sepatu hitam bertali.',
        'Rabu: Seragam Khusus Identitas SMK Budi Murni 1 atau Seragam Pramuka Lengkap dengan setangan leher/kacu dan atribut resmi gerakan pramuka.',
        'Kamis: Kemeja Batik Resmi Yayasan Budi Murni Jakarta dipadukan dengan celana/rok abu-abu dan sepatu hitam polos.',
        'Jumat: Busana sopan bernuansa keagamaan / Kemeja Koko putih (bagi muslim) / kemeja rapi sopan dengan celana panjang abu-abu.',
        'Jam Praktikum Bengkel / Laboratorium: Seluruh siswa kejuruan (TKJ, TKR, TITL, TBSM) WAJIB mengenakan baju Wearpack / Katelpak resmi kejuruan dan sepatu tertutup (safety shoes). Dilarang keras memakai sandal jepit atau sepatu sandal di area bengkel.'
      ]
    },
    {
      number: 5,
      title: 'Standar Kerapian Rambut, Penampilan & Aksesoris',
      babId: 'bab2',
      babTitle: 'BAB II: PAKAIAN SERAGAM SEKOLAH, ATRIBUT & KERAPIAN DIRI',
      badges: ['Model 3-2-1', 'Tanpa Cat', 'Tanpa Tato & Tindik'],
      points: [
        'Siswa Putra: Rambut dipotong rapi dengan standar 3-2-1 cm, tidak menutupi daun telinga, dahi, atau kerah baju. Rambut tidak boleh dicat warna-warni, tidak boleh bermodel skin/mohawk/punk.',
        'Siswa Putra dilarang mengenakan tindik telinga, aksesoris kalung, gelang rantai, bertato (permanen maupun temporer), atau memelihara kuku panjang.',
        'Siswa Putri: Bagi yang mengenakan jilbab wajib memakai jilbab putih polos menutupi dada. Bagi yang tidak berjilbab, rambut disisir rapi dan diikat apabila melewati pundak.',
        'Siswa Putri dilarang memakai make-up berlebihan (lipstik mencolok, maskara tebal, cat kuku/kutek). Kuku wajib dipotong bersih dan rapi.'
      ]
    },
    {
      number: 6,
      title: 'Penerapan Budaya Karakter 5S (Senyum, Salam, Sapa, Sopan, Santun)',
      babId: 'bab3',
      babTitle: 'BAB III: ETIKA, SIKAP, PENERAPAN BUDAYA 5S & 5R INDUSTRI',
      badges: ['Budaya 5S', 'Adab & Etika', 'Pendidikan Karakter'],
      points: [
        'Setiap siswa wajib membudayakan 5S (Senyum, Salam, Sapa, Sopan, Santun) kepada Kepala Sekolah, Bapak/Ibu Guru, Staf Tata Usaha, Karyawan, Tamu Sekolah, dan sesama peserta didik.',
        'Menunjukkan sikap saling menghormati, toleransi antarumat beragama, dan tidak membeda-bedakan suku, ras, maupun latar belakang sosial.',
        'Menjaga tutur kata yang baik, santun, tidak mengeluarkan kata-kata kotor, makian, atau bernada merendahkan martabat orang lain.'
      ]
    },
    {
      number: 7,
      title: 'Penerapan Budaya Kerja Industri 5R (Ringkas, Rapi, Resik, Rawat, Rajin)',
      babId: 'bab3',
      babTitle: 'BAB III: ETIKA, SIKAP, PENERAPAN BUDAYA 5S & 5R INDUSTRI',
      badges: ['Budaya 5R', 'Standar Bengkel', 'Keselamatan Kerja (K3)'],
      points: [
        'Ringkas (Seiri): Memilah dan menata peralatan bengkel/lab komputer sesuai kebutuhan dan mengembalikan ke tempat penyimpanan yang ditentukan.',
        'Rapi (Seiton): Menata posisi alat ukur, toolkit, trainer, dan kabel jaringan secara rapi dan ergonomis sesuai standar SOP kejuruan.',
        'Resik (Seiso): Membersihkan area kerja, lantai bengkel dari ceceran oli/pelumas, serta membersihkan workstation komputer setelah praktikum selesai.',
        'Rawat (Seiketsu): Memelihara kebersihan diri, memakai Alat Pelindung Diri (APD/K3), dan mematuhi rambu-rambu keselamatan kerja vokasi.',
        'Rajin (Shitsuke): Mematuhi seluruh instruksi Guru Praktik, disiplin waktu pengerjaan modul kerja, dan menjaga etos kerja unggul.'
      ]
    },
    {
      number: 8,
      title: 'Penggunaan Smartphone / Gawai & Perlindungan Fasilitas Sekolah',
      babId: 'bab3',
      babTitle: 'BAB III: ETIKA, SIKAP, PENERAPAN BUDAYA 5S & 5R INDUSTRI',
      badges: ['Smartphone Silent', 'Fasilitas Lab', 'Tanggung Jawab'],
      points: [
        'Smartphone/HP wajib dinonaktifkan suaranya (mode silent/getar) dan disimpan di dalam tas selama jam pelajaran berlangsung, kecuali diinstruksikan secara eksplisit oleh guru untuk penugasan digital.',
        'Dilarang bermain game online, mengakses media sosial, atau merekam konten hiburan di ruang kelas/bengkel saat KBM sedang berlangsung.',
        'Seluruh siswa wajib menjaga dan merawat inventaris sekolah (meja kursi kelas, komputer PC lab, proyektor, peralatan mesin bengkel).',
        'Kerusakan peralatan akibat kelalaian berat atau kesengajaan wajib diperbaiki atau diganti oleh siswa yang bersangkutan.'
      ]
    },
    {
      number: 9,
      title: 'Klasifikasi Larangan Keras bagi Peserta Didik',
      babId: 'bab4',
      babTitle: 'BAB IV: LARANGAN KERAS BAGI PESERTA DIDIK',
      badges: ['Nol Toleransi', 'Anti-Tawuran', 'Anti-Narkoba'],
      points: [
        'Dilarang keras terlibat perkelahian massal atau tawuran antarpelajar di dalam maupun di luar lingkungan sekolah.',
        'Dilarang keras membawa, mengisap, atau mengedarkan rokok konvensional maupun rokok elektrik (vape/pod/liquid) di lingkungan sekolah dan radius 500 meter dari sekolah.',
        'Dilarang keras membawa, mengonsumsi, atau memperjualbelikan minuman keras (beralkohol) dan Narkotika/Psikotropika/Zat Adiktif (NAPZA).',
        'Dilarang keras membawa senjata tajam (sajam), senjata api, petasan, atau benda berbahaya yang tidak terkait dengan instruksi pembelajaran kejuruan.',
        'Dilarang keras melakukan tindak perundungan (bullying), pemerasan uang (palak), kekerasan verbal/fisik, atau intimidasi antarsiswa.',
        'Dilarang keras melakukan tindak asusila, pelecehan seksual, atau membuat dan menyebarkan konten bermuatan pornografi/pornoaksi.',
        'Dilarang keras melakukan perjudian (online maupun konvensional), pencurian, atau aksi corat-coret tembok/fasilitas umum (vandalisme).',
        'Dilarang keras membolos pelajaran, melompati pagar sekolah, atau meninggalkan sekolah tanpa izin resmi Guru Piket.',
        'Dilarang mencemarkan nama baik almamater SMK Budi Murni 1 Jakarta dan Yayasan Budi Murni Jakarta di media sosial atau ruang publik.'
      ]
    },
    {
      number: 10,
      title: 'Tahapan Pemberian Sanksi & Bobot Akumulasi Poin Pelanggaran',
      babId: 'bab5',
      babTitle: 'BAB V: TAHAPAN SANKSI & SISTEM POIN KESISWAAN',
      badges: ['Tingkat I (Ringan)', 'Tingkat II (Sedang)', 'Tingkat III (Berat)'],
      points: [
        'Tingkat I - Pelanggaran Ringan (Bobot 5 - 20 Poin): Terlambat hadir, seragam tidak sesuai hari, atribut tidak lengkap, rambut belum dicukur standar, memainkan HP saat jam pelajaran. Sanksi: Peringatan lisan, pencatatan di buku kasus piket, dan tugas edukatif/kebersihan sekolah.',
        'Tingkat II - Pelanggaran Sedang (Bobot 25 - 50 Poin): Membolos jam pelajaran, merokok/vaping di area sekolah, bersikap tidak sopan kepada guru/karyawan, keluar sekolah tanpa izin. Sanksi: Surat Peringatan Pertama (SP 1) atau SP 2, pemanggilan orang tua/wali ke sekolah, dan skorsing sementara 1-3 hari kerja.',
        'Tingkat III - Pelanggaran Berat (Bobot 75 - 100 Poin): Terlibat tawuran, membawa senjata tajam, penyalahgunaan narkoba/miras, perundungan berat, pencurian, tindakan asusila. Sanksi: Surat Peringatan Terakhir (SP 3), skorsing hingga 7 hari, atau PENGEMBALIAN KEPADA ORANG TUA / DIKELUARKAN DARI SEKOLAH secara tidak hormat.'
      ]
    },
    {
      number: 11,
      title: 'Hak Apresiasi, Beasiswa Prestasi & Rekomendasi Karir BKK',
      babId: 'bab6',
      babTitle: 'BAB VI: PENGHARGAAN SISWA BERPRESTASI',
      badges: ['Piagam Penghargaan', 'Beasiswa SPP', 'Prioritas BKK'],
      points: [
        'Peserta didik yang taat pada tata tertib sekolah, memiliki catatan kehadiran 100% (tanpa alpa), berakhlak terpuji, serta menorehkan prestasi dalam Lomba Kompetensi Siswa (LKS) maupun kejuaraan olahraga/seni berhak menerima apresiasi resmi.',
        'Pemberian Piagam Penghargaan Siswa Teladan / Berprestasi dari Kepala SMK Budi Murni 1 Jakarta dan Ketua Yayasan Budi Murni Jakarta.',
        'Prioritas beasiswa pembebasan biaya SPP atau bantuan pendidikan prestasi dari Yayasan Budi Murni Jakarta.',
        'Rekomendasi prioritas seleksi penempatan kerja industri melalui Bursa Kerja Khusus (BKK) ke perusahaan rekanan resmi (Astra Group, Auto2000, PT Telkom, PLN Icon Plus).'
      ]
    },
    {
      number: 12,
      title: 'Ketentuan Penutup & Masa Pemberlakuan Dokumen Resmi',
      babId: 'bab7',
      babTitle: 'BAB VII: KETENTUAN PENUTUP',
      badges: ['TP 2026/2027', 'Mengikat', 'SK Kepala Sekolah'],
      points: [
        'Tata Tertib Peserta Didik ini berlaku mengikat bagi seluruh siswa SMK Budi Murni 1 Jakarta sejak tanggal ditetapkan.',
        'Hal-hal yang belum diatur secara spesifik dalam keputusan ini akan diputuskan lebih lanjut melalui Rapat Dewan Guru dan Manajemen Sekolah.',
        'Tata tertib ini disahkan secara resmi oleh Kepala SMK Budi Murni 1 Jakarta dan diketahui oleh Ketua Yayasan Budi Murni Jakarta untuk diberlakukan pada Tahun Pelajaran 2026/2027.'
      ]
    }
  ];

  // Dynamic filter by chapter & keyword search
  const filteredPasal = useMemo(() => {
    return allPasalList.filter((pasal) => {
      // Filter by chapter
      const matchChapter = activeChapter === 'all' || pasal.babId === activeChapter;
      if (!matchChapter) return false;

      // Filter by keyword
      if (!searchKeyword.trim()) return true;
      const kw = searchKeyword.toLowerCase().trim();
      const matchTitle = pasal.title.toLowerCase().includes(kw);
      const matchBab = pasal.babTitle.toLowerCase().includes(kw);
      const matchPoints = pasal.points.some((p) => p.toLowerCase().includes(kw));
      const matchBadges = pasal.badges?.some((b) => b.toLowerCase().includes(kw));

      return matchTitle || matchBab || matchPoints || matchBadges;
    });
  }, [activeChapter, searchKeyword]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Kop Surat Resmi Yayasan & Sekolah */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-slate-900">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-600 text-white flex flex-col items-center justify-center font-black shrink-0 shadow-md">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 mb-0.5" />
                <span className="text-[10px] tracking-tighter uppercase font-mono">BM 1</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-red-700 uppercase font-mono">
                  {SCHOOL_INFO.foundation.toUpperCase()} (NPYP: {SCHOOL_INFO.npyp})
                </h3>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  {SCHOOL_INFO.fullName.toUpperCase()}
                </h1>
                <p className="text-xs text-slate-600 font-medium">
                  Program Keahlian: TKJ • TKR • TITL • TBSM | NPSN: {SCHOOL_INFO.npsn} | {SCHOOL_INFO.accreditation}
                </p>
                <p className="text-[11px] text-slate-500">
                  {SCHOOL_INFO.shortAddress} • Telp: {SCHOOL_INFO.phoneDisplay} • Email: {SCHOOL_INFO.email}
                </p>
              </div>
            </div>

            {/* Print / Action Buttons */}
            <div className="flex items-center gap-2 self-center md:self-start shrink-0 print:hidden">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors border border-slate-300 cursor-pointer shadow-xs"
                title="Cetak atau simpan sebagai PDF"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Cetak Dokumen</span>
              </button>
            </div>
          </div>

          {/* Judul Dokumen Resmi */}
          <div className="pt-8 pb-4 text-center space-y-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-red-100 text-red-700 font-mono inline-block">
              Keputusan Kepala Sekolah & Dewan Guru No: 421.5/084/SMK-BM1/VII/2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              TATA TERTIB PESERTA DIDIK SMK BUDI MURNI 1 JAKARTA
            </h2>
            <p className="text-sm font-bold text-slate-600">
              TAHUN PELAJARAN 2026 / 2027
            </p>
            <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed pt-1">
              Sebagai pedoman pembentukan karakter berakhlak mulia, kedisiplinan vokasi, dan budaya kerja industri bagi seluruh peserta didik di lingkungan kampus sekolah maupun saat Praktik Kerja Lapangan (PKL).
            </p>
          </div>

          {/* Search & Filter Bar (Print Hidden) */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari pasal, kata kunci (rambut, HP, sanksi, 5S, wearpack)..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              />
              {searchKeyword && (
                <button
                  onClick={() => setSearchKeyword('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Chapter Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(ch.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeChapter === ch.id
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                
                  {ch.title}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Info (if searching) */}
          {searchKeyword && (
            <div className="mt-3 text-xs text-slate-500 flex items-center justify-between print:hidden">
              <span>Menampilkan hasil pencarian untuk: <strong>"{searchKeyword}"</strong></span>
              <span className="font-bold text-red-600">{filteredPasal.length} Pasal Ditemukan</span>
            </div>
          )}
        </div>

        {/* Quick Highlights Info Grid (Mobile / Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:hidden">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 font-mono">Kehadiran</span>
              <h4 className="font-extrabold text-slate-900 text-sm">Masuk Paling lambat 06.45 WIB</h4>
              <p className="text-xs text-slate-500 mt-0.5">
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 font-mono">Budaya Karakter</span>
              <h4 className="font-extrabold text-slate-900 text-sm">Penerapan 5S & 5R</h4>
              <p className="text-xs text-slate-500 mt-0.5">Senyum, Salam, Sapa & Budaya Bengkel Rapi.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 font-mono">Kerapian Fisik</span>
              <h4 className="font-extrabold text-slate-900 text-sm">Rambut Rapi 3-2-1</h4>
              <p className="text-xs text-slate-500 mt-0.5">Tanpa cat, tanpa tindik, seragam resmi.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 font-mono">Nol Toleransi</span>
              <h4 className="font-extrabold text-slate-900 text-sm">Anti-Tawuran & Napza</h4>
              <p className="text-xs text-slate-500 mt-0.5">Sanksi pemecatan langsung bila melanggar.</p>
            </div>
          </div>
        </div>

        {/* Naskah Pasal Lengkap */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10">

          {/* Empty State if No Results */}
          {filteredPasal.length === 0 && (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Pasal Tidak Ditemukan</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tidak ada ketentuan tata tertib yang cocok dengan kata kunci "{searchKeyword}". Coba gunakan kata kunci umum lainnya seperti "seragam", "rambut", "terlambat", atau "sanksi".
              </p>
              <button
                onClick={() => { setSearchKeyword(''); setActiveChapter('all'); }}
                className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-colors cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          )}

          {/* Grouping filtered pasals by Chapter */}
          {chapters.filter((c) => c.id !== 'all').map((ch) => {
            const pasalsInChapter = filteredPasal.filter((p) => p.babId === ch.id);
            if (pasalsInChapter.length === 0) return null;

            const babTitleText = pasalsInChapter[0]?.babTitle || ch.title;
            const isBab4 = ch.id === 'bab4';
            const isBab5 = ch.id === 'bab5';
            const isBab6 = ch.id === 'bab6';

            return (
              <section key={ch.id} id={ch.id} className="space-y-5">
                {/* Chapter Banner */}
                <div className="flex items-center gap-3 border-b-2 border-red-600 pb-2.5">
                  <span className="px-3 py-1 rounded-lg text-xs font-black bg-red-600 text-white font-mono uppercase tracking-wider">
                    {ch.id.toUpperCase()}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {babTitleText}
                  </h3>
                </div>

                {/* Pasals in this chapter */}
                <div className="space-y-4">
                  {pasalsInChapter.map((pasal) => (
                    <div 
                      key={pasal.number}
                      className={`p-5 sm:p-6 rounded-2xl border transition-all space-y-3 ${
                        isBab4 
                          ? 'bg-rose-50/50 border-rose-200' 
                          : isBab5 
                          ? 'bg-amber-50/40 border-amber-200' 
                          : isBab6 
                          ? 'bg-emerald-50/40 border-emerald-200' 
                          : 'bg-slate-50/70 border-slate-200'
                      }`}
                    >
                      {/* Pasal Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full inline-block ${
                            isBab4 ? 'bg-rose-600' : isBab5 ? 'bg-amber-600' : isBab6 ? 'bg-emerald-600' : 'bg-red-600'
                          }`} />
                          Pasal {pasal.number}: {pasal.title}
                        </h4>

                        {/* Badges */}
                        {pasal.badges && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            {pasal.badges.map((b, bIdx) => (
                              <span 
                                key={bIdx}
                                className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white text-slate-700 border border-slate-200 shadow-2xs font-mono"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Points List */}
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                        {isBab4 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                            {pasal.points.map((pt, ptIdx) => (
                              <div 
                                key={ptIdx} 
                                className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-rose-100 shadow-2xs text-xs"
                              >
                                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                <span className="text-slate-800 leading-snug">{pt}</span>
                              </div>
                            ))}
                          </div>
                        ) : isBab5 ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                            {pasal.points.map((pt, ptIdx) => {
                              const [tierTitle, ...rest] = pt.split(':');
                              const tierContent = rest.join(':');
                              return (
                                <div 
                                  key={ptIdx} 
                                  className={`p-4 rounded-xl border flex flex-col justify-between space-y-2 ${
                                    ptIdx === 0 
                                      ? 'bg-white border-amber-200' 
                                      : ptIdx === 1 
                                      ? 'bg-white border-orange-200' 
                                      : 'bg-white border-rose-200'
                                  }`}
                                >
                                  <div>
                                    <span className={`inline-block text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded mb-1 text-white ${
                                      ptIdx === 0 ? 'bg-amber-500' : ptIdx === 1 ? 'bg-orange-500' : 'bg-rose-600'
                                    }`}>
                                      {tierTitle}
                                    </span>
                                    <p className="text-xs text-slate-700 leading-relaxed mt-1">
                                      {tierContent}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <ol className="list-decimal list-inside space-y-2 pl-1 text-slate-700">
                            {pasal.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="leading-relaxed">
                                {pt}
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* TANDA TANGAN PENGESAHAN DOKUMEN RESMI (PRINT & SCREEN) */}
          <div className="pt-8 border-t-2 border-slate-900/20 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="space-y-1">
              <p className="text-slate-500">Ditetapkan di: Jakarta Timur</p>
              <p className="text-slate-500">Pada tanggal: 15 Juli 2026</p>
              <p className="font-bold text-slate-900 pt-3">Mengetahui,</p>
              <p className="font-semibold text-slate-700">Ketua {SCHOOL_INFO.foundation}</p>
              <div className="h-16 flex items-end">
                <span className="font-extrabold text-slate-900 border-b border-slate-900 pb-0.5">
                  Prof. Dr. K.R.T. Tarnama Sinambela, SE, MM
                </span>
              </div>
            </div>

            <div className="space-y-1 sm:text-right">
              <p className="font-bold text-slate-900 pt-8 sm:pt-11">Mengesahkan,</p>
              <p className="font-semibold text-slate-700">Kepala {SCHOOL_INFO.fullName}</p>
              <div className="h-16 flex items-end justify-start sm:justify-end">
                <span className="font-extrabold text-slate-900 border-b border-slate-900 pb-0.5">
                  {SCHOOL_INFO.headmaster}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Official Seal Notice */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 font-mono">
            <span>NPSN: {SCHOOL_INFO.npsn} • NPYP: {SCHOOL_INFO.npyp}</span>
            <span>Dokumen Keputusan Resmi Tata Tertib TP 2026/2027</span>
          </div>

        </div>

      </div>
    </div>
  );
};
