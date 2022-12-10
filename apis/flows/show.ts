import { supabase } from '../../libs/supabase';
import { TMyFlow } from '../../types/MyFlow';
type TProps = {
  userId: string;
};
export const getFlow = async ({
  userId,
}: TProps): Promise<TMyFlow[] | null> => {
  const { data } = await supabase
    .from('flows')
    .select('*')
    .eq('user_id', userId)
    .then((res) => {
      return res;
    });
  return data;
};
