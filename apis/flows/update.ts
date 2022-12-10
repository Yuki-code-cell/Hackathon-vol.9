import { supabase } from '../../libs/supabase';

type TProps = {
  flowId: string;
  title: string;
  description: string;
};

export const updateFlow = async ({ flowId, title, description }: TProps) => {
  const { data, error } = await supabase
    .from('flows')
    .update({ title, description })
    .match({ id: flowId });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
