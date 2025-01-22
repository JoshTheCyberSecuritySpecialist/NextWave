export class RateLimiter {
  private requests: Map<string, number[]>;
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 60000, maxRequests: number = 100) {
    this.requests = new Map();
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  isRateLimited(key: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Get existing requests for this key
    let requestTimestamps = this.requests.get(key) || [];

    // Remove old requests outside the window
    requestTimestamps = requestTimestamps.filter(timestamp => timestamp > windowStart);

    // Check if rate limit is exceeded
    if (requestTimestamps.length >= this.maxRequests) {
      return true;
    }

    // Add current request
    requestTimestamps.push(now);
    this.requests.set(key, requestTimestamps);

    return false;
  }

  clearExpired(): void {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    for (const [key, timestamps] of this.requests.entries()) {
      const validTimestamps = timestamps.filter(timestamp => timestamp > windowStart);
      if (validTimestamps.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validTimestamps);
      }
    }
  }
}

export const rateLimit = new RateLimiter();