import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nrpzgepwppjattfsheus.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kNrADtzVnpmt1FhkTVAV8w_kcsjdJri";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
