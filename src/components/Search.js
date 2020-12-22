import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DEBOUNCE_TIMING = 500;

export default function Search() {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, DEBOUNCE_TIMING);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        headers: {
          Origin: 'http://localhost:3000',
          'Content-Type': 'application/json',
        },
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  const renderedResults = results.map(({ title, snippet, pageid }) => {
    return (
      <div className='item' key={pageid}>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${pageid}`}
            className='ui button'
            target='_blank'
            rel='noreferrer'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'> {title} </div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setDebouncedTerm(term);
  };

  return (
    <div>
      <div className='ui form'>
        <form className='field' onSubmit={(e) => onFormSubmit(e)}>
          <label htmlFor='search-term'>Enter Search Term</label>
          <input
            id='search-term'
            type='text'
            className='input'
            value={term}
            onChange={({ target: { value } }) => setTerm(value)}
          />
        </form>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}
