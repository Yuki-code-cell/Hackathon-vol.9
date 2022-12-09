import React from 'react';
type TProps = {
  id: number;
  title: string;
  content: string;
};
export const WikiInfo = ({ id, title, content }: TProps) => {
  return (
    <div className="text-center bg-white rounded-md border-2 shadow-2xl mb-5 mx-5 p-5">
      <a href="">
        <p>{title}</p>
        {/* <p>{content}</p> */}
      </a>
    </div>
  );
};
