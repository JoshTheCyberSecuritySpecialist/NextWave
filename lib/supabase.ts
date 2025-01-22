import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Create the Supabase client with proper error handling
const createSupabaseClient = () => {
  try {
    // Default to empty strings if env vars are undefined
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce'
      }
    });
  } catch (error) {
    console.warn('Failed to initialize Supabase client:', error);
    return null;
  }
};

export const supabase = createSupabaseClient();

// Helper function to check if Supabase is properly configured
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url && key && url.startsWith('http') && key.length > 0);
}

// Helper function to validate Supabase connection
export async function validateSupabaseConnection(): Promise<boolean> {
  if (!supabase) return false;
  
  try {
    const { error } = await supabase.from('profiles').select('count').single();
    return !error;
  } catch {
    return false;
  }
}