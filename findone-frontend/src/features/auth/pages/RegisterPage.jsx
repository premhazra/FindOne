import { Link } from 'react-router-dom';
import { Input } from '@components/ui';
import Button from '@components/common/Button';

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-dark">Create your account</h1>
      <p className="mt-2 text-sm text-slate-500">
        Join 50,000+ users on FindOne
      </p>

      <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" placeholder="John" />
          <Input label="Last Name" placeholder="Doe" />
        </div>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Phone" type="tel" placeholder="+91 98765 43210" />
        <Input label="Password" type="password" placeholder="Create a strong password" />

        {/* Role selector */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            I want to
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="px-4 py-3 rounded-xl border-2 border-primary-500 bg-primary-50 text-sm font-semibold text-primary-600 text-center"
            >
              Hire Workers
            </button>
            <button
              type="button"
              className="px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm font-semibold text-slate-600 text-center hover:border-slate-300"
            >
              Find Work
            </button>
          </div>
        </div>

        <Button variant="gradient" size="lg" className="w-full justify-center">
          Create Account
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-primary-500 hover:text-primary-600">
          Sign in
        </Link>
      </p>
    </div>
  );
}
