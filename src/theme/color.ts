export const lightColors = {
  primary: '#4A2545',
  primaryContainer: '#EFE0EC',
  onPrimary: '#FFFFFF',
  secondary: '#FF6F61',
  secondaryContainer: '#FFE1DC',
  accent: '#F4B942',
  background: '#FBF7F2',
  surface: '#FFFFFF',
  textPrimary: '#2A1F28',
  textSecondary: '#8C7E88',
  border: '#E8DFE5',
  error: '#C0392B',
};

export const darkColors: typeof lightColors = {
  primary: '#EFE0EC',
  primaryContainer: '#4A2545',
  onPrimary: '#331A2F',
  secondary: '#FF8B7E',
  secondaryContainer: '#4A2545',
  accent: '#F4B942',
  background: '#1A1714',
  surface: '#24211E',
  textPrimary: '#E8E1E5',
  textSecondary: '#A89DA6',
  border: '#3D343A',
  error: '#E74C3C',
};

export type Colors = typeof lightColors;