'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', income: 5000, expenses: 1200 },
  { month: 'Feb', income: 5200, expenses: 1100 },
  { month: 'Mar', income: 4800, expenses: 1300 },
  { month: 'Apr', income: 5500, expenses: 1000 },
  { month: 'May', income: 5300, expenses: 1400 },
  { month: 'Jun', income: 5100, expenses: 1200 },
]

export default function IncomeVsExpensesChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Income vs Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} />
          <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}