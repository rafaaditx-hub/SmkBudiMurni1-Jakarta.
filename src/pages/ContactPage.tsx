import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  HelpCircle,
  ChevronDown,
  Building2,
  FileCheck,
  Globe,
  UserCheck,
  Share2,
  ShieldAlert
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Informasi PPDB');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert('Mohon lengkapi nama, nomor WhatsApp, dan pesan Anda.');
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Kapan pendaftaran siswa baru (PPDB) TP 2026/2027 dibuka?',
      a: 'PPDB TP 2026/2027 Gelombang 1 telah dibuka mulai Agustus 2026 hingga kuota rombongan belajar terpenuhi. Pendaftaran dapat dilakukan online melalui Formulir Resmi Google Form atau langsung di Sekretariat PPDB Kampus Duren Sawit.'
    },
    {
      q: 'Di mana alamat lengkap kampus SMK BUDI MURNI 1 JAKARTA?',
      a: 'Kampus berlokasi di Jalan Duren Sawit Baru No.12 (atau Jl. Sawah Barat), RT.12/RW.11, Kelurahan Duren Sawit, Kecamatan Duren Sawit, Kota Adm. Jakarta Timur, DKI Jakarta 13440.'
    },
    {
      q: 'Apa saja 4 Program Keahlian di SMK Budi Murni 1?',
      a: '1. TKJ (Teknik Komputer dan Jaringan / TKI), 2. TKR (Teknik Kendaraan Ringan), 3. TITL (Teknik Instalasi Tenaga Listrik), 4. TBSM (Teknik dan Bisnis Sepeda Motor / TSM).'
    },
    {
      q: 'Apakah SMK Budi Murni 1 menerima KJP Plus / KIP?',
      a: 'Ya, SMK Budi Murni 1 melayani pembayaran administrasi pendidikan melalui Kartu Jakarta Pintar (KJP Plus) dan Program Indonesia Pintar (PIP/KIP).'
    },
    {
      q: 'Bagaimana prospek penyaluran kerja setelah lulus?',
      a: 'SMK Budi Murni 1 memiliki Bursa Kerja Khusus (BKK) resmi yang bekerjasama dengan lebih dari 65 mitra industri (seperti Astra Honda, Auto2000 Toyota, PT Telkom, PT PLN, Yamaha, Schneider Electric, dll.) untuk rekrutmen kerja langsung sebelum wisuda.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
          Layanan Informasi & Kontak Resmi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Kontak & Identitas Sekolah
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Hubungi kami untuk informasi pendaftaran PPDB, legalisir ijazah, kerjasama industri, dan layanan administrasi sekolah.
        </p>
      </div>

      {/* Identitas Satuan Pendidikan (Official School Registration Details) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Data Pokok Pendidikan (Dapodik / Kemendikdasmen)
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Identitas Satuan Pendidikan
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
            NPSN: {SCHOOL_INFO.npsn}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Nama Sekolah</span>
            <p className="font-bold text-white text-sm">{SCHOOL_INFO.name}</p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">NPSN</span>
            <p className="font-bold text-amber-400 text-sm font-mono">{SCHOOL_INFO.npsn}</p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Status & Jenjang Pendidikan</span>
            <p className="font-bold text-white text-sm">{SCHOOL_INFO.statusSekolah} • {SCHOOL_INFO.bentukPendidikan} ({SCHOOL_INFO.jenjangPendidikan})</p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Naungan Yayasan</span>
            <p className="font-bold text-white text-sm">{SCHOOL_INFO.foundation}</p>
            <span className="text-[10px] text-slate-400">NPYP: {SCHOOL_INFO.npyp}</span>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Kementerian Pembina</span>
            <p className="font-bold text-white text-sm">{SCHOOL_INFO.kementerianPembina}</p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">SK Izin Operasional & TMT</span>
            <p className="font-bold text-emerald-400 text-sm font-mono">{SCHOOL_INFO.skIzinOperasional}</p>
            <span className="text-[10px] text-slate-400">TMT: {SCHOOL_INFO.tmtSkOperasional}</span>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Alamat Lengkap</span>
            <p className="font-medium text-slate-200 text-xs leading-relaxed">{SCHOOL_INFO.address}</p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Wilayah Administratif</span>
            <p className="font-bold text-white text-xs">{SCHOOL_INFO.kelurahan}, {SCHOOL_INFO.kecamatan}</p>
            <p className="text-slate-300 text-xs">{SCHOOL_INFO.city}, {SCHOOL_INFO.province} {SCHOOL_INFO.postalCode}</p>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-slate-400">Operator Sekolah & Kepala Sekolah</span>
            <p className="font-bold text-blue-300 text-xs">Operator: {SCHOOL_INFO.operator}</p>
            <p className="font-medium text-slate-300 text-xs">Kepala Sekolah: {SCHOOL_INFO.headmaster}</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
            <h2 className="font-extrabold text-slate-900 text-lg border-b pb-3">Informasi Kontak & Lokasi</h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Alamat Sekolah</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{SCHOOL_INFO.address}</p>
                  <p className="text-blue-700 font-mono text-[11px] mt-1 font-semibold">Plus Code: {SCHOOL_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telepon & Fax</h4>
                  <p className="text-slate-700 font-semibold mt-0.5">Telepon: <a href={`tel:${SCHOOL_INFO.phone}`} className="text-blue-600 hover:underline">{SCHOOL_INFO.phone}</a></p>
                  <p className="text-slate-500">Fax: {SCHOOL_INFO.fax}</p>
                  <p className="text-emerald-700 font-semibold mt-0.5">WhatsApp CS: {SCHOOL_INFO.whatsappDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email & Website</h4>
                  <p className="text-slate-600 mt-0.5">Email: <a href={`mailto:${SCHOOL_INFO.email}`} className="text-blue-600 hover:underline">{SCHOOL_INFO.email}</a></p>
                  <p className="text-slate-500 mt-0.5">Website Lama: <a href={SCHOOL_INFO.oldWebsite} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">{SCHOOL_INFO.oldWebsite}</a></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Media Sosial Instagram</h4>
                  <p className="text-slate-600 mt-0.5">
                    <a href={SCHOOL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-semibold flex items-center gap-1">
                      <span>Instagram @smkbudimurni1</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Jam Pelayanan Tata Usaha</h4>
                  <p className="text-slate-600 mt-0.5">{SCHOOL_INFO.operationalHours}</p>
                  <p className="text-slate-400">Sabtu & Minggu: Libur / Kegiatan Ekstrakurikuler</p>
                </div>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="pt-2 space-y-2">
              <a
                href={SCHOOL_INFO.ppdbGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Formulir Pendaftaran PPDB Online</span>
              </a>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Halo%20Admin%20SMK%20Budi%20Murni%201,%20saya%20ingin%20konsultasi%20layanan%20sekolah`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat WhatsApp Admin Sekolah</span>
              </a>
            </div>

          </div>

        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1 border-b pb-3">
              <h2 className="font-extrabold text-slate-900 text-lg">Kirim Pesan / Pengaduan</h2>
              <p className="text-xs text-slate-500">Isi formulir di bawah ini dan staf tata usaha / humas kami akan merespons pesan Anda.</p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3 animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Pesan Anda Telah Terkirim!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Terima kasih <strong>{name}</strong>, tim humas SMK Budi Murni 1 Jakarta akan menghubungi Anda melalui kontak <strong>{phone}</strong> secepatnya.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nomor Telepon / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="08123456789 atau 021..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Email (Opsional)</label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Kategori Pertanyaan *</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Informasi PPDB">Informasi Pendaftaran PPDB 2026/2027</option>
                      <option value="Program Keahlian & Jurusan">Program Keahlian (TKJ, TITL, TBSM, TKR)</option>
                      <option value="Jadwal & Kurikulum">Jadwal Pelajaran & Kalender Akademik</option>
                      <option value="Kerjasama Industri / BKK">Kerjasama Industri / BKK & PKL</option>
                      <option value="Legalisir & Alumni">Legalisir Ijazah & Data Alumni</option>
                      <option value="Lainnya">Layanan Administrasi Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Pesan / Pertanyaan Anda *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda ketahui..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded Location Map Preview */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b pb-3">
          <div>
            <h2 className="font-extrabold text-slate-900 text-base">Lokasi Smk Budi Murni 1 Jakarta</h2>
            <p className="text-xs text-slate-500">{SCHOOL_INFO.address}</p>
            <p className="text-[11px] font-mono font-semibold text-blue-700 mt-0.5">Plus Code: {SCHOOL_INFO.plusCode}</p>
          </div>
          <a
            href={SCHOOL_INFO.googleMapsUrl || "https://maps.app.goo.gl/JqmDGzwPbekKcdxd6"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl flex items-center gap-1.5 hover:bg-blue-100 shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Buka di Google Maps</span>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden h-72 border border-slate-200 bg-slate-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2758151240375!2d106.91421457499039!3d-6.227318393760775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698cb9bf300001%3A0xa144c21e649ce459!2sSMK%20Budi%20Murni%201%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi SMK Budi Murni 1 Jakarta"
          />
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Bantuan & FAQ</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Pertanyaan yang Sering Diajukan</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

