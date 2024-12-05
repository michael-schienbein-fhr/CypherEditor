import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Activity, ChevronRight, Database } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Hover trigger area */}
      <div
        className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-white/5 to-transparent z-40 group hover:w-2 transition-all"
        onMouseEnter={() => setIsOpen(true)}
      >
        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-white/50" />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-md border-r border-gray-800/50 transform transition-all duration-300 ease-out z-50 ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Database className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-semibold text-white">Cypher Editor</h2>
            </div>
            <nav className="space-y-1">
              <Link
                to="/"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                  location.pathname === '/'
                    ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Code2 className="w-5 h-5" />
                <span>Query Editor</span>
              </Link>
              <Link
                to="/performance"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                  location.pathname === '/performance'
                    ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Activity className="w-5 h-5" />
                <span>Performance</span>
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4 border-t border-gray-800/50">
            <div className="text-xs text-gray-500">
              Connected to Neo4j
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 