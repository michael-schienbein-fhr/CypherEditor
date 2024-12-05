interface QuerySection {
  type: 'MATCH' | 'WITH' | 'RETURN' | 'WHERE' | 'CREATE' | 'SET' | 'DELETE' | 'REMOVE' | 'MERGE' | 'OPTIONAL MATCH';
  content: string;
  lineNumber: number;
}

interface Parameter {
  name: string;
  value: string;
  lineNumber: number;
}

interface ParsedQuery {
  sections: QuerySection[];
  parameters: Parameter[];
  variables: string[];
}

export function parseQuery(query: string): ParsedQuery {
  const lines = query.split('\n');
  const sections: QuerySection[] = [];
  const parameters: Parameter[] = [];
  const variables = new Set<string>();

  let currentSection: QuerySection | null = null;
  let currentContent: string[] = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim().toUpperCase();
    
    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('//') || trimmedLine.startsWith('/*')) {
      return;
    }

    // Check for parameters
    const paramMatch = line.match(/\$(\w+)/g);
    if (paramMatch) {
      paramMatch.forEach(param => {
        parameters.push({
          name: param,
          value: '',
          lineNumber: index + 1
        });
      });
    }

    // Check for variables
    const varMatch = line.match(/\b([a-zA-Z_]\w*)\s*(?=:|=|\))/g);
    if (varMatch) {
      varMatch.forEach(variable => variables.add(variable.trim()));
    }

    // Check for new section
    const sectionMatch = trimmedLine.match(/^(MATCH|WITH|RETURN|WHERE|CREATE|SET|DELETE|REMOVE|MERGE|OPTIONAL MATCH)/);
    
    if (sectionMatch) {
      if (currentSection) {
        sections.push({
          ...currentSection,
          content: currentContent.join('\n')
        });
      }
      
      currentSection = {
        type: sectionMatch[1] as QuerySection['type'],
        content: '',
        lineNumber: index + 1
      };
      currentContent = [line];
    } else if (currentSection) {
      currentContent.push(line);
    }
  });

  // Add the last section
  if (currentSection) {
    sections.push({
      ...currentSection,
      content: currentContent.join('\n')
    });
  }

  return {
    sections,
    parameters,
    variables: Array.from(variables)
  };
}