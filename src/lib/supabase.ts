import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hlpeopzlejlbvsvkkaiq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscGVvcHpsZWpsYnZzdmtrYWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NTIxMTgsImV4cCI6MjA4NTUyODExOH0.s056kuinfoy6aoFwrEK7pRBLsZmSoA9_Kqxct4FtJFE"
);