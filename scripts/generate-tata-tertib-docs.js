import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'assets', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Lembar 1 SVG: Tata Tertib Umum, KBM, Pakaian & Kerapihan
const svgLembar1 = `
<svg width="1200" height="1700" viewBox="0 0 1200 1700" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; font-family: 'Times New Roman', Times, serif;">
  <!-- Paper Background with subtle texture effect -->
  <rect width="1200" height="1700" fill="#fdfbf7" />
  <rect x="30" y="30" width="1140" height="1640" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" rx="4" />
  
  <!-- Outer Document Border -->
  <rect x="45" y="45" width="1110" height="1610" fill="none" stroke="#1e293b" stroke-width="3" />
  <rect x="52" y="52" width="1096" height="1596" fill="none" stroke="#64748b" stroke-width="1" />

  <!-- KOP SURAT / LETTERHEAD -->
  <g transform="translate(60, 65)">
    <!-- Header Text -->
    <text x="540" y="30" font-size="19" font-weight="bold" fill="#0f172a" text-anchor="middle" font-family="'Times New Roman', serif" letter-spacing="1">YAYASAN PENDIDIKAN BUDI MURNI JAKARTA</text>
    <text x="540" y="60" font-size="25" font-weight="900" fill="#b91c1c" text-anchor="middle" font-family="'Arial', sans-serif" letter-spacing="1.5">SMK BUDI MURNI 1 JAKARTA</text>
    <text x="540" y="85" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle" font-family="'Arial', sans-serif">STATUS : TERAKREDITASi "A" (UNGGUL) | NPSN : 20103714</text>
    <text x="540" y="105" font-size="12" fill="#334155" text-anchor="middle">PROGRAM KEAHLIAN: TEKNIK JARINGAN KOMPUTER (TKJ) • TEKNIK KENDARAAN RINGAN (TKR)</text>
    <text x="540" y="122" font-size="12" fill="#334155" text-anchor="middle">TEKNIK INSTALASI TENAGA LISTRIK (TITL) • TEKNIK &amp; BISNIS SEPEDA MOTOR (TBSM)</text>
    <text x="540" y="140" font-size="11" fill="#475569" text-anchor="middle" font-style="italic">Jl. Puri Kembangan No. 2, Kedoya Selatan, Kebon Jeruk, Jakarta Barat 11520 | Telp: (021) 5816982</text>
    
    <!-- Double Divider Line -->
    <line x1="10" y1="155" x2="1070" y2="155" stroke="#0f172a" stroke-width="3.5" />
    <line x1="10" y1="161" x2="1070" y2="161" stroke="#0f172a" stroke-width="1" />
  </g>

  <!-- TITLE -->
  <g transform="translate(60, 240)">
    <rect x="180" y="0" width="720" height="42" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5" rx="8" />
    <text x="540" y="26" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle" font-family="'Arial', sans-serif" letter-spacing="1">TATA TERTIB &amp; KETERTIBAN PESERTA DIDIK (LEMBAR 1)</text>
    <text x="540" y="58" font-size="12" fill="#64748b" text-anchor="middle" font-style="italic">Nomor: 421.5/088/SMK-BM1/TU/VII/2026 - Berlaku Tahun Pelajaran 2026/2027</text>
  </g>

  <!-- CONTENT ARTICLES (BAB I - BAB III) -->
  <g transform="translate(80, 320)" font-size="12.5" fill="#1e293b" font-family="'Times New Roman', serif">
    
    <!-- BAB I -->
    <rect x="0" y="0" width="1040" height="24" fill="#f1f5f9" rx="4" />
    <text x="12" y="17" font-weight="bold" fill="#0f172a" font-size="13">BAB I : WAKTU KEHADIRAN, PROSES KBM &amp; UPACARA BENDERA</text>
    
    <text x="15" y="42" font-weight="bold">Pasal 1: Waktu Belajar &amp; Kehadiran Siswa</text>
    <text x="30" y="60">1. Hari belajar efektif berlangsung selama 5 (lima) hari kerja, yakni hari Senin sampai dengan Jumat.</text>
    <text x="30" y="77">2. Bel tanda masuk berbunyi tepat pukul 06.45 WIB. Seluruh siswa wajib sudah berada di dalam lingkungan sekolah.</text>
    <text x="30" y="94">3. Pintu gerbang utama ditutup tepat pukul 07.00 WIB untuk memulai KBM dan kegiatan pembiasaan literasi / tadarus / doa pagi.</text>
    <text x="30" y="111">4. Setiap hari Senin dan peringatan hari besar nasional, seluruh peserta didik wajib mengikuti Upacara Bendera secara khidmat.</text>

    <text x="15" y="135" font-weight="bold">Pasal 2: Keterlambatan &amp; Prosedur Izin Masuk</text>
    <text x="30" y="153">1. Siswa yang hadir setelah pukul 07.00 WIB dinyatakan terlambat dan wajib melapor ke Guru Piket untuk dicatat.</text>
    <text x="30" y="170">2. Keterlambatan 3 (tiga) kali dalam 1 bulan diberikan teguran lisan dan pembinaan khusus oleh Wali Kelas.</text>
    <text x="30" y="187">3. Keterlambatan lebih dari 3 kali akan diproses oleh Guru BK untuk pemanggilan orang tua/wali murid ke sekolah.</text>

    <text x="15" y="211" font-weight="bold">Pasal 3: Ketidakhadiran (Sakit / Izin / Alfa)</text>
    <text x="30" y="229">1. Siswa yang sakit wajib menyertakan Surat Keterangan Dokter atau surat resmi yang ditandatangani orang tua/wali.</text>
    <text x="30" y="246">2. Siswa yang tidak hadir tanpa keterangan sah dikategorikan Alfa dan dikenakan akumulasi 5 poin pelanggaran/hari.</text>
    <text x="30" y="263">3. Dilarang meninggalkan lingkungan sekolah selama jam pelajaran tanpa izin tertulis dari Guru Piket dan Guru Mapel.</text>

    <!-- BAB II -->
    <rect x="0" y="295" width="1040" height="24" fill="#f1f5f9" rx="4" />
    <text x="12" y="312" font-weight="bold" fill="#0f172a" font-size="13">BAB II : PAKAIAN SERAGAM SEKOLAH, ATRIBUT &amp; KERAPIAN DIRI</text>

    <text x="15" y="337" font-weight="bold">Pasal 4: Ketentuan Seragam Harian &amp; Praktik Bengkel</text>
    <text x="30" y="355">1. Senin &amp; Selasa : Kemeja putih rapi dimasukkan ke celana/rok abu-abu standar, berdasi, ikat pinggang berlogo SMK BM 1, sepatu hitam.</text>
    <text x="30" y="372">2. Rabu : Seragam Khas Identitas SMK Budi Murni 1 atau Seragam Pramuka Lengkap dengan setangan leher / kacu.</text>
    <text x="30" y="389">3. Kamis : Kemeja Batik Resmi Yayasan Budi Murni Jakarta dipadukan celana/rok abu-abu dan sepatu hitam bertali.</text>
    <text x="30" y="406">4. Jumat : Busana Muslim / Kemeja Koko Putih sopan rapi dengan celana panjang abu-abu / busana keagamaan santun.</text>
    <text x="30" y="423">5. Praktik Bengkel/Lab : Seluruh siswa (TKJ, TKR, TITL, TBSM) WAJIB memakai Baju Wearpack Kejuruan dan Safety Shoes.</text>

    <text x="15" y="447" font-weight="bold">Pasal 5: Standar Kerapian Rambut &amp; Penampilan</text>
    <text x="30" y="465">1. Siswa Putra : Rambut dipotong rapi standar 3-2-1 cm, tidak menutupi daun telinga/kerah, dilarang dicat warna/model punk/skin.</text>
    <text x="30" y="482">2. Siswa Putra dilarang mengenakan tindik, anting, kalung rantai, gelang logam, bertato, atau memelihara kuku panjang.</text>
    <text x="30" y="499">3. Siswa Putri : Mengenakan jilbab putih polos menutup dada (bagi muslimah), rambut disisir rapi dan dilarang make-up mencolok.</text>

    <!-- BAB III -->
    <rect x="0" y="530" width="1040" height="24" fill="#f1f5f9" rx="4" />
    <text x="12" y="547" font-weight="bold" fill="#0f172a" font-size="13">BAB III : ETIKA, BUDAYA INDUSTRI 5S &amp; PEMELIHARAAN SARPRAS</text>

    <text x="15" y="572" font-weight="bold">Pasal 6: Pembiasaan Karakter &amp; Budaya Kerja 5S / 5R</text>
    <text x="30" y="590">1. Menjunjung tinggi budaya 5S: Senyum, Salam, Sapa, Sopan, dan Santun terhadap Guru, Karyawan, Tamu, dan sesama teman.</text>
    <text x="30" y="607">2. Menerapkan budaya industri 5R: Ringkas, Rapi, Resik, Rawat, dan Rajin di seluruh ruang kelas, lab komputer, dan bengkel praktik.</text>
    <text x="30" y="624">3. Wajib menjaga kebersihan lingkungan sekolah, membuang sampah pada tempatnya, dan merawat fasilitas milik sekolah bersama.</text>
    <text x="30" y="641">4. Kerusakan sarana/prasarana yang disebabkan oleh kelalaian atau kesengajaan siswa wajib diganti oleh yang bersangkutan.</text>
  </g>

  <!-- OFFICIAL FOOTER & STAMP (PAGE 1) -->
  <g transform="translate(80, 1420)">
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#cbd5e1" stroke-width="1" />
    <text x="0" y="25" font-size="11" fill="#64748b" font-style="italic">* Lanjutan Bab IV (Larangan Keras), Bab V (Sistem Poin &amp; Sanksi), dan Pengesahan tertera pada Lembar 2.</text>
    <text x="940" y="25" font-size="11" font-weight="bold" fill="#475569">Halaman 1 dari 2</text>
    
    <!-- Watermark Stamp Preview -->
    <g transform="translate(760, 45)">
      <circle cx="100" cy="70" r="58" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3" opacity="0.8" />
      <text x="100" y="58" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle" font-family="'Arial', sans-serif">SMK BUDI MURNI 1</text>
      <text x="100" y="74" font-size="13" font-weight="900" fill="#dc2626" text-anchor="middle" font-family="'Arial', sans-serif">OFFICIAL</text>
      <text x="100" y="90" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle" font-family="'Arial', sans-serif">DISIPLIN &amp; TERTIB</text>
    </g>

    <!-- Sign Preview -->
    <g transform="translate(100, 50)">
      <text x="0" y="20" font-size="13" fill="#1e293b">Mengetahui &amp; Menyetujui,</text>
      <text x="0" y="38" font-size="13" font-weight="bold" fill="#1e293b">Kepala SMK Budi Murni 1 Jakarta</text>
      <text x="0" y="110" font-size="13" font-weight="bold" fill="#0f172a" text-decoration="underline">Budiman Sitorus, S.E.</text>
      <text x="0" y="125" font-size="11" fill="#475569">NIP/NRK : 19780512.BM1.001</text>
    </g>
  </g>
</svg>
`;

// Lembar 2 SVG: Larangan Keras, Sistem Poin Pelanggaran, Mekanisme Sanksi & Pengesahan
const svgLembar2 = `
<svg width="1200" height="1700" viewBox="0 0 1200 1700" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; font-family: 'Times New Roman', Times, serif;">
  <!-- Paper Background with subtle texture effect -->
  <rect width="1200" height="1700" fill="#fdfbf7" />
  <rect x="30" y="30" width="1140" height="1640" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" rx="4" />
  
  <!-- Outer Document Border -->
  <rect x="45" y="45" width="1110" height="1610" fill="none" stroke="#1e293b" stroke-width="3" />
  <rect x="52" y="52" width="1096" height="1596" fill="none" stroke="#64748b" stroke-width="1" />

  <!-- KOP SURAT / LETTERHEAD -->
  <g transform="translate(60, 65)">
    <text x="540" y="30" font-size="19" font-weight="bold" fill="#0f172a" text-anchor="middle" font-family="'Times New Roman', serif" letter-spacing="1">YAYASAN PENDIDIKAN BUDI MURNI JAKARTA</text>
    <text x="540" y="60" font-size="25" font-weight="900" fill="#b91c1c" text-anchor="middle" font-family="'Arial', sans-serif" letter-spacing="1.5">SMK BUDI MURNI 1 JAKARTA</text>
    <text x="540" y="85" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle" font-family="'Arial', sans-serif">STATUS : TERAKREDITASi "A" (UNGGUL) | NPSN : 20103714</text>
    <text x="540" y="105" font-size="12" fill="#334155" text-anchor="middle">PROGRAM KEAHLIAN: TKJ • TKR • TITL • TBSM</text>
    <line x1="10" y1="125" x2="1070" y2="125" stroke="#0f172a" stroke-width="3.5" />
    <line x1="10" y1="131" x2="1070" y2="131" stroke="#0f172a" stroke-width="1" />
  </g>

  <!-- TITLE -->
  <g transform="translate(60, 210)">
    <rect x="180" y="0" width="720" height="42" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5" rx="8" />
    <text x="540" y="26" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle" font-family="'Arial', sans-serif" letter-spacing="1">SISTEM POIN PELANGGARAN &amp; SANKSI SISWA (LEMBAR 2)</text>
    <text x="540" y="58" font-size="12" fill="#64748b" text-anchor="middle" font-style="italic">Lampiran Keputusan Kepala SMK Budi Murni 1 Jakarta Tahun Ajaran 2026/2027</text>
  </g>

  <!-- CONTENT ARTICLES (BAB IV - BAB VI) -->
  <g transform="translate(80, 285)" font-size="12" fill="#1e293b" font-family="'Times New Roman', serif">
    
    <!-- BAB IV -->
    <rect x="0" y="0" width="1040" height="24" fill="#fee2e2" rx="4" stroke="#fca5a5" />
    <text x="12" y="17" font-weight="bold" fill="#991b1b" font-size="13">BAB IV : LARANGAN KERAS BAGI SELURUH PESERTA DIDIK</text>
    
    <text x="15" y="40" font-weight="bold">Pasal 7: Larangan Kategori Berat &amp; Fatal</text>
    <text x="30" y="57">1. Dilarang membawa, mengisap rokok / rokok elektrik (vape / pod) di dalam maupun di sekitar radius 200m lingkungan sekolah.</text>
    <text x="30" y="74">2. Dilarang membawa, mengonsumsi, atau mengedarkan MIRAS, NARKOBA, dan zat adiktif berbahaya lainnya.</text>
    <text x="30" y="91">3. Dilarang membawa senjata tajam (sajam), senjata api, bahan peledak, atau benda berbahaya yang tidak terkait alat belajar.</text>
    <text x="30" y="108">4. Dilarang keras terlibat TAWURAN pelajar, geng motor liar, perundungan (Bullying fisik / verbal / siber), maupun tindakan asusila.</text>
    <text x="30" y="125">5. Dilarang melakukan tindak kriminal (pencurian, pemalakan/pemerasan, perjudian online/offline, perusakan fasilitas).</text>

    <!-- BAB V : TABEL POIN PELANGGARAN -->
    <rect x="0" y="150" width="1040" height="24" fill="#f1f5f9" rx="4" />
    <text x="12" y="167" font-weight="bold" fill="#0f172a" font-size="13">BAB V : TABEL SKOR POIN PELANGGARAN &amp; TAHAPAN SANKSI</text>

    <!-- Table Header -->
    <g transform="translate(10, 185)">
      <rect x="0" y="0" width="1020" height="28" fill="#1e293b" rx="3" />
      <text x="30" y="19" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">NO</text>
      <text x="400" y="19" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">BENTUK PELANGGARAN DISIPLIN / TATA TERTIB</text>
      <text x="820" y="19" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">KATEGORI</text>
      <text x="960" y="19" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">POIN</text>
      
      <!-- Row 1 -->
      <rect x="0" y="28" width="1020" height="22" fill="#ffffff" stroke="#e2e8f0" />
      <text x="30" y="44" font-size="11" fill="#334155" text-anchor="middle">1</text>
      <text x="60" y="44" font-size="11" fill="#1e293b">Terlambat masuk sekolah (setelah pukul 07.00 WIB)</text>
      <text x="820" y="44" font-size="10.5" fill="#3b82f6" text-anchor="middle" font-weight="bold">Ringan</text>
      <text x="960" y="44" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">5</text>

      <!-- Row 2 -->
      <rect x="0" y="50" width="1020" height="22" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="30" y="66" font-size="11" fill="#334155" text-anchor="middle">2</text>
      <text x="60" y="66" font-size="11" fill="#1e293b">Tidak mengenakan atribut seragam lengkap / baju dikeluarkan / sepatu tidak hitam</text>
      <text x="820" y="66" font-size="10.5" fill="#3b82f6" text-anchor="middle" font-weight="bold">Ringan</text>
      <text x="960" y="66" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">5</text>

      <!-- Row 3 -->
      <rect x="0" y="72" width="1020" height="22" fill="#ffffff" stroke="#e2e8f0" />
      <text x="30" y="88" font-size="11" fill="#334155" text-anchor="middle">3</text>
      <text x="60" y="88" font-size="11" fill="#1e293b">Rambut gondrong / tidak rapi / dicat warna-warni / tindik (putra)</text>
      <text x="820" y="88" font-size="10.5" fill="#f59e0b" text-anchor="middle" font-weight="bold">Sedang</text>
      <text x="960" y="88" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">10</text>

      <!-- Row 4 -->
      <rect x="0" y="94" width="1020" height="22" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="30" y="110" font-size="11" fill="#334155" text-anchor="middle">4</text>
      <text x="60" y="110" font-size="11" fill="#1e293b">Membolos jam pelajaran / keluar area sekolah tanpa izin piket</text>
      <text x="820" y="110" font-size="10.5" fill="#f59e0b" text-anchor="middle" font-weight="bold">Sedang</text>
      <text x="960" y="110" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">15</text>

      <!-- Row 5 -->
      <rect x="0" y="116" width="1020" height="22" fill="#ffffff" stroke="#e2e8f0" />
      <text x="30" y="132" font-size="11" fill="#334155" text-anchor="middle">5</text>
      <text x="60" y="132" font-size="11" fill="#1e293b">Merokok / vaping di lingkungan sekolah atau berseragam sekolah di luar</text>
      <text x="820" y="132" font-size="10.5" fill="#ea580c" text-anchor="middle" font-weight="bold">Berat</text>
      <text x="960" y="132" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">25</text>

      <!-- Row 6 -->
      <rect x="0" y="138" width="1020" height="22" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="30" y="154" font-size="11" fill="#334155" text-anchor="middle">6</text>
      <text x="60" y="154" font-size="11" fill="#1e293b">Membawa senjata tajam / benda berbahaya tanpa izin instruktur</text>
      <text x="820" y="154" font-size="10.5" fill="#dc2626" text-anchor="middle" font-weight="bold">Sangat Berat</text>
      <text x="960" y="154" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">50</text>

      <!-- Row 7 -->
      <rect x="0" y="160" width="1020" height="22" fill="#ffffff" stroke="#e2e8f0" />
      <text x="30" y="176" font-size="11" fill="#334155" text-anchor="middle">7</text>
      <text x="60" y="176" font-size="11" fill="#1e293b">Terlibat Tawuran antarpelajar / Geng Motor / Tindak Kriminal / Judi</text>
      <text x="820" y="176" font-size="10.5" fill="#991b1b" text-anchor="middle" font-weight="bold">FATAL</text>
      <text x="960" y="176" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">100</text>

      <!-- Row 8 -->
      <rect x="0" y="182" width="1020" height="22" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="30" y="198" font-size="11" fill="#334155" text-anchor="middle">8</text>
      <text x="60" y="198" font-size="11" fill="#1e293b">Membawa / mengedarkan / mengonsumsi NARKOBA &amp; Miras</text>
      <text x="820" y="198" font-size="10.5" fill="#991b1b" text-anchor="middle" font-weight="bold">FATAL</text>
      <text x="960" y="198" font-size="11" fill="#b91c1c" font-weight="bold" text-anchor="middle">100</text>
    </g>

    <!-- TAHAPAN SANKSI BERDASARKAN TOTAL AKUMULASI POIN -->
    <g transform="translate(0, 420)">
      <text x="15" y="15" font-weight="bold" font-size="12.5">Tahapan Sanksi Berdasarkan Akumulasi Poin (Per Tahun Ajaran):</text>
      <text x="30" y="34">• <tspan font-weight="bold">Poin 10 - 25 :</tspan> Teguran Lisan, pencatatan di Buku BK, dan pembinaan kedisiplinan oleh Wali Kelas.</text>
      <text x="30" y="52">• <tspan font-weight="bold">Poin 26 - 50 :</tspan> Surat Peringatan I (SP 1) dan Pemanggilan Orang Tua/Wali Murid ke sekolah oleh BK.</text>
      <text x="30" y="70">• <tspan font-weight="bold">Poin 51 - 75 :</tspan> Surat Peringatan II (SP 2), Skorsing 3 hari, dan perjanjian tertulis di atas materai Rp10.000.</text>
      <text x="30" y="88">• <tspan font-weight="bold">Poin 76 - 99 :</tspan> Surat Peringatan Terakhir (SP 3) dan Skorsing 1 minggu.</text>
      <text x="30" y="106">• <tspan font-weight="bold">Poin 100+ :</tspan> Dikembalikan secara resmi kepada Orang Tua/Wali Murid (Dikeluarkan dari SMK Budi Murni 1).</text>
    </g>

    <!-- BAB VI : PENUTUP & PENGESAHAN -->
    <rect x="0" y="560" width="1040" height="24" fill="#f1f5f9" rx="4" />
    <text x="12" y="577" font-weight="bold" fill="#0f172a" font-size="13">BAB VI : KETENTUAN PENUTUP &amp; PENGESAHAN</text>
    <text x="15" y="605">Tata tertib ini dibuat demi terwujudnya iklim belajar vokasi yang aman, kondusif, berprestasi, dan berkarakter.</text>
    <text x="15" y="622">Ditetapkan di Jakarta pada tanggal 14 Juli 2026 dan mengikat seluruh peserta didik SMK Budi Murni 1 Jakarta.</text>
  </g>

  <!-- PENGESAHAN LENGKAP DENGAN STEMPEL & TANDA TANGAN -->
  <g transform="translate(80, 1020)">
    <g transform="translate(100, 0)">
      <text x="0" y="0" font-size="13" fill="#1e293b">Mengetahui,</text>
      <text x="0" y="20" font-size="13" font-weight="bold" fill="#1e293b">Wakil Bidang Kesiswaan</text>
      <text x="0" y="100" font-size="13" font-weight="bold" fill="#0f172a" text-decoration="underline">Drs. Iwan Setiawan</text>
      <text x="0" y="116" font-size="11" fill="#475569">NIP : 19720415.BM1.004</text>
    </g>

    <g transform="translate(680, 0)">
      <text x="0" y="0" font-size="13" fill="#1e293b">Ditetapkan di: Jakarta</text>
      <text x="0" y="20" font-size="13" fill="#1e293b">Pada Tanggal: 14 Juli 2026</text>
      <text x="0" y="40" font-size="13" font-weight="bold" fill="#1e293b">Kepala SMK Budi Murni 1 Jakarta</text>
      
      <!-- Real Stempel Stamped Graphic -->
      <g transform="translate(30, 20)">
        <circle cx="80" cy="55" r="52" fill="none" stroke="#dc2626" stroke-width="2.5" opacity="0.85" />
        <circle cx="80" cy="55" r="48" fill="none" stroke="#dc2626" stroke-width="1" opacity="0.85" />
        <text x="80" y="38" font-size="9.5" font-weight="bold" fill="#dc2626" text-anchor="middle" font-family="'Arial', sans-serif">YAYASAN BUDI MURNI</text>
        <text x="80" y="58" font-size="13" font-weight="900" fill="#dc2626" text-anchor="middle" font-family="'Arial', sans-serif">SMK BM 1</text>
        <text x="80" y="74" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle" font-family="'Arial', sans-serif">JAKARTA TIMUR</text>
      </g>

      <text x="0" y="120" font-size="13" font-weight="bold" fill="#0f172a" text-decoration="underline">Budiman Sitorus, S.E.</text>
      <text x="0" y="136" font-size="11" fill="#475569">NIP/NRK : 19780512.BM1.001</text>
    </g>
  </g>

  <!-- BOTTOM FOOTER (PAGE 2) -->
  <g transform="translate(80, 1580)">
    <line x1="0" y1="0" x2="1040" y2="0" stroke="#cbd5e1" stroke-width="1" />
    <text x="0" y="25" font-size="11" fill="#64748b" font-style="italic">SMK Budi Murni 1 Jakarta - Dokumen Resmi Tata Tertib Kesiswaan TP 2026/2027</text>
    <text x="940" y="25" font-size="11" font-weight="bold" fill="#475569">Halaman 2 dari 2</text>
  </g>
</svg>
`;

async function generate() {
  console.log('Generating Tata Tertib images...');
  
  // Write SVG files
  fs.writeFileSync(path.join(outputDir, 'tata-tertib-1.svg'), svgLembar1);
  fs.writeFileSync(path.join(outputDir, 'tata-tertib-2.svg'), svgLembar2);
  
  // Convert SVGs to high-res JPG
  await sharp(Buffer.from(svgLembar1))
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'tata-tertib-1.jpg'));
    
  await sharp(Buffer.from(svgLembar2))
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'tata-tertib-2.jpg'));
    
  console.log('Generated tata-tertib-1.jpg and tata-tertib-2.jpg successfully!');
}

generate().catch(console.error);
