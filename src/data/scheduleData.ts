import { ScheduleItem } from './schoolData';

export interface ClassTimetable {
  classId: string;
  className: string;
  grade: 'X' | 'XI' | 'XII';
  major: 'TKJ' | 'TKI' | 'TITL' | 'TBSM' | 'TSM' | 'TKR' | 'TKRO';
  walasCode: string;
  walasName: string;
  days: {
    day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
    periods: {
      period: number;
      time: string;
      code: string;
      subject: string;
      teacherCode: string;
      teacher: string;
      room: string;
      type: 'Teori' | 'Praktik' | 'Umum';
    }[];
  }[];
}

// 12 Classes with their respective Walas (Wali Kelas) from the official document
export const CLASS_WALAS_INFO = [
  { classId: 'X-TKRO', className: 'X TKRO', grade: 'X', major: 'TKR', walasCode: '11', walasName: 'Pahala' },
  { classId: 'X-TITL', className: 'X TITL', grade: 'X', major: 'TITL', walasCode: '5', walasName: 'G. Geacinta' },
  { classId: 'X-TKJ', className: 'X TKJ', grade: 'X', major: 'TKJ', walasCode: '22', walasName: 'Fauzan' },
  { classId: 'X-TSM', className: 'X TSM', grade: 'X', major: 'TBSM', walasCode: '20', walasName: 'M. Salem' },
  { classId: 'XI-TKRO', className: 'XI TKRO', grade: 'XI', major: 'TKR', walasCode: '16', walasName: 'Tuti' },
  { classId: 'XI-TITL', className: 'XI TITL', grade: 'XI', major: 'TITL', walasCode: '10', walasName: 'S. Rahayu' },
  { classId: 'XI-TKJ', className: 'XI TKJ', grade: 'XI', major: 'TKJ', walasCode: '24', walasName: 'Cecep' },
  { classId: 'XI-TSM', className: 'XI TSM', grade: 'XI', major: 'TBSM', walasCode: '8', walasName: 'Rayani' },
  { classId: 'XII-TKR', className: 'XII TKR', grade: 'XII', major: 'TKR', walasCode: '21', walasName: 'Yoike' },
  { classId: 'XII-TITL', className: 'XII TITL', grade: 'XII', major: 'TITL', walasCode: '7', walasName: 'Timo' },
  { classId: 'XII-TKJ', className: 'XII TKJ', grade: 'XII', major: 'TKJ', walasCode: '19', walasName: 'Linda. H' },
  { classId: 'XII-TSM', className: 'XII TSM', grade: 'XII', major: 'TBSM', walasCode: '9', walasName: 'Basa' },
];

export const PERIOD_TIMES: Record<string, string> = {
  '1': '07.00 - 07.45',
  '2': '07.45 - 08.30',
  '3': '08.30 - 09.15',
  '4': '09.35 - 10.20',
  '5': '10.20 - 11.05',
  '6': '11.05 - 11.45',
  '7': '12.30 - 13.15',
  '8': '13.15 - 14.00',
  '9': '14.00 - 14.45',
  '10': '14.45 - 15.30',
};

export const FRIDAY_PERIOD_TIMES: Record<string, string> = {
  '1': '07.00 - 07.45',
  '2': '07.45 - 08.30',
  '3': '08.30 - 09.15',
  '4': '09.35 - 10.15',
  '5': '10.15 - 11.00',
  '6': '11.00 - 11.45',
};

// Teacher name dictionary
export const TEACHER_DICT: Record<string, { name: string; mapel: string }> = {
  '1': { name: 'Budiman Sitorus, SE', mapel: 'B. Inggris' },
  '2': { name: 'Wirvan Rizon, S.Kom', mapel: 'TWAN, INF, Mapil' },
  '4': { name: 'Drs. Iwan Setiawan', mapel: 'PDE, GBR, IML, PPL' },
  '5': { name: 'Ghabriel Geacinta', mapel: 'B. Inggris' },
  '6': { name: 'Drs. Agustinus Surata', mapel: 'Prod. TSM' },
  '7': { name: 'Timodorta, M.Spak', mapel: 'P.A.K, PKK' },
  '8': { name: 'Rayani, SH, MM', mapel: 'Seni Budaya' },
  '9': { name: 'Basa Rosaulina, S.Pd', mapel: 'Matematika' },
  '10': { name: 'Supri Rahayu, S.Pd', mapel: 'PPKN' },
  '11': { name: 'Pahala Lumban G', mapel: 'PIPAS' },
  '12': { name: 'Yohanes Rafael S', mapel: 'Prod. Listrik' },
  '13': { name: 'Ghabriel Veronica', mapel: 'Matematika, PKK' },
  '14': { name: 'Josias MP', mapel: 'Prod. TKI' },
  '15': { name: 'N. Supartini', mapel: 'Informatika' },
  '16': { name: 'Tuti Alawiyah', mapel: 'PAI' },
  '17': { name: 'Kharis Majid', mapel: 'Penjas' },
  '18': { name: 'Togi Plantino', mapel: 'B. Inggris' },
  '19': { name: 'Linda Halimatusadyah', mapel: 'B. Indonesia' },
  '20': { name: 'M. Salem', mapel: 'Sejarah' },
  '21': { name: 'Yoike Ralomon', mapel: 'Prod. TKR' },
  '22': { name: 'M. Fauzan', mapel: 'PAI' },
  '23': { name: 'Maulana Prasetio', mapel: 'Prod. TSM, TKR' },
  '24': { name: 'Cecep Syarif', mapel: 'Prod. TKI' },
  '25': { name: 'Abdul Rachman', mapel: 'Prod. TKR, TSM' },
  '26': { name: 'Pricilia', mapel: 'BK, Mulok' },
  '27': { name: 'Siti Huriani', mapel: 'Prod. Listrik' },
  '28': { name: 'Dodik', mapel: 'Prod. TKR, TSM' },
};

// Map raw code to full subject info
export function parseSubjectCode(codeStr: string): { subject: string; teacherCode: string; teacher: string; type: 'Teori' | 'Praktik' | 'Umum' } {
  const clean = codeStr.trim().toUpperCase();

  // Special cases without digit or with suffix
  if (clean === 'MULOK' || clean === 'MULOK26') {
    return { subject: 'Muatan Lokal', teacherCode: '26', teacher: 'Pricilia', type: 'Umum' };
  }
  if (clean === 'BINGS') {
    return { subject: 'Bahasa Inggris', teacherCode: '5', teacher: 'Ghabriel Geacinta', type: 'Umum' };
  }
  if (clean === 'PKKB' || clean === 'PKKB8') {
    return { subject: 'Projek Kreatif & Kewirausahaan (PKK)', teacherCode: '8', teacher: 'Rayani, SH, MM', type: 'Teori' };
  }
  if (clean === 'PKKS' || clean === 'PKKS8') {
    return { subject: 'Projek Kreatif & Kewirausahaan (PKK)', teacherCode: '8', teacher: 'Rayani, SH, MM', type: 'Teori' };
  }
  if (clean === 'MAPIL' || clean === 'MAPIL4') {
    return { subject: 'Mata Pelajaran Pilihan Kejuruan Listrik', teacherCode: '4', teacher: 'Drs. Iwan Setiawan', type: 'Praktik' };
  }

  // Extract number at the end if present (e.g., SBD8, BING5, PEM-DAS-14, D.GRAFIS24, TDO-25, etc.)
  const match = clean.match(/^([A-Z0-9.\-_]+?)[-_]?(\d+)$/);
  let prefix = clean;
  let tCode = '';
  if (match) {
    prefix = match[1];
    tCode = match[2];
  }

  const teacherInfo = TEACHER_DICT[tCode] || { name: `Guru (${tCode})`, mapel: '' };
  let subject = prefix;
  let type: 'Teori' | 'Praktik' | 'Umum' = 'Umum';

  if (prefix.includes('BING') || prefix.includes('ENG')) subject = 'Bahasa Inggris';
  else if (prefix.includes('BIND') || prefix.includes('IND')) subject = 'Bahasa Indonesia';
  else if (prefix.includes('MAT')) { subject = 'Matematika'; type = 'Teori'; }
  else if (prefix.includes('AGM') || prefix.includes('PAI')) subject = 'Pendidikan Agama Islam (PAI)';
  else if (prefix.includes('PAK')) subject = 'Pendidikan Agama Kristen (PAK)';
  else if (prefix.includes('PKN')) subject = 'Pendidikan Pancasila & Kewarganegaraan (PPKN)';
  else if (prefix.includes('SEJ')) subject = 'Sejarah Indonesia';
  else if (prefix.includes('PENJ') || prefix.includes('PJOK')) subject = 'Pendidikan Jasmani, Olahraga & Kesehatan (Penjas)';
  else if (prefix.includes('SBD') || prefix.includes('SB') || prefix.includes('SENI')) subject = 'Seni Budaya';
  else if (prefix.includes('MULOK')) subject = 'Muatan Lokal';
  else if (prefix.includes('PIPAS') || prefix.includes('IPA')) { subject = 'Projek IPAS'; type = 'Teori'; }
  else if (prefix.includes('INF')) { subject = 'Informatika'; type = 'Praktik'; }
  else if (prefix.includes('D.GRAFIS') || prefix.includes('GRAFIS')) { subject = 'Dasar Desain Grafis (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('KOM-JAR') || prefix.includes('KOMJAR')) { subject = 'Komputer & Jaringan Dasar (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('SIS-KOMP') || prefix.includes('SISKOMP')) { subject = 'Sistem Komputer (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('TWAN')) { subject = 'Teknologi Jaringan Berbasis Luas / WAN (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('TLJ')) { subject = 'Teknologi Layanan Jaringan (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('AIJ')) { subject = 'Administrasi Infrastruktur Jaringan (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('ASJ')) { subject = 'Administrasi Sistem Jaringan (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('P.WEB') || prefix.includes('WEB')) { subject = 'Pemrograman Web & Perangkat Bergerak (Produktif TKJ)'; type = 'Praktik'; }
  else if (prefix.includes('POE')) { subject = 'Dasar Listrik & Elektronika (POE)'; type = 'Praktik'; }
  else if (prefix.includes('PDE')) { subject = 'Pekerjaan Dasar Elektromekanik (PDE)'; type = 'Praktik'; }
  else if (prefix.includes('TDE')) { subject = 'Teknik Dasar Elektronika (TDE)'; type = 'Praktik'; }
  else if (prefix.includes('ITL')) { subject = 'Instalasi Tenaga Listrik (Produktif TITL)'; type = 'Praktik'; }
  else if (prefix.includes('IPL')) { subject = 'Instalasi Penerangan Listrik (Produktif TITL)'; type = 'Praktik'; }
  else if (prefix.includes('IML')) { subject = 'Instalasi Motor Listrik (Produktif TITL)'; type = 'Praktik'; }
  else if (prefix.includes('PPL')) { subject = 'Perbaikan Peralatan Listrik & Panel (Produktif TITL)'; type = 'Praktik'; }
  else if (prefix.includes('TDO')) { subject = 'Teknologi Dasar Otomotif (TDO)'; type = 'Praktik'; }
  else if (prefix.includes('PDO')) { subject = 'Pekerjaan Dasar Otomotif (PDO)'; type = 'Praktik'; }
  else if (prefix.includes('GBR')) { subject = 'Gambar Teknik Kejuruan'; type = 'Praktik'; }
  else if (prefix.includes('PMKR')) { subject = 'Pemeliharaan Mesin Kendaraan Ringan (Mobil)'; type = 'Praktik'; }
  else if (prefix.includes('PKKR')) { subject = 'Pemeliharaan Kelistrikan Kendaraan Ringan (Mobil)'; type = 'Praktik'; }
  else if (prefix.includes('PSPTKR')) { subject = 'Pemeliharaan Sasis & Pemindah Tenaga TKR (Mobil)'; type = 'Praktik'; }
  else if (prefix.includes('PMSM')) { subject = 'Pemeliharaan Mesin Sepeda Motor (TBSM)'; type = 'Praktik'; }
  else if (prefix.includes('PSSM') || prefix.includes('PSASIS')) { subject = 'Pemeliharaan Sasis Sepeda Motor (TBSM)'; type = 'Praktik'; }
  else if (prefix.includes('P.BENG') || prefix.includes('PBENG')) { subject = 'Praktik Bengkel Kejuruan Sepeda Motor'; type = 'Praktik'; }
  else if (prefix.includes('PKKSM')) { subject = 'Produk Kreatif & Kewirausahaan TBSM'; type = 'Teori'; }
  else if (prefix.includes('PKK')) { subject = 'Projek Kreatif & Kewirausahaan (PKK)'; type = 'Teori'; }
  else if (prefix.includes('PEM-DAS') || prefix.includes('PEMDAS')) { subject = 'Dasar-Dasar Kejuruan Teknik'; type = 'Praktik'; }
  else if (prefix.includes('MAPIL')) { subject = 'Mata Pelajaran Pilihan Kejuruan (Mapil)'; type = 'Praktik'; }
  else {
    subject = `${clean} (${teacherInfo.mapel || 'Kejuruan'})`;
    type = 'Praktik';
  }

  return {
    subject,
    teacherCode: tCode,
    teacher: teacherInfo.name,
    type,
  };
}

// Complete 12-Class Master Schedule Database
// Columns Order: 
// [0] X TKRO, [1] X TITL, [2] X TKJ, [3] X TSM,
// [4] XI TKRO, [5] XI TITL, [6] XI TKJ, [7] XI TSM,
// [8] XII TKR, [9] XII TITL, [10] XII TKJ, [11] XII TSM
export const MASTER_SCHEDULE_RAW = [
  // ==================== SENIN ====================
  {
    day: 'Senin' as const,
    period: 1,
    timeSlot: '07.00 - 07.45',
    slots: ['SBD8', 'POE12', 'PKN10', 'MAT13', 'BING5', 'MULOK26', 'TWAN2', 'AGM15', 'BIND19', 'MAPIL4', 'BING18', 'BIND21']
  },
  {
    day: 'Senin' as const,
    period: 2,
    timeSlot: '07.45 - 08.30',
    slots: ['SBD8', 'POE12', 'PKN10', 'MAT13', 'BING5', 'MULOK26', 'TWAN2', 'AGM16', 'BIND19', 'MAPIL4', 'BING18', 'BIND21']
  },
  {
    day: 'Senin' as const,
    period: 3,
    timeSlot: '08.30 - 09.15',
    slots: ['MULOK26', 'PDE12', 'SBD8', 'PKN10', 'ITL27', 'ITL27', 'TLJ14', 'BIND19', 'BIND19', 'MAPIL4', 'BING18', 'PKKSM23']
  },
  {
    day: 'Senin' as const,
    period: 4,
    timeSlot: '09.35 - 10.20',
    slots: ['AGM16', 'PDE12', 'SBD8', 'PKN10', 'PKKR21', 'ITL27', 'TLJ14', 'BIND19', 'BIND19', 'MAPIL4', 'BING18', 'PKKSM23']
  },
  {
    day: 'Senin' as const,
    period: 5,
    timeSlot: '10.20 - 11.05',
    slots: ['AGM16', 'PKN10', 'MAT13', 'SBD8', 'BING5', 'ITL27', 'TLJ14', 'BIND19', 'PKKR21', 'IPL12', 'P.WEB24', 'PKKSM23']
  },
  {
    day: 'Senin' as const,
    period: 6,
    timeSlot: '11.05 - 11.45',
    slots: ['AGM16', 'PKN10', 'MAT13', 'SBD8', 'MULOK26', 'ITL27', 'TLJ14', 'BIND19', 'PKKR21', 'IPL12', 'P.WEB24', 'PKKSM23']
  },
  {
    day: 'Senin' as const,
    period: 7,
    timeSlot: '12.30 - 13.15',
    slots: ['BING5', 'AGM16', 'PEM-DAS14', 'BING18', 'BIND19', 'ITL27', 'PKKB8', 'PKN10', 'PKKR21', 'ITL12', 'P.WEB24', 'PKKSM23']
  },
  {
    day: 'Senin' as const,
    period: 8,
    timeSlot: '13.15 - 14.00',
    slots: ['BING5', 'AGM16', 'PEM-DAS14', 'BING18', 'BIND19', 'PPL27', 'MULOK26', 'PKN10', 'PKKR21', 'ITL12', 'P.WEB24', 'PKKB8']
  },
  {
    day: 'Senin' as const,
    period: 9,
    timeSlot: '14.00 - 14.45',
    slots: ['BING5', 'AGM16', 'PEM-DAS14', 'BING18', 'BIND19', 'PPL27', 'PKN10', 'MAT13', 'PKKR21', 'ITL12', 'PKK7', 'PKKS8']
  },
  {
    day: 'Senin' as const,
    period: 10,
    timeSlot: '14.45 - 15.30',
    slots: ['BING5', 'MULOK26', 'PEM-DAS14', 'BING18', 'PKK13', 'PPL27', 'PKN10', 'BIND19', 'PKKR21', 'ITL12', 'PKK7', 'PKKS8']
  },

  // ==================== SELASA ====================
  {
    day: 'Selasa' as const,
    period: 1,
    timeSlot: '07.00 - 07.45',
    slots: ['TDO28', 'MAT9', 'D.GRAFIS24', 'SEJ20', 'AGM16', 'PKK1', 'PENJ17', 'PKKSM23', 'PMKR21', 'BIND19', 'AIJ14', 'MULOK26']
  },
  {
    day: 'Selasa' as const,
    period: 2,
    timeSlot: '07.45 - 08.30',
    slots: ['TDO28', 'MAT9', 'D.GRAFIS24', 'SEJ20', 'AGM16', 'PAK1', 'PENJ17', 'PKKSM23', 'PMKR21', 'BIND19', 'AIJ14', 'MULOK26']
  },
  {
    day: 'Selasa' as const,
    period: 3,
    timeSlot: '08.30 - 09.15',
    slots: ['TDO28', 'GBR4', 'D.GRAFIS24', 'PENJ17', 'AGM16', 'PKK1', 'MAT9', 'SEJ20', 'PMKR21', 'PPL12', 'AIJ14', 'PMSM23']
  },
  {
    day: 'Selasa' as const,
    period: 4,
    timeSlot: '09.35 - 10.20',
    slots: ['TDO28', 'GBR4', 'D.GRAFIS24', 'PENJ17', 'MULOK26', 'AGM16', 'MAT9', 'SEJ20', 'PMKR21', 'PPL12', 'AIJ14', 'PMSM23']
  },
  {
    day: 'Selasa' as const,
    period: 5,
    timeSlot: '10.20 - 11.05',
    slots: ['PENJ17', 'SEJ20', 'BIND19', 'MAT13', 'PSPTKR25', 'AGM16', 'AIJ14', 'PMSM6', 'MULOK26', 'PPL12', 'MAPIL24', 'MAT9']
  },
  {
    day: 'Selasa' as const,
    period: 6,
    timeSlot: '11.05 - 11.45',
    slots: ['PENJ17', 'SEJ20', 'BIND19', 'MAT13', 'PSPTKR28', 'AGM16', 'AIJ14', 'PMSM6', 'MULOK26', 'PPL12', 'MAPIL24', 'MAT9']
  },
  {
    day: 'Selasa' as const,
    period: 7,
    timeSlot: '12.30 - 13.15',
    slots: ['MAT9', 'BIND19', 'MAT13', 'INF15', 'PSPTKR28', 'IPL4', 'AIJ14', 'AGM16', 'PMKR21', 'PPL12', 'ASJ24', 'PMSM23']
  },
  {
    day: 'Selasa' as const,
    period: 8,
    timeSlot: '13.15 - 14.00',
    slots: ['MAT9', 'BIND19', 'MAT13', 'INF15', 'PSPTKR28', 'IPL4', 'AIJ14', 'MAPIL6', 'PMKR21', 'AGM16', 'ASJ24', 'PMSM23']
  },
  {
    day: 'Selasa' as const,
    period: 9,
    timeSlot: '14.00 - 14.45',
    slots: ['MAT9', 'GBR4', 'KOM-JAR2', 'INF15', 'PKK13', 'MAPIL12', 'AIJ14', 'MAPIL6', 'PSPTKR21', 'AGM16', 'ASJ24', 'PMSM23']
  },
  {
    day: 'Selasa' as const,
    period: 10,
    timeSlot: '14.45 - 15.30',
    slots: ['MAT9', 'GBR4', 'KOM-JAR2', 'INF15', 'PKK13', 'MAPIL12', 'MULOK26', 'MAPIL6', 'PSPTKR21', 'AGM16', 'ASJ24', 'PMSM23']
  },

  // ==================== RABU ====================
  {
    day: 'Rabu' as const,
    period: 1,
    timeSlot: '07.00 - 07.45',
    slots: ['PKN10', 'SBD8', 'PENJ17', 'PDO25', 'PMKR28', 'IPL4', 'SEJ20', 'BING5', 'AGM22', 'BIND19', 'MAT9', 'PSSM23']
  },
  {
    day: 'Rabu' as const,
    period: 2,
    timeSlot: '07.45 - 08.30',
    slots: ['PKN10', 'SBD8', 'PENJ17', 'PDO25', 'PMKR28', 'IPL4', 'SEJ20', 'BING5', 'AGM22', 'BIND19', 'MAT9', 'PSSM23']
  },
  {
    day: 'Rabu' as const,
    period: 3,
    timeSlot: '08.30 - 09.15',
    slots: ['SEJ20', 'TDE4', 'BIND19', 'PDO25', 'PMKR28', 'PKK1', 'AGM22', 'BING5', 'PSPTKR21', 'MAT9', 'MULOK26', 'PSSM23']
  },
  {
    day: 'Rabu' as const,
    period: 4,
    timeSlot: '09.35 - 10.20',
    slots: ['SEJ20', 'TDE4', 'BIND19', 'PDO25', 'PMKR28', 'PKK1', 'AGM22', 'PKKB8', 'PSPTKR21', 'MAT9', 'MULOK26', 'PSSM23']
  },
  {
    day: 'Rabu' as const,
    period: 5,
    timeSlot: '10.20 - 11.05',
    slots: ['INF2', 'PENJ17', 'BING5', 'PIPAS11', 'PMKR28', 'PKN10', 'AGM22', 'PKKB8', 'PSPTKR21', 'AGM16', 'ASJ24', 'PMSM23']
  },
  {
    day: 'Rabu' as const,
    period: 6,
    timeSlot: '11.05 - 11.45',
    slots: ['INF2', 'PENJ17', 'BING5', 'PIPAS11', 'PMKR28', 'PKN10', 'BIND21', 'PSASIS23', 'MAT13', 'AGM16', 'ASJ24', 'AGM22']
  },
  {
    day: 'Rabu' as const,
    period: 7,
    timeSlot: '12.30 - 13.15',
    slots: ['INF2', 'TDE4', 'BING5', 'PIPAS11', 'PSPTKR28', 'MAT9', 'PKKB8', 'PSASIS23', 'MAT9', 'BIND19', 'ASJ24', 'AGM22']
  },
  {
    day: 'Rabu' as const,
    period: 8,
    timeSlot: '13.15 - 14.00',
    slots: ['INF2', 'TDE4', 'BING5', 'PIPAS11', 'PSPTKR28', 'MAT9', 'PKKB8', 'PSASIS23', 'PKN10', 'BING18', 'MAT9', 'AGM22']
  },
  {
    day: 'Rabu' as const,
    period: 9,
    timeSlot: '14.00 - 14.45',
    slots: ['PDO25', 'MAT9', 'SIS-KOMP2', 'PIPAS11', 'PKK13', 'BING5', 'PKKS8', 'PSASIS23', 'AGM22', 'BING18', 'MAT9', 'BIND21']
  },
  {
    day: 'Rabu' as const,
    period: 10,
    timeSlot: '14.45 - 15.30',
    slots: ['PDO25', 'MAT9', 'SIS-KOMP2', 'PIPAS11', 'PKK13', 'BING5', 'PKKS8', 'PSASIS23', 'AGM22', 'BING18', 'PKN10', 'BIND21']
  },

  // ==================== KAMIS ====================
  {
    day: 'Kamis' as const,
    period: 1,
    timeSlot: '07.00 - 07.45',
    slots: ['BIND19', 'BING5', 'PIPAS11', 'TDO25', 'PKKR21', 'MAT9', 'MAPIL2', 'PENJ17', 'MAT13', 'MULOK26', 'PKK7', 'PKKSM23']
  },
  {
    day: 'Kamis' as const,
    period: 2,
    timeSlot: '07.45 - 08.30',
    slots: ['BIND19', 'BING5', 'PIPAS11', 'TDO25', 'PKKR21', 'MAPIL12', 'MAPIL2', 'PENJ17', 'MAT13', 'MULOK26', 'PKK7', 'PMSM23']
  },
  {
    day: 'Kamis' as const,
    period: 3,
    timeSlot: '08.30 - 09.15',
    slots: ['BIND19', 'BING5', 'PIPAS11', 'TDO25', 'PKKR21', 'PENJ17', 'MAPIL2', 'P.BENG6', 'MAT13', 'PKK7', 'MAPIL23', 'MAPIL23']
  },
  {
    day: 'Kamis' as const,
    period: 4,
    timeSlot: '09.35 - 10.20',
    slots: ['PDO25', 'BING5', 'PIPAS11', 'TDO25', 'PKKR21', 'PENJ17', 'TWAN2', 'PMSM6', 'PKK7', 'IPL12', 'MAT9', 'MAPIL23']
  },
  {
    day: 'Kamis' as const,
    period: 5,
    timeSlot: '10.20 - 11.05',
    slots: ['PDO25', 'MULOK26', 'PIPAS11', 'BIND19', 'PENJ17', 'PPL27', 'TWAN2', 'PMSM6', 'PKK7', 'IPL12', 'TWAN14', 'MAPIL23']
  },
  {
    day: 'Kamis' as const,
    period: 6,
    timeSlot: '11.05 - 11.45',
    slots: ['GBR25', 'PIPAS11', 'MULOK26', 'BIND19', 'PENJ17', 'PPL27', 'TWAN2', 'PMSM6', 'PKK7', 'IPL12', 'TWAN4', 'MAPIL23']
  },
  {
    day: 'Kamis' as const,
    period: 7,
    timeSlot: '12.30 - 13.15',
    slots: ['GBR25', 'PIPAS11', 'INF15', 'BIND19', 'MAPIL21', 'IML12', 'MAT9', 'MULOK26', 'PKK7', 'IML27', 'TLJ14', 'BING1']
  },
  {
    day: 'Kamis' as const,
    period: 8,
    timeSlot: '13.15 - 14.00',
    slots: ['GBR25', 'PIPAS11', 'INF15', 'BIND19', 'MAT9', 'IML12', 'BING5', 'PKKSM23', 'PKK7', 'IML27', 'TLJ14', 'BING5']
  },
  {
    day: 'Kamis' as const,
    period: 9,
    timeSlot: '14.00 - 14.45',
    slots: ['GBR25', 'PIPAS11', 'INF15', 'MULOK26', 'MAT9', 'IML12', 'BING5', 'PKKSM23', 'MAPIL21', 'IML27', 'TLJ14', 'BING1']
  },
  {
    day: 'Kamis' as const,
    period: 10,
    timeSlot: '14.45 - 15.30',
    slots: ['GBR25', 'PIPAS11', 'INF15', 'MULOK26', 'MAT9', 'IML12', 'BING5', 'PKKSM23', 'MAPIL21', 'IML27', 'TLJ14', 'BING1']
  },

  // ==================== JUMAT ====================
  {
    day: 'Jumat' as const,
    period: 1,
    timeSlot: '07.00 - 07.45',
    slots: ['MULOK26', 'INF2', 'SEJ20', 'GBR6', 'MAPIL21', 'BIND19', 'ASJ24', 'PKKB8', 'BING1', 'PKK7', 'AGM16', 'PKN10']
  },
  {
    day: 'Jumat' as const,
    period: 2,
    timeSlot: '07.45 - 08.30',
    slots: ['PIPAS11', 'INF2', 'SEJ20', 'GBR6', 'MAPIL21', 'BIND19', 'ASJ24', 'PKKB8', 'BING1', 'PKK7', 'AGM16', 'PKN10']
  },
  {
    day: 'Jumat' as const,
    period: 3,
    timeSlot: '08.30 - 09.15',
    slots: ['PIPAS11', 'INF2', 'MULOK26', 'GBR6', 'SEJ20', 'BIND19', 'ASJ24', 'PKKB8', 'MAPIL21', 'PKN10', 'AGM16', 'MAT9']
  },
  {
    day: 'Jumat' as const,
    period: 4,
    timeSlot: '09.35 - 10.15',
    slots: ['PIPAS11', 'INF2', 'AGM22', 'AGM16', 'SEJ20', 'BING5', 'ASJ24', 'MULOK26', 'MAPIL21', 'PKN10', 'PKK7', 'MAT9']
  },
  {
    day: 'Jumat' as const,
    period: 5,
    timeSlot: '10.15 - 11.00',
    slots: ['PIPAS11', 'BIND19', 'AGM22', 'AGM16', 'PKN10', 'SEJ20', 'BIND21', 'P.BENG6', 'BING1', 'PKK7', 'MAPIL24', 'PKKS8']
  },
  {
    day: 'Jumat' as const,
    period: 6,
    timeSlot: '11.00 - 11.45',
    slots: ['PIPAS11', 'BIND19', 'AGM22', 'AGM16', 'PKN10', 'SEJ20', 'BIND21', 'P.BENG6', 'BING1', 'PKK7', 'MAPIL24', 'PKKB8']
  }
];

// Helper to convert RAW matrix to item list
export function getFlatScheduleDatabase(): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  let idCounter = 1;

  MASTER_SCHEDULE_RAW.forEach((row) => {
    CLASS_WALAS_INFO.forEach((c, colIdx) => {
      const slotCode = row.slots[colIdx];
      if (!slotCode || slotCode === '-') return;

      const parsed = parseSubjectCode(slotCode);
      const room = parsed.type === 'Praktik' ? `Bengkel / Lab ${c.major}` : `R. Kelas ${c.className}`;

      items.push({
        id: `sch-${idCounter++}`,
        class: c.className,
        grade: c.grade as 'X' | 'XI' | 'XII',
        major: c.major as any,
        day: row.day,
        period: row.period,
        timeSlot: row.timeSlot,
        subject: parsed.subject,
        subjectCode: slotCode,
        teacher: parsed.teacher,
        teacherCode: parsed.teacherCode,
        room,
        type: parsed.type,
      });
    });
  });

  return items;
}

