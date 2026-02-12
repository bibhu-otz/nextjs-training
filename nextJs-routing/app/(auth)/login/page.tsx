import React from 'react'
import LoginForm from '@/app/components/LoginForm'
import { HiOutlineCheck } from 'react-icons/hi'

interface LoginPageProps {
  searchParams: Promise<{ error?: string; registered?: string }>
}

const LoginPage = async ({ searchParams }: LoginPageProps) => {
  const params = await searchParams;
  
  if (params.error === 'true') {
    throw new Error('Authentication failed: Invalid credentials provided');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
          <p className="text-gray-600">Enter your credentials to access your account</p>
        </div>

        {params.registered === 'true' && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm mb-6 flex items-center gap-2">
            <HiOutlineCheck className="w-5 h-5" /> Account created successfully! Please sign in.
          </div>
        )}

        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;