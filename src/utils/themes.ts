import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

const darkColors = {
  background: '#1a1a2e',
  foreground: '#e0e0ff',
  selection: '#4a148c80',
  cursor: '#ff71ce',
  keyword: '#ff71ce',
  string: '#01cdfe',
  number: '#05ffa1',
  comment: '#b967ff',
  property: '#fffb96',
  variable: '#01cdfe',
  atom: '#ff71ce',
  parameter: '#7fdbca',
};

const lightColors = {
  background: '#ffffff',
  foreground: '#2a2a3e',
  selection: '#4a148c20',
  cursor: '#6a1b9a',
  keyword: '#d81b60',
  string: '#0288d1',
  number: '#00796b',
  comment: '#7b1fa2',
  property: '#f57f17',
  variable: '#1565c0',
  atom: '#c2185b',
  parameter: '#00695c',
};

const createTheme = (colors: typeof darkColors) => {
  const theme = EditorView.theme({
    '&': {
      backgroundColor: colors.background,
      color: colors.foreground,
    },
    '.cm-content': {
      caretColor: colors.cursor,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: colors.cursor,
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: colors.selection,
    },
    '.cm-activeLine': {
      backgroundColor: colors.background === '#ffffff' ? '#f5f5f5' : '#2a2a3e',
    },
    '.cm-gutters': {
      backgroundColor: colors.background,
      color: colors.background === '#ffffff' ? '#757575' : '#636b8c',
      border: 'none',
    },
    '.cm-activeLineGutter': {
      backgroundColor: colors.background === '#ffffff' ? '#f5f5f5' : '#2a2a3e',
    },
  });

  const highlightStyle = HighlightStyle.define([
    { tag: t.keyword, color: colors.keyword },
    { tag: t.string, color: colors.string },
    { tag: t.number, color: colors.number },
    { tag: t.comment, color: colors.comment, fontStyle: 'italic' },
    { tag: t.propertyName, color: colors.property },
    { tag: t.variableName, color: colors.variable },
    { tag: t.atom, color: colors.atom },
    { tag: t.meta, color: colors.parameter },
  ]);

  return [theme, syntaxHighlighting(highlightStyle)];
};

export const darkTheme = (): Extension => createTheme(darkColors);
export const lightTheme = (): Extension => createTheme(lightColors);