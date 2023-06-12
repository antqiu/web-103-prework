import { createClient } from '@supabase/supabase-js';

const URL = 'https://bfirypppkufomukbsusu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmaXJ5cHBwa3Vmb211a2JzdXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNzAxNzcsImV4cCI6MTk5NjY0NjE3N30.6fNJYb5fdusqhJKXcCi8zQVY9Dr08-_G7PVmpLHf2Rw';
export const supabase = createClient(URL, API_KEY);
