import { useEffect } from 'react';
import { useWikipediaStore } from '../libs/store';
import { TWikiResponse } from '../types/Resolve';
type TProps = {
  inputValue: string;
};
export const useWikiFetch = ({ inputValue }: TProps): TWikiResponse[] => {
  const { wikipediaInfo, changeWikiInfo } = useWikipediaStore();
  //asyncで非同期処理だと宣言する
  useEffect(() => {
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
        changeWikiInfo(res.query.search);
        return res.query.search;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inputValue]);
  return wikipediaInfo;
};
