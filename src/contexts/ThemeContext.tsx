import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  accentHover: string;
  success: string;
  successHover: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (newColors: Partial<ThemeColors>) => void;
  resetColors: () => void;
}

const defaultColors: ThemeColors = {
  primary: '#152b47',
  primaryHover: '#0d1b2f',
  secondary: '#152b47',
  accent: '#152b47',
  accentHover: '#0d1b2f',
  success: '#10b981',
  successHover: '#059669',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(() => {
    const saved = localStorage.getItem('themeColors');
    return saved ? JSON.parse(saved) : defaultColors;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-accent-hover', colors.accentHover);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-success-hover', colors.successHover);

    localStorage.setItem('themeColors', JSON.stringify(colors));
  }, [colors]);

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors(prev => ({ ...prev, ...newColors }));
  };

  const resetColors = () => {
    setColors(defaultColors);
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors, resetColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
