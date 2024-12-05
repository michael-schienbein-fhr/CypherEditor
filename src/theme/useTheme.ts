import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsDark, setTheme } from './themeSlice'

export function useTheme() {
  const isDark = useSelector(selectIsDark)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    dispatch(setTheme(!isDark))
  }

  return {
    isDark,
    toggleTheme,
    setTheme: (dark: boolean) => dispatch(setTheme(dark))
  }
} 