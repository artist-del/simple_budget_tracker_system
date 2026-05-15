import Layout from '@/components/layout/Layout'
import SummaryCard from '@/components/cards/SummaryCard'
import MonthlyExpensesChart from '@/components/charts/MonthlyExpensesChart'
import IncomeVsExpensesChart from '@/components/charts/IncomeVsExpensesChart'
import ExpenseCategoriesPieChart from '@/components/charts/ExpenseCategoriesPieChart'
import { DollarSign, TrendingUp, TrendingDown, Users } from 'lucide-react'
import { mockTransactions } from '@/data/transactions'
import { mockDebts } from '@/data/debts'

export default function DashboardPage() {
  // Calculate summary data
  const totalIncome = mockTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = mockTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const remainingBalance = totalIncome - totalExpenses

  const totalDebts = mockDebts.reduce((sum, debt) => sum + debt.amount, 0)

  // Recent transactions
  const recentTransactions = mockTransactions.slice(0, 5)

  return (
    <Layout>
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            title="Total Income"
            value={`$${totalIncome.toLocaleString()}`}
            icon={TrendingUp}
            color="bg-green-500"
          />
          <SummaryCard
            title="Total Expenses"
            value={`$${totalExpenses.toLocaleString()}`}
            icon={TrendingDown}
            color="bg-red-500"
          />
          <SummaryCard
            title="Remaining Balance"
            value={`$${remainingBalance.toLocaleString()}`}
            icon={DollarSign}
            color="bg-blue-500"
          />
          <SummaryCard
            title="Total Utang"
            value={`$${totalDebts.toLocaleString()}`}
            icon={Users}
            color="bg-purple-500"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyExpensesChart />
          <IncomeVsExpensesChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ExpenseCategoriesPieChart />
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}