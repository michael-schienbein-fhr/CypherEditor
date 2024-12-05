import React, { useState } from 'react';
import { EditorHeader } from './EditorHeader';
import { CodeEditor } from './CodeEditor';

interface CypherEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function CypherEditor({ value, onChange }: CypherEditorProps) {
  const [isDark, setIsDark] = useState(true);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onChange(content);
    };
    reader.readAsText(file);
  };

  return (
    <div className={`h-full flex flex-col ${
      isDark ? 'bg-[#1a1a2e]' : 'bg-gray-50'
    } scroll-fade`}>
      <EditorHeader 
        onFileUpload={handleFileUpload}
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
      />
      <div className="flex-1 overflow-hidden">
        <CodeEditor 
          value={value} 
          onChange={onChange}
          isDark={isDark}
        />
      </div>
    </div>
  );
}