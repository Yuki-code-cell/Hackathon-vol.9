import { useEffect, useState } from 'react';
import { supabase } from '../../libs/supabase';
import { signInWithGoogle } from '../../util/Auth/signin';
import { signout } from '../../util/Auth/signout';
import { Button } from '../atoms/Button';

export const Header = () => {
  const [data, setData] = useState('' as any);
  useEffect(() => {
    const session = async () => {
      const res = await supabase.auth.getSession();
      setData(res.data.session?.user);
    };
    session();
  }, []);
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
