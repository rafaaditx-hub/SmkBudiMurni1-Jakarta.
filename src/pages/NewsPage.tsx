import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Search, Sparkles, Clock, Newspaper, Radio, Bell } from 'lucide-react';
import { NEWS_ARTICLES, NewsItem } from '../data/schoolData';

export const NewsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = ['ALL', 'Hari Nasional', 'Kependidikan', 'Hari Raya', 'Pengumuman', 'PPDB'];

  const filteredNews = NEWS_ARTICLES.filter((item) => {
    const matchCat = filterCategory === 'ALL' || item.category === filterCategory;
    const matchSearch = !search || 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
          Pusat Informasi & Publikasi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Berita & Pengumuman Sekolah
        </h1>
        <p className="text-xs text-slate-500">
          Informasi resmi kegiatan akademik, kemitraan industri, prestasi siswa, dan agenda SMK Budi Murni 1.
        </p>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200">
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat === 'ALL' ? 'Semua' : cat}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Cari berita atau agenda..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/gedung-sekolah.jpg';
                }}
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                {news.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Calendar className="w-3 h-3" />
                  <span>{news.date}</span>
                  <span>•</span>
                  <span>{news.author}</span>
                </div>

                <h2 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 hover:text-blue-600 transition-colors">
                  {news.title}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {news.summary}
                </p>
              </div>

              <button
                id={`btn-open-article-${news.id}`}
                onClick={() => setSelectedArticle(news)}
                className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 text-left"
              >
                <span>Baca Artikel Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* COMING SOON SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-xl relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMING SOON</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Coming Soon: Pembuat Web Rafa Aditya Nugroho Sedang Menyiapkan Berita Terbaru Dalam Jangka Waktu Tertentu
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Informasi, artikel kegiatan sekolah, publikasi prestasi siswa, serta dokumentasi agenda SMK Budi Murni 1 Jakarta sedang dalam tahap penyusunan dan kurasi materi oleh pengembang web.
            </p>
          </div>
          <div className="shrink-0 px-4 py-2 bg-blue-600/30 border border-blue-400/30 rounded-2xl text-xs font-semibold text-blue-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Sedang Disiapkan</span>
          </div>
        </div>

        <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Nantikan Update Berita & Pengumuman Terbaru</p>
              <p className="text-[11px] text-slate-400">Liputan KBM, Uji Kompetensi Kejuruan (UKK), PPDB, dan prestasi kejuaraan siswa.</p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-xl">
            Rafa Aditya Nugroho • Web Developer
          </span>
        </div>
      </div>

      {/* ARTICLE DETAIL MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start border-b pb-3">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-md text-[10px] font-bold">
                  {selectedArticle.category}
                </span>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>Oleh: {selectedArticle.author}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>{selectedArticle.content}</p>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
