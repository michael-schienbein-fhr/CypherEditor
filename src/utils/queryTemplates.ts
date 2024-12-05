interface QueryTemplate {
  name: string;
  description: string;
  query: string;
}

export const queryTemplates: QueryTemplate[] = [
  {
    name: 'Basic Node Query',
    description: 'Simple query to fetch nodes with a specific label',
    query: 'MATCH (n:Label)\nRETURN n\nLIMIT 25'
  },
  {
    name: 'Path Query',
    description: 'Find paths between two connected nodes',
    query: 'MATCH (start:Label1)-[r:RELATIONSHIP]->(end:Label2)\nWHERE start.property = $value\nRETURN start, r, end'
  },
  {
    name: 'Create Pattern',
    description: 'Create a new node with relationships',
    query: 'CREATE (n:Label {\n  property1: $value1,\n  property2: $value2\n})\nRETURN n'
  },
  {
    name: 'Aggregation Query',
    description: 'Group and count related nodes',
    query: 'MATCH (n:Label)-[:RELATIONSHIP]->(related)\nRETURN n.property, count(related) as count\nORDER BY count DESC'
  }
];