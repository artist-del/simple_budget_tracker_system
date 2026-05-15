import { LucideIcon } from 'lucide-react'

interface SummaryCardProps {
  title: string
  value: string
  icon: LucideIcon
  color: string
}

export default function SummaryCard({ title, value, icon: Icon, color }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  )
}