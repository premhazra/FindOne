import { Briefcase, DollarSign, Star, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Total Earnings', value: '₹1,52,400', icon: DollarSign, color: 'text-emerald-500 bg-emerald-50' },
  { label: 'Jobs Completed', value: '47', icon: Briefcase, color: 'text-blue-500 bg-blue-50' },
  { label: 'Avg Rating', value: '4.9', icon: Star, color: 'text-amber-500 bg-amber-50' },
  { label: 'Profile Views', value: '1,234', icon: TrendingUp, color: 'text-violet-500 bg-violet-50' },
];

export default function WorkerDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark">Welcome back, Worker!</h2>
        <p className="text-sm text-slate-500 mt-1">Here's your performance overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium text-slate-500">{label}</span>
            </div>
            <span className="text-2xl font-bold text-dark">{value}</span>
          </div>
        ))}
      </div>

      {/* Placeholder for upcoming jobs, charts, etc. */}
      <div className="mt-8 bg-white rounded-xl border border-slate-100 p-8 text-center">
        <p className="text-slate-400 text-sm">Upcoming jobs and analytics will appear here</p>
      </div>
    </div>
  );
}
