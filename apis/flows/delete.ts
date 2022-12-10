import { supabase } from '../../libs/supabase';
type TProps = {
  flowId: string;
};
export const deleteFlow = async ({ flowId }: TProps) => {
  const { data, error } = await supabase
    .from('flows')
    .delete()
    .match({ id: flowId });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
