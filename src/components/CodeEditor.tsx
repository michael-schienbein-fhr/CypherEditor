import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cypher } from '../utils/cypherLanguage';
import { darkTheme, lightTheme } from '../utils/themes';
import { WrapText, AlertCircle } from 'lucide-react';
import { EditorView } from '@codemirror/view';
import { Diagnostic } from '@codemirror/lint';
import { syntaxTree } from '@codemirror/language';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
}

interface SyntaxError {
  message: string;
  line: number;
  column: number;
}

export function CodeEditor({ value, onChange, isDark }: CodeEditorProps) {
  const [wordWrap, setWordWrap] = useState(true);
  const [syntaxErrors, setSyntaxErrors] = useState<SyntaxError[]>([]);

  const handleChange = useCallback((value: string, viewUpdate: any) => {
    onChange(value);
    
    // Check for syntax errors
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
      ".cm-diagnostic": {
        padding: "1px 8px",
        marginLeft: "4px",
        borderRadius: "3px",
        whiteSpace: "pre-wrap"
      },
      ".cm-diagnostic-error": {
        backgroundColor: isDark ? "#442222" : "#ffebee"
      }
    }),
    wordWrap ? EditorView.lineWrapping : [],
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        diagnostics(update.view);
      }
    })
  ];

  const diagnostics = (view: EditorView): Diagnostic[] => {
    return syntaxErrors.map(error => ({
      from: view.state.doc.line(error.line).from + error.column,
      to: view.state.doc.line(error.line).from + error.column + 1,
      severity: 'error',
      message: error.message
    }));
  };

  return (
    <div className="h-full relative">
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        {syntaxErrors.length > 0 && (
          <div className={`p-2 rounded-md flex items-center gap-2 text-sm ${
            isDark 
              ? 'bg-red-900/50 text-red-200'
              : 'bg-red-100 text-red-800'
          }`}>
            <AlertCircle size={16} />
            <span>{syntaxErrors.length} error{syntaxErrors.length !== 1 ? 's' : ''}</span>
          </div>
        )}
        <button
          onClick={() => setWordWrap(!wordWrap)}
          className={`p-2 rounded-md transition-colors flex items-center gap-2 text-sm ${
            isDark 
              ? 'bg-[#2a2a3e] hover:bg-[#4a148c] text-[#e0e0ff]'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
          title={wordWrap ? "Disable word wrap" : "Enable word wrap"}
        >
          <WrapText size={16} />
          <span>Wrap</span>
        </button>
      </div>
      <div className="h-full overflow-hidden">
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