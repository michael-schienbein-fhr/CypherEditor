import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface EditorState {
  code: string
  wordWrap: boolean
}

const initialState: EditorState = {
  code: '// Enter your Cypher query here\nMATCH (n)\nRETURN n LIMIT 25',
  wordWrap: true
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload
    },
    toggleWordWrap: (state) => {
      state.wordWrap = !state.wordWrap
    }
  }
})

export const { setCode, toggleWordWrap } = editorSlice.actions

export const selectCode = (state: RootState) => state.editor.code
export const selectWordWrap = (state: RootState) => state.editor.wordWrap

export default editorSlice.reducer 