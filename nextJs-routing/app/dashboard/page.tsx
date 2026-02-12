import React from 'react'
import Link from 'next/link'
import { 
  HiOutlineCube, 
  HiOutlineShoppingCart, 
  HiOutlineCurrencyDollar, 
  HiOutlineUserGroup,
  HiOutlinePlus,
  HiOutlineClipboardList,
  HiOutlineChartBar,
  HiOutlineArrowRight
} from 'react-icons/hi'
import { IconType } from 'react-icons'

interface DashboardPageProps {
  searchParams: Promise<{ error?: string }>
}

interface StatCard {
  label: string
  value: string | number
  icon: IconType
  color: string
  change: string
}

async function getDashboardStats() {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    totalProducts: 156,
    totalOrders: 432,
    totalRevenue: 45678,
    totalCustomers: 1234,
    recentOrders: [
      { id: 'ORD-001', customer: 'John Doe', amount: 125.00, status: 'completed' },
      { id: 'ORD-002', customer: 'Jane Smith', amount: 89.50, status: 'pending' },
      { id: 'ORD-003', customer: 'Bob Wilson', amount: 245.00, status: 'processing' },
      { id: 'ORD-004', customer: 'Alice Brown', amount: 67.25, status: 'completed' },
    ],
    topProducts: [
      { name: 'Wireless Headphones', sales: 245, revenue: 12250 },
      { name: 'Smart Watch', sales: 189, revenue: 18900 },
      { name: 'Laptop Stand', sales: 156, revenue: 4680 },
      { name: 'USB-C Hub', sales: 134, revenue: 5360 },
    ]
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const params = await searchParams;
  
  if (params.error === 'true') {
    throw new Error('Dashboard failed to load: Unable to fetch analytics data');
  }

  const stats = await getDashboardStats()

  const statCards: StatCard[] = [
    { label: 'Total Products', value: stats.totalProducts, icon: HiOutlineCube, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { label: 'Total Orders', value: stats.totalOrders, icon: HiOutlineShoppingCart, color: 'from-green-500 to-green-600', change: '+8%' },
    { label: 'Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: HiOutlineCurrencyDollar, color: 'from-purple-500 to-purple-600', change: '+15%' },
    { label: 'Customers', value: stats.totalCustomers, icon: HiOutlineUserGroup, color: 'from-orange-500 to-orange-600', change: '+5%' },
  ]

  const statusColors: Record<string, string> = {
    completed: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    processing: 'bg-blue-100 text-blue-700',
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <span className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </span>
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-gray-500 text-sm">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
            <Link href="/dashboard/orders" className="text-purple-600 hover:text-purple-700 text-sm flex items-center gap-1">
              View all <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentOrders.map((order) => (
                  <tr key={order.id} className="border-t border-gray-100">
                    <td className="py-3 text-sm font-medium text-gray-800">{order.id}</td>
                    <td className="py-3 text-sm text-gray-600">{order.customer}</td>
                    <td className="py-3 text-sm text-gray-800">${order.amount.toFixed(2)}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Top Products</h2>
            <Link href="/dashboard/products" className="text-purple-600 hover:text-purple-700 text-sm flex items-center gap-1">
              Manage <HiOutlineArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {stats.topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-800">${product.revenue.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/dashboard/products" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
            <HiOutlinePlus className="w-5 h-5" /> Add Product
          </Link>
          <Link href="/dashboard/orders" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
            <HiOutlineClipboardList className="w-5 h-5" /> View Orders
          </Link>
          <Link href="/dashboard/customers" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
            <HiOutlineUserGroup className="w-5 h-5" /> Manage Customers
          </Link>
          <Link href="/dashboard/analytics" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
            <HiOutlineChartBar className="w-5 h-5" /> Analytics
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
