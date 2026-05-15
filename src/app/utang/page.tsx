'use client'

import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { mockDebts, Debt } from '@/data/debts'
import { Search, Filter, Plus } from 'lucide-react'

export default function UtangPage() {
  const [debts, setDebts] = useState(mockDebts)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'paid' | 'partial' | 'unpaid'>('all')

  // Filter debts
  const filteredDebts = debts.filter(debt => {
    const matchesSearch = debt.personName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || debt.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Calculate summary
  const totalDebts = debts.reduce((sum, debt) => sum + debt.amount, 0)
  const paidDebts = debts.filter(debt => debt.status === 'paid').reduce((sum, debt) => sum + debt.amount, 0)
  const unpaidDebts = debts.filter(debt => debt.status === 'unpaid').reduce((sum, debt) => sum + debt.amount, 0)

  const getStatusColor = (status: Debt['status']) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'partial': return 'bg-yellow-100 text-yellow-800'
      case 'unpaid': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Utang Dashboard</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={20} className="mr-2" />
            Add Debt
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600">Total Debts</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">${totalDebts.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600">Paid</h3>
            <p className="text-2xl font-bold text-green-600 mt-1">${paidDebts.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600">Unpaid</h3>
            <p className="text-2xl font-bold text-red-600 mt-1">${unpaidDebts.toLocaleString()}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="paid">Paid</option>
            <option value="partial">Partial</option>
            <option value="unpaid">Unpaid</option>
          </select>
        </div>

        {/* Debts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDebts.map((debt) => (
            <div key={debt.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{debt.personName}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(debt.status)}`}>
                  {debt.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Amount:</span>
                  <span className="text-sm font-medium text-gray-900">${debt.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Due Date:</span>
                  <span className="text-sm font-medium text-gray-900">{debt.dueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Borrowed:</span>
                  <span className="text-sm font-medium text-gray-900">{debt.borrowedDate}</span>
                </div>
              </div>

              {/* Progress Bar for partial payments */}
              {debt.status === 'partial' && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">50% paid</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDebts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No debts found.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}