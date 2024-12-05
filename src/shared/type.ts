export interface CodeEditorProps {
    value: string
    onChange: (value: string) => void
    isDark: boolean
    onThemeChange: (isDark: boolean) => void
    isValid?: boolean
    errors?: string[]
  } 