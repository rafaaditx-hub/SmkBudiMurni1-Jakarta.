/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zcaroqflucuodbysxrnx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.dummyKeyForDemo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
});

export const SUPABASE_URL = supabaseUrl;
export const SUPABASE_ANON_KEY = supabaseAnonKey;
export const SUPABASE_REDIRECT_URL = typeof window !== 'undefined' ? `${window.location.origin}/` : 'https://zcaroqflucuodbysxrnx.supabase.co/auth/v1/callback';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: 'siswa' | 'guru' | 'alumni' | 'calon_siswa' | 'admin';
  nisnOrNip?: string;
  major?: string;
  avatarUrl?: string;
}

