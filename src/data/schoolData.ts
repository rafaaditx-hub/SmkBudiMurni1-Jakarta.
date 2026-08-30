export interface Major {
  id: string;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  badgeBg: string;
  accentBorder: string;
  headOfMajor: string;
  facilities: string[];
  competencies: string[];
  certifications: string[];
  careerProspects: string[];
  recommendedWorkplaces: {
    name: string;
    role: string;
    badge: string;
    description: string;
  }[];
  industryPartners: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: 'Akademik' | 'Kesehatan' | 'Praktik' | 'Olahraga' | 'Ibadah' | 'Layanan Siswa';
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
  specs: string;
  icon: string;
}

export interface ScheduleItem {
  id: string;
  class: string; // e.g. "X TKI", "X TITL", "X TSM", "X TKR", "XI TKJ", "XI TITL", "XI TSM", "XII TKJ", "XII TITL", "XII TSM", "XII TKR"
  grade: 'X' | 'XI' | 'XII';
  major: 'TKJ' | 'TKI' | 'TITL' | 'TBSM' | 'TSM' | 'TKR';
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
  period: number; // 1 - 10
  timeSlot: string; // e.g. "07.00 - 07.45"
  subject: string;
  subjectCode: string;
  teacher: string;
  teacherCode: string;
  room: string;
  type: 'Teori' | 'Praktik' | 'Umum' | 'Upacara' | 'Istirahat';
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Pengumuman' | 'Prestasi' | 'Kegiatan' | 'Industri' | 'PPDB' | 'Hari Nasional' | 'Kependidikan' | 'Hari Raya';
  date: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  featured?: boolean;
}

export interface TeacherData {
  code: string;
  name: string;
  subject: string;
  role: string;
  education: string;
  avatar?: string;
}

export interface Extracurricular {
  id: string;
  name: string;
  category: 'Wajib' | 'Olahraga' | 'Seni & Budaya' | 'Teknologi' | 'Kepemimpinan & Sosial';
  description: string;
  schedule: string;
  coach: string;
  location: string;
  highlight: string;
  achievements: string[];
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  year: string;
  major: string;
  currentRole: string;
  company: string;
  avatar: string;
  quote: string;
  salaryOrBenefit?: string;
  verifiedBadge?: string;
}

export interface JobVacancy {
  id: string;
  company: string;
  position: string;
  majorTarget: string[];
  location: string;
  type: 'Full-time' | 'Magang / PKL' | 'Kontrak';
  deadline: string;
  salaryRange?: string;
  requirements: string[];
}

export const SCHOOL_INFO = {
  name: 'SMK BUDI MURNI 1 JAKARTA',
  fullName: 'SMK Budi Murni 1 Jakarta',
  npsn: '20103686',
  foundation: 'Yayasan Budi Murni Jakarta',
  npyp: 'AD2406',
  establishedYear: '1984',
  establishedDate: '9 November 1984',
  headmaster: 'Budiman Sitorus, SE',
  curriculumVice: 'Wirvan Rizon, S.Kom',
  operator: 'Parlindungan Pardede',
  statusSekolah: 'SWASTA',
  bentukPendidikan: 'SMK',
  jenjangPendidikan: 'DIKMEN',
  kementerianPembina: 'Kementerian Pendidikan Dasar dan Menengah',
  skIzinOperasional: '1903 /-1.851.78',
  tmtSkOperasional: '14-03-2014',
  accreditation: 'Akreditasi A (Unggul)',
  slogan: 'Cerdas, Terampil, Berkarakter & Siap Kerja',
  
  // Alamat Lengkap & Resmi
  address: 'Jl. Duren Sawit Baru No.12, RT.12/RW.11, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440, Indonesia',
  plusCode: 'QW96+G4 Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, Indonesia',
  googleMapsUrl: 'https://maps.app.goo.gl/JqmDGzwPbekKcdxd6',
  shortAddress: 'Jl. Duren Sawit Baru No.12, Duren Sawit, Jakarta Timur',
  streetName: 'JL. DUREN SAWIT BARU NO.12',
  kelurahan: 'DUREN SAWIT',
  kecamatan: 'KEC. DUREN SAWIT',
  city: 'KOTA ADM. JAKARTA TIMUR',
  province: 'PROV. D.K.I. JAKARTA',
  postalCode: '13440',
  
  // Kontak Resmi
  phone: '0218629801',
  phoneDisplay: '021-8629801',
  fax: '-',
  whatsapp: '6285199278225',
  whatsappDisplay: '085199278225 / 021-8629801',
  email: 'smk_bm1@yahoo.co.id',
  ppdbEmail: 'smk_bm1@yahoo.co.id',
  oldWebsite: 'http://smkbudimurni1.sch.id',
  operationalHours: 'Senin - Jumat: 06.45 - 15.30 WIB',
  
  // Link PPDB Google Form Resmi
  ppdbGoogleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc7OMv0HXN0nBN_iSKAJw6HJdD2eChyLKoPmoE9xbvGY6u0lw/viewform',
  
  socials: {
    instagram: 'https://www.instagram.com/smkbudimurni1/?hl=en',
    instagramHandle: '@smkbudimurni1',
    youtube: 'https://www.youtube.com',
    facebook: 'https://www.facebook.com'
  },
  stats: [
    { label: 'Tahun Berdiri', value: '9 November 1984', note: 'Yayasan Budi Murni Jakarta' },
    { label: 'Akreditasi Sekolah', value: 'A Unggul', note: 'BAN-S/M Kemendikbud' },
    { label: '4 Program Keahlian', value: 'TKJ, TITL, TBSM, TKR', note: 'Kurikulum Industri 4.0' },
    { label: 'Tingkat Serapan Kerja', value: '95.2%', note: 'Bekerja, Wirausaha & Kuliah' },
    { label: 'Mitra Industri DUDI', value: '65+ PT', note: 'MoU Rekrutmen & PKL' },
    { label: 'NPSN Resmi', value: '20103686', note: 'Kemendikdasmen' },
  ],
  historyText: `SMK Budi Murni 1 Jakarta didirikan pada 9 November 1984 di bawah naungan Yayasan Budi Murni Jakarta (NPYP: AD2406) dengan izin operasional No. 1903 /-1.851.78 tertanggal 14 Maret 2014. Berlokasi di Jl. Sawah Barat / Jl. Duren Sawit Baru No. 12, Kelurahan Duren Sawit, Jakarta Timur, sekolah ini berkomitmen menghadirkan pendidikan kejuruan berstandar nasional dan industri.

Kini dipimpin oleh Kepala Sekolah Budiman Sitorus, SE bersama Wakil Kepala Sekolah Bidang Kurikulum Wirwan Rizon, S.Kom serta Operator Sekolah Parlindungan Pardede, SMK Budi Murni 1 Jakarta menyelenggarakan 4 program keahlian unggulan: Teknik Jaringan Komputer dan Telekomunikasi (TKJ/TKI), Teknik Ketenagalistrikan (TITL), Teknik Otomotif Sepeda Motor (TBSM/TSM), dan Kendaraan Ringan (TKR).`
};

export const MAJORS: Major[] = [
  {
    id: 'tkj',
    code: 'TKJ',
    name: 'Teknik Komputer dan Jaringan',
    shortName: 'Teknik Komputer & Jaringan (TKJ)',
    tagline: 'Mencetak Ahli Jaringan Komputer, Cloud Architecture & Cyber Security Berstandar Internasional',
    description: 'Program keahlian unggulan di bidang teknologi informasi yang membekali peserta didik dengan kompetensi mutakhir perancangan jaringan LAN/WAN/Fiber Optic, konfigurasi server Linux & Windows, administrasi routing MikroTik & Cisco, cloud computing, cyber security, hingga perakitan dan maintenance sistem komputer industri.',
    image: '/assets/images/jurusan-tkj.jpg',
    color: 'from-blue-600 to-indigo-800',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
    accentBorder: 'border-blue-500',
    headOfMajor: 'Wirwan Rizon, S.Kom',
    facilities: [
      'Laboratorium Cisco & MikroTik Academy Terlisensi Resmi',
      'Lab Fiber Optic & Mesin Splicing Fusion Standar PT Telkom',
      'Lab Server & Cloud Computing (High-End Workstations & Proxmox VM)',
      'Lab Perakitan & Reparasi Hardware Komputer Multi-Platform'
    ],
    competencies: [
      'Administrasi Infrastruktur Jaringan (Routing, Switching, VLAN, BGP, Firewall)',
      'Administrasi Sistem Jaringan (Linux Web Server, DNS, Mail, Docker & Cloud)',
      'Teknologi Jaringan Berbasis Luas (Fiber Optic Splicing, OTDR & Wireless WAN)',
      'Keamanan Jaringan Komputer & Ethical Hacking Fundamentals',
      'Internet of Things (IoT) & Smart Networking Architecture'
    ],
    certifications: [
      'Sertifikasi BNSP / LSP-P1 Teknisi Utama Jaringan Komputer',
      'MikroTik Certified Network Associate (MTCNA)',
      'Cisco Certified Support Technician (CCST Networking)'
    ],
    careerProspects: [
      'Network Administrator & Infrastructure Engineer',
      'Cyber Security Junior Analyst & Network Defense',
      'Cloud & System Administrator',
      'Fiber Optic Specialist & Splicing Technician',
      'IT Technical Support & Hardware Specialist',
      'Wirausaha ISP / Konsultan IT & Jasa Networking'
    ],
    recommendedWorkplaces: [
      {
        name: 'PT Telkom Indonesia (Persero) Tbk & Telkom Akses',
        role: 'Network Engineer / Fiber Optic Specialist',
        badge: 'BUMN Telekomunikasi',
        description: 'Peluang karir sebagai teknisi jaringan broadband, maintenance optical distribution point, dan routing core network di seluruh Indonesia.'
      },
      {
        name: 'PT Indonesia Comnets Plus (PLN Icon Plus)',
        role: 'Network Operations Center (NOC) Engineer',
        badge: 'BUMN Digital',
        description: 'Mengelola backbone jaringan serat optik nasional dan monitoring data center terintegrasi sistem kelistrikan PLN.'
      },
      {
        name: 'PT Mitra Integrasi Informatika (Metrodata)',
        role: 'Enterprise IT Support & System Integrator',
        badge: 'Swasta Nasional Top',
        description: 'Implementasi hardware server enterprise, konfigurasi firewall, dan support sistem korporat multinasional.'
      },
      {
        name: 'PT Link Net Tbk (First Media) & MyRepublic',
        role: 'Broadband Network Specialist',
        badge: 'Internet Service Provider',
        description: 'Perawatan jaringan internet fiber to the home (FTTH) dan konfigurasi switch enterprise.'
      }
    ],
    industryPartners: [
      'PT Telkom Indonesia (Persero) Tbk',
      'PT Indonesia Comnets Plus (PLN Icon Plus)',
      'PT Mitra Integrasi Informatika (Metrodata)',
      'PT Link Net Tbk (First Media)',
      'MikroTik Academy Indonesia'
    ]
  },
  {
    id: 'titl',
    code: 'TITL',
    name: 'Teknik Instalasi Tenaga Listrik',
    shortName: 'Teknik Instalasi Tenaga Listrik (TITL)',
    tagline: 'Mencetak Teknisi Kelistrikan Gedung, Otomasi Industri PLC & Pembangkit Listrik Modern',
    description: 'Program keahlian teknik elektro yang mendidik peserta didik menguasai instalasi penerangan dan tenaga gedung bertingkat sesuai standar PUIL 2020, perakitan panel distribusi listrik industri (LVMDP/SDP), pengendalian motor listrik berbasis PLC & SCADA, serta instalasi sistem Pembangkit Listrik Tenaga Surya (PLTS Rooftop).',
    image: '/assets/images/jurusan-titl.jpg',
    color: 'from-amber-600 to-yellow-800',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
    accentBorder: 'border-amber-500',
    headOfMajor: 'Drs. Iwan Setiawan',
    facilities: [
      'Laboratorium PLC Trainer Kit (Omron, Schneider Electric, Siemens)',
      'Bengkel Instalasi Penerangan & Tenaga Gedung Bertingkat',
      'Bengkel Perakitan Panel Distribusi Listrik (LVMDP/SDP)',
      'Trainer Kit Energi Surya Terbarukan (Solar Cell & Inverter Grid-Tie)'
    ],
    competencies: [
      'Instalasi Penerangan Listrik Gedung Bertingkat & Industri Sesuai PUIL 2020',
      'Perakitan & Wiring Panel Daya Listrik (SDP, MDP, Kapasitor Bank)',
      'Pengendalian Motor Listrik Magnetik, Star-Delta & Inverter VFD',
      'Pemrograman Otomasi Industri berbasis PLC (Programmable Logic Controller)',
      'Pemasangan & Pemeliharaan Sistem Solar Cell (PLTS On-Grid & Off-Grid)'
    ],
    certifications: [
      'Sertifikasi BNSP / LSP-P1 Teknisi Instalasi Listrik Bangunan Gedung',
      'Sertifikasi Otomasi Industri & Pemrograman PLC Level Terampil',
      'K3 Listrik Industri dari Kemenaker / LSP Energi'
    ],
    careerProspects: [
      'Teknisi Instalasi & Maintenance Kelistrikan Gedung Bertingkat',
      'Panel Maker & Wiring Specialist Industri Manufaktur',
      'Operator & Teknisi Gardu Induk / Distribusi Tenaga Listrik',
      'PLC Programmer & Automation Specialist',
      'Teknisi Pembangkit Listrik Tenaga Surya (PLTS)',
      'Kontraktor Instalasi Listrik Mandiri & Konsultan Energi'
    ],
    recommendedWorkplaces: [
      {
        name: 'PT PLN (Persero) & Anak Perusahaan (PLN NP/IP)',
        role: 'Teknisi Pemeliharaan Jaringan Distribusi Listrik',
        badge: 'BUMN Ketenagalistrikan',
        description: 'Pengoperasian dan pemeliharaan gardu distribusi, sistem proteksi trafo, dan pelayanan teknik kelistrikan pelanggan.'
      },
      {
        name: 'PT Schneider Electric Indonesia',
        role: 'Panel Assembly & Quality Control Technician',
        badge: 'Multinasional Global',
        description: 'Perakitan panel listrik pintar medium & low voltage serta pengujian sistem switchgear berstandar internasional.'
      },
      {
        name: 'PT Wijaya Karya (WIKA) Gedung / PP Presisi',
        role: 'Mechanical & Electrical (ME) Building Inspector',
        badge: 'BUMN Konstruksi',
        description: 'Instalasi sistem daya listrik pada proyek pembangunan gedung bertingkat, mall, rumah sakit, dan bandara.'
      },
      {
        name: 'PT Omron Manufacturing Indonesia',
        role: 'Automation & PLC Systems Specialist',
        badge: 'Pabrik Otomasi',
        description: 'Maintenance sensor industri, controller otomasi, dan perakitan mesin robotik otomatis di lini produksi.'
      }
    ],
    industryPartners: [
      'PT PLN (Persero) UID Jakarta Raya',
      'PT Schneider Electric Indonesia',
      'PT Omron Electronic Indonesia',
      'PT Wijaya Karya (Persero) Tbk',
      'PT Pembangunan Perumahan (PP) Tbk'
    ]
  },
  {
    id: 'tbsm',
    code: 'TBSM',
    name: 'Teknik dan Bisnis Sepeda Motor',
    shortName: 'Teknik & Bisnis Sepeda Motor (TBSM)',
    tagline: 'Mencetak Teknisi Ahli Sepeda Motor Injeksi PGM-FI, Motor Listrik (EV) & Wirausaha Otomotif Mandiri',
    description: 'Program keahlian spesialisasi sepeda motor roda dua yang mengadopsi kurikulum terstandarisasi industri motor nomor satu di Indonesia (Honda & Yamaha). Melatih siswa menguasai mesin bensin 4-tak, teknologi injeksi elektronik PGM-FI, transmisi otomatis CVT, kelistrikan bodi, smart key immobilizer, hingga konversi motor listrik (Electric Vehicle).',
    image: '/assets/images/jurusan-tbsm.jpg',
    color: 'from-emerald-600 to-teal-800',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accentBorder: 'border-emerald-500',
    headOfMajor: 'Drs. Agustinus Surata',
    facilities: [
      'Bengkel TBSM Standar Bengkel Resmi AHASS Astra Honda Motor',
      'Alat Diagnosis Hi-Scan Injeksi Motor (HIDS Honda & FIDT Yamaha)',
      'Bike Lift Hidrolik 8 Unit dengan Set Kunci Khusus Otomotif Roda 2',
      'Unit Motor Praktik Injeksi Matic, Bebek, Sport & Motor Listrik (EV)'
    ],
    competencies: [
      'Overhaul & Servis Berkala Mesin Sepeda Motor (Engine Tune-Up)',
      'Sistem Bahan Bakar Injeksi Elektronik (FI), Sensor Engine & Diagnostic Scanner',
      'Pemeliharaan Transmisi Otomatis CVT (Continuous Variable Transmission)',
      'Sistem Kelistrikan Bodi, Starter ACG, Smart Key System & ABS Motor',
      'Teknologi Sepeda Motor Listrik (Battery Management & BLDC Motor)',
      'Manajemen Bengkel, Pelayanan Pelanggan & Kewirausahaan Otomotif'
    ],
    certifications: [
      'Sertifikat BNSP / LSP-P1 Teknisi Perawatan Berkala Sepeda Motor',
      'Sertifikasi Teknisi Sepeda Motor Injeksi Standar AHASS / Yamaha',
      'Sertifikat Uji Emisi & Diagnostik Scanner Otomotif'
    ],
    careerProspects: [
      'Mekanik Handal di Bengkel Resmi AHASS (Astra Honda) & Sentra Yamaha',
      'Service Advisor & Front Desk Bengkel Otomotif Roda Dua',
      'Quality Inspector di Pabrik Perakitan Motor (PT Astra Honda Motor / YIMM)',
      'Mekanik Tim Balap / Tuning & Modifikasi Motor Sport',
      'Teknisi Konversi & Service Motor Listrik (EV)',
      'Owner / Wirausahawan Bengkel Motor Modern & Toko Sparepart'
    ],
    recommendedWorkplaces: [
      {
        name: 'PT Astra Honda Motor (AHM) & Jaringan AHASS',
        role: 'Pit Mechanic / Service Advisor',
        badge: 'Market Leader Otomotif R2',
        description: 'Menangani servis berkala motor Honda, troubleshooting sistem PGM-FI, dan pelayanan prima kepada pelanggan resmi Astra.'
      },
      {
        name: 'PT Yamaha Indonesia Motor Manufacturing (YIMM)',
        role: 'Assembly Technician / Dealer Mechanic',
        badge: 'Pabrikan Motor Global',
        description: 'Karir di lini manufaktur perakitan motor injeksi Yamaha dan jaringan bengkel resmi Yamaha Sentra.'
      },
      {
        name: 'Planet Ban (PT Surganya Motor Indonesia)',
        role: 'Store Service Mechanic & Tune-up Specialist',
        badge: 'Jaringan Ritel Otomotif Terbesar',
        description: 'Perawatan mesin sistem injeksi, servis CVT, dan penggantian komponen fast moving ban & oli.'
      },
      {
        name: 'PT Mitra Pinasthika Mustika (MPM) Rent & Dealer',
        role: 'Fleet Maintenance Technician',
        badge: 'Korporasi Otomotif',
        description: 'Perawatan ribuan armada motor operasional korporat dengan jenjang karir manajerial bengkel.'
      }
    ],
    industryPartners: [
      'PT Astra Honda Motor (AHM) & AHASS Jakarta Timur',
      'PT Yamaha Indonesia Motor Manufacturing (YIMM)',
      'PT Surganya Motor Indonesia (Planet Ban)',
      'PT Daya Adicipta Motora',
      'PT Mitra Pinasthika Mustika Tbk'
    ]
  },
  {
    id: 'tkr',
    code: 'TKR',
    name: 'Teknik Kendaraan Ringan (TKR)',
    shortName: 'Teknik Kendaraan Ringan (TKR)',
    tagline: 'Mencetak Teknisi Mobil Roda 4 Handal, Standar Bengkel Resmi ATPM & Teknologi Electric Vehicle',
    description: 'Program keahlian unggulan otomotif roda empat yang mencetak teknisi profesional berstandar Agen Tunggal Pemegang Merek (ATPM). Siswa dilatih mendiagnosa dan memperbaiki mesin mobil bensin EFI & diesel common rail, sistem transmisi matic/manual, chasis, pengereman ABS/ESP, AC mobil, sistem kelistrikan bodi, serta teknologi mobil listrik (EV & Hybrid).',
    image: '/assets/images/jurusan-tkr.jpg',
    color: 'from-red-600 to-rose-800',
    badgeBg: 'bg-red-100 text-red-800 border-red-200',
    accentBorder: 'border-red-500',
    headOfMajor: 'Yoike Ralomon, S.Pd',
    facilities: [
      'Bengkel Otomotif Mobil Standar Dealer Resmi (Auto2000 & Daihatsu)',
      'Engine Scanner & Diagnostic Tool OBD-II Mutakhir',
      'Car Lift 2-Post & 4-Post, Digital Wheel Balancing & Tire Changer',
      'Engine Stand Common Rail Diesel & Bensin Dual VVT-i Praktik'
    ],
    competencies: [
      'Pemeliharaan Mesin Kendaraan Ringan (Engine Overhaul & Tune-Up Dual VVT-i)',
      'Sistem Manajemen Mesin Elektronik (EFI, ECU Mapping & Diagnostic OBD-II)',
      'Pemeliharaan Sasis, Transmisi Otomatis, Power Steering & Suspensi',
      'Perbaikan Sistem Kelistrikan Body, Audio & Sistem Pendingin AC Mobil',
      'Sistem Pengereman ABS, EBD, Vehicle Stability Control (VSC)',
      'Pengenalan Sistem Kendaraan Listrik (Electric Vehicle) & Baterai Traksi'
    ],
    certifications: [
      'Sertifikat BNSP / LSP-P1 Pemeliharaan Berkala Kendaraan Ringan',
      'Sertifikasi Teknisi Tune-Up & Engine Management System ATPM',
      'Sertifikasi Teknisi AC Mobil & Diagnosa Scanner'
    ],
    careerProspects: [
      'Teknisi Mekanik di Bengkel Resmi ATPM (Toyota Auto2000, Daihatsu, Suzuki, Mitsubishi)',
      'Service Advisor & Quality Control di Bengkel Mobil Modern',
      'Teknisi Perusahaan Karoseri, Logistik Armada & Inspeksi Kendaraan',
      'Teknisi Sistem Pendingin AC & Kelistrikan Mobil',
      'Wirausaha Bengkel Mobil Mandiri, Salon Mobil & Toko Sparepart'
    ],
    recommendedWorkplaces: [
      {
        name: 'PT Astra International Tbk - Toyota Auto2000',
        role: 'Junior Service Technician / Diagnostic Specialist',
        badge: 'Dealer Resmi No. 1 Indonesia',
        description: 'Melakukan servis berkala 10.000-100.000 KM, overhaul transmisi matic, dan diagnosa sensor EFI Toyota.'
      },
      {
        name: 'PT Astra Daihatsu Motor (ADM)',
        role: 'Manufacturing Technician & Assembly Line',
        badge: 'Pabrikan Mobil Terbesar',
        description: 'Bekerja di pabrik perakitan mesin mobil dan inspeksi quality control standar ekspor Daihatsu/Toyota.'
      },
      {
        name: 'PT Suzuki Indomobil Motor & PT Mitsubishi Motors',
        role: 'Workshop Mechanical Specialist',
        badge: 'ATPM Jepang Terkemuka',
        description: 'Perawatan armada kendaraan niaga dan penumpang dengan fasilitas car lift modern.'
      },
      {
        name: 'Bengkel BOS & Rotary Bintaro',
        role: 'AC Mobil & Understeel Specialist',
        badge: 'Jaringan Bengkel Modern',
        description: 'Spesialis perbaikan AC mobil elektrik dan spooring balancing kaki-kaki mobil modern.'
      }
    ],
    industryPartners: [
      'PT Astra International Tbk - Toyota Auto2000',
      'PT Astra Daihatsu Motor',
      'PT Suzuki Indomobil Motor',
      'PT Mitsubishi Motors Krama Yudha Sales Indonesia',
      'Bengkel BOS (Bengkel Otomotif Sejahtera)'
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'perpus',
    name: 'Perpustakaan Digital (Perpus Budi Murni 1)',
    category: 'Akademik',
    shortDesc: 'Pusat literasi modern dengan ribuan buku teknik, jurnal kejuruan, dan e-library ber-AC.',
    description: 'Perpustakaan SMK Budi Murni 1 menyediakan ruang baca yang tenang, bersih, dan ber-AC. Dilengkapi sistem otomasi katalog digital, koleksi ribuan buku referensi teknologi komputer, kelistrikan, otomotif, sastra, sains, serta puluhan unit komputer untuk akses jurnal ilmiah dan materi e-book gratis bagi siswa.',
    image: '/assets/images/gedung-sekolah.jpg',
    features: ['Sistem Katalog E-Library Digital', 'Ruang Baca Nyaman Ber-AC', 'Koleksi Buku Kejuruan Lengkap', 'Stasiun Komputer Riset Siswa'],
    specs: 'Kapasitas 120 siswa, 5.000+ judul buku teknik & umum, WiFi 100 Mbps',
    icon: 'BookOpen'
  },
  {
    id: 'uks',
    name: 'UKS (Unit Kesehatan Sekolah)',
    category: 'Kesehatan',
    shortDesc: 'Layanan medis darurat, ruang istirahat pasien, dan kerjasama dengan Puskesmas Cipayung.',
    description: 'Ruang UKS yang bersih dan steril siap memberikan pertolongan pertama pada kecelakaan (P3K) dan pelayanan kesehatan dasar bagi seluruh siswa dan guru. Dilengkapi tempat tidur pasien terpisah putra/putri, tabung oksigen, tensimeter digital, obat-obatan medis standar, serta didukung pembina PMR dan perawat terlatih.',
    image: '/assets/images/gedung-sekolah.jpg',
    features: ['Tempat Tidur Medis Putra & Putri', 'Tabung Oksigen & Kit P3K Lengkap', 'Pemeriksaan Kesehatan Berkala', 'Bekerjasama dengan Puskesmas Cipayung'],
    specs: '4 Bed medis, Tabung Oksigen, Tensimeter, Kerjasama Faskes Resmi',
    icon: 'HeartPulse'
  },
  {
    id: 'bengkel',
    name: 'Bengkel & Workshop Kejuruan Lengkap',
    category: 'Praktik',
    shortDesc: 'Bengkel praktik standar industri untuk TKJ, TITL, TBSM, dan TKR.',
    description: 'SMK Budi Murni 1 memiliki kompleks bengkel dan workshop kejuruan mandiri yang dirancang mengikuti layout industri 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke). Tersedia Car Lift 2-Post/4-Post, Bike Lift hidrolik Honda, panel trainer listrik PUIL 2020, PLC Omron, serta toolset mekanik lengkap berstandar pabrikan.',
    image: '/assets/images/jurusan-tkr.jpg',
    features: ['Bengkel Mobil TKR ber-Car Lift', 'Bengkel TBSM Standar AHASS Honda', 'Bengkel Panel Listrik & PLC TITL', 'Standar K3 & Keselamatan Kerja Terjamin'],
    specs: '4 Unit Workshop Khusus, 8 Unit Car/Bike Lift, Standar Industri ATPM',
    icon: 'Wrench'
  },
  {
    id: 'lapangan',
    name: 'Lapangan Olahraga & Upacara Multifungsi',
    category: 'Olahraga',
    shortDesc: 'Lapangan outdoor luas bertaraf standar untuk Futsal, Basket, Voli, dan Upacara Bendera.',
    description: 'Lapangan serbaguna dengan permukaan cor halus berstandar turnamen, dilengkapi tiang ring basket kokoh, garis lapangan futsal & voli resmi, serta sound system outdoor untuk pelaksanaan upacara bendera hari Senin, senam sehat, apel kebangsaan, dan latihan ekstrakurikuler.',
    image: '/assets/images/gedung-sekolah.jpg',
    features: ['Lapangan Futsal & Sepakbola Mini', 'Lapangan Basket Standar PERBASI', 'Lapangan Bola Voli & Bulutangkis', 'Area Upacara Bendera Khidmat'],
    specs: 'Luas 1.200 m², Kapasitas 1.500 siswa, Lapisan cat tahan cuaca',
    icon: 'Trophy'
  },
  {
    id: 'mushola',
    name: 'Mushola / Masjid Al-Ikhlas',
    category: 'Ibadah',
    shortDesc: 'Tempat ibadah nyaman, sholat berjamaah 5 waktu, sholat Jumat, dan kajian rohis.',
    description: 'Masjid sekolah yang asri, bersih, dan berpendingin udara (AC) sebagai pusat pembinaan karakter spiritual peserta didik. Digunakan untuk sholat Dhuhur & Ashar berjamaah, Sholat Jumat, peringatan hari besar Islam (PHBI), tadarus pagi, dan kegiatan ekstrakurikuler Hadroh serta Rohis.',
    image: '/assets/images/gedung-sekolah.jpg',
    features: ['Ruang Sholat Utama Ber-AC', 'Area Wudhu Bersih & Terpisah', 'Pusat Sholat Berjamaah & Sholat Jumat', 'Kegiatan Tahsin & Pengajian Rutin'],
    specs: 'Kapasitas 400 jamaah, Karpet tebal, Audio sound system masjid berkualitas',
    icon: 'Building2'
  },
  {
    id: 'lab',
    name: 'Laboratorium Komputer & Jaringan Canggih',
    category: 'Akademik',
    shortDesc: 'Lab komputer ber-AC dengan PC spesifikasi tinggi, router MikroTik, Cisco rack, dan fiber optik.',
    description: 'SMK Budi Murni 1 mengoperasikan 4 laboratorium komputer modern ber-AC. Setiap unit PC terhubung internet dedicated fiber optic berkecepatan tinggi, dilengkapi software simulasi jaringan (Cisco Packet Tracer, GNS3), server virtualisasi Proxmox, peralatan splicing kabel fiber optik, dan trainer IoT.',
    image: '/assets/images/jurusan-tkj.jpg',
    features: ['120+ Unit PC Intel Core i5/i7 & SSD', 'Perangkat Cisco & MikroTik Router Asli', 'Fusion Splicer Fiber Optic & OTDR', 'Ruangan Full AC & Jaringan Gigabit'],
    specs: '4 Ruang Lab Terpisah, 160 Workstations, Bandwidth 500 Mbps Dedicated',
    icon: 'Cpu'
  },
  {
    id: 'bk',
    name: 'Ruang Bimbingan Konseling (BK & Karir)',
    category: 'Layanan Siswa',
    shortDesc: 'Layanan konsultasi psikologi, peminatan bakat, bimbingan masalah, dan persiapan karir siswa.',
    description: 'Ruang BK yang ramah dan privat untuk mendampingi tumbuh kembang mental dan akademik peserta didik. Guru BK profesional melayani konseling pribadi, bimbingan belajar, tes psikotes minat bakat kejuruan, penanganan kedisiplinan berkeadilan, serta pembekalan mental siap kerja bekerjasama dengan BKK sekolah.',
    image: '/assets/images/gedung-sekolah.jpg',
    features: ['Ruang Konseling Privat & Nyaman', 'Asesmen Minat Bakat & Psikotes Siswa', 'Bimbingan Karir & Studi Lanjut', 'Konsultasi Orang Tua & Wali Murid'],
    specs: 'Ruang konseling kedap suara, Fasilitas tes psikologi, Konselor bersertifikat',
    icon: 'UserCheck'
  }
];

export interface OsisStructure {
  name: string;
  motto: string;
  vision: string;
  missions: string[];
  management: {
    role: string;
    description: string;
  }[];
  workPrograms: {
    title: string;
    category: string;
    description: string;
    schedule: string;
  }[];
}

export const OSIS_INFO: OsisStructure = {
  name: 'Organisasi Siswa Intra Sekolah (OSIS) SMK Budi Murni 1 Jakarta',
  motto: 'Berkarakter, Kreatif, Berintegritas, dan Berjiwa Pemimpin Vokasi',
  vision: 'Menjadikan OSIS SMK Budi Murni 1 Jakarta sebagai wadah pengembangan potensi siswa yang berakhlak mulia, berjiwa kepemimpinan, disiplin, berdaya saing global, mandiri, dan berkarakter unggul berlandaskan nilai-nilai Pancasila serta budaya industri vokasi.',
  missions: [
    'Meningkatkan keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa serta memupuk toleransi dan budi pekerti luhur di seluruh lingkungan sekolah.',
    'Mendorong terwujudnya kedisiplinan, rasa tanggung jawab, etos kerja, dan rasa persaudaraan antar siswa dari seluruh kompetensi keahlian (TKJ, TKR, TBSM, TITL).',
    'Menyalurkan dan mengembangkan minat, bakat, kreativitas, serta keterampilan vokasi siswa melalui kegiatan ekstrakurikuler, unjuk karya, dan kompetisi.',
    'Menjadi jembatan aspirasi yang aktif, komunikatif, transparan, dan solutif antara peserta didik, dewan guru, dan manajemen sekolah.',
    'Membangun budaya kepemimpinan, kepedulian sosial kemasyarakatan, serta menjaga kehormatan dan nama baik almamater SMK Budi Murni 1 Jakarta.'
  ],
  management: [
    { role: 'Ketua & Wakil Ketua OSIS', description: 'Memimpin organisasi, mengoordinasikan seluruh seksi bidang, dan bertanggung jawab terhadap pelaksanaan program kerja.' },
    { role: 'Sekretaris Umum & 1', description: 'Mengelola administrasi surat menyurat, dokumentasi rapat, proposal kegiatan, dan pengarsipan berkas OSIS.' },
    { role: 'Bendahara Umum & 1', description: 'Mengelola perputaran kas organisasi, pencatatan anggaran, dan transparansi laporan keuangan program kerja.' },
    { role: 'Sekbid 1: Keagamaan & Pembinaan Akhlak', description: 'Mengoordinasikan kegiatan ibadah sekolah, peringatan hari besar keagamaan, dan pembinaan karakter religius.' },
    { role: 'Sekbid 2: Bela Negara, Disiplin & Upacara', description: 'Membantu ketertiban upacara bendera, pembinaan baris-berbaris, dan penegakan tata tertib siswa.' },
    { role: 'Sekbid 3: Minat, Bakat, Olahraga & Seni', description: 'Mengoordinasikan kegiatan ekstrakurikuler (Futsal, Basket, Hadroh, Pramuka) dan turnamen Class Meeting.' },
    { role: 'Sekbid 4: Teknologi Informasi, Humas & Publikasi', description: 'Mengelola publikasi media informasi digital sekolah, dokumentasi visual kreatif, dan mading kesiswaan.' }
  ],
  workPrograms: [
    { title: 'Latihan Dasar Kepemimpinan Siswa (LDKS)', category: 'Kepemimpinan', description: 'Pembekalan wawasan kepemimpinan, manajemen organisasi, dan kedisiplinan bagi pengurus OSIS dan MPK baru.', schedule: 'Awal Tahun Pelajaran' },
    { title: 'Pekan Olahraga & Seni Antarkelas (Class Meeting)', category: 'Minat & Bakat', description: 'Ajang kompetisi futsal, basket, hadroh, catur, dan unjuk kreasi setelah evaluasi akhir semester.', schedule: 'Akhir Semester Ganjil & Genap' },
    { title: 'Peringatan Hari Besar Nasional & Keagamaan', category: 'Nasionalisme & Religi', description: 'Peringatan HUT RI, Hari Pahlawan, Hari Guru Nasional, Maulid Nabi Muhammad SAW, dan Isra Miraj.', schedule: 'Sesuai Agenda Resmi Sekolah' },
    { title: 'Gerakan Disiplin 5S & Aksi Peduli Lingkungan', category: 'Budaya Industri', description: 'Penerapan budaya industri Senyum, Salam, Sapa, Sopan, Santun dan kerja bakti kebersihan bengkel/lab.', schedule: 'Setiap Pekan' }
  ]
};

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    id: 'futsal',
    name: 'Futsal',
    category: 'Olahraga',
    description: 'Wadah pengembangan bakat dan fisik olahraga futsal, melatih kemampuan passing, dribble, taktik formasi menyerang dan bertahan, kekompakan tim, serta sportivitas antar siswa.',
    schedule: 'Hari Senin (Sehabis Pulang Sekolah)',
    coach: 'Pembina & Pelatih Futsal SMK Budi Murni 1',
    location: 'Lapangan Olahraga Utama SMK Budi Murni 1',
    highlight: 'Latihan rutin terstruktur dan persiapan turnamen antarpelajar',
    achievements: [],
    iconName: 'Trophy',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'hadroh',
    name: 'Hadroh',
    category: 'Seni & Budaya',
    description: 'Ekstrakurikuler seni musik rebana islami, lantunan sholawat nabi, pembinaan seni vokal religius, serta pemantapan akhlak dan nilai keislaman.',
    schedule: 'Hari Selasa (Sehabis Pulang Sekolah)',
    coach: 'Pembina Seni Hadroh & Rohis',
    location: 'Masjid Al-Ikhlas / Aula SMK Budi Murni 1',
    highlight: 'Pengisi acara resmi peringatan hari besar keagamaan dan unjuk kreasi islami',
    achievements: [],
    iconName: 'Music',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'basket',
    name: 'Basket',
    category: 'Olahraga',
    description: 'Pelatihan olahraga bola basket mulai dari fundamental dribbling, shooting, lay-up, defense, hingga simulasi strategi tanding yang kompetitif dan pembentukan stamina prima.',
    schedule: 'Hari Selasa (Sehabis Pulang Sekolah)',
    coach: 'Pembina & Pelatih Basket SMK Budi Murni 1',
    location: 'Lapangan Basket SMK Budi Murni 1',
    highlight: 'Pengembangan atlet muda dan persiapan turnamen basket pelajar',
    achievements: [],
    iconName: 'Award',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'pramuka',
    name: 'Pramuka',
    category: 'Wajib',
    description: 'Kegiatan kepramukaan penegak yang membentuk jiwa kemandirian, kedisiplinan, ketahanan mental, kecintaan alam, dan kepemimpinan berlandaskan Tri Satya dan Dasa Darma.',
    schedule: 'Hari Rabu (Sehabis Pulang Sekolah)',
    coach: 'Pembina Gugus Depan Pramuka SMK Budi Murni 1',
    location: 'Lapangan Upacara & Pangkalan Gudep BM1',
    highlight: 'Pendidikan karakter, tali temali, pioneering, dan ketangkasan baris berbaris',
    achievements: [],
    iconName: 'Compass',
    image: '/assets/images/gedung-sekolah.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rizky Ramadhan',
    year: 'Alumni Lulusan 2024 (TKJ)',
    major: 'Teknik Komputer dan Jaringan',
    currentRole: 'Fiber Network Engineer & NOC Specialist',
    company: 'PT Telkom Indonesia (Persero) Tbk',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    quote: 'Alhamdulillah berkat ilmu jaringan di SMK Budi Murni 1, sertifikasi MikroTik MTCNA, dan bimbingan Pak Wirwan Rizon, saya langsung diterima di Telkom Indonesia sebelum wisuda. Praktik langsung splicing fiber optic di lab membuat saya sangat percaya diri di dunia kerja!',
    salaryOrBenefit: 'Gaji & Tunjangan Sangat Memuaskan',
    verifiedBadge: 'Terverifikasi BKK 2024'
  },
  {
    id: 'testi-2',
    name: 'Dimas Pratama',
    year: 'Alumni Lulusan 2023 (TKR)',
    major: 'Teknik Kendaraan Ringan Otomotif',
    currentRole: 'Senior Automotive Technician & Diagnostic Lead',
    company: 'Auto2000 Toyota Cilandak',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
    quote: 'Fasilitas bengkel TKR di Budi Murni 1 sangat lengkap, ada Car Lift dan engine scanner OBD mutakhir persis seperti di bengkel resmi Toyota. BKK sekolah aktif mendatangkan HRD Auto2000 untuk tes rekrutmen langsung di kampus.',
    salaryOrBenefit: 'Jenjang Karir Bintang 4 Toyota',
    verifiedBadge: 'Terverifikasi BKK 2023'
  },
  {
    id: 'testi-3',
    name: 'Siti Nurhaliza',
    year: 'Alumni Lulusan 2024 (TITL)',
    major: 'Teknik Instalasi Tenaga Listrik',
    currentRole: 'Panel Maker & Automation PLC Specialist',
    company: 'PT Schneider Electric Indonesia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    quote: 'Siapa bilang perempuan tidak bisa sukses di teknik listrik? Di SMK Budi Murni 1 saya dibimbing dari nol merakit panel industri dan memprogram PLC Omron. Sekarang saya bangga bekerja di perusahaan multinasional Schneider Electric.',
    salaryOrBenefit: 'Kontrak Industri Multinasional',
    verifiedBadge: 'Terverifikasi BKK 2024'
  },
  {
    id: 'testi-4',
    name: 'Bayu Prasetyo',
    year: 'Alumni Lulusan 2023 (TBSM)',
    major: 'Teknik dan Bisnis Sepeda Motor',
    currentRole: 'Kepala Mekanik Pit & Service Advisor',
    company: 'Bengkel Resmi AHASS Astra Honda Motor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    quote: 'Kurikulum TBSM Budi Murni 1 sudah terintegrasi standar AHASS Honda. Praktik bongkar mesin injeksi PGM-FI dan transmisi CVT membuat tes seleksi mekanik Astra terasa mudah.',
    salaryOrBenefit: 'Kepala Mekanik AHASS',
    verifiedBadge: 'Terverifikasi BKK 2023'
  },
  {
    id: 'testi-5',
    name: 'Ahmad Fauzi',
    year: 'Alumni Lulusan 2022 (TITL)',
    major: 'Teknik Instalasi Tenaga Listrik',
    currentRole: 'Electrical Maintenance Engineer',
    company: 'PT PLN (Persero) UID Jakarta Raya',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    quote: 'Dasar pemahaman PUIL dan instalasi tenaga yang diajarkan para guru sangat kuat. Lulusan Budi Murni 1 memiliki etos kerja disiplin dan mental baja yang sangat dihargai di BUMN PLN.',
    salaryOrBenefit: 'Pegawai BUMN Listrik',
    verifiedBadge: 'Terverifikasi BKK 2022'
  },
  {
    id: 'testi-6',
    name: 'Annisa Rahmawati',
    year: 'Alumni Lulusan 2024 (TKJ)',
    major: 'Teknik Komputer dan Jaringan',
    currentRole: 'Cyber Security Associate & Cloud Engineer',
    company: 'PT Mitra Integrasi Informatika (Metrodata)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    quote: 'Kombinasi materi Cisco, Linux Server, dan Cyber Security di TKJ SMK Budi Murni 1 benar-benar membuka peluang karir emas. Guru-gurunya sangat sabar membimbing kami sampai bisa!',
    salaryOrBenefit: 'IT Corporate Consultant',
    verifiedBadge: 'Terverifikasi BKK 2024'
  },
  {
    id: 'testi-7',
    name: 'Hendra Kurniawan',
    year: 'Alumni Lulusan 2021 (TBSM)',
    major: 'Teknik dan Bisnis Sepeda Motor',
    currentRole: 'Owner & Founder HK Speedshop Otomotif',
    company: 'Wirausahawan Mandiri',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    quote: 'Selain skill teknis bengkel, kami dibekali mata pelajaran Produk Kreatif & Kewirausahaan (PKK). Sekarang saya memiliki bengkel modifikasi motor sendiri dengan 6 karyawan dan omzet puluhan juta rupiah.',
    salaryOrBenefit: 'Omzet Usaha Rp 45 Juta/bln',
    verifiedBadge: 'Wirausaha Sukses'
  },
  {
    id: 'testi-8',
    name: 'Maya Lestari',
    year: 'Alumni Lulusan 2023 (TKR)',
    major: 'Teknik Kendaraan Ringan Otomotif',
    currentRole: 'Quality Assurance Inspector',
    company: 'PT Astra Daihatsu Motor (Pabrik Karawang)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    quote: 'Pendidikan karakter dan budaya industri 5S di SMK Budi Murni 1 membuat adaptasi di pabrik manufaktur Astra Daihatsu berlangsung cepat. SMK Budi Murni 1 pilihan terbaik untuk masa depan!',
    salaryOrBenefit: 'Karyawan Manufaktur Astra',
    verifiedBadge: 'Terverifikasi BKK 2023'
  }
];

// TEACHERS FROM THE EXACT OFFICIAL PDF TIMETABLE
// Tanggal 20 Juli 2026, Kepala Sekolah: Budiman Sitorus, SE; Waka Kurikulum: Wirwan Rizon, S.Kom
export const TEACHERS_LIST: TeacherData[] = [
  { code: '1', name: 'Budiman Sitorus, SE', subject: 'B.INGGRIS', role: 'Kepala Sekolah & Guru Bahasa Inggris', education: 'Sarjana Ekonomi', avatar: '/assets/images/kepsek.jpg' },
  { code: '2', name: 'Wirwan Rizon, S.Kom', subject: 'TWAN, INF, MAPIL', role: 'Wakil Kepala Sekolah Bidang Kurikulum & Guru Produktif TKJ', education: 'Sarjana Komputer' },
  { code: '4', name: 'Drs. Iwan Setiawan', subject: 'PDE, GBR, IML, PPL', role: 'Ketua Jurusan TITL & Guru Produktif Listrik', education: 'Drs. Pendidikan Teknik Elektro' },
  { code: '5', name: 'Ghabriel Geacinta, S.Pd', subject: 'B.INGGRIS', role: 'Wali Kelas X TITL & Guru Bahasa Inggris', education: 'Sarjana Pendidikan Bahasa Inggris' },
  { code: '6', name: 'Drs. Agustinus Surata', subject: 'PROD.TSM', role: 'Ketua Jurusan TBSM & Guru Produktif Sepeda Motor', education: 'Drs. Teknik Otomotif' },
  { code: '7', name: 'Timodorta M.Spak', subject: 'P.A.K, PKK', role: 'Wali Kelas XII TITL (Timo) & Guru P.A.K / PKK', education: 'Magister Pendidikan Agama Kristen' },
  { code: '8', name: 'Rayani, SH, MM', subject: 'SENI BUDAYA', role: 'Wali Kelas XI TSM & Guru Seni Budaya', education: 'Magister Manajemen & Sarjana Hukum' },
  { code: '9', name: 'Basa Rosaulina, S.Pd', subject: 'MATEMATIKA', role: 'Wali Kelas XII TSM (Basa) & Guru Matematika', education: 'Sarjana Pendidikan Matematika' },
  { code: '10', name: 'Supri Rahayu, S.Pd', subject: 'PPKN', role: 'Wali Kelas XI TITL (S. Rahayu) & Guru PPKN', education: 'Sarjana Pendidikan Pancasila & Kewarganegaraan' },
  { code: '11', name: 'Pahala Lumban G, S.Pd', subject: 'PIPAS', role: 'Wali Kelas X TKRO (Pahala) & Guru Projek IPAS', education: 'Sarjana Pendidikan Sains' },
  { code: '12', name: 'Yohanes Rafael S, S.T', subject: 'PROD LISTRIK', role: 'Guru Produktif Instalasi Tenaga Listrik', education: 'Sarjana Teknik Elektro' },
  { code: '13', name: 'Ghabriel Veronica, S.Pd', subject: 'MATEMATIKA, PKK', role: 'Guru Matematika & Proyek Kewirausahaan', education: 'Sarjana Pendidikan Matematika' },
  { code: '14', name: 'Josias MP, S.Kom', subject: 'PROD.TKJ', role: 'Guru Produktif Teknik Jaringan Komputer', education: 'Sarjana Komputer' },
  { code: '15', name: 'N. Supartini, S.Kom', subject: 'INFORMATIKA', role: 'Guru Informatika & Sistem Digital', education: 'Sarjana Komputer' },
  { code: '16', name: 'Tuti Alawiyah, S.Ag', subject: 'P.A.I', role: 'Wali Kelas XI TKRO (Tuti) & Guru Pendidikan Agama Islam', education: 'Sarjana Agama Islam' },
  { code: '17', name: 'Kharis Majid, S.Pd', subject: 'PENJAS', role: 'Guru PJOK & Pembina Olahraga Futsal', education: 'Sarjana Pendidikan Jasmani & Kesehatan' },
  { code: '18', name: 'Togi Plantino, S.Pd', subject: 'B.INGGRIS', role: 'Guru Bahasa Inggris Komunikasi Industri', education: 'Sarjana Pendidikan Bahasa Inggris' },
  { code: '19', name: 'Linda Halimatusadyah, S.Pd', subject: 'B.INDONESIA', role: 'Wali Kelas XII TKJ (Linda. H) & Guru Bahasa Indonesia', education: 'Sarjana Pendidikan Bahasa Indonesia' },
  { code: '20', name: 'M. Salem, S.Pd', subject: 'SEJARAH', role: 'Wali Kelas X TSM (M. Salem) & Guru Sejarah Indonesia', education: 'Sarjana Pendidikan Sejarah' },
  { code: '21', name: 'Yoike Ralomon, S.Pd', subject: 'PROD.TKR', role: 'Wali Kelas XII TKR (Yoike) & Guru Produktif Kendaraan Ringan', education: 'Sarjana Pendidikan Teknik Mesin' },
  { code: '22', name: 'M. Fauzan, S.Pd.I', subject: 'P.A.I', role: 'Wali Kelas X TKJ (Fauzan) & Guru PAI', education: 'Sarjana Pendidikan Islam' },
  { code: '23', name: 'Maulana Prasetio, S.T', subject: 'PROD.TSM, TKR', role: 'Guru Produktif Otomotif Sepeda Motor & Mobil', education: 'Sarjana Teknik Mesin Otomotif' },
  { code: '24', name: 'Cecep Syarif, S.Kom', subject: 'PROD.TKJ', role: 'Wali Kelas XI TKJ (Cecep) & Guru Produktif Jaringan Komputer', education: 'Sarjana Komputer' },
  { code: '25', name: 'Abdul Rachman, S.Pd', subject: 'PROD TKR, TSM', role: 'Guru Produktif Teknik Kendaraan Ringan & Motor', education: 'Sarjana Pendidikan Teknik Otomotif' },
  { code: '26', name: 'Pricilia, S.Psi', subject: 'BK, MULOK', role: 'Guru Bimbingan Konseling (BK) & Muatan Lokal', education: 'Sarjana Psikologi' },
  { code: '27', name: 'Siti Huriani, S.T', subject: 'PROD LISTRIK', role: 'Guru Produktif Instalasi Tenaga Listrik Gedung', education: 'Sarjana Teknik Elektro' },
  { code: '28', name: 'Dodi K, S.T', subject: 'PROD TKR, TSM', role: 'Guru Produktif Pemeliharaan Mesin Otomotif', education: 'Sarjana Teknik Mesin' }
];

import { getFlatScheduleDatabase } from './scheduleData';

// SCHEDULE DATABASE TRANSLATED DIRECTLY FROM THE OFFICIAL TIMETABLE PDF
export const SCHEDULE_DATABASE: ScheduleItem[] = getFlatScheduleDatabase();

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 'news-hut-ri',
    title: 'Upacara Khidmat Peringatan Hari Ulang Tahun (HUT) Kemerdekaan Republik Indonesia di SMK Budi Murni 1 Jakarta',
    category: 'Hari Nasional',
    date: '17 Agustus 2026',
    author: 'Kesiswaan & Pembina Upacara',
    summary: 'Seluruh dewan guru, staf, dan siswa-siswi SMK Budi Murni 1 Jakarta melaksanakan upacara bendera memperingati HUT RI dengan penuh rasa syukur dan semangat nasionalisme.',
    content: 'Peringatan Hari Ulang Tahun Proklamasi Kemerdekaan Republik Indonesia diselenggarakan dengan upacara bendera pengibaran Sang Saka Merah Putih di halaman utama SMK Budi Murni 1 Jakarta. Kepala Sekolah Budiman Sitorus, SE bertindak sebagai pembina upacara menyampaikan pesan pentingnya mengisi kemerdekaan melalui kedisiplinan, penguasaan ilmu pengetahuan vokasi, serta menjunjung tinggi akhlak mulia dan persatuan bangsa.',
    image: '/assets/images/gedung-sekolah.jpg',
    featured: true
  },
  {
    id: 'news-hardiknas',
    title: 'Peringatan Hari Pendidikan Nasional (Hardiknas): Meneguhkan Karakter dan Kualitas Pendidikan Vokasi',
    category: 'Kependidikan',
    date: '2 Mei 2026',
    author: 'Humas SMK Budi Murni 1',
    summary: 'Memperingati Hari Pendidikan Nasional, SMK Budi Murni 1 berkomitmen mewujudkan suasana belajar mendalam (deep learning) yang bermakna dan berorientasi masa depan anak bangsa.',
    content: 'Peringatan Hari Pendidikan Nasional (Hardiknas) menjadi momentum penting bagi seluruh insan pendidikan SMK Budi Murni 1 Jakarta. Selaras dengan arahan Kementerian Pendidikan Dasar dan Menengah RI, sekolah terus berupaya meningkatkan mutu pembelajaran kejuruan, memperkuat pendidikan karakter, serta membimbing siswa agar menjadi pribadi yang berintegritas, mandiri, dan berdaya saing tinggi.',
    image: '/assets/images/gedung-sekolah.jpg',
    featured: true
  },
  {
    id: 'news-hari-guru',
    title: 'Peringatan Hari Guru Nasional & HUT PGRI: Penghormatan Terhadap Dedikasi Pendidik Bangsa',
    category: 'Kependidikan',
    date: '25 November 2026',
    author: 'OSIS & MPK Budi Murni 1',
    summary: 'Apresiasi tulus dari seluruh siswa-siswi kepada bapak dan ibu guru SMK Budi Murni 1 Jakarta atas ketulusan membimbing dan mendidik generasi penerus bangsa.',
    content: 'Hari Guru Nasional dan HUT PGRI diperingati secara khidmat dan penuh kehangatan oleh keluarga besar SMK Budi Murni 1. Para siswa menggelar persembahan puisi, paduan suara, serta ucapan terima kasih kepada seluruh dewan guru dan instruktur bengkel yang tanpa lelah mentransfer ilmu pengetahuan, keterampilan praktikum, serta nilai-nilai moral kehidupan.',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'news-sumpah-pemuda',
    title: 'Peringatan Hari Sumpah Pemuda: Kobarkan Persatuan, Integritas, dan Semangat Pelajar Vokasi',
    category: 'Hari Nasional',
    date: '28 Oktober 2026',
    author: 'Kesiswaan & OSIS',
    summary: 'Refleksi Sumpah Pemuda menegaskan komitmen siswa SMK Budi Murni 1 untuk terus bersatu, anti-tawuran, anti-perundungan, dan giat berkarya.',
    content: 'Dalam rangka memperingati Hari Sumpah Pemuda, dewan guru dan seluruh pengurus OSIS mengikrarkan kembali janji Sumpah Pemuda. Kegiatan diisi dengan pembacaan teks ikrar, pembinaan kedisiplinan pelajar, dan deklarasi bersama komitmen anti-narkoba serta anti-tawuran demi mewujudkan lingkungan sekolah yang aman, damai, dan membanggakan.',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'news-idul-fitri',
    title: 'Silaturahmi & Halal Bihalal Hari Raya Idul Fitri Keluarga Besar SMK Budi Murni 1 Jakarta',
    category: 'Hari Raya',
    date: '10 April 2026',
    author: 'Sekbid Kerohanian & Hubin',
    summary: 'Kegiatan silaturahmi, saling bermaafan, dan halal bihalal usai libur Hari Raya Idul Fitri mempererat persaudaraan sivitas akademika.',
    content: 'Menyambut hari kemenangan Hari Raya Idul Fitri, Yayasan Budi Murni Jakarta bersama dewan guru, karyawan, dan perwakilan orang tua murid mengadakan acara Halal Bihalal di aula sekolah. Momentum Idul Fitri dimaknai untuk saling memaafkan, membersihkan hati, dan mempererat tali silaturahmi serta gotong royong memajukan SMK Budi Murni 1 Jakarta.',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'news-ppdb',
    title: 'Pembukaan Pendaftaran Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027 Gelombang 1',
    category: 'PPDB',
    date: '28 Agustus 2026',
    author: 'Panitia PPDB 2026/2027',
    summary: 'SMK Budi Murni 1 Jakarta resmi membuka pendaftaran peserta didik baru TP 2026/2027 untuk konsentrasi keahlian TKJ, TKR, TITL, dan TBSM.',
    content: 'Penerimaan Peserta Didik Baru (PPDB) SMK Budi Murni 1 Jakarta TP 2026/2027 telah resmi dibuka. Calon siswa dari SMP/MTs sederajat dapat mendaftar langsung secara online melalui portal resmi ini atau mendatangi Sekretariat PPDB di Kampus SMK Budi Murni 1 Cipayung / Duren Sawit.',
    image: '/assets/images/gedung-sekolah.jpg'
  },
  {
    id: 'news-jadwal',
    title: 'Rilis Resmi Jadwal Pembelajaran Tatap Muka TP 2026/2027 Semester Ganjil',
    category: 'Pengumuman',
    date: '20 Juli 2026',
    author: 'Kurikulum & Pengajaran',
    summary: 'Jadwal pelajaran teori & praktek semester ganjil TP 2026/2027 telah disahkan oleh Kepala Sekolah Budiman Sitorus, SE dan Waka Kurikulum Wirwan Rizon, S.Kom.',
    content: 'Wakil Kepala Sekolah Bidang Kurikulum mengumumkan bahwa jadwal pelajaran resmi Tahun Pelajaran 2026/2027 telah aktif. Seluruh peserta didik kelas X, XI, dan XII diimbau memeriksa jadwal masing-masing melalui menu Jadwal Pelajaran pada portal ini.',
    image: '/assets/images/gedung-sekolah.jpg'
  }
];

export const JOB_VACANCIES: JobVacancy[] = [
  {
    id: 'job-1',
    company: 'PT Astra International Tbk - Toyota Sales Operation (Auto2000)',
    position: 'Junior Automotive Technician / Mekanik Servis Berkala',
    majorTarget: ['TKR'],
    location: 'Jabodetabek (Penempatan Cabang Resmi)',
    type: 'Full-time',
    deadline: '30 September 2026',
    salaryRange: 'Rp 5.200.000 - Rp 6.800.000 / bln',
    requirements: [
      'Lulusan SMK Jurusan TKR (Teknik Kendaraan Ringan)',
      'Memahami dasar mesin bensin EFI, tune-up, dan rem sasis',
      'Memiliki sertifikat kompetensi LSP / BNSP nilai tambah',
      'Disiplin, jujur, teliti, dan sehat jasmani (tidak buta warna)'
    ]
  },
  {
    id: 'job-2',
    company: 'PT Astra Honda Motor (Jaringan AHASS Jakarta)',
    position: 'Mekanik Sepeda Motor Injeksi (Pit Mechanic)',
    majorTarget: ['TBSM', 'TSM'],
    location: 'Jakarta Timur & Bekasi',
    type: 'Full-time',
    deadline: '25 September 2026',
    salaryRange: 'Rp 4.900.000 - Rp 6.200.000 / bln + Insentif Unit',
    requirements: [
      'Lulusan SMK Jurusan TBSM (Teknik Bisnis Sepeda Motor)',
      'Menguasai perawatan motor matic PGM-FI, CVT, dan sistem rem',
      'Mampu mengoperasikan diagnostic tool HIDS Honda',
      'Berpenampilan rapi dan komunikatif melayani pelanggan'
    ]
  },
  {
    id: 'job-3',
    company: 'PT Indonesia Comnets Plus (PLN Icon Plus)',
    position: 'Fiber Optic & Network Installer Specialist',
    majorTarget: ['TKJ', 'TITL'],
    location: 'Jakarta & Depok',
    type: 'Kontrak',
    deadline: '15 Oktober 2026',
    salaryRange: 'Rp 5.000.000 - Rp 6.500.000 / bln',
    requirements: [
      'Lulusan SMK Jurusan TKJ atau TITL',
      'Memahami prinsip FO Splicing, OTDR test, dan ODP / OLT',
      'Siap bekerja di lapangan dengan standar K3 ketat',
      'Memiliki SIM C aktif'
    ]
  },
  {
    id: 'job-4',
    company: 'PT Schneider Electric Partner Indonesia',
    position: 'Panel Maker & Electrical Wiring Technician',
    majorTarget: ['TITL'],
    location: 'Kawasan Industri Pulogadung / Cikarang',
    type: 'Full-time',
    deadline: '10 Oktober 2026',
    salaryRange: 'Rp 5.400.000 - Rp 7.000.000 / bln',
    requirements: [
      'Lulusan SMK Jurusan TITL (Teknik Listrik)',
      'Mampu membaca single line diagram & wiring diagram instalasi tenaga',
      'Pengalaman praktikum merakit panel distribusi & kontrol kontaktor',
      'Teliti dan patuh prosedur keselamatan kerja listrik'
    ]
  }
];

export interface TkaPhase {
  phase: string;
  time: string;
  desc: string;
}

export interface TkaSubject {
  name: string;
  duration: string;
  desc: string;
}

export interface TkaRequirement {
  title: string;
  desc: string;
}

export interface TkaProhibition {
  title: string;
  desc: string;
  severity: 'Teguran Keras' | 'Diskualifikasi Ujian' | 'Pembatalan SHTKA & Gugur';
}

export interface TkaVocationalChoice {
  majorCode: string;
  majorName: string;
  options: {
    code: string;
    name: string;
    focus: string;
  }[];
}

export interface TkaData {
  ministryInfo: {
    ministry: string;
    minister: string;
    description: string;
    legalBases: { title: string; desc: string; link?: string }[];
  };
  officialSchedule: {
    periodTitle: string;
    timeline: { date: string; activity: string; note: string }[];
    officialTimeSchedule: {
      subject: string;
      duration: string;
      description: string;
    }[];
    timeNotice: string;
  };
  participantRequirements: {
    summary: string;
    items: TkaRequirement[];
  };
  subjectChoices: {
    generalSubjects: TkaSubject[];
    vocationalChoices: TkaVocationalChoice[];
    selectionRule: string;
  };
  prohibitions: {
    summary: string;
    items: TkaProhibition[];
    sanctionNotice: string;
  };
  examDurationRules: {
    generalDuration: string;
    vocationalDuration: string;
    tardinessTolerance: string;
    rules: string[];
  };
  previousYear: {
    period: string;
    summary: string;
    stats: { label: string; value: string; category: string; note: string }[];
    evaluations: string[];
    followUps: string[];
  };
  nextYear: {
    period: string;
    summary: string;
    roadmaps: { title: string; desc: string; icon: string }[];
  };
  faq: { q: string; a: string }[];
  officialReferences: { title: string; source: string; note: string }[];
}

export const TKA_DATA: TkaData = {
  ministryInfo: {
    ministry: 'Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) Republik Indonesia',
    minister: 'Prof. Dr. Abdul Mu’ti, M.Ed.',
    description: 'Tes Kemampuan Akademik (TKA) adalah asesmen standar nasional yang diselenggarakan oleh Kementerian Pendidikan Dasar dan Menengah untuk mengukur capaian akademik individu murid secara objektif, berkeadilan, dan terstandar nasional. TKA melengkapi penilaian sekolah tanpa menjadi penentu tunggal kelulusan.',
    legalBases: [
      {
        title: 'Permendikdasmen Nomor 9 Tahun 2025',
        desc: 'Tentang Penyelenggaraan Tes Kemampuan Akademik (TKA) pada Jenjang Pendidikan Dasar dan Menengah.'
      },
      {
        title: 'Permendikdasmen Nomor 13 Tahun 2025',
        desc: 'Tentang Pendekatan Pembelajaran Mendalam (Deep Learning: Mindful, Meaningful, dan Joyful Learning).'
      },
      {
        title: 'Keputusan Kepala BSKAP Kemendikdasmen',
        desc: 'Tentang Kerangka Asesmen Terpadu dan Petunjuk Teknis Integrasi TKA dengan Asesmen Nasional (ANBK).'
      }
    ]
  },
  officialSchedule: {
    periodTitle: 'Jadwal Resmi Pelaksanaan TKA Tahun Ajaran 2026/2027 (Kemendikdasmen)',
    timeNotice: 'Catatan: Pelaksanaan Tes Kemampuan Akademik (TKA) diselenggarakan secara serentak terstandar nasional berbasis CBT sesuai petunjuk teknis resmi Kemendikdasmen RI. Peserta wajib hadir di sekolah 30 menit sebelum jadwal mata uji untuk verifikasi identitas dan login sistem CBT.',
    timeline: [
      {
        date: 'Agustus - September 2026',
        activity: 'Verifikasi & Sinkronisasi DNT Peserta',
        note: 'Validasi data NISN, konsentrasi keahlian, dan pengecekan sinkronisasi ke server pusat Pusdatin Kemendikdasmen.'
      },
      {
        date: 'Awal Oktober 2026',
        activity: 'Simulasi Nasional CBT Mandiri',
        note: 'Uji coba kelancaran sistem aplikasi CBT, adaptasi peserta terhadap tipe soal penalaran studi kasus, dan ketahanan server.'
      },
      {
        date: 'Pertengahan Oktober 2026',
        activity: 'Gladi Bersih Serentak Nasional',
        note: 'Gladi bersih wajib dengan protokol proktor pusat dan pengawasan silang antar-satuan pendidikan.'
      },
      {
        date: 'November 2026',
        activity: 'Pelaksanaan Ujian Utama TKA Gelombang 1 & 2',
        note: 'Pelaksanaan ujian utama TKA terstandar nasional secara serentak untuk menguji Literasi Membaca, Numerasi Matematika Terapan, Bahasa Inggris, dan Konsentrasi Kejuruan.'
      },
      {
        date: 'Desember 2026',
        activity: 'Rilis & Penerbitan Dokumen Resmi SHTKA',
        note: 'Penerbitan Sertifikat Hasil TKA (SHTKA) ber-QR Code resmi Kemendikdasmen untuk portofolio SNBP/SNBT & rekrutmen kerja industri.'
      }
    ],
    officialTimeSchedule: [
      {
        subject: 'Literasi Bahasa Indonesia Terapan',
        duration: '90 Menit',
        description: 'Penalaran informasi kontekstual, pemahaman teks instruksi kerja teknik, dan analisis dokumen vokasi.'
      },
      {
        subject: 'Numerasi & Matematika Terapan',
        duration: '90 Menit',
        description: 'Pemecahan masalah kuantitatif, logika data statistik, pengukuran presisi, dan kalkulasi dasar teknik.'
      },
      {
        subject: 'Bahasa Inggris Komunikasi Vokasi',
        duration: '60 Menit',
        description: 'Pemahaman manual teknis bahasa Inggris, standard operating procedure (SOP), dan komunikasi bisnis kerja.'
      },
      {
        subject: 'Teori Konsentrasi Kejuruan (TKJ / TKR / TITL / TBSM)',
        duration: '120 Menit',
        description: 'Pengujian mendalam teori kejuruan spesifik kompetensi keahlian masing-masing jurusan berstandar nasional.'
      }
    ]
  },
  participantRequirements: {
    summary: 'Seluruh peserta didik yang mengikuti TKA Kemendikdasmen di SMK Budi Murni 1 wajib memenuhi persyaratan administratif dan akademik resmi berikut:',
    items: [
      {
        title: 'Terdaftar Aktif di Dapodik Kemendikdasmen',
        desc: 'Peserta wajib terdata secara sah dan aktif dalam Data Pokok Pendidikan (Dapodik) jenjang Sekolah Menengah Kejuruan.'
      },
      {
        title: 'Memiliki NISN Valid & Terverifikasi',
        desc: 'Nomor Induk Siswa Nasional (NISN) harus berstatus valid dan telah disinkronkan dengan Pusdatin Kemendikdasmen.'
      },
      {
        title: 'Siswa Aktif Tingkat Akhir (Kelas XII)',
        desc: 'TKA diperuntukkan bagi seluruh murid kelas XII SMK Budi Murni 1 dari konsentrasi keahlian TKJ, TKR, TITL, dan TBSM.'
      },
      {
        title: 'Ketuntasan Capaian Belajar Semester 1 - 5',
        desc: 'Telah menuntaskan seluruh beban sks / kompetensi pembelajaran intrakurikuler dari semester 1 hingga semester 5.'
      },
      {
        title: 'Presensi Kehadiran KBM Minimal 85%',
        desc: 'Memenuhi batas kehadiran kumulatif kegiatan belajar mengajar di sekolah minimal 85% pada tahun ajaran berjalan.'
      },
      {
        title: 'Wajib Mengikuti Simulasi & Gladi Bersih CBT',
        desc: 'Telah mengikuti tahapan uji coba simulasi dan gladi bersih resmi Kemendikdasmen sebelum pelaksanaan hari H.'
      },
      {
        title: 'Membawa Kartu Tanda Peserta TKA Resmi',
        desc: 'Wajib membawa Kartu Peserta Ujian berfoto dan ber-barcode yang telah disahkan oleh pihak sekolah.'
      }
    ]
  },
  subjectChoices: {
    selectionRule: 'Ketentuan Mata Uji Kemendikdasmen: Setiap peserta didik wajib menempuh 3 Mata Pelajaran Inti Nasional dan memilih 2 Mata Pelajaran Pilihan Kejuruan sesuai konsentrasi keahliannya masing-masing.',
    generalSubjects: [
      {
        name: 'Bahasa Indonesia (Literasi)',
        duration: '90 Menit',
        desc: 'Pemahaman teks informasi teknis kejuruan, telaah dokumen SOP industri, penalaran kritis bacaan ilmiah terapan, dan komunikasi kerja.'
      },
      {
        name: 'Matematika (Numerasi Terapan)',
        duration: '90 Menit',
        desc: 'Kalkulasi teknik terapan, aljabar, statistik produksi, geometri ruang, dan interpretasi grafik/data kuantitatif industri.'
      },
      {
        name: 'Bahasa Inggris Vokasi',
        duration: '90 Menit',
        desc: 'Reading technical manuals, pemahaman instruksi keselamatan kerja (K3), korespondensi profesional, dan technical terms.'
      }
    ],
    vocationalChoices: [
      {
        majorCode: 'TKJ',
        majorName: 'Teknik Komputer dan Jaringan',
        options: [
          {
            code: 'TKJ-1',
            name: 'Administrasi Infrastruktur Jaringan & Routing',
            focus: 'Konfigurasi Mikrotik, Cisco, switching, VLAN, routing dinamis (OSPF/BGP), dan manajemen bandwidth internet.'
          },
          {
            code: 'TKJ-2',
            name: 'Keamanan Jaringan, Server Linux & Cloud Computing',
            focus: 'Hardening server berbasis Linux Debian/Ubuntu, virtualisasi Proxmox, firewall filtering, dan layanan cloud terdistribusi.'
          }
        ]
      },
      {
        majorCode: 'TKR',
        majorName: 'Teknik Kendaraan Ringan (Otomotif Mobil)',
        options: [
          {
            code: 'TKR-1',
            name: 'Sistem Pemeliharaan Mesin & Chasis Otomotif',
            focus: 'Mekanisme motor bakar 4 langkah, tune-up mesin EFI, sistem kemudi, suspensi, pengereman ABS, dan transmisi manual/otomatis.'
          },
          {
            code: 'TKR-2',
            name: 'Diagnostik Kelistrikan Kendaraan & Sistem EFI Modern',
            focus: 'Troubleshooting ECU, sensor & aktuator injeksi menggunakan scanner OBD-II, sistem AC mobil, dan kelistrikan bodi.'
          }
        ]
      },
      {
        majorCode: 'TITL',
        majorName: 'Teknik Instalasi Tenaga Listrik',
        options: [
          {
            code: 'TITL-1',
            name: 'Instalasi Tenaga Listrik & Penerangan Bangunan',
            focus: 'Perancangan gambar sirkit penerangan 1 fasa & 3 fasa, panel distribusi utama (MDP), pentanahan (grounding), dan PUIL 2020.'
          },
          {
            code: 'TITL-2',
            name: 'Sistem Kendali Motor Listrik, Otomasi & PLC',
            focus: 'Pengawatan kontaktor magnetik sistem DOL/Star-Delta, pemrograman PLC Omron/Siemens, dan sistem proteksi beban lebih.'
          }
        ]
      },
      {
        majorCode: 'TBSM',
        majorName: 'Teknik dan Bisnis Sepeda Motor',
        options: [
          {
            code: 'TBSM-1',
            name: 'Sistem Mesin & Transmisi Sepeda Motor',
            focus: 'Overhaul kepala silinder, katup, piston, sistem pendinginan, kopling basah/kering, dan sistem transmisi matik CVT.'
          },
          {
            code: 'TBSM-2',
            name: 'Sistem Bahan Bakar Injeksi (PGM-FI) & Kelistrikan Motor',
            focus: 'Reset ECM/ECU, pembacaan kode MIL, pompa bahan bakar injektor, sistem pengapian DC-CDI/TCI, dan baterai kelistrikan.'
          }
        ]
      }
    ]
  },
  prohibitions: {
    summary: 'Demi menjaga integritas, objektivitas, dan standarisasi nasional, Kemendikdasmen menetapkan larangan ketat selama pelaksanaan TKA berlangsung:',
    sanctionNotice: 'Pelanggaran terhadap tata tertib di atas akan dikenakan sanksi berjenjang mulai dari teguran tertulis, diskualifikasi ujian, hingga pembatalan Sertifikat Hasil TKA (SHTKA) nasional.',
    items: [
      {
        title: 'Dilarang Membawa Smartphone, Gawai & Jam Pintar',
        desc: 'Peserta dilarang membawa smartphone/HP, tablet, smartwatch/jam pintar, kamera, alat rekam, atau headset ke meja ujian.',
        severity: 'Diskualifikasi Ujian'
      },
      {
        title: 'Dilarang Membuka Tab Browser Lain atau Aplikasi Eksternal',
        desc: 'Aplikasi CBT TKA terproteksi sistem lockdown. Membuka tab browser lain, aplikasi kalkulator, atau remote desktop akan langsung memblokir akun ujian.',
        severity: 'Diskualifikasi Ujian'
      },
      {
        title: 'Dilarang Membawa Catatan, Rumus, atau Contekan Fisik',
        desc: 'Peserta dilarang membawa kertas catatan, buku panduan, atau coretan rumus dari luar. Kertas buram resmi disediakan langsung oleh pengawas.',
        severity: 'Diskualifikasi Ujian'
      },
      {
        title: 'Dilarang Berbicara, Berbisik, atau Bertanya Antar-Peserta',
        desc: 'Dilarang saling menoleh, berbisik, memberi kode/isyarat, atau meminjamkan alat tulis selama ujian berlangsung.',
        severity: 'Teguran Keras'
      },
      {
        title: 'Dilarang Memotret atau Menyebarluaskan Soal Ujian',
        desc: 'Mengambil foto layar monitor, merekam video, atau menyebarkan butir soal ke media sosial merupakan pelanggaran hukum berat atas kerahasiaan dokumen negara.',
        severity: 'Pembatalan SHTKA & Gugur'
      },
      {
        title: 'Dilarang Meninggalkan Ruang Ujian Tanpa Izin Pengawas',
        desc: 'Peserta tidak diperkenankan keluar dari ruang ujian sebelum waktu pengerjaan berakhir tanpa izin dan pendampingan petugas pengawas.',
        severity: 'Teguran Keras'
      },
      {
        title: 'Dilarang Menggunakan Joki atau Pengganti Peserta',
        desc: 'Segala bentuk perjokian berakibat pembatalan status peserta secara permanen, sanksi skorsing sekolah, dan penuntutan sesuai regulasi Kemendikdasmen.',
        severity: 'Pembatalan SHTKA & Gugur'
      }
    ]
  },
  examDurationRules: {
    generalDuration: '90 Menit per Mata Uji Umum (Literasi & Numerasi)',
    vocationalDuration: '120 Menit per Mata Uji Teori Konsentrasi Kejuruan',
    tardinessTolerance: 'Maksimal 15 Menit setelah waktu ujian dimulai (tanpa tambahan perpanjangan waktu pengerjaan)',
    rules: [
      'Setiap peserta wajib hadir 30 menit sebelum jadwal ujian dimulai untuk pemeriksaan kartu peserta dan sterilisasi.',
      'Waktu pengerjaan dihitung otomatis oleh sistem CBT Kemendikdasmen begitu tombol "Mulai Ujian" diaktifkan.',
      'Siswa yang terlambat kurang dari 15 menit tetap diperbolehkan masuk, namun tidak mendapat perpanjangan waktu tambahan.',
      'Siswa yang terlambat lebih dari 15 menit dinyatakan berhalangan dan wajib melapor ke Panitia Sekolah untuk penjadwalan ujian susulan resmi.',
      'Apabila terjadi gangguan teknis jaringan/listrik, waktu pengerjaan pada sistem server pusat secara otomatis membekukan sisa durasi (waktu tidak berkurang).'
    ]
  },
  previousYear: {
    period: 'Tahun Lalu / Periode Evaluasi (Transisi ANBK & TKA Tahap Awal)',
    summary: 'Pada periode sebelumnya, evaluasi sistem pendidikan berfokus pada Asesmen Nasional (ANBK) serta pemetaan awal kemampuan akademik siswa SMK di DKI Jakarta. Hasil Rapor Pendidikan SMK Budi Murni 1 menunjukkan tren positif dengan predikat Sangat Baik.',
    stats: [
      { label: 'Kemampuan Literasi Membaca', value: '82.4 / 100', category: 'Cakap', note: 'Mencakup pemahaman teks informasi teknis & dokumen kerja industri.' },
      { label: 'Kemampuan Numerasi', value: '78.9 / 100', category: 'Baik (+5.2 poin)', note: 'Peningkatan logika kuantitatif, statistik terapan, & kalkulasi teknik.' },
      { label: 'Indeks Karakter Siswa', value: '84.1 / 100', category: 'Membudaya', note: 'Nilai integritas, kemandirian, gotong royong, & profil Pelajar Pancasila.' },
      { label: 'Iklim Keamanan & Disiplin Belajar', value: '88.5 / 100', category: 'Sangat Baik', note: 'Suasana sekolah kondusif, toleran, anti-bullying, & budaya kerja industri.' }
    ],
    evaluations: [
      'Kemampuan literasi teknis siswa SMK Budi Murni 1 berada di kuartil atas se-Jakarta Timur.',
      'Perlu penguatan berkesinambungan pada penalaran matematika terapan (kalkulasi tegangan listrik TITL & rasio kompresi mesin otomotif TKR/TBSM).',
      'Penyelarasan budaya literasi digital di laboratorium komputer TKJ terbukti meningkatkan kecepatan analisis soal berbasis studi kasus.'
    ],
    followUps: [
      'Penyusunan modul pengayaan literasi-numerasi terintegrasi mata pelajaran kejuruan.',
      'Optimalisasi simulasi komputer CBT mandiri sebelum pelaksanaan ujian resmi.',
      'Pelatihan guru dalam menyusun soal-soal penalaran Higher Order Thinking Skills (HOTS).'
    ]
  },
  nextYear: {
    period: 'Tahun Depan (Tahun Ajaran 2027/2028 ke Depan) - Desain Masa Depan & Integrasi Strategis',
    summary: 'Kemendikdasmen merancang TKA ke depan sebagai instrumen terintegrasi yang menghubungkan pendidikan vokasi dengan ekosistem perguruan tinggi dan industri, sejalan dengan visi Indonesia Emas 2045.',
    roadmaps: [
      {
        title: 'Integrasi SHTKA dengan Seleksi Nasional PTN Vokasi',
        desc: 'Sertifikat Hasil TKA (SHTKA) menjadi salah satu portofolio utama pada SNBP (Seleksi Nasional Berdasarkan Prestasi) dan SNBT untuk masuk Politeknik Negeri maupun program vokasi universitas negeri terkemuka.',
        icon: 'GraduationCap'
      },
      {
        title: 'Penguatan Pendekatan Deep Learning (HOTS Terapan)',
        desc: 'Penyusunan instrumen soal berbasis pendekatan Deep Learning (Mindful, Meaningful, Joyful) yang mengutamakan daya analisis mendalam, pemikiran komputasional, serta kreativitas solusi teknik nyata.',
        icon: 'Sparkles'
      },
      {
        title: 'Sinkronisasi dengan Sertifikasi BNSP / LSP-P1',
        desc: 'Penyelarasan hasil capaian akademik TKA dengan skema Sertifikasi Profesi BNSP di SMK Budi Murni 1, memberikan pengakuan ganda (akademik nasional dan lisensi kompetensi kerja).',
        icon: 'Award'
      },
      {
        title: 'Standardisasi Penyerapan Tenaga Kerja Rekanan BKK',
        desc: 'Mitra industri strategis BKK SMK Budi Murni 1 (seperti grup Astra, PLN, Telkom) menjadikan skor SHTKA sebagai kriteria verifikasi kemampuan berpikir analitis calon teknisi profesional.',
        icon: 'Briefcase'
      }
    ]
  },
  faq: [
    {
      q: 'Apakah TKA menentukan kelulusan siswa dari SMK Budi Murni 1?',
      a: 'Tidak. Sesuai Permendikdasmen Nomor 9 Tahun 2025, TKA tidak menjadi penentu tunggal kelulusan siswa. Kelulusan tetap menjadi kewenangan penuh satuan pendidikan berdasarkan kriteria penyelesaian seluruh program pembelajaran, ujian sekolah, dan sikap/akhlak mulia.'
    },
    {
      q: 'Apa manfaat Sertifikat Hasil TKA (SHTKA) bagi siswa SMK Budi Murni 1?',
      a: 'SHTKA menjadi dokumen portofolio resmi berstandar nasional yang digunakan untuk seleksi perguruan tinggi negeri (SNBP/SNBT vokasi), pertimbangan beasiswa, dan dokumen verifikasi kompetensi akademik saat melamar kerja melalui Bursa Kerja Khusus (BKK).'
    },
    {
      q: 'Bagaimana jika siswa berhalangan hadir atau terlambat saat jadwal TKA?',
      a: 'Toleransi keterlambatan maksimal adalah 15 menit setelah waktu ujian dimulai tanpa perpanjangan durasi waktu. Jika terlambat lebih dari 15 menit atau berhalangan karena sakit resmi, siswa wajib melapor ke Panitia Sekolah untuk dijadwalkan mengikuti ujian susulan resmi.'
    },
    {
      q: 'Bagaimana alur teknis pengerjaan ujian CBT di laboratorium sekolah?',
      a: 'Setiap peserta menggunakan workstation komputer sekolah yang telah terinstal sistem CBT aman terhubung ke server Kemendikdasmen. Proktor ruangan akan merilis token ujian pada saat waktu pengerjaan dimulai.'
    },
    {
      q: 'Apakah pelaksanaan TKA dipungut biaya?',
      a: 'Tidak ada pungutan biaya. Pelaksanaan TKA resmi diselenggarakan oleh Kemendikdasmen bekerja sama dengan sekolah melalui pendanaan Bantuan Operasional Sekolah (BOS) dan sarana sekolah yang telah disediakan lengkap.'
    }
  ],
  officialReferences: [
    {
      title: 'Portal Resmi Kementerian Pendidikan Dasar dan Menengah RI',
      source: 'kemendikdasmen.go.id',
      note: 'Informasi kebijakan terpadu, rilis pers menteri, dan regulasi pendidikan nasional.'
    },
    {
      title: 'Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP)',
      source: 'bskap.kemdikbud.go.id / bskap.kemendikdasmen.go.id',
      note: 'Kerangka konseptual asesmen, capaian pembelajaran, dan panduan teknis asesmen.'
    },
    {
      title: 'Balai Pengelolaan Pengujian Pendidikan (BPPP)',
      source: 'bppp.kemdikbud.go.id',
      note: 'Pelaksana teknis pengujian terstandar nasional jenjang pendidikan dasar dan menengah.'
    },
    {
      title: 'Rapor Pendidikan Satuan Pendidikan',
      source: 'raporpendidikan.kemdikbud.go.id',
      note: 'Indikator mutu layanan pendidikan, literasi, numerasi, dan iklim keamanan sekolah.'
    }
  ]
};

export interface SchoolAgenda {
  id: string;
  title: string;
  date: string;
  category: 'Akademik' | 'Kesiswaan' | 'Ujian' | 'Industri';
  time: string;
  location: string;
  desc: string;
}

export const SCHOOL_AGENDA: SchoolAgenda[] = [
  {
    id: 'agenda-1',
    title: 'Pekan Olahraga & Seni Siswa (PORSENI) Antar-Jurusan Budi Murni',
    date: '15 - 18 Oktober 2026',
    category: 'Kesiswaan',
    time: '07.30 - 15.00 WIB',
    location: 'Lapangan Utama & Aula Sekolah',
    desc: 'Kompetisi futsal, basket, voli, dan unjuk bakat kreasi seni antar-jurusan TKJ, TKR, TITL, dan TBSM.'
  },
  {
    id: 'agenda-2',
    title: 'Workshop Penyelarasan Kurikulum Vokasi dengan Mitra Industri Astra & PLN',
    date: '24 Oktober 2026',
    category: 'Industri',
    time: '08.30 - 14.00 WIB',
    location: 'Aula Multimedia Lantai 2',
    desc: 'Pertemuan sinkronisasi silabus kejuruan bersama praktisi industri DUDI dan Waka Kurikulum.'
  },
  {
    id: 'agenda-3',
    title: 'Ujian Tengah Semester (UTS) Ganjil TP 2026/2027',
    date: '2 - 7 November 2026',
    category: 'Akademik',
    time: '07.00 - 13.00 WIB',
    location: 'Ruang Kelas Masing-masing',
    desc: 'Penilaian Sumatif Tengah Semester ganjil untuk kelas X, XI, dan XII mengacu pada Kurikulum Merdeka.'
  },
  {
    id: 'agenda-4',
    title: 'Bursa Rekrutmen Kampus & Seleksi Magang Industri BKK',
    date: '18 November 2026',
    category: 'Industri',
    time: '08.00 - 15.00 WIB',
    location: 'Ruang BKK & Bengkel Praktik',
    desc: 'Walk-in interview dan tes fisik calon teknisi untuk penempatan di jaringan bengkel resmi dan manufaktur.'
  }
];
