// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ahbmtqczztowrnbomxht.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoYm10cWN6enRvd3JuYm9teGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDA5MTYsImV4cCI6MjA2NTgxNjkxNn0._lSqnVY0B2iqMSLXl8bADYtnWPlKEnHijMvvNaZrUx8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);