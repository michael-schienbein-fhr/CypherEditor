import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-md transition-colors flex items-center gap-2 ${
        isDark 
          ? 'bg-[#2a2a3e] hover:bg-[#4a148c] text-[#e0e0ff]' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
      }`}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}