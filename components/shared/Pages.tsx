import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { LinkTo } from '../atoms/LinkTo';
import { BackGround } from './BackGround';
import { Header } from './Header';
type TProps = {
  children: ReactNode;
  className?: string;
};
export const Pages = ({ children, className }: TProps) => {
  const router = useRouter();
  return (
    <>
      <Header />
      {router.pathname !== '/' && (
        <div className="my-10 text-center">
          <LinkTo href="/">トップに戻る</LinkTo>
        </div>
      )}

      <div className={`${className}`}>{children}</div>
      <BackGround />
    </>
  );
};
