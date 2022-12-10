import { IpadicFeatures } from 'kuromoji';
import React from 'react';
import { useWikipedia } from '../../../hooks/useWikipedia';
import { useWikipediaStore } from '../../../stores/WikipediaStore';

import { WikiInfo } from './WikiInfo';
type TProps = {
  tokenizedText: IpadicFeatures[];
};
export const Advice = ({ tokenizedText }: TProps) => {
  useWikipedia({ inputValue: tokenizedText });
  const { wikipediaInfo } = useWikipediaStore();
  //   形態素解析された文字をwikipediaで検索して検索された結果の配列を渡している
  return (
    <>
      {wikipediaInfo.map((wiki) => {
        return (
          <WikiInfo
            key={wiki.pageid}
            id={wiki.pageid}
            title={wiki.title}
            content={wiki.snippet}
          />
        );
      })}
    </>
  );
};
