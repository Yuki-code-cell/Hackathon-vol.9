import { ReactNode } from 'react';
import { BackGround } from './BackGround';
import { Header } from './Header';
type TProps = {
  children: ReactNode;
  className?: string;
};
export const Pages = ({ children, className }: TProps) => {
  return (
    <>
      <Header />
      <div className={`${className}`}>{children}</div>
      <BackGround />
    </>
  );
};
