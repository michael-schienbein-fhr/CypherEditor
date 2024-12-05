import { useOutletContext } from 'react-router-dom'
import { CodeEditor } from '../features/editor/CodeEditor'
import { Header } from '../layout/Header'
import { useExecuteQueryMutation, useValidateQueryMutation } from '../app/api/cypherApi'
import { useState, useCallback, useEffect } from 'react'

interface LayoutContext {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export function QueryEditor() {
  const { isDark, setIsDark } = useOutletContext<LayoutContext>()
  const [code, setCode] = useState('// Enter your Cypher query here\nMATCH (n)\nRETURN n LIMIT 25')
  
  const [executeQuery, { data: queryResult, isLoading: isExecuting }] = useExecuteQueryMutation()
  const [validateQuery, { data: validationResult }] = useValidateQueryMutation()

  const handleRunQuery = useCallback(async () => {
    try {
      await executeQuery({ query: code })
    } catch (error) {
      console.error('Error executing query:', error)
    }
  }, [code, executeQuery])

  // Validate query when code changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      validateQuery(code)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [code, validateQuery])

  return (
    <>
      <Header 
        onRun={handleRunQuery}
        isExecuting={isExecuting}
      />
      <main className="h-screen pt-16">
        <div className="h-full p-4">
          <CodeEditor 
            value={code} 
            onChange={setCode} 
            isDark={isDark}
            onThemeChange={setIsDark}
            isValid={validationResult?.isValid}
            errors={validationResult?.errors}
          />
          {queryResult && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg text-white">
              <pre>{JSON.stringify(queryResult, null, 2)}</pre>
            </div>
          )}
        </div>
      </main>
    </>
  )
} 