"use client";

import { useState, useEffect } from 'react';
import { securityService } from '@/lib/security';

interface SecureFormProps {
  onSubmit: (data: any) => Promise<void>;
  children: React.ReactNode;
  validationSchema?: Record<string, (value: any) => boolean>;
  className?: string;
}

export function SecureForm({
  onSubmit,
  children,
  validationSchema = {},
  className = '',
}: SecureFormProps) {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Generate CSRF token on mount
    const secret = crypto.randomUUID();
    const token = generateNonce(secret);
    setCsrfToken(token);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    
    formData.forEach((value, key) => {
      // Sanitize input
      data[key] = typeof value === 'string' ? securityService.sanitizeInput(value) : value;
    });

    // Validate form data
    if (validationSchema && !securityService.validateFormData(data, validationSchema)) {
      console.error('Form validation failed');
      return;
    }

    try {
      await onSubmit({
        ...data,
        _csrf: csrfToken,
      });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input type="hidden" name="_csrf" value={csrfToken} />
      {children}
    </form>
  );
}