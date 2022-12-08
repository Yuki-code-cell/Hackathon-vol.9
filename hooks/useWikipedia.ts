import React, { useState, useEffect } from 'react';

type TProps = {
  inputValue: string;
};
export const useWikiFetch = async ({ inputValue }: TProps) => {
  //asyncで非同期処理だと宣言する
  fetch(
    `https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=45&srsearch=${inputValue}`,
    {
      method: 'GET',
    }
  )
    .then((value) => {
      return value.json(); //wikipediaからのデータをJSON形式に変換
    })
    .then((res) => {
      return res.query.search;
    })
    .catch((err) => {
      console.log(err);
    });
};
