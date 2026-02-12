import React from 'react'
import Sidebar from '@/app/components/Sidebar'

// SERVER COMPONENT - Layout that wraps all dashboard pages
// Sidebar is a Client Component for interactivity

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
