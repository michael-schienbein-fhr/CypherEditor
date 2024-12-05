import React from 'react';
import { Upload } from 'lucide-react';
import { ThemeToggle } from '../../layout/ThemeToggle';

interface EditorHeaderProps {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export function EditorHeader({ onFileUpload, isDark, onThemeToggle }: EditorHeaderProps) {
  return (
    <div className={`flex justify-between items-center p-4 ${
      isDark 
        ? 'bg-[#2a2a3e] border-[#4a148c]' 
        : 'bg-white border-gray-200'
    } border-b`}>
      <h2 className={`text-xl font-semibold ${
        isDark ? 'text-[#ff71ce]' : 'text-gray-800'
      }`}>Cypher Query Editor</h2>
      <div className="flex items-center gap-3">
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        <label className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer transition-colors text-sm ${
          isDark 
            ? 'bg-[#4a148c] text-white hover:bg-[#6a1b9a]' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
          <Upload size={16} />
          <span>Upload</span>
          <input
            type="file"
            accept=".cyp,.cypher,.cql"
            className="hidden"
            onChange={onFileUpload}
          />
        </label>
      </div>
    </div>
  );
}