/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
// Default URL provided by user: https://zcaroqflucuodbysxrnx.supabase.co
// Callback: https://zcaroqflucuodbysxrnx.supabase.co/auth/v1/callback
const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env || {};
export const SUPABASE_URL = metaEnv.VITE_SUPABASE_URL || 'https://zcaroqflucuodbysxrnx.supabase.co';
export const SUPABASE_ANON_KEY = metaEnv.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.dummyKeyForDemo';
export const SUPABASE_REDIRECT_URL = 'https://zcaroqflucuodbysxrnx.supabase.co/auth/v1/callback';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
});

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: 'siswa' | 'guru' | 'alumni' | 'calon_siswa' | 'admin';
  nisnOrNip?: string;
  major?: string;
  avatarUrl?: string;
}
