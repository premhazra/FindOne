import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

/**
 * Route guard — redirects unauthenticated users to /login.
 * Wrap protected route elements with this component.
 *
 * @example <ProtectedRoute><DashboardLayout /></ProtectedRoute>
 */
export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
