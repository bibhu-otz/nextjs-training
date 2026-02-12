import React from 'react'
import Link from 'next/link'

// SERVER COMPONENT - Static page displaying orders
const OrdersPage = () => {
  const orders = [
    { id: 'ORD-001', customer: 'John Doe', email: 'john@example.com', date: '2026-02-12', total: 125.00, status: 'completed', items: 3 },
    { id: 'ORD-002', customer: 'Jane Smith', email: 'jane@example.com', date: '2026-02-11', total: 89.50, status: 'pending', items: 2 },
    { id: 'ORD-003', customer: 'Bob Wilson', email: 'bob@example.com', date: '2026-02-11', total: 245.00, status: 'processing', items: 5 },
    { id: 'ORD-004', customer: 'Alice Brown', email: 'alice@example.com', date: '2026-02-10', total: 67.25, status: 'completed', items: 1 },
    { id: 'ORD-005', customer: 'Charlie Davis', email: 'charlie@example.com', date: '2026-02-10', total: 189.99, status: 'shipped', items: 4 },
    { id: 'ORD-006', customer: 'Eva Green', email: 'eva@example.com', date: '2026-02-09', total: 54.00, status: 'completed', items: 2 },
  ]

  const statusColors: Record<string, string> = {
    completed: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    processing: 'bg-blue-100 text-blue-700',
    shipped: 'bg-purple-100 text-purple-700',
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-600 mt-1">Manage and track customer orders</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Items</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-purple-600">{order.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-800">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                <td className="px-6 py-4 font-medium text-gray-800">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {order.status}
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

export default OrdersPage
