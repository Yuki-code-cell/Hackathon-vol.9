import React, { useState, useEffect } from 'react';
import * as wikipedia from 'wikipedia-js';

declare module 'wikipedia-js' {
  export function search(term: string): Promise<any>;
  export function getArticle(title: string): Promise<any>;
}
type TProps = {
  term: string;
};
export function useWikipedia({ term }: TProps) {
  const [results, setResults] = useState([]);

  const wikiFetch = async (inputValue:any) => { //asyncで非同期処理だと宣言する
    const fetchValue = fetch(`https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=45&srsearch=${inputValue}`, {
      method: "GET"
    })
      .then((value) => {
        return value.json(); //wikipediaからのデータをJSON形式に変換
      })
      .catch(() => {
        alert("wikipediaにうまくアクセスできないようです、、");
      });

  // useEffect(() => {
  //   const endpoint = 'https://en.wikipedia.org/w/api.php';
  //   const params = {
  //     action: 'query',
  //     list: 'search',
  //     srsearch: term,
  //     format: 'json',
  //   };

    fetch(endpoint, {
      method: 'GET',
      params,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch Wikipedia API');
        }
      })
      .then((data) => {
        const results = data.query.search;
        console.log(results);
        setResults(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [term]);

  return results;
}

// function useWikipedia(topic:any) {
// 	const [results, setResults] = useState([]);

// 	useEffect(() => {
//     wikipedia.searchArticle({ query: topic, format: 'json' }, (err, jsonWikiData) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       const articles = jsonWikiData.query.search;
//       const updatedResults = articles.map(article => ({
//         title: article.title,
//         snippet: article.snippet,
//         url: https://ja.wikipedia.org/wiki/${encodeURIComponent(article.title)},
//       }));
//       setResults(updatedResults);
//     });
//   }, [topic]);

//   return results;
// }
