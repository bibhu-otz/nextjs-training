'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  HiOutlineChartBar, 
  HiOutlineCube, 
  HiOutlineShoppingCart, 
  HiOutlineUsers, 
  HiOutlineTrendingUp, 
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi'

interface User {
  name: string
  email: string
}

interface MenuItem {
  href: string
  label: string
  icon: React.ReactNode
}

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    router.push('/login')
  }

  const menuItems: MenuItem[] = [
    { href: '/dashboard', label: 'Dashboard', icon: <HiOutlineChartBar className="w-5 h-5" /> },
    { href: '/dashboard/products', label: 'Product Management', icon: <HiOutlineCube className="w-5 h-5" /> },
    { href: '/dashboard/orders', label: 'Orders', icon: <HiOutlineShoppingCart className="w-5 h-5" /> },
    { href: '/dashboard/customers', label: 'Customers', icon: <HiOutlineUsers className="w-5 h-5" /> },
    { href: '/dashboard/analytics', label: 'Analytics', icon: <HiOutlineTrendingUp className="w-5 h-5" /> },
    { href: '/dashboard/settings', label: 'Settings', icon: <HiOutlineCog className="w-5 h-5" /> },
  ]

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Admin Panel
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-slate-700 rounded-lg transition"
        >
          {isCollapsed ? <HiOutlineChevronRight className="w-5 h-5" /> : <HiOutlineChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {user && (
        <div className={`p-4 border-b border-slate-700 ${isCollapsed ? 'text-center' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white transition"
          >
            <HiOutlineHome className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      )}

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition ${isCollapsed ? 'justify-center' : ''}`}
        >
          <HiOutlineLogout className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
