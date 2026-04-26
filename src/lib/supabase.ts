import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the URL is a valid string and looks like a URL
const isValidUrl = (url: any) => {
  try {
    return typeof url === 'string' && url.length > 0 && new URL(url).protocol.startsWith('http');
  } catch {
    return false;
  }
};

const finalUrl = isValidUrl(supabaseUrl) ? supabaseUrl : 'https://placeholder.supabase.co';
const finalKey = (typeof supabaseAnonKey === 'string' && supabaseAnonKey.length > 0) ? supabaseAnonKey : 'placeholder';

if (!isValidUrl(supabaseUrl) || !finalKey) {
  console.warn('Supabase credentials missing or invalid. Contact form will not work until VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are correctly set in the environment.');
}

export const supabase = createClient(finalUrl, finalKey);
