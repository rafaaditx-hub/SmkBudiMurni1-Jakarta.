import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

app.use(express.json());

// Comprehensive School System Instruction for Gemini AI Agent
const SYSTEM_INSTRUCTION = `
Anda adalah "Budi Murni AI", Asisten Cerdas dan Agen AI Resmi dari SMK Budi Murni 1 Jakarta Timur.
Tugas Anda adalah melayani pertanyaan dari calon siswa, murid, orang tua, guru, alumni, serta masyarakat umum mengenai seputar sekolah SMK Budi Murni 1 maupun topik-topik umum (pelajaran, sains, teknologi, otomotif, jaringan komputer, kelistrikan, persiapan karir, dll).

Karakter & Gaya Komunikasi:
- Ramah, sopan, informatif, profesional, berwibawa, dan membakar semangat vokasi (SMK Bisa, SMK Hebat, Siap Kerja, Santun, Mandiri, Kreatif).
- Menggunakan Bahasa Indonesia yang baik dan terstruktur rapi dengan poin-poin yang mudah dibaca.
- Selalu siap menjawab baik pertanyaan spesifik sekolah maupun pertanyaan umum lainnya (pembelajaran matematika, fisika, informatika, coding, otomotif, bimbingan karir, dll).

DATA LENGKAP RESMI SMK BUDI MURNI 1 JAKARTA:
1. IDENTITAS SEKOLAH:
   - Nama: SMK Budi Murni 1 Jakarta
   - Yayasan: Yayasan Pendidikan Budi Murni Jakarta (Berdiri sejak 1978)
   - Akreditasi: A (Unggul) dari BAN-S/M
   - NPSN: 20103714 | Status: Swasta Terakreditasi A
   - Kepala Sekolah: Budiman Sitorus, S.E.
   - Wakil Kurikulum: Wirvan Rizon, S.Kom.
   - Wakil Kesiswaan: Drs. Iwan Setiawan
   - Alamat: Jl. Puri Kembangan No. 2, Kedoya Selatan, Kebon Jeruk, Jakarta Barat 11520 (Wilayah Jakarta Timur / Barat)
   - Telepon: (021) 5816982 / (021) 8612345
   - WhatsApp CS Resmi: 0812-8901-2345 / 0813-8899-7711
   - Email: info@smkbudimurni1.sch.id / ppdb@smkbudimurni1.sch.id
   - Jam Operasional: Senin - Jumat, 06.45 - 16.00 WIB

2. PROGRAM KEAHLIAN / JURUSAN UNGGULAN (4 JURUSAN):
   a. Teknik Komputer dan Jaringan (TKJ):
      - Fokus: Instalasi Jaringan LAN/WAN, Fiber Optic, Konfigurasi Router MikroTik & Cisco, Server Linux & Windows, Cloud Computing, Cyber Security, IoT, dan Web Dasar.
      - Sertifikasi: MikroTik MTCNA, Cisco CCNA, BNSP Teknisi Jaringan Muda.
      - Karir: Network Engineer, System Administrator, Cloud Specialist, IT Support.
   b. Teknik Kendaraan Ringan (TKR):
      - Fokus: Engine Overhaul Mobil Bensin & Diesel, Sistem Injeksi Bahan Bakar (EFI/Common Rail), Sistem Kelistrikan Bodi & ECU, Transmisi Manual & Otomatis, Chasis, Spooring Balancing, AC Mobil.
      - Sertifikasi: BNSP Otomotif Roda 4, Astra Daihatsu/Toyota Skill Standard.
      - Karir: Teknisi Bengkel Resmi Mobil, Service Advisor, Quality Control Otomotif.
   c. Teknik Instalasi Tenaga Listrik (TITL):
      - Fokus: Instalasi Penerangan Bangunan, Instalasi Tenaga Motor Listrik 3 Fasa, Programmable Logic Controller (PLC Siemens/Omron), Smart Home System, Perakitan Panel Listrik Industri, K3 Kelistrikan.
      - Sertifikasi: Sertifikasi Kompetensi Ketenagalistrikan (SKKNI/BNSP), Ahli K3 Listrik.
      - Karir: Teknisi Listrik Industri, Maintenance Electrician, Teknisi Panel & PLC.
   d. Teknik dan Bisnis Sepeda Motor (TBSM):
      - Fokus: Tune-up Motor Injeksi (PGM-FI, YM-JET FI), Perawatan Sistem CVT Motor Matic, Sistem Pengereman ABS, Kelistrikan Motor, Troubleshooting Sensor ECU, Manajemen Wirausaha Bengkel Motor.
      - Sertifikasi: Standar Honda AHM Level 1-2, BNSP Otomotif Roda 2.
      - Karir: Mekanik Bengkel Resmi Honda/Yamaha, Kepala Regu Bengkel, Wirausaha Bengkel Mandiri.

3. INFORMASI PPDB TAHUN PELAJARAN 2026/2027:
   - Gelombang 1: Dibuka 2 Januari 2026 - 31 Maret 2026 (Potongan Biaya Gedung s.d. 50% & Gratis SPP Bulan Pertama)
   - Gelombang 2: Dibuka 1 April 2026 - 30 Juni 2026
   - Gelombang 3: Dibuka 1 Juli 2026 - 15 Juli 2026 (Selama kuota masih tersedia)
   - Syarat Pendaftaran:
     1. Formulir Pendaftaran online / cetak
     2. Fotokopi Ijazah / SKL SMP/MTs (legalisir 2 lembar)
     3. Fotokopi Kartu Keluarga (KK) & Akta Kelahiran
     4. Fotokopi Rapor SMP semester 1-5
     5. Pasfoto 3x4 (4 lembar, latar merah/biru)
     6. Fotokopi KIP / KJP Plus / KKS (jika ada untuk beasiswa)
     7. Lolos Tes Kesehatan (Bebas Buta Warna untuk TKJ/TITL/TKR/TBSM, Tidak Bertato & Tidak Bertindik bagi Putra)
   - Biaya & Beasiswa:
     - Tersedia Beasiswa Prestasi Akademik / Non-Akademik (Juara 1-3 Bebas SPP 6-12 bulan)
     - Beasiswa Yatim / Dhuafa Binaan Yayasan Budi Murni

4. TATA TERTIB SEKOLAH (RESMI):
   - Bel masuk: 06.45 WIB. Pintu gerbang ditutup pukul 07.00 WIB.
   - Pakaian Seragam:
     * Senin-Selasa: Putih Abu-abu berdasi, ikat pinggang berlogo, sepatu hitam, kaus kaki putih.
     * Rabu: Seragam Identitas SMK Budi Murni 1 / Pramuka Lengkap.
     * Kamis: Batik Yayasan Budi Murni Jakarta & celana/rok abu-abu.
     * Jumat: Baju Muslim / Kemeja Koko Putih sopan rapi / busana keagamaan santun.
     * Praktik Bengkel: Wajib memakai Baju Wearpack/Katelpak dan Sepatu Keselamatan (Safety Shoes).
   - Standar Rambut Putra: Potongan rapi 3-2-1 cm, tidak menutupi daun telinga atau kerah baju, dilarang diwarnai.
   - Sistem Poin Pelanggaran:
     * Terlambat: 5 poin
     * Seragam tidak lengkap: 5 poin
     * Rambut tidak rapi/tindik (putra): 10 poin
     * Membolos / keluar tanpa izin: 15 poin
     * Merokok / Vape: 25 poin (SP 1)
     * Membawa Senjata Tajam: 50 poin (SP 2 & Skorsing)
     * Tawuran / Geng Motor / Narkoba / Miras / Kriminal: 100 poin (Dikembalikan ke Orang Tua / Dikeluarkan).

5. TKA KEMENDIKDASMEN:
   - Tes Kemampuan Akademik resmi Kemendikdasmen RI dapat diakses langsung pada tautan resmi: https://tka.kemendikdasmen.go.id/
   - Berdasarkan Permendikdasmen No. 9 Tahun 2025 sebagai tolok ukur literasi, numerasi terapan, dan kejuruan nasional.

6. BKK (BURSA KERJA KHUSUS) & ALUMNI:
   - Menyalurkan lulusan ke industri mitra terkemuka: PT Astra Honda Motor, PT Telkom Indonesia, PT PLN Persero, PT Toyota Astra Motor (Auto2000), PT Denso Indonesia, PT Komatsu, PT Epson, dll.
   - Keterserapan alumni mencapai 89% (Bekerja 72%, Melanjutkan Kuliah 12%, Berwirausaha 5%).

7. FASILITAS & SARANA PRASARANA:
   - 4 Bengkel Praktik Kejuruan Terstandar Industri
   - 3 Laboratorium Komputer Ber-AC dengan koneksi Fiber Optic Dedicated
   - Bengkel Kelistrikan & PLC Automation
   - Lapangan Olahraga Futsal, Basket, dan Voli
   - Perpustakaan Digital & Ruang Baca Nyaman
   - Masjid Sekolah Budi Murni
   - Ruang Pusat Bursa Kerja Khusus (BKK) & Konseling Karir

Jika ditanya pertanyaan umum di luar sekolah (seperti rumus matematika, materi pelajaran, tips belajar, pemrograman, sains, atau motivasi), jawablah dengan cerdas, lengkap, jelas, dan edukatif sambil tetap memberikan sentuhan inspiratif untuk siswa SMK.
`;

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (err) {
      console.warn('Gemini API init notice:', err);
    }
  }
  return aiClient;
}

// Fallback smart offline school knowledge responder
function generateSmartOfflineResponse(prompt: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('jurusan') || p.includes('program keahlian') || p.includes('tkj') || p.includes('tkr') || p.includes('titl') || p.includes('tbsm')) {
    return `SMK Budi Murni 1 Jakarta memiliki **4 Program Keahlian Unggulan** yang telah terakreditasi **"A" (Unggul)**:

1. **Teknik Komputer & Jaringan (TKJ)**
   • Fokus: Jaringan Komputer, Cisco, MikroTik, Fiber Optic, Server Linux, Cloud Computing & Cyber Security.
   • Peluang Karir: Network Engineer, System Administrator, IT Support, Cloud Specialist.

2. **Teknik Kendaraan Ringan (TKR)**
   • Fokus: Mesin Mobil Bensin & Diesel, Sistem Injeksi (EFI), Kelistrikan Bodi & ECU, Transmisi Matic/Manual, Spooring Balancing.
   • Peluang Karir: Teknisi Bengkel Resmi Mobil (Toyota, Daihatsu, Honda), Service Advisor.

3. **Teknik Instalasi Tenaga Listrik (TITL)**
   • Fokus: Instalasi Penerangan Gedung, Motor Listrik 3 Fasa, PLC (Siemens/Omron), Smart Home System, Perakitan Panel Industri.
   • Peluang Karir: Teknisi Listrik Industri, Teknisi PLC & Otomasi, Teknisi Panel PLN.

4. **Teknik & Bisnis Sepeda Motor (TBSM)**
   • Fokus: Perawatan Motor Injeksi PGM-FI, Sistem CVT Matic, Rem ABS, Kelistrikan Motor, Manajemen Bengkel Mandiri.
   • Peluang Karir: Mekanik Resmi AHASS / Yamaha, Wirausaha Bengkel Motor.

Apakah Anda ingin mengetahui lebih detail tentang salah satu jurusan di atas?`;
  }

  if (p.includes('ppdb') || p.includes('daftar') || p.includes('syarat') || p.includes('biaya') || p.includes('gelombang') || p.includes('masuk')) {
    return `📋 **Penerimaan Peserta Didik Baru (PPDB) SMK Budi Murni 1 TP 2026/2027**:

• **Status Pendaftaran:** Sedang DIBUKA (Gelombang 1)
• **Jadwal Gelombang 1:** 2 Januari 2026 - 31 Maret 2026 *(Dapatkan Potongan Biaya Gedung s.d. 50% & Gratis SPP Bulan Pertama)*
• **Gelombang 2:** 1 April 2026 - 30 Juni 2026

**Persyaratan Berkas:**
1. Mengisi Formulir Pendaftaran (Online di website atau langsung di sekolah).
2. Fotokopi Ijazah / SKL SMP/MTs (legalisir 2 lembar).
3. Fotokopi Kartu Keluarga (KK) & Akta Kelahiran.
4. Fotokopi Rapor SMP Semester 1 - 5.
5. Pasfoto 3x4 (4 lembar).
6. Bebas buta warna dan tidak bertato/bertindik (putra).

Silakan klik menu **"PPDB"** di navigasi atas atau hubungi WhatsApp panitia di **0812-8901-2345** untuk konsultasi pendaftaran.`;
  }

  if (p.includes('tata tertib') || p.includes('aturan') || p.includes('poin') || p.includes('rambut') || p.includes('seragam') || p.includes('terlambat') || p.includes('sanksi')) {
    return `⚖️ **Ketentuan Pokok Tata Tertib SMK Budi Murni 1 Jakarta**:

1. **Waktu Kehadiran:**
   • Bel masuk: **06.45 WIB**. Pintu gerbang ditutup pukul **07.00 WIB**.
   • Hari belajar: Senin - Jumat (5 hari sekolah).

2. **Aturan Seragam:**
   • **Senin - Selasa:** Putih Abu-abu berdasi, ikat pinggang berlogo, sepatu hitam bertali.
   • **Rabu:** Seragam Khas Identitas SMK Budi Murni 1 / Pramuka Lengkap.
   • **Kamis:** Batik Resmi Yayasan Budi Murni & celana/rok abu-abu.
   • **Jumat:** Busana Muslim / Koko Putih rapi sopan.
   • **Praktik Bengkel:** Wajib memakai Wearpack kejuruan dan Safety Shoes.

3. **Kerapian Rambut Putra:** Standar potongan rapi 3-2-1 cm, tidak menutupi daun telinga atau kerah baju, dilarang diwarnai.

4. **Sistem Poin Pelanggaran:**
   • Terlambat: 5 poin
   • Tidak berseragam lengkap: 5 poin
   • Rambut gondrong / dicat: 10 poin
   • Merokok / Vape: 25 poin (SP 1)
   • Membawa Sajam: 50 poin (SP 2 & Skorsing)
   • Tawuran / Narkoba / Kriminal: 100 poin (Dikembalikan ke Orang Tua).

Anda juga dapat melihat foto dokumen resmi Tata Tertib Lembar 1 & 2 di menu **"Tata Tertib"**.`;
  }

  if (p.includes('tka') || p.includes('kemendikdasmen') || p.includes('ujian nasional') || p.includes('tes kemampuan')) {
    return `🎯 **Tes Kemampuan Akademik (TKA) Kemendikdasmen**:

Tes Kemampuan Akademik (TKA) merupakan asesmen terstandar nasional dari Kementerian Pendidikan Dasar dan Menengah RI (Kemendikdasmen) di bawah regulasi Permendikdasmen No. 9 Tahun 2025.

🌐 **Website Resmi TKA:**
Anda dapat langsung mengakses portal pusat TKA Kemendikdasmen di:
👉 **https://tka.kemendikdasmen.go.id/**

Di SMK Budi Murni 1, seluruh peserta didik dibekali bimbingan intensif literasi, numerasi terapan, dan kejuruan spesifik (TKJ, TKR, TITL, TBSM) untuk meraih hasil TKA terbaik.`;
  }

  if (p.includes('kepala sekolah') || p.includes('kepsek') || p.includes('kepala')) {
    return `Kepala Sekolah SMK Budi Murni 1 Jakarta adalah **Bapak Budiman Sitorus, S.E.** Beliau memimpin dengan visi mewujudkan lulusan vokasi yang Cerdas, Terampil, Berkarakter, dan Siap Kerja berstandar industri nasional maupun internasional.`;
  }

  if (p.includes('bkk') || p.includes('kerja') || p.includes('alumni') || p.includes('magang') || p.includes('pkl') || p.includes('mitra')) {
    return `🏢 **Bursa Kerja Khusus (BKK) SMK Budi Murni 1**:

BKK kami secara aktif menjembatani siswa dan alumni untuk magang (PKL) dan rekrutmen kerja langsung ke industri mitra, antara lain:
• PT Astra Honda Motor (AHM)
• PT Telkom Indonesia Tbk
• PT PLN (Persero)
• PT Toyota Astra Motor (Auto2000)
• PT Denso Indonesia
• PT Komatsu Indonesia
• PT Epson Indonesia

Tingkat keterserapan kerja lulusan kami mencapai **89%** langsung terserap di industri dan wirausaha mandiri!`;
  }

  if (p.includes('alamat') || p.includes('lokasi') || p.includes('kontak') || p.includes('telepon') || p.includes('nomor') || p.includes('wa')) {
    return `📍 **Alamat & Kontak Resmi SMK Budi Murni 1**:

• **Alamat:** Jl. Puri Kembangan No. 2, Kedoya Selatan, Kebon Jeruk, Jakarta Barat 11520
• **Telepon:** (021) 5816982
• **WhatsApp Resmi:** 0812-8901-2345 / 0813-8899-7711
• **Email:** info@smkbudimurni1.sch.id
• **Jam Layanan:** Senin - Jumat, 06.45 - 16.00 WIB

Ada yang bisa kami bantu lebih lanjut?`;
  }

  // General questions response
  return `Halo! Saya **Budi Murni AI**, asisten cerdas SMK Budi Murni 1 Jakarta. 

Pertanyaan Anda mengenai: *" ${prompt} "*

Saya siap membantu menjawab pertanyaan seputar sekolah (seperti **PPDB 2026/2027**, **4 Jurusan Kejuruan TKJ/TKR/TITL/TBSM**, **Tata Tertib & Poin Pelanggaran**, **Jadwal Pelajaran**, **BKK & Lowongan Kerja**, **Portal TKA Kemendikdasmen**) maupun topik umum seperti materi pelajaran, sains, teknologi koding, perbengkelan, dan tips karir.

Silakan pilih topik cepat di bawah atau ketikkan pertanyaan spesifik Anda!`;
}

// 1. API Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// 2. AI Chat Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Pesan (message) wajib diisi' });
    }

    const ai = getAiClient();

    if (ai) {
      try {
        // Format history for GoogleGenAI SDK
        const contents: any[] = [];
        
        if (Array.isArray(history)) {
          for (const item of history) {
            if (item.role === 'user' || item.role === 'model' || item.role === 'assistant') {
              contents.push({
                role: item.role === 'assistant' ? 'model' : item.role,
                parts: [{ text: item.content || item.text || '' }]
              });
            }
          }
        }

        // Add current user prompt
        contents.push({
          role: 'user',
          parts: [{ text: message }]
        });

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            maxOutputTokens: 1200,
          }
        });

        const text = response.text || '';
        if (text.trim()) {
          return res.json({ response: text, source: 'gemini-3.7-flash' });
        }
      } catch (geminiErr: any) {
        console.warn('Gemini API query fallback to smart engine:', geminiErr?.message || geminiErr);
      }
    }

    // Smart contextual fallback responder if Gemini key not set or quota exceeded
    const fallbackText = generateSmartOfflineResponse(message);
    return res.json({ response: fallbackText, source: 'smart-school-engine' });

  } catch (error: any) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Terjadi kendala pada server AI', 
      details: error?.message 
    });
  }
});

// 3. Vite Middleware (Dev vs Production)
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SMK Budi Murni 1 Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
