import React from 'react'

interface UsersPageProps {
  searchParams: Promise<{ error?: string }>
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const params = await searchParams;
  
  if (params.error === 'true') {
    throw new Error('Failed to fetch users: Database connection timeout');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users Management</h1>
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">john@example.com</td>
              <td className="px-4 py-3">Admin</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">Jane Smith</td>
              <td className="px-4 py-3">jane@example.com</td>
              <td className="px-4 py-3">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersPage  