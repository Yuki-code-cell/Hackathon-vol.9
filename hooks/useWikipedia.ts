import { useEffect } from 'react';
import { useWikipediaStore } from '../stores/WikipediaStore';
import { IpadicFeatures, TWikiResponse } from '../types/Wikipedia';
type TProps = {
  inputValue: IpadicFeatures[];
};
// 配列を受け取って中で全て計算してstateを返す
export const useWikipedia = ({ inputValue }: TProps): TWikiResponse[] => {
  const { wikipediaInfo, changeWikiInfo } = useWikipediaStore();
  //asyncで非同期処理だと宣言する
  useEffect(() => {
    inputValue.map((input) => {
      fetch(
        `https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=2&srsearch=${input.basic_form}`,
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
    });
  }, [inputValue]);
  return wikipediaInfo;
};
