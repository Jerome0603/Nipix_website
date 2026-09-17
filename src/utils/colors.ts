/**
 * Nipix Technology Color System - #087FF8 Primary Palette
 * Centralized color constants for consistent theming across the application
 */

export const COLORS = {
  // Primary Blue Palette
  PRIMARY_BLUE: '#087FF8',
  PRIMARY_BLUE_DARK: '#065FCC',
  PRIMARY_BLUE_LIGHT: '#D9EBFF',
  PRIMARY_BLUE_ULTRA_LIGHT: '#F1F8FF',
  PRIMARY_BLUE_HOVER: '#066EE2',
  PRIMARY_BLUE_FOCUS: '#5BB0FF',
  
  // Accent Blue Palette
  ACCENT_BLUE: '#0CA2FF',
  ACCENT_BLUE_LIGHT: '#72C7FF',
  ACCENT_BLUE_DARK: '#0054A6',
  
  // Neutral Colors
  WHITE: '#FFFFFF',
  LIGHT_GRAY: '#F5F7FA',
  MID_GRAY: '#D9DEE5',
  DARK_TEXT: '#1A1A1A',
  MUTED_TEXT: '#5A5A5A',
  DARK_NAVY: '#003B78',
  
  // Glass Effects
  GLASS_BG: 'rgba(255, 255, 255, 0.35)',
  GLASS_BORDER: 'rgba(255, 255, 255, 0.6)',
} as const;

/**
 * Tailwind class mappings for the new color system
 */
export const COLOR_CLASSES = {
  // Text Colors
  TEXT_PRIMARY: 'text-[#087FF8]',
  TEXT_PRIMARY_DARK: 'text-[#065FCC]',
  TEXT_PRIMARY_LIGHT: 'text-[#D9EBFF]',
  TEXT_ACCENT: 'text-[#0CA2FF]',
  TEXT_DARK: 'text-[#1A1A1A]',
  TEXT_MUTED: 'text-[#5A5A5A]',
  TEXT_NAVY: 'text-[#003B78]',
  TEXT_WHITE: 'text-white',
  
  // Background Colors
  BG_PRIMARY: 'bg-[#087FF8]',
  BG_PRIMARY_DARK: 'bg-[#065FCC]',
  BG_PRIMARY_LIGHT: 'bg-[#D9EBFF]',
  BG_PRIMARY_ULTRA_LIGHT: 'bg-[#F1F8FF]',
  BG_PRIMARY_HOVER: 'bg-[#066EE2]',
  BG_ACCENT: 'bg-[#0CA2FF]',
  BG_ACCENT_LIGHT: 'bg-[#72C7FF]',
  BG_ACCENT_DARK: 'bg-[#0054A6]',
  BG_WHITE: 'bg-white',
  BG_LIGHT_GRAY: 'bg-[#F5F7FA]',
  BG_MID_GRAY: 'bg-[#D9DEE5]',
  
  // Hover States
  HOVER_BG_PRIMARY: 'hover:bg-[#087FF8]',
  HOVER_BG_PRIMARY_HOVER: 'hover:bg-[#066EE2]',
  HOVER_BG_PRIMARY_DARK: 'hover:bg-[#065FCC]',
  HOVER_BG_PRIMARY_LIGHT: 'hover:bg-[#D9EBFF]',
  HOVER_TEXT_PRIMARY: 'hover:text-[#087FF8]',
  HOVER_TEXT_PRIMARY_HOVER: 'hover:text-[#066EE2]',
  HOVER_TEXT_PRIMARY_DARK: 'hover:text-[#065FCC]',
  
  // Border Colors
  BORDER_PRIMARY: 'border-[#087FF8]',
  BORDER_PRIMARY_LIGHT: 'border-[#D9EBFF]',
  BORDER_PRIMARY_FOCUS: 'border-[#5BB0FF]',
  BORDER_ACCENT: 'border-[#0CA2FF]',
  BORDER_ACCENT_LIGHT: 'border-[#72C7FF]',
  BORDER_MID_GRAY: 'border-[#D9DEE5]',
  
  // Focus States
  FOCUS_RING_PRIMARY: 'focus:ring-[#5BB0FF]',
  FOCUS_BORDER_PRIMARY: 'focus:border-[#087FF8]',
  
  // Gradients
  GRADIENT_PRIMARY: 'from-[#087FF8] to-[#5BB0FF]',
  GRADIENT_ACCENT: 'from-[#0CA2FF] to-[#72C7FF]',
  GRADIENT_DARK: 'from-[#065FCC] to-[#087FF8]',
} as const;

/**
 * Gradient definitions
 */
export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #087FF8 0%, #5BB0FF 100%)',
  ACCENT: 'linear-gradient(135deg, #0CA2FF 0%, #72C7FF 100%)',
  DARK: 'linear-gradient(135deg, #065FCC 0%, #087FF8 100%)',
} as const;

export default COLORS;
