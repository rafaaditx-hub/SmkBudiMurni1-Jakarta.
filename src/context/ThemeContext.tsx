import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemePreset = 
  | 'merah'              // Default: Merah Budi Murni
  | 'biru'               // Biru Bahari Klasik
  | 'gabung-merah-biru'  // Gabung / Dual: Merah & Biru
  | 'gabung-merah-emas'  // Gabung / Dual: Merah & Emas
  | 'emerald'            // Hijau Vokasi
  | 'ungu'               // Ungu Modern
  | 'custom';            // Custom user selection

export interface CustomThemeConfig {
  primary: string;
  primaryHover: string;
  secondary: string;
  name: string;
}

interface ThemeContextType {
  theme: ThemePreset;
  setTheme: (t: ThemePreset) => void;
  customColors: CustomThemeConfig;
  setCustomColors: (c: CustomThemeConfig) => void;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  toggleSettings: () => void;
}

const defaultCustomColors: CustomThemeConfig = {
  primary: '#dc2626',
  primaryHover: '#b91c1c',
  secondary: '#2563eb',
  name: 'Kombinasi Custom'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default is explicitly 'merah' as requested by the user
  const [theme, setThemeState] = useState<ThemePreset>(() => {
    const saved = localStorage.getItem('smk_theme_choice');
    if (saved && ['merah', 'biru', 'gabung-merah-biru', 'gabung-merah-emas', 'emerald', 'ungu', 'custom'].includes(saved)) {
      return saved as ThemePreset;
    }
    return 'merah';
  });

  const [customColors, setCustomColorsState] = useState<CustomThemeConfig>(() => {
    const saved = localStorage.getItem('smk_custom_colors');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultCustomColors;
      }
    }
    return defaultCustomColors;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const setTheme = (t: ThemePreset) => {
    setThemeState(t);
    localStorage.setItem('smk_theme_choice', t);
    applyThemeToDOM(t, customColors);
  };

  const setCustomColors = (c: CustomThemeConfig) => {
    setCustomColorsState(c);
    localStorage.setItem('smk_custom_colors', JSON.stringify(c));
    if (theme === 'custom') {
      applyThemeToDOM('custom', c);
    }
  };

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);
  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);

  const applyThemeToDOM = (t: ThemePreset, custom: CustomThemeConfig) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', t);

    if (t === 'custom') {
      root.style.setProperty('--theme-primary', custom.primary);
      root.style.setProperty('--theme-primary-hover', custom.primaryHover);
      root.style.setProperty('--theme-secondary', custom.secondary);
      root.style.setProperty('--theme-primary-light', `${custom.primary}15`);
      root.style.setProperty('--theme-primary-border', `${custom.primary}35`);
    } else if (t === 'merah') {
      root.style.setProperty('--theme-primary', '#dc2626');
      root.style.setProperty('--theme-primary-hover', '#b91c1c');
      root.style.setProperty('--theme-secondary', '#f59e0b');
      root.style.setProperty('--theme-primary-light', '#fef2f2');
      root.style.setProperty('--theme-primary-border', '#fecaca');
    } else if (t === 'biru') {
      root.style.setProperty('--theme-primary', '#2563eb');
      root.style.setProperty('--theme-primary-hover', '#1d4ed8');
      root.style.setProperty('--theme-secondary', '#10b981');
      root.style.setProperty('--theme-primary-light', '#eff6ff');
      root.style.setProperty('--theme-primary-border', '#bfdbfe');
    } else if (t === 'gabung-merah-biru') {
      root.style.setProperty('--theme-primary', '#dc2626');
      root.style.setProperty('--theme-primary-hover', '#b91c1c');
      root.style.setProperty('--theme-secondary', '#2563eb');
      root.style.setProperty('--theme-primary-light', '#fef2f2');
      root.style.setProperty('--theme-primary-border', '#bfdbfe');
    } else if (t === 'gabung-merah-emas') {
      root.style.setProperty('--theme-primary', '#dc2626');
      root.style.setProperty('--theme-primary-hover', '#b91c1c');
      root.style.setProperty('--theme-secondary', '#d97706');
      root.style.setProperty('--theme-primary-light', '#fef2f2');
      root.style.setProperty('--theme-primary-border', '#fef08a');
    } else if (t === 'emerald') {
      root.style.setProperty('--theme-primary', '#059669');
      root.style.setProperty('--theme-primary-hover', '#047857');
      root.style.setProperty('--theme-secondary', '#0284c7');
      root.style.setProperty('--theme-primary-light', '#ecfdf5');
      root.style.setProperty('--theme-primary-border', '#a7f3d0');
    } else if (t === 'ungu') {
      root.style.setProperty('--theme-primary', '#7c3aed');
      root.style.setProperty('--theme-primary-hover', '#6d28d9');
      root.style.setProperty('--theme-secondary', '#ec4899');
      root.style.setProperty('--theme-primary-light', '#f5f3ff');
      root.style.setProperty('--theme-primary-border', '#ddd6fe');
    }
  };

  useEffect(() => {
    applyThemeToDOM(theme, customColors);
  }, [theme, customColors]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        customColors,
        setCustomColors,
        isSettingsOpen,
        openSettings,
        closeSettings,
        toggleSettings
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
