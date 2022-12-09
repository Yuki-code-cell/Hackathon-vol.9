import { supabase } from '../../libs/supabase';

export const getFlows = async () => {
  const { data } = await supabase
    .from('flows')
    .select('*')
    .then((res) => {
      return res;
    });
  return data;
};
