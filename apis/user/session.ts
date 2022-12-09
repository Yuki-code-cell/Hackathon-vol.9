import { supabase } from '../../libs/supabase';

export const session = async () => {
  const res = await supabase.auth.getSession().then((res) => {
    return res.data.session?.user;
  });
  return res;
};
