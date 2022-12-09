import { useQuery } from 'react-query';
import { session } from '../../apis/user/session';
import { signInWithGoogle } from '../../util/Auth/signin';
import { signout } from '../../util/Auth/signout';
import { Button } from '../atoms/Button';

export const Header = () => {
  const { data } = useQuery('user', () => session());
  return (
    <div className="w-full h-20 flex items-center backdrop-blur-3xl">
      <p className="text-3xl font-bold p-5 ">resolver</p>
      {!data ? (
        <Button onClick={signInWithGoogle} className=" ml-auto m-5">
          ログイン
        </Button>
      ) : (
        <Button
          onClick={() => {
            signout()
              .then(() => {
                window.location.reload();
              })
              .catch((err) => {
                alert(err);
              });
          }}
          className=" ml-auto m-5"
        >
          ログアウト
        </Button>
      )}
    </div>
  );
};
