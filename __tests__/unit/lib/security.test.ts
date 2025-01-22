import { SecurityService } from '@/lib/security';

describe('SecurityService', () => {
  const securityService = SecurityService.getInstance();

  describe('sanitizeInput', () => {
    it('sanitizes HTML special characters', () => {
      const input = '<script>alert("xss")</script>';
      const sanitized = securityService.sanitizeInput(input);
      expect(sanitized).not.toContain('<script>');
      expect(sanitized).not.toContain('</script>');
    });
  });

  describe('validateFormData', () => {
    it('validates form data against schema', () => {
      const schema = {
        email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        age: (value: number) => value >= 18,
      };

      const validData = {
        email: 'test@example.com',
        age: 25,
      };

      const invalidData = {
        email: 'invalid-email',
        age: 15,
      };

      expect(securityService.validateFormData(validData, schema)).toBe(true);
      expect(securityService.validateFormData(invalidData, schema)).toBe(false);
    });
  });
});