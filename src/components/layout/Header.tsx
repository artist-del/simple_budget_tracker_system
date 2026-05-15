'use client'

import { Search, Bell, User, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* User avatar */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">User</span>
          </div>
        </div>
      </div>
    </header>
  )
}