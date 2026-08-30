import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Download, 
  Search, 
  Filter, 
  Clock, 
  MapPin, 
  User, 
  FileText, 
  ExternalLink,
  Printer,
  ChevronDown,
  Info,
  CheckCircle,
  BookOpen,
  Cpu,
  Wrench,
  Zap,
  Bike,
  Layers,
  GraduationCap,
  Sparkles,
  Table as TableIcon,
  LayoutGrid,
  Eye
} from 'lucide-react';
import { SCHEDULE_DATABASE, ScheduleItem, SCHOOL_INFO } from '../data/schoolData';
import { 
  MASTER_SCHEDULE_RAW, 
  CLASS_WALAS_INFO, 
  TEACHER_DICT, 
  parseSubjectCode,
  PERIOD_TIMES,
  FRIDAY_PERIOD_TIMES
} from '../data/scheduleData';

export const SchedulePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'class' | 'teacher' | 'search' | 'pdf'>('matrix');
  const [selectedDayMatrix, setSelectedDayMatrix] = useState<'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat'>('Senin');
  const [selectedClassId, setSelectedClassId] = useState<string>(CLASS_WALAS_INFO[0]?.classId || 'X-TKRO');
  const [selectedTeacherCode, setSelectedTeacherCode] = useState<string>('1');

  // Search filter states
  const [selectedGrade, setSelectedGrade] = useState<string>('ALL');
  const [selectedMajor, setSelectedMajor] = useState<string>('ALL');
  const [selectedDay, setSelectedDay] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const daysList: ('Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat')[] = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  const gradesList = ['X', 'XI', 'XII'];
  const majorsList = [
    { code: 'TKJ', label: 'Teknik Komputer dan Jaringan' },
    { code: 'TKR', label: 'Teknik Kendaraan Ringan' },
    { code: 'TITL', label: 'Teknik Instalasi Tenaga Listrik' },
    { code: 'TBSM', label: 'Teknik dan Bisnis Sepeda Motor' }
  ];

  // Filtered session list for Search tab
  const filteredSchedule = useMemo(() => {
    return SCHEDULE_DATABASE.filter((item) => {
      const matchGrade = selectedGrade === 'ALL' || item.grade === selectedGrade;
      const matchMajor = selectedMajor === 'ALL' || item.major === selectedMajor;
      const matchDay = selectedDay === 'ALL' || item.day === selectedDay;
      const query = searchQuery.toLowerCase();
      const matchSearch = !searchQuery || 
        item.subject.toLowerCase().includes(query) ||
        item.teacher.toLowerCase().includes(query) ||
        item.class.toLowerCase().includes(query) ||
        item.room.toLowerCase().includes(query) ||
        (item.subjectCode && item.subjectCode.toLowerCase().includes(query));

      return matchGrade && matchMajor && matchDay && matchSearch;
    });
  }, [selectedGrade, selectedMajor, selectedDay, searchQuery]);

  // Data for single class timetable
  const currentClassInfo = CLASS_WALAS_INFO.find((c) => c.classId === selectedClassId) || CLASS_WALAS_INFO[0];

  const currentClassSchedule = useMemo(() => {
    const colIdx = CLASS_WALAS_INFO.findIndex((c) => c.classId === selectedClassId);
    if (colIdx === -1) return [];

    return daysList.map((day) => {
      const rowsForDay = MASTER_SCHEDULE_RAW.filter((r) => r.day === day);
      const periods = rowsForDay.map((r) => {
        const rawCode = r.slots[colIdx] || '-';
        const parsed = parseSubjectCode(rawCode);
        return {
          period: r.period,
          timeSlot: r.timeSlot,
          rawCode,
          subject: parsed.subject,
          teacher: parsed.teacher,
          teacherCode: parsed.teacherCode,
          type: parsed.type
        };
      });
      return { day, periods };
    });
  }, [selectedClassId]);

  // Data for single teacher timetable
  const currentTeacherSchedule = useMemo(() => {
    return SCHEDULE_DATABASE.filter((item) => item.teacherCode === selectedTeacherCode);
  }, [selectedTeacherCode]);

  const currentTeacherInfo = TEACHER_DICT[selectedTeacherCode] || { name: 'Guru', mapel: '' };

  const handlePrint = () => {
    window.print();
  };

  const getMajorBadge = (major: string) => {
    switch (major) {
      case 'TKJ':
      case 'TKI':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'TKR': 
        return 'bg-red-100 text-red-800 border-red-200';
      case 'TITL': 
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'TBSM':
      case 'TSM':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: 
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Praktik': return 'bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold';
      case 'Teori': return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Upacara': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Istirahat': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // Matrix rows for selected day
  const dayMatrixRows = useMemo(() => {
    return MASTER_SCHEDULE_RAW.filter((r) => r.day === selectedDayMatrix);
  }, [selectedDayMatrix]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-blue-900 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
            Tahun Pelajaran 2026/2027 • Semester Ganjil
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Jadwal Pelajaran SMK Budi Murni 1
          </h1>

          <p className="text-sm text-blue-200 leading-relaxed">
            Struktur jadwal kegiatan belajar mengajar resmi (KBM) untuk seluruh 12 rombongan belajar (X TKI, X TITL, X TSM, X TKR, XI TKJ, XI TITL, XI TSM, XI TKR, XII TKJ, XII TITL, XII TSM, XII TKR) dan 28 dewan guru.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              id="btn-download-official-pdf"
              href="/docs/jadwal-pelajaran-2026-2027.pdf"
              download="Jadwal-Pelajaran-SMK-Budi-Murni-1-TP-2026-2027.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Dokumen PDF Resmi (880 KB)</span>
            </a>

            <button
              id="btn-print-schedule"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Jadwal</span>
            </button>
          </div>
        </div>

        {/* Decorative corner icon */}
        <Calendar className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5 pointer-events-none" />
      </div>

      {/* VIEW MODE NAVIGATION TABS */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('matrix')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'matrix' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <TableIcon className="w-4 h-4" />
          <span>Matriks Kurikulum (12 Kelas)</span>
        </button>

        <button
          onClick={() => setActiveTab('class')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'class' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Jadwal Per Kelas & Wali Kelas</span>
        </button>

        <button
          onClick={() => setActiveTab('teacher')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'teacher' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Jadwal Mengajar Guru</span>
        </button>

        <button
          onClick={() => setActiveTab('search')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'search' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Pencarian Sesi KBM ({SCHEDULE_DATABASE.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('pdf')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'pdf' 
              ? 'bg-blue-600 text-white shadow-sm' 
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Pratinjau PDF Asli</span>
        </button>
      </div>

      {/* 1. MASTER TIMETABLE MATRIX VIEW */}
      {activeTab === 'matrix' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-blue-600" />
                Matriks Jadwal Pelajaran TP 2026/2027
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Struktur KBM 12 kelas per jam pelajaran (1 s.d. 10). Arahkan kursor atau klik kode untuk melihat nama mata pelajaran dan guru pengampu.
              </p>
            </div>

            {/* Day Selector */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl">
              {daysList.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDayMatrix(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedDayMatrix === d
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-center text-xs border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-3 px-2 border-r border-slate-800 text-[11px] font-bold w-12">Jam</th>
                  <th className="py-3 px-2 border-r border-slate-800 text-[11px] font-bold w-24">Waktu</th>
                  {CLASS_WALAS_INFO.map((c) => (
                    <th key={c.classId} className="py-2.5 px-2 border-r border-slate-800 text-[11px] font-extrabold whitespace-nowrap">
                      <div>{c.className}</div>
                      <div className="text-[9px] font-normal text-slate-400">Walas: [{c.walasCode}]</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dayMatrixRows.map((row) => (
                  <tr key={row.period} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-2 font-bold bg-slate-50 text-slate-900 border-r border-slate-200">
                      Ke-{row.period}
                    </td>
                    <td className="py-3 px-2 font-mono text-[11px] text-slate-600 border-r border-slate-200 whitespace-nowrap">
                      {row.timeSlot}
                    </td>
                    {row.slots.map((slotCode, sIdx) => {
                      const parsed = parseSubjectCode(slotCode);
                      return (
                        <td 
                          key={sIdx} 
                          className="py-2 px-1 border-r border-slate-100 text-[11px]"
                          title={`${parsed.subject} - Guru: ${parsed.teacher} (${parsed.type})`}
                        >
                          <div className="p-1.5 rounded-lg bg-slate-50 hover:bg-blue-100 hover:text-blue-900 border border-slate-100 transition-all cursor-pointer">
                            <span className="font-mono font-extrabold text-slate-800 block text-[11px]">{slotCode}</span>
                            <span className="text-[9px] text-slate-500 truncate block max-w-[80px] mx-auto">{parsed.subject.slice(0, 10)}..</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Teacher Code Legend Quick Reference */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-xs text-slate-800 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-600" />
              Petunjuk Pembacaan Kode Guru & Mata Pelajaran:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-[11px]">
              {Object.entries(TEACHER_DICT).map(([code, t]) => (
                <div key={code} className="p-2 bg-white rounded-lg border border-slate-200 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-800 font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                    {code}
                  </span>
                  <div className="truncate">
                    <span className="font-bold text-slate-900 truncate block">{t.name.split(',')[0]}</span>
                    <span className="text-[9px] text-slate-500 truncate block">{t.mapel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. CLASS VIEW */}
      {activeTab === 'class' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Jadwal Mingguan Kelas: <span className="text-blue-600">{currentClassInfo.className}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Wali Kelas: <strong>{currentClassInfo.walasName}</strong> (Kode Guru [{currentClassInfo.walasCode}]) • Tingkat {currentClassInfo.grade} • Jurusan {currentClassInfo.major}
              </p>
            </div>

            {/* Class Selector Pills */}
            <div className="flex flex-wrap gap-1.5">
              {CLASS_WALAS_INFO.map((c) => (
                <button
                  key={c.classId}
                  onClick={() => setSelectedClassId(c.classId)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedClassId === c.classId
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {c.className}
                </button>
              ))}
            </div>
          </div>

          {/* Grid per Hari */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentClassSchedule.map(({ day, periods }) => (
              <div key={day} className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    Hari {day}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {periods.length} Sesi Belajar
                  </span>
                </div>

                <div className="space-y-2">
                  {periods.map((p) => (
                    <div key={p.period} className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          Jam {p.period} ({p.timeSlot})
                        </span>
                        <span className={`px-1.5 py-0.2 rounded text-[10px] border ${getTypeBadge(p.type)}`}>
                          {p.rawCode}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-xs leading-snug">{p.subject}</h4>
                      <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                        <User className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{p.teacher}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. TEACHER TIMETABLE VIEW */}
      {activeTab === 'teacher' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Jadwal Mengajar: <span className="text-blue-600">{currentTeacherInfo.name}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Kode Guru: <strong>[{selectedTeacherCode}]</strong> • Bidang Keahlian: <strong>{currentTeacherInfo.mapel}</strong> • Total Beban: {currentTeacherSchedule.length} Jam Tatap Muka
              </p>
            </div>

            {/* Teacher Select Box */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-600">Pilih Guru:</label>
              <select
                value={selectedTeacherCode}
                onChange={(e) => setSelectedTeacherCode(e.target.value)}
                className="p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(TEACHER_DICT).map(([code, t]) => (
                  <option key={code} value={code}>
                    [{code}] {t.name} - {t.mapel}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Teacher Weekly Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 font-bold uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Hari</th>
                  <th className="py-3 px-4">Jam Ke</th>
                  <th className="py-3 px-4">Waktu</th>
                  <th className="py-3 px-4">Kelas</th>
                  <th className="py-3 px-4">Mata Pelajaran</th>
                  <th className="py-3 px-4">Ruangan</th>
                  <th className="py-3 px-4">Tipe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentTeacherSchedule.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/50">
                    <td className="py-3 px-4 font-bold text-blue-700">{item.day}</td>
                    <td className="py-3 px-4 font-mono">Ke-{item.period}</td>
                    <td className="py-3 px-4 text-slate-600">{item.timeSlot}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{item.class}</td>
                    <td className="py-3 px-4 font-medium text-slate-800">{item.subject}</td>
                    <td className="py-3 px-4 text-slate-600">{item.room}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] border ${getTypeBadge(item.type)}`}>
                        {item.type}
                      </span>
                    </td>
                  </tr>
                ))}
                {currentTeacherSchedule.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400">
                      Tidak ada jam KBM untuk guru ini pada jadwal aktif.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. SEARCH & FILTER INTERACTIVE TAB */}
      {activeTab === 'search' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="input-schedule-search"
                type="text"
                placeholder="Cari mata pelajaran, nama guru, kode (contoh: SB8, Wirvan, X TKI, Bengkel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
              
              {/* Day Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Pilih Hari:</label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedDay('ALL')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                      selectedDay === 'ALL' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Semua
                  </button>
                  {daysList.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDay(d)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                        selectedDay === d ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Tingkat Kelas:</label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedGrade('ALL')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                      selectedGrade === 'ALL' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Semua
                  </button>
                  {gradesList.map((g) => (
                    <button
                      key={g}
                      onClick={() => setSelectedGrade(g)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                        selectedGrade === g ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      Kelas {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Major Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Jurusan:</label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedMajor('ALL')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                      selectedMajor === 'ALL' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Semua
                  </button>
                  {majorsList.map((m) => (
                    <button
                      key={m.code}
                      onClick={() => setSelectedMajor(m.code)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                        selectedMajor === m.code ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {m.code}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Cards Result Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-extrabold border ${getMajorBadge(item.major)}`}>
                      {item.class}
                    </span>
                    <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {item.subjectCode}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.subject}
                  </h3>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-900">{item.day}</span>
                    <span className="text-slate-400">•</span>
                    <span>Jam Ke-{item.period} ({item.timeSlot})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate font-medium">{item.teacher}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="text-slate-700">{item.room}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. PDF & IMAGE SCAN VIEWER */}
      {activeTab === 'pdf' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Dokumen Resmi: Jadwal Pelajaran TP. 2026-2027
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Dokumen resmi yang disahkan oleh Kepala SMK Budi Murni 1 dan Waka Kurikulum.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/docs/jadwal-pelajaran-2026-2027.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka di Tab Baru</span>
              </a>
              <a
                href="/docs/jadwal-pelajaran-2026-2027.pdf"
                download="Jadwal-Pelajaran-SMK-Budi-Murni-1-TP-2026-2027.pdf"
                className="px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File PDF</span>
              </a>
            </div>
          </div>

          <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              src="/docs/jadwal-pelajaran-2026-2027.pdf"
              title="Pratinjau Jadwal Pelajaran TP 2026-2027"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Academic Regulations Note */}
      <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 text-xs text-blue-900 space-y-2">
        <h4 className="font-bold flex items-center gap-1.5">
          <Info className="w-4 h-4 text-blue-700" />
          Tata Tertib Pembelajaran TP 2026/2027:
        </h4>
        <ul className="list-disc list-inside space-y-1 text-blue-800 leading-relaxed">
          <li>Siswa wajib hadir di sekolah paling lambat pukul <strong>06.45 WIB</strong> sebelum bel masuk berbunyi.</li>
          <li>Hari Senin wajib mengenakan seragam OSIS lengkap dengan dasi & topi upacara.</li>
          <li>Praktik di Laboratorium Komputer dan Bengkel Kejuruan (TKJ/TKR/TITL/TBSM) wajib mengenakan seragam Wearpack resmi dan sepatu safety.</li>
          <li>Dokumen jadwal resmi disahkan oleh Kepala SMK Budi Murni 1 dan Waka Kurikulum.</li>
        </ul>
      </div>

    </div>
  );
};

