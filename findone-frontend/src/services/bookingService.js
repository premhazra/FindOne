import api from './api';

/**
 * Booking-related API calls
 */
export const bookingService = {
  getAll: (params) => api.get('/bookings', { params }),
  getById: (id) => api.get(`/bookings/${id}`),
  create: (data) => api.post('/bookings', data),
  updateStatus: (id, status) => api.patch(`/bookings/${id}/status`, { status }),
  cancel: (id) => api.patch(`/bookings/${id}/cancel`),
};
