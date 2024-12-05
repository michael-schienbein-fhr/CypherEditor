import { Database, Github, Settings, Play, Save, FileJson, Book } from 'lucide-react'
import { Menu } from '@headlessui/react'
import { useTheme } from '../features/theme/useTheme'

interface HeaderProps {
  onRun?: () => void
  isExecuting?: boolean
}

export function Header({ onRun, isExecuting }: HeaderProps) {
  const { isDark } = useTheme()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white/50 border-gray-200'} backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Database className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Cypher Editor
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onRun}
              disabled={isExecuting}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                isDark 
                  ? isExecuting
                    ? 'bg-indigo-600/50 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : isExecuting
                    ? 'bg-indigo-500/50 cursor-not-allowed'
                    : 'bg-indigo-500 hover:bg-indigo-600 text-white'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>{isExecuting ? 'Running...' : 'Run Query'}</span>
            </button>

            <button
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Save Query"
            >
              <Save className="w-5 h-5" />
            </button>

            <button
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Export as JSON"
            >
              <FileJson className="w-5 h-5" />
            </button>

            <div className="w-px h-6 mx-2 bg-gray-700" />

            <a
              href="https://github.com/yourusername/CypherEditor"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://neo4j.com/docs/cypher-manual/current/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Cypher Documentation"
            >
              <Book className="w-5 h-5" />
            </a>

            <Menu as="div" className="relative">
              <Menu.Button
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Settings className="w-5 h-5" />
              </Menu.Button>
              <Menu.Items
                className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isDark 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        isDark
                          ? active ? 'bg-gray-700 text-white' : 'text-gray-300'
                          : active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      <Database className="w-4 h-4 mr-3" />
                      Connect to Database
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        isDark
                          ? active ? 'bg-gray-700 text-white' : 'text-gray-300'
                          : active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Editor Settings
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
} 