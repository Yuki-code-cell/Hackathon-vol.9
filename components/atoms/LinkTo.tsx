import Link from 'next/link';
import React, { ReactNode } from 'react';
type TProps = {
  href: string;
  children: ReactNode;
  className?: string;
};
export const LinkTo = ({ href, children, className }: TProps) => {
  return (
    <Link
      href={href}
      className={`${className} border-2 rounded-md py-1 px-2 border-black hover:bg-slate-400`}
    >
      {children}
    </Link>
  );
};
