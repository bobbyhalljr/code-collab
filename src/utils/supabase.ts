
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wsipfedpfnodstfatgul.supabase.co'
const supabaseKey = `${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`
export const supabase = createClient(supabaseUrl, supabaseKey)