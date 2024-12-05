interface ValidationError {
  line: number;
  message: string;
  suggestion?: string;
}

interface ValidationResult {
  errors: ValidationError[];
}

export function validateQuery(query: string): ValidationResult {
  const errors: ValidationError[] = [];
  const lines = query.split('\n');

  // Track multi-line comment state
  let inMultiLineComment = false;

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const trimmedLine = line.trim();

    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('//')) {
      return;
    }

    // Handle multi-line comments
    if (trimmedLine.includes('/*')) {
      inMultiLineComment = true;
      return;
    }
    if (trimmedLine.includes('*/')) {
      inMultiLineComment = false;
      return;
    }
    if (inMultiLineComment) {
      return;
    }

    // Check for unmatched parentheses
    let inString = false;
    let stringChar = '';
    let parenCount = 0;
    
    for (let i = 0; i < trimmedLine.length; i++) {
      const char = trimmedLine[i];
      
      // Handle strings
      if ((char === '"' || char === '\'' || char === '`') && 
          (i === 0 || trimmedLine[i - 1] !== '\\')) {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
        }
        continue;
      }
      
      if (!inString) {
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
    }

    if (parenCount !== 0) {
      errors.push({
        line: lineNumber,
        message: 'Unmatched parentheses',
        suggestion: 'Ensure all parentheses are properly closed'
      });
    }

    // Check for missing spaces after keywords
    const keywords = ['MATCH', 'WHERE', 'RETURN', 'WITH', 'CREATE', 'DELETE', 'SET', 'REMOVE', 'MERGE', 'OPTIONAL'];
    keywords.forEach(keyword => {
      if (new RegExp(`\\b${keyword}\\b[a-zA-Z]`).test(trimmedLine)) {
        errors.push({
          line: lineNumber,
          message: `Missing space after ${keyword} keyword`,
          suggestion: `Add a space after the ${keyword} keyword`
        });
      }
    });

    // Check for invalid variable names
    const varMatches = trimmedLine.match(/\b(?!\$)[a-zA-Z_]\w*\b(?!\s*:|\s*\.)/g);
    if (varMatches) {
      varMatches.forEach(variable => {
        if (/^\d/.test(variable)) {
          errors.push({
            line: lineNumber,
            message: `Invalid variable name: ${variable}`,
            suggestion: 'Variable names must start with a letter or underscore'
          });
        }
      });
    }
  });

  return { errors };
}