import { Link } from 'react-router-dom';
import { Input } from '@components/ui';
import Button from '@components/common/Button';

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-dark">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-500">
        Sign in to your FindOne account
      </p>

      <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="Enter your password" />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500" />
            <span className="text-sm text-slate-600">Remember me</span>
          </label>
          <a href="#" className="text-sm font-medium text-primary-500 hover:text-primary-600">
            Forgot password?
          </a>
        </div>

        <Button variant="primary" size="lg" className="w-full justify-center">
          Sign In
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link to="/register" className="font-semibold text-primary-500 hover:text-primary-600">
          Sign up
        </Link>
      </p>
    </div>
  );
}
