import { rateLimit } from '@/lib/rate-limit';
import { generateNonce } from '@/lib/csrf';

export class SecurityService {
  private static instance: SecurityService;
  
  private constructor() {}

  static getInstance(): SecurityService {
    if (!SecurityService.instance) {
      SecurityService.instance = new SecurityService();
    }
    return SecurityService.instance;
  }

  validateCSRFToken(token: string, secret: string): boolean {
    try {
      // Verify CSRF token
      return token === generateNonce(secret);
    } catch (error) {
      console.error('CSRF validation failed:', error);
      return false;
    }
  }

  sanitizeInput(input: string): string {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  validateFormData(data: Record<string, any>, schema: Record<string, (value: any) => boolean>): boolean {
    try {
      return Object.entries(schema).every(([key, validator]) => {
        return validator(data[key]);
      });
    } catch (error) {
      console.error('Form validation failed:', error);
      return false;
    }
  }

  async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
}

export const securityService = SecurityService.getInstance();