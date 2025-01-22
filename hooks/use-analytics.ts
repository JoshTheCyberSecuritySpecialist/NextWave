import { useCallback } from 'react';
import { analytics } from '@/lib/analytics';

export function useAnalytics() {
  const trackEvent = useCallback((name: string, metadata?: Record<string, any>) => {
    analytics.trackEvent('interaction', {
      name,
      metadata,
    });
  }, []);

  const trackConversion = useCallback((name: string, value?: number) => {
    analytics.trackConversion(name, value);
  }, []);

  return {
    trackEvent,
    trackConversion,
  };
}