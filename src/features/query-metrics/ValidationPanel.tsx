import { AlertCircle, CheckCircle } from 'lucide-react';
import { validateQuery } from '../../utils/queryValidator';

interface ValidationPanelProps {
  query: string;
}

export function ValidationPanel({ query }: ValidationPanelProps) {
  const validationResults = validateQuery(query);
  
  return (
    <div className="bg-[#2a2a3e] p-4 rounded-lg border border-[#4a148c] mb-4">
      <h4 className="text-lg font-medium text-[#01cdfe] mb-3">Validation</h4>
      {validationResults.errors.length === 0 ? (
        <div className="flex items-center text-[#05ffa1] gap-2">
          <CheckCircle size={18} />
          <span>Query is valid</span>
        </div>
      ) : (
        <div className="space-y-2">
          {validationResults.errors.map((error, index) => (
            <div key={index} className="flex items-start gap-2 text-[#ff71ce]">
              <AlertCircle size={18} className="mt-1" />
              <div>
                <p className="font-medium">Line {error.line}: {error.message}</p>
                {error.suggestion && (
                  <p className="text-sm text-[#b967ff] mt-1">{error.suggestion}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}