'use client'

import React, { useEffect } from 'react'
import { HiOutlineLockClosed, HiOutlineRefresh } from 'react-icons/hi'

interface AuthErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

const AuthErrorPage = ({ error, reset }: AuthErrorPageProps) => {
  useEffect(() => {
    console.error('Auth Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
          <HiOutlineLockClosed className="w-10 h-10 text-purple-500" />
        </div>

        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full mb-4">
          AUTHENTICATION ERROR
        </span>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Authentication Failed
        </h1>

        <p className="text-gray-600 mb-4">
          There was a problem with the authentication process.
        </p>

        <div className="bg-purple-50 rounded-lg p-4 mb-6 text-left border border-purple-100">
          <p className="text-sm text-purple-700 font-mono break-all">
            {error.message || 'Authentication error occurred'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="flex-1 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <HiOutlineRefresh className="w-5 h-5" /> Try Again
          </button>
          <a
            href="/login"
            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center flex items-center justify-center gap-2"
          >
            <HiOutlineLockClosed className="w-5 h-5" /> Back to Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthErrorPage
