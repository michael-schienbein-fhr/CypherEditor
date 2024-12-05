import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { useTheme } from '../theme/useTheme'

export function Layout() {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen antialiased bg-gray-900">
      <div className="relative min-h-screen">
        <Sidebar />
        <div className="relative">
          <Outlet />
        </div>
      </div>
    </div>
  )
} 