import React, { useState } from 'react';
import { 
  X, 
  Palette, 
  Check, 
  RotateCcw, 
  Sliders, 
  Sparkles, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { useTheme, ThemePreset } from '../context/ThemeContext';

export const ThemeSettingsModal: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    customColors, 
    setCustomColors, 
    isSettingsOpen, 
    closeSettings 
  } = useTheme();

  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');
  const [tempPrimary, setTempPrimary] = useState(customColors.primary);
  const [tempSecondary, setTempSecondary] = useState(customColors.secondary);

  if (!isSettingsOpen) return null;

  const presets: {
    id: ThemePreset;
    name: string;
    description: string;
    primaryColor: string;
    secondaryColor: string;
    badge?: string;
  }[] = [
    {
      id: 'merah',
      name: 'Merah Budi Murni (Default)',
      description: 'Warna identitas merah tegas, berani, dinamis, dan representasi semangat juang vokasi.',
      primaryColor: '#dc2626',
      secondaryColor: '#f59e0b',
      badge: 'Default Sekolah'
    },
    {
      id: 'biru',
      name: 'Biru Bahari Klasik',
      description: 'Nuansa biru navy berwibawa, mencerminkan ketenangan, teknologi, dan profesionalisme.',
      primaryColor: '#2563eb',
      secondaryColor: '#10b981'
    },
    {
      id: 'gabung-merah-biru',
      name: 'Kombinasi: Merah & Biru',
      description: 'Perpaduan seimbang antara energi merah dinamis dengan kedalaman aksen biru modern.',
      primaryColor: '#dc2626',
      secondaryColor: '#2563eb',
      badge: 'Dual Hybrid'
    },
    {
      id: 'gabung-merah-emas',
      name: 'Kombinasi: Merah & Emas',
      description: 'Aksen merah dipadukan dengan kilau emas prestisius (akreditasi A unggul).',
      primaryColor: '#dc2626',
      secondaryColor: '#d97706'
    },
    {
      id: 'emerald',
      name: 'Hijau Vokasi & Alam',
      description: 'Nuansa hijau zamrud segar, representasi kampus hijau, keteduhan, dan pertumbuhan.',
      primaryColor: '#059669',
      secondaryColor: '#0284c7'
    },
    {
      id: 'ungu',
      name: 'Ungu Elegan & Kreatif',
      description: 'Kombinasi ungu royal yang inovatif, elegan, dan estetik.',
      primaryColor: '#7c3aed',
      secondaryColor: '#ec4899'
    }
  ];

  const quickColorOptions = [
    { label: 'Merah Ruby', hex: '#dc2626' },
    { label: 'Biru Navy', hex: '#1d4ed8' },
    { label: 'Biru Royal', hex: '#2563eb' },
    { label: 'Hijau Emerald', hex: '#059669' },
    { label: 'Ungu Royal', hex: '#7c3aed' },
    { label: 'Oranye Senja', hex: '#ea580c' },
    { label: 'Kuning Emas', hex: '#d97706' },
    { label: 'Rose Pink', hex: '#e11d48' },
    { label: 'Teal Samudra', hex: '#0d9488' },
    { label: 'Hitam Slate', hex: '#1e293b' }
  ];

  const handleApplyCustom = () => {
    setCustomColors({
      primary: tempPrimary,
      primaryHover: tempPrimary,
      secondary: tempSecondary,
      name: 'Kombinasi Pilihan Saya'
    });
    setTheme('custom');
  };

  const handleResetToDefault = () => {
    setTheme('merah');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Pengaturan Tema & Warna
              </h3>
              <p className="text-xs text-slate-500">
                Pilih warna favorit Anda atau gabungkan warna sesuai selera
              </p>
            </div>
          </div>

          <button
            onClick={closeSettings}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Tutup Pengaturan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 pt-4 border-b border-slate-100 flex gap-4">
          <button
            onClick={() => setActiveTab('presets')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'presets'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Pilihan Tema Siap Pakai</span>
          </button>

          <button
            onClick={() => setActiveTab('custom')}
            className={`pb-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'custom'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Custom Gabung Sendiri</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {activeTab === 'presets' ? (
            <div className="space-y-3">
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>Klik tema di bawah untuk menerapkan langsung:</span>
                <span className="font-semibold text-slate-700">Aktif: <strong className="capitalize text-red-600">{theme}</strong></span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {presets.map((p) => {
                  const isSelected = theme === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setTheme(p.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group flex flex-col justify-between ${
                        isSelected 
                          ? 'border-red-500 bg-red-50/40 shadow-sm ring-2 ring-red-500/20' 
                          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/80'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            {/* Color Swatch Circles */}
                            <span 
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs inline-block" 
                              style={{ backgroundColor: p.primaryColor }}
                            />
                            <span 
                              className="w-5 h-5 rounded-full border border-black/10 shadow-xs inline-block -ml-2" 
                              style={{ backgroundColor: p.secondaryColor }}
                            />
                          </div>

                          {p.badge && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">
                              {p.badge}
                            </span>
                          )}

                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>

                        <h4 className="font-extrabold text-slate-900 text-sm">{p.name}</h4>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{p.description}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-mono text-[10px]">{p.primaryColor} • {p.secondaryColor}</span>
                        <span className={`font-bold ${isSelected ? 'text-red-600' : 'text-slate-600 group-hover:text-slate-900'}`}>
                          {isSelected ? 'Sedang Dipakai' : 'Pilih Tema'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Bebas Gabungkan Warna Apapun!</p>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    Anda dapat menggabungkan warna Primer (untuk tombol utama, logo, badge) dan warna Sekunder (untuk gradien hero dan aksen sekunder).
                  </p>
                </div>
              </div>

              {/* Color Picker 1: Warna Primer */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800">
                  1. Pilih Warna Utama (Primer):
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {quickColorOptions.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => setTempPrimary(c.hex)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                        tempPrimary === c.hex
                          ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full shadow-xs" style={{ backgroundColor: c.hex }} />
                      <span className="text-[10px] font-semibold text-slate-700 truncate w-full text-center">{c.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xs text-slate-500">Atau pilih kode hex manual:</span>
                  <input
                    type="color"
                    value={tempPrimary}
                    onChange={(e) => setTempPrimary(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border border-slate-300"
                  />
                  <input
                    type="text"
                    value={tempPrimary}
                    onChange={(e) => setTempPrimary(e.target.value)}
                    className="text-xs font-mono font-bold px-2 py-1 border border-slate-300 rounded-lg w-24"
                  />
                </div>
              </div>

              {/* Color Picker 2: Warna Sekunder / Aksen */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-800">
                  2. Pilih Warna Gabungan (Sekunder / Aksen):
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {quickColorOptions.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => setTempSecondary(c.hex)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                        tempSecondary === c.hex
                          ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full shadow-xs" style={{ backgroundColor: c.hex }} />
                      <span className="text-[10px] font-semibold text-slate-700 truncate w-full text-center">{c.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xs text-slate-500">Atau pilih kode hex manual:</span>
                  <input
                    type="color"
                    value={tempSecondary}
                    onChange={(e) => setTempSecondary(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border border-slate-300"
                  />
                  <input
                    type="text"
                    value={tempSecondary}
                    onChange={(e) => setTempSecondary(e.target.value)}
                    className="text-xs font-mono font-bold px-2 py-1 border border-slate-300 rounded-lg w-24"
                  />
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-[11px] font-bold text-slate-600 block">Pratinjau Tombol & Gradien Anda:</span>
                <div className="flex items-center gap-3">
                  <button
                    style={{ backgroundColor: tempPrimary }}
                    className="px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm"
                  >
                    Tombol Aksi Utama
                  </button>
                  <button
                    style={{ backgroundColor: `${tempPrimary}20`, color: tempPrimary, borderColor: `${tempPrimary}40` }}
                    className="px-4 py-2 rounded-xl text-xs font-bold border"
                  >
                    Tombol Sekunder
                  </button>
                  <div 
                    style={{ background: `linear-gradient(135deg, ${tempPrimary}, ${tempSecondary})` }}
                    className="h-8 flex-1 rounded-xl flex items-center justify-center text-white text-[10px] font-bold shadow-xs"
                  >
                    Gradien Gabungan
                  </div>
                </div>
              </div>

              <button
                onClick={handleApplyCustom}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Terapkan Kombinasi Warna Kustom Ini</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handleResetToDefault}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-red-700 hover:bg-red-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kembalikan ke Merah Default</span>
          </button>

          <button
            onClick={closeSettings}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Selesai
          </button>
        </div>

      </div>
    </div>
  );
};
