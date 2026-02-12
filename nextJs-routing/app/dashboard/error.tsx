'use client'

import React, { useEffect } from 'react'
import { HiOutlineChartBar, HiOutlineRefresh, HiOutlineHome } from 'react-icons/hi'

interface DashboardErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const DashboardError = ({ error, reset }: DashboardErrorProps) => {
  useEffect(() => {
    console.error('Dashboard Error:', error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <HiOutlineChartBar className="w-10 h-10 text-blue-500" />
        </div>

        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-4">
          DASHBOARD ERROR
        </span>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Dashboard Error
        </h1>

        <p className="text-gray-600 mb-4">
          Something went wrong while loading the dashboard.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left border border-blue-100">
          <p className="text-sm text-blue-700 font-mono break-all">
            {error.message || 'Dashboard error occurred'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="flex-1 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
          >
            <HiOutlineRefresh className="w-5 h-5" /> Try Again
          </button>
          <a
            href="/"
            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition text-center flex items-center justify-center gap-2"
          >
            <HiOutlineHome className="w-5 h-5" /> Go Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default DashboardError
