import { supabase } from '../../libs/supabase';
import { TMyFlow } from '../../types/MyFlow';
type TProps = {
  id: string;
};
export const getFlow = async ({ id }: TProps): Promise<TMyFlow[] | null> => {
  const { data } = await supabase
    .from('flows')
    .select('*')
    .eq('id', id)
    .then((res) => {
      return res;
    });
  return data;
};
