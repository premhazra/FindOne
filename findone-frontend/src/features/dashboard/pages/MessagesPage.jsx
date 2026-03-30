import { MessageSquare } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark">Messages</h2>
        <p className="text-sm text-slate-500 mt-1">Chat with workers or clients</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 p-12 text-center">
        <MessageSquare size={40} className="text-slate-300 mx-auto mb-4" />
        <p className="text-slate-400 text-sm">
          Real-time messaging with chat rooms will be implemented here
        </p>
      </div>
    </div>
  );
}
