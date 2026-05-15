'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', expenses: 1200 },
  { month: 'Feb', expenses: 1100 },
  { month: 'Mar', expenses: 1300 },
  { month: 'Apr', expenses: 1000 },
  { month: 'May', expenses: 1400 },
  { month: 'Jun', expenses: 1200 },
]

export default function MonthlyExpensesChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="expenses" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}