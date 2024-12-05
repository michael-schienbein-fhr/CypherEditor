import React, { useState } from 'react';
import { CypherEditor } from './components/CypherEditor';
import { QueryAnalyzer } from './components/QueryAnalyzer';
import { ResizablePanel } from './components/ResizablePanel';

function App() {
  const [query, setQuery] = useState('// Enter your Cypher query here\nMATCH (n)\nRETURN n LIMIT 25');

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-screen">
        <ResizablePanel
          leftPanel={
            <div className="h-full">
              <QueryAnalyzer query={query} onQueryChange={setQuery} />
            </div>
          }
          rightPanel={
            <div className="h-full">
              <CypherEditor value={query} onChange={setQuery} />
            </div>
          }
          initialLeftWidth={50}
          minLeftWidth={30}
          minRightWidth={30}
        />
      </div>
    </div>
  );
}

export default App;