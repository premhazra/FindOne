import api from './api';

/**
 * Job-related API calls
 */
export const jobService = {
  getAll: (params) => api.get('/jobs', { params }),
  getById: (id) => api.get(`/jobs/${id}`),
  create: (data) => api.post('/jobs', data),
  update: (id, data) => api.put(`/jobs/${id}`, data),
  delete: (id) => api.delete(`/jobs/${id}`),
  apply: (id) => api.post(`/jobs/${id}/apply`),
  getApplications: (id) => api.get(`/jobs/${id}/applications`),
};
