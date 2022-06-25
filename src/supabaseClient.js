import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bcijmrntwabtjamrpenk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjaWptcm50d2FidGphbXJwZW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYxNTQ4NjQsImV4cCI6MTk3MTczMDg2NH0.uNy5g-tvtIUl2B8KJEC1BaT9Q5GieIlLaTTsfQH7Hlk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)