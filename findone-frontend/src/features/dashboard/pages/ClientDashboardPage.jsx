import { Briefcase, Clock, CheckCircle, Users } from 'lucide-react';

const stats = [
  { label: 'Active Jobs', value: '3', icon: Briefcase, color: 'text-blue-500 bg-blue-50' },
  { label: 'Pending', value: '2', icon: Clock, color: 'text-amber-500 bg-amber-50' },
  { label: 'Completed', value: '28', icon: CheckCircle, color: 'text-emerald-500 bg-emerald-50' },
  { label: 'Workers Hired', value: '15', icon: Users, color: 'text-violet-500 bg-violet-50' },
];

export default function ClientDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark">Welcome back, Client!</h2>
        <p className="text-sm text-slate-500 mt-1">Manage your jobs and bookings</p>
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

      <div className="mt-8 bg-white rounded-xl border border-slate-100 p-8 text-center">
        <p className="text-slate-400 text-sm">Your recent bookings and job postings will appear here</p>
      </div>
    </div>
  );
}
