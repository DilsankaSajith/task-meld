import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dlccbxcyfhjqeogcvyce.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsY2NieGN5ZmhqcWVvZ2N2eWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MTc5NDUsImV4cCI6MjAzMzQ5Mzk0NX0.7kOzIcxnDBwlguytdB3MF7ukeQHGLoUOFlaoZjbaGHw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
