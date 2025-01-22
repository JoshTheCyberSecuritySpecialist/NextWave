// Privacy-focused analytics utility
type EventType = 'page_view' | 'conversion' | 'interaction';
type EventData = {
  name: string;
  path?: string;
  value?: number;
  metadata?: Record<string, any>;
};

class Analytics {
  private static instance: Analytics;
  private initialized: boolean = false;
  private debugMode: boolean = process.env.NODE_ENV === 'development';

  private constructor() {}

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;
    this.trackPageView();
    this.setupEventListeners();
    if (this.debugMode) {
      console.log('Analytics initialized');
    }
  }

  private setupEventListeners() {
    if (typeof window === 'undefined') return;

    // Track user engagement time
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - startTime;
      this.trackEvent('interaction', {
        name: 'engagement_time',
        value: Math.round(timeSpent / 1000),
      });
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', this.throttle(() => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.trackEvent('interaction', {
            name: 'scroll_depth',
            value: scrollPercent,
          });
        }
      }
    }, 1000));
  }

  private throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  trackPageView() {
    if (typeof window === 'undefined') return;
    
    this.trackEvent('page_view', {
      name: 'page_view',
      path: window.location.pathname,
    });
  }

  trackConversion(name: string, value?: number) {
    this.trackEvent('conversion', {
      name,
      value,
    });
  }

  trackEvent(type: EventType, data: EventData) {
    if (!this.initialized) {
      console.warn('Analytics not initialized');
      return;
    }

    // Add timestamp and session ID
    const eventData = {
      ...data,
      timestamp: new Date().toISOString(),
      sessionId: this.getSessionId(),
    };

    // In a real implementation, you would send this to your analytics service
    if (this.debugMode) {
      console.log(`[Analytics] ${type}:`, eventData);
    }

    // Send to your analytics endpoint
    this.sendToAnalytics(type, eventData);
  }

  private getSessionId(): string {
    if (typeof window === 'undefined') return '';
    
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private async sendToAnalytics(type: EventType, data: any) {
    // Replace with your analytics endpoint
    const endpoint = '/api/analytics';
    
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          data,
        }),
      });
    } catch (error) {
      if (this.debugMode) {
        console.error('Failed to send analytics:', error);
      }
    }
  }
}

export const analytics = Analytics.getInstance();