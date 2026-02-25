import api from './api';

/**
 * Worker-related API calls
 */
export const workerService = {
  getAll: (params) => api.get('/workers', { params }),
  getById: (id) => api.get(`/workers/${id}`),
  search: (query) => api.get('/workers/search', { params: { q: query } }),
  getReviews: (id, params) => api.get(`/workers/${id}/reviews`, { params }),
  updateProfile: (data) => api.put('/workers/profile', data),
  uploadAvatar: (formData) =>
    api.post('/workers/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};
