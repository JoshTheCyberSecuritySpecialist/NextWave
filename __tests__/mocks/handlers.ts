import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/analytics', () => {
    return HttpResponse.json({ success: true });
  }),

  http.post('/api/newsletter', () => {
    return HttpResponse.json({ success: true });
  }),
];