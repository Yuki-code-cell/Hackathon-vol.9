import { useRouter } from 'next/router';
import { Form } from '../../../../components/organisms/questions/Form';
import { Pages } from '../../../../components/shared/Pages';
const Create = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Pages className="">
      <Form flowId={id as string} />
    </Pages>
  );
};
export default Create;
