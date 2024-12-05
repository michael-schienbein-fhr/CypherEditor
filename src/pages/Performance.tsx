import { useOutletContext } from 'react-router-dom'
import { Header } from '../layout/Header'

interface LayoutContext {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export function Performance() {
  const { isDark } = useOutletContext<LayoutContext>()

  return (
    <>
      <Header isDark={isDark} />
      <main className="h-screen pt-16 p-4">
        <div className={`rounded-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'} h-full`}>
          <div className={`p-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <h1 className="text-2xl font-semibold mb-4">Query Performance</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-sm font-medium mb-2">Average Query Time</h3>
                <p className="text-2xl font-bold">120ms</p>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-sm font-medium mb-2">Nodes Scanned</h3>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className="text-sm font-medium mb-2">Memory Usage</h3>
                <p className="text-2xl font-bold">45MB</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 