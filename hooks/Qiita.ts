import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Qiita = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://qiita.com/api/v2/items');

      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};

export default Qiita;
