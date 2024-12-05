import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

const vaporwaveColors = {
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

const vaporwaveTheme = EditorView.theme({
  '&': {
    backgroundColor: vaporwaveColors.background,
    color: vaporwaveColors.foreground,
  },
  '.cm-content': {
    caretColor: vaporwaveColors.cursor,
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: vaporwaveColors.cursor,
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: vaporwaveColors.selection,
  },
  '.cm-activeLine': {
    backgroundColor: '#2a2a3e',
  },
  '.cm-gutters': {
    backgroundColor: vaporwaveColors.background,
    color: '#636b8c',
    border: 'none',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#2a2a3e',
  },
});

const vaporwaveHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: vaporwaveColors.keyword },
  { tag: t.string, color: vaporwaveColors.string },
  { tag: t.number, color: vaporwaveColors.number },
  { tag: t.comment, color: vaporwaveColors.comment, fontStyle: 'italic' },
  { tag: t.propertyName, color: vaporwaveColors.property },
  { tag: t.variableName, color: vaporwaveColors.variable },
  { tag: t.atom, color: vaporwaveColors.atom },
  { tag: t.meta, color: vaporwaveColors.parameter },
]);

export const vaporwave = (): Extension => [
  vaporwaveTheme,
  syntaxHighlighting(vaporwaveHighlightStyle),
];