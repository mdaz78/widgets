import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Search() {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [term]);

  const renderedResults = results.map(({ title, snippet, pageid }) => {
    return (
      <div className='item' key={pageid}>
        <div className='content'>
          <div className='header'> {title} </div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='search-term'>Enter Search Term</label>
          <input
            id='search-term'
            type='text'
            className='input'
            value={term}
            onChange={({ target: { value } }) => setTerm(value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}
