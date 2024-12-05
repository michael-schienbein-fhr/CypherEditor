import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cypher } from '../utils/cypherLanguage';
import { darkTheme, lightTheme } from '../utils/themes';
import { WrapText } from 'lucide-react';
import { EditorView } from '@codemirror/view';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
}

export function CodeEditor({ value, onChange, isDark }: CodeEditorProps) {
  const [wordWrap, setWordWrap] = useState(true);

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
      }
    }),
    wordWrap ? EditorView.lineWrapping : []
  ];

  return (
    <div className="h-full relative">
      <button
        onClick={() => setWordWrap(!wordWrap)}
        className={`absolute top-2 right-2 z-10 p-2 rounded-md transition-colors flex items-center gap-2 text-sm ${
          isDark 
            ? 'bg-[#2a2a3e] hover:bg-[#4a148c] text-[#e0e0ff]'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
        title={wordWrap ? "Disable word wrap" : "Enable word wrap"}
      >
        <WrapText size={16} />
        <span>Wrap</span>
      </button>
      <div className="h-full overflow-hidden">
        <CodeMirror
          value={value}
          height="100%"
          theme={isDark ? darkTheme() : lightTheme()}
          extensions={[cypher(), ...editorSetup]}
          onChange={onChange}
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