import { useQuery } from 'react-query';
import { session } from '../../apis/user/session';
import { Form } from '../../components/organisms/flows/Form';
import { Pages } from '../../components/shared/Pages';
const Create = () => {
  const { data: userId } = useQuery('user', () => session());
  return (
    <Pages className="">
      <Form userId={userId?.id} />
    </Pages>
  );
};
export default Create;
