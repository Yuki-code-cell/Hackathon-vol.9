import { supabase } from '../../libs/supabase';
type TProps = {
  userId: string;
  title: string;
  description: string;
};
export const createFlow = async ({ userId, title, description }: TProps) => {
  await supabase.from('flows').insert({
    user_id: userId,
    title,
    description,
  });
};
