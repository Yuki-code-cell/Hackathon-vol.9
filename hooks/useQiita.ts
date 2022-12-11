import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useQiita = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://qiita.com/api/v2/items?query=${引数の名前}'
      );

      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(fetchArticles());
  }, []);

  // return (
  //   <ul>
  //     {articles.map((article) => (
  //       <li key={article.id}>{article.title}</li>
  //     ))}
  //   </ul>
  // );
};

export default useQiita;
