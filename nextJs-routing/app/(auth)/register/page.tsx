import React from 'react'
import RegisterForm from '@/app/components/RegisterForm'

interface RegisterPageProps {
  searchParams: Promise<{ error?: string }>
}

const RegisterPage = async ({ searchParams }: RegisterPageProps) => {
  const params = await searchParams;
  
  if (params.error === 'true') {
    throw new Error('Registration failed: Unable to create account');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Fill in your details to get started</p>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage;