import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layouts
import MainLayout from '@layouts/MainLayout';
import AuthLayout from '@layouts/AuthLayout';
import DashboardLayout from '@layouts/DashboardLayout';

// Eager-loaded (critical path)
import HomePage from '@features/landing/pages/HomePage';

// Lazy-loaded (code-split)
const LoginPage = lazy(() => import('@features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('@features/auth/pages/RegisterPage'));
const WorkerDashboardPage = lazy(() => import('@features/dashboard/worker/pages/WorkerDashboardPage'));
const ClientDashboardPage = lazy(() => import('@features/dashboard/client/pages/ClientDashboardPage'));
const AdminDashboardPage = lazy(() => import('@features/dashboard/admin/pages/AdminDashboardPage'));
const JobsPage = lazy(() => import('@features/jobs/pages/JobsPage'));
const ProfilePage = lazy(() => import('@features/profiles/pages/ProfilePage'));
const MessagesPage = lazy(() => import('@features/messaging/pages/MessagesPage'));
const NotFoundPage = lazy(() => import('@features/misc/pages/NotFoundPage'));

// Loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-slate-500">Loading...</span>
      </div>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ─── Public Routes (Main Layout) ─── */}
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="worker/:id" element={<ProfilePage />} />
        </Route>

        {/* ─── Auth Routes ─── */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* ─── Dashboard Routes (Protected) ─── */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="worker" element={<WorkerDashboardPage />} />
          <Route path="client" element={<ClientDashboardPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="messages" element={<MessagesPage />} />
        </Route>

        {/* ─── 404 Catch-All ─── */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
