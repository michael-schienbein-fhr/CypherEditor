'use client';

import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cypher } from '../../utils/cypherLanguage';
import { darkTheme, lightTheme } from '../../theme/themes';
import { WrapText, AlertCircle, Sun, Moon } from 'lucide-react';
import { EditorView } from '@codemirror/view';
import { syntaxTree } from '@codemirror/language';
import { Switch } from '@headlessui/react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
  onThemeChange: (isDark: boolean) => void;
}

interface SyntaxError {
  message: string;
  line: number;
  column: number;
}

export function CodeEditor({ value, onChange, isDark, onThemeChange }: CodeEditorProps) {
  const [wordWrap, setWordWrap] = useState(true);
  const [syntaxErrors, setSyntaxErrors] = useState<SyntaxError[]>([]);

  const handleChange = useCallback((value: string, viewUpdate: any) => {
    onChange(value);
    
    const tree = syntaxTree(viewUpdate.state);
    const errors: SyntaxError[] = [];
    
    tree.iterate({
      enter: (node) => {
        if (node.type.isError) {
          const pos = viewUpdate.state.doc.lineAt(node.from);
          errors.push({
            message: 'Syntax error',
            line: pos.number,
            column: node.from - pos.from
          });
        }
      }
    });
    
    setSyntaxErrors(errors);
  }, [onChange]);

  const editorSetup = [
    EditorView.theme({
      "&": {
        height: "100%",
        maxHeight: "100%"
      },
      ".cm-scroller": {
        overflow: "auto !important",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important",
        lineHeight: "1.6 !important"
      },
      ".cm-content": {
        minHeight: "100%",
        padding: "0.5rem"
      },
      ".cm-gutters": {
        minHeight: "100%"
      },
      ".cm-line .cm-error": {
        backgroundColor: isDark ? "#442222" : "#ffebee",
        borderRadius: "3px",
        padding: "0 4px"
      }
    }),
    wordWrap ? EditorView.lineWrapping : []
  ];

  return (
    <div className="h-full relative flex flex-col">
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        {syntaxErrors.length > 0 && (
          <div className={`p-2 rounded-md flex items-center gap-2 text-sm ${
            isDark 
              ? 'bg-red-900/50 text-red-200'
              : 'bg-red-100 text-red-800'
          }`}>
            <AlertCircle className="w-4 h-4" />
            <span>{syntaxErrors.length} error{syntaxErrors.length !== 1 ? 's' : ''}</span>
          </div>
        )}
        
        <Switch
          checked={wordWrap}
          onChange={setWordWrap}
          className={`${
            wordWrap ? 'bg-indigo-600' : 'bg-gray-200'
          } relative inline-flex h-8 w-auto items-center rounded-md px-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
        >
          <WrapText className={`w-4 h-4 ${wordWrap ? 'text-white' : 'text-gray-500'}`} />
          <span className={`ml-2 text-sm ${wordWrap ? 'text-white' : 'text-gray-500'}`}>Wrap</span>
        </Switch>

        <Switch
          checked={isDark}
          onChange={onThemeChange}
          className={`${
            isDark ? 'bg-indigo-600' : 'bg-gray-200'
          } relative inline-flex h-8 w-auto items-center rounded-md px-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-white" />
          ) : (
            <Sun className="w-4 h-4 text-gray-500" />
          )}
          <span className={`ml-2 text-sm ${isDark ? 'text-white' : 'text-gray-500'}`}>
            {isDark ? 'Dark' : 'Light'}
          </span>
        </Switch>
      </div>

      <div className="flex-1 mt-14">
        <CodeMirror
          value={value}
          height="100%"
          theme={isDark ? darkTheme() : lightTheme()}
          extensions={[cypher(), ...editorSetup]}
          onChange={handleChange}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightSpecialChars: true,
            history: true,
            foldGutter: true,
            drawSelection: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            syntaxHighlighting: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            defaultKeymap: true,
            searchKeymap: true,
            historyKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true,
          }}
        />
      </div>
    </div>
  );
}