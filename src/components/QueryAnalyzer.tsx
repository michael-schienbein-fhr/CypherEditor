import React from 'react';
import { parseQuery } from '../utils/cypherParser';
import { ValidationPanel } from './ValidationPanel';
import { PerformancePanel } from './PerformancePanel';
import { TemplatePanel } from './TemplatePanel';

interface QueryAnalyzerProps {
  query: string;
  onQueryChange?: (query: string) => void;
}

export function QueryAnalyzer({ query, onQueryChange }: QueryAnalyzerProps) {
  const analysis = parseQuery(query);

  return (
    <div className="bg-[#1a1a2e] text-[#e0e0ff] p-6 rounded-lg h-full scroll-fade overflow-y-auto">
      <h3 className="text-2xl font-semibold mb-6 text-[#ff71ce]">Query Analysis</h3>
      
      <div className="space-y-6">
        <ValidationPanel query={query} />
        <PerformancePanel query={query} />
        
        <div>
          <h4 className="text-lg font-medium text-[#01cdfe] mb-4">Query Sections</h4>
          <div className="space-y-4">
            {analysis.sections.map((section, index) => (
              <div key={index} className="bg-[#2a2a3e] p-4 rounded-lg border border-[#4a148c]">
                <span className="text-[#ff71ce] font-semibold">{section.type}</span>
                <span className="text-[#b967ff] text-sm ml-3">Line {section.lineNumber}</span>
                <pre className="text-[#e0e0ff] mt-2 whitespace-pre-wrap font-mono text-sm">{section.content}</pre>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-[#01cdfe] mb-4">Parameters</h4>
          {analysis.parameters.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {analysis.parameters.map((param, index) => (
                <div key={index} className="bg-[#2a2a3e] p-3 rounded-lg border border-[#4a148c]">
                  <span className="text-[#05ffa1] font-mono">{param.name}</span>
                  <span className="text-[#b967ff] text-sm ml-2">Line {param.lineNumber}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#b967ff] italic">No parameters found</p>
          )}
        </div>

        <div>
          <h4 className="text-lg font-medium text-[#01cdfe] mb-4">Variables</h4>
          {analysis.variables.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {analysis.variables.map((variable, index) => (
                <span key={index} className="bg-[#2a2a3e] px-3 py-2 rounded-lg border border-[#4a148c] text-[#fffb96] font-mono">
                  {variable}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-[#b967ff] italic">No variables found</p>
          )}
        </div>

        <TemplatePanel onSelectTemplate={(template) => onQueryChange?.(template)} />
      </div>
    </div>
  );
}