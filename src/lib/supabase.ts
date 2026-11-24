import { createClient } from '@supabase/supabase-js';

// User provided Supabase credentials
const DEFAULT_SUPABASE_URL = 'https://juximnyjpodvjoinsqrz.supabase.co';
const DEFAULT_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1eGltbnlqcG9kdmpvaW5zcXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0Mjk4NTksImV4cCI6MjExMTAwNTg1OX0.iAF8u4asvwWCwHBdu6Ff6bKlYoM5lZQuKTFAJ1PyRog.';

const getSupabaseConfig = () => {
  const savedConfig = localStorage.getItem('eliros_supabase_config');
  if (savedConfig) {
    try {
      const parsed = JSON.parse(savedConfig);
      if (parsed.url && parsed.key) {
        return parsed;
      }
    } catch (e) {
      // ignore
    }
  }

  return {
    url: DEFAULT_SUPABASE_URL,
    key: DEFAULT_SUPABASE_KEY
  };
};

const config = getSupabaseConfig();

export const supabase = (config.url && config.key) 
  ? createClient(config.url, config.key) 
  : null;

export const saveSupabaseConfig = (url: string, key: string) => {
  // Clean trailing /rest/v1 if included
  const cleanUrl = url.replace(/\/rest\/v1\/?$/, '');
  localStorage.setItem('eliros_supabase_config', JSON.stringify({ url: cleanUrl, key }));
  window.location.reload();
};

export const getSupabaseStoredConfig = () => {
  return config;
};
