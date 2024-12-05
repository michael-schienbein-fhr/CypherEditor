import React from 'react';
import { BookOpen } from 'lucide-react';
import { queryTemplates } from '../utils/queryTemplates';

interface TemplatePanelProps {
  onSelectTemplate: (template: string) => void;
}

export function TemplatePanel({ onSelectTemplate }: TemplatePanelProps) {
  return (
    <div className="bg-[#2a2a3e] p-4 rounded-lg border border-[#4a148c]">
      <h4 className="text-lg font-medium text-[#01cdfe] mb-3">Query Templates</h4>
      <div className="grid gap-3">
        {queryTemplates.map((template, index) => (
          <button
            key={index}
            onClick={() => onSelectTemplate(template.query)}
            className="flex items-start gap-2 p-3 rounded bg-[#1a1a2e] hover:bg-[#2d2d4d] transition-colors text-left"
          >
            <BookOpen size={18} className="text-[#ff71ce] mt-1" />
            <div>
              <p className="text-[#e0e0ff] font-medium">{template.name}</p>
              <p className="text-[#b967ff] text-sm mt-1">{template.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}