import React from 'react'

// SERVER COMPONENT - Static page displaying customers
const CustomersPage = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 12, spent: 1250.00, joined: '2025-08-15', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 8, spent: 890.50, joined: '2025-09-22', status: 'active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', orders: 23, spent: 3245.00, joined: '2025-06-10', status: 'vip' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', orders: 5, spent: 367.25, joined: '2025-11-05', status: 'active' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', orders: 15, spent: 1899.99, joined: '2025-07-18', status: 'active' },
    { id: 6, name: 'Eva Green', email: 'eva@example.com', orders: 2, spent: 154.00, joined: '2026-01-20', status: 'new' },
  ]

  const statusColors: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    vip: 'bg-purple-100 text-purple-700',
    new: 'bg-blue-100 text-blue-700',
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
          <p className="text-gray-600 mt-1">View and manage your customer base</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-gray-500 text-sm">Total Customers</p>
          <p className="text-2xl font-bold text-gray-800">{customers.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-gray-500 text-sm">VIP Customers</p>
          <p className="text-2xl font-bold text-purple-600">{customers.filter(c => c.status === 'vip').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-gray-500 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-green-600">
            ${customers.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Joined</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Orders</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total Spent</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{customer.joined}</td>
                <td className="px-6 py-4 text-gray-600">{customer.orders} orders</td>
                <td className="px-6 py-4 font-medium text-gray-800">${customer.spent.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[customer.status]}`}>
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomersPage
