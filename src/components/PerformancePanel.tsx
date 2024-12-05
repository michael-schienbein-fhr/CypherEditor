import React from 'react';
import { Clock, Cpu } from 'lucide-react';
import { analyzePerformance } from '../utils/performanceAnalyzer';

interface PerformancePanelProps {
  query: string;
}

export function PerformancePanel({ query }: PerformancePanelProps) {
  const performance = analyzePerformance(query);
  
  return (
    <div className="bg-[#2a2a3e] p-4 rounded-lg border border-[#4a148c] mb-4">
      <h4 className="text-lg font-medium text-[#01cdfe] mb-3">Performance Analysis</h4>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-[#ff71ce]" />
          <span className="text-[#e0e0ff]">Complexity: </span>
          <span className={`font-medium ${performance.complexity === 'High' ? 'text-[#ff71ce]' : 'text-[#05ffa1]'}`}>
            {performance.complexity}
          </span>
        </div>
        {performance.suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-start gap-2 text-[#b967ff] ml-6">
            <Cpu size={16} className="mt-1" />
            <span>{suggestion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}