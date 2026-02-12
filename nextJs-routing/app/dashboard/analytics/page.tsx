import React from 'react'
import { HiOutlineEye, HiOutlineTrendingUp, HiOutlineCurrencyDollar, HiOutlineReply } from 'react-icons/hi'
import { IconType } from 'react-icons'

interface StatItem {
  label: string
  value: string
  change: string
  icon: IconType
}

const AnalyticsPage = () => {
  const stats: StatItem[] = [
    { label: 'Page Views', value: '24,532', change: '+12%', icon: HiOutlineEye },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: HiOutlineTrendingUp },
    { label: 'Avg. Order Value', value: '$85.40', change: '+8%', icon: HiOutlineCurrencyDollar },
    { label: 'Return Rate', value: '2.1%', change: '-0.3%', icon: HiOutlineReply },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your business performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenue Over Time</h2>
          <div className="h-64 bg-gradient-to-t from-purple-100 to-white rounded-lg flex items-end justify-around p-4">
            {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
              <div key={i} className="w-8 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-around mt-2 text-sm text-gray-500">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales by Category</h2>
          <div className="space-y-4">
            {[
              { category: 'Electronics', percentage: 45, color: 'bg-blue-500' },
              { category: 'Accessories', percentage: 30, color: 'bg-purple-500' },
              { category: 'Clothing', percentage: 15, color: 'bg-green-500' },
              { category: 'Other', percentage: 10, color: 'bg-orange-500' },
            ].map((item) => (
              <div key={item.category}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.category}</span>
                  <span className="text-gray-800 font-medium">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <IconComponent className="w-6 h-6 text-purple-600" />
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnalyticsPage
