import React, { useState, useEffect } from 'react';
import wikipedia from 'wikipedia-js';

function useWikipedia(topic) {
	const [results, setResults] = useState([]);

	useEffect(() => {
    wikipedia.searchArticle({ query: topic, format: 'json' }, (err, jsonWikiData) => {
      if (err) {
        console.error(err);
        return;
      }
      const articles = jsonWikiData.query.search;
      const updatedResults = articles.map(article => ({
        title: article.title,
        snippet: article.snippet,
        url: https://ja.wikipedia.org/wiki/${encodeURIComponent(article.title)},
      }));
      setResults(updatedResults);
    });
  }, [topic]);

  return results;
}