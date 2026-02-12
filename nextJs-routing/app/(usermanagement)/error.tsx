'use client'

import React, { useEffect } from 'react'
import { HiOutlineUserGroup, HiOutlineRefresh } from 'react-icons/hi'

interface UserManagementErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

const UserManagementErrorPage = ({ error, reset }: UserManagementErrorPageProps) => {
  useEffect(() => {
    console.error('User Management Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <HiOutlineUserGroup className="w-10 h-10 text-green-500" />
        </div>

        <span className="inline-block px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full mb-4">
          USER MANAGEMENT ERROR
        </span>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          User Data Error
        </h1>

        <p className="text-gray-600 mb-4">
          There was an issue loading user information.
        </p>

        <div className="bg-green-50 rounded-lg p-4 mb-6 text-left border border-green-100">
          <p className="text-sm text-green-700 font-mono break-all">
            {error.message || 'User management error occurred'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="flex-1 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <HiOutlineRefresh className="w-5 h-5" /> Retry
          </button>
          <a
            href="/users"
            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center flex items-center justify-center gap-2"
          >
            <HiOutlineUserGroup className="w-5 h-5" /> View All Users
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserManagementErrorPage
