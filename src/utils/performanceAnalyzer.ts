interface PerformanceAnalysis {
  complexity: 'Low' | 'Medium' | 'High';
  suggestions: string[];
}

export function analyzePerformance(query: string): PerformanceAnalysis {
  const suggestions: string[] = [];
  let complexityScore = 0;

  // Check for unbounded patterns
  if (query.includes('MATCH (') && !query.includes('LIMIT')) {
    suggestions.push('Consider adding a LIMIT clause to bound the result set');
    complexityScore += 2;
  }

  // Check for multiple matches
  const matchCount = (query.match(/MATCH/g) || []).length;
  if (matchCount > 2) {
    suggestions.push('Multiple MATCH clauses may impact performance. Consider using WITH to break down the query');
    complexityScore += matchCount;
  }

  // Check for cartesian products
  if (query.includes('MATCH') && !query.includes('WHERE') && matchCount > 1) {
    suggestions.push('Potential cartesian product detected. Add relationships between patterns');
    complexityScore += 3;
  }

  // Check for inefficient pattern matching
  if (query.includes('.*') || query.includes('.*?')) {
    suggestions.push('Variable length patterns can be expensive. Consider limiting the depth');
    complexityScore += 2;
  }

  // Determine complexity level
  let complexity: 'Low' | 'Medium' | 'High' = 'Low';
  if (complexityScore > 5) {
    complexity = 'High';
  } else if (complexityScore > 2) {
    complexity = 'Medium';
  }

  return { complexity, suggestions };
}