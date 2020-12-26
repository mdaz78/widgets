import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Convert({ language, text }) {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const getTranslatedText = async () => {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        },
      );

      setTranslatedText(response.data.data.translations[0].translatedText);
    };

    getTranslatedText();
  }, [language, debouncedText]);

  return (
    <div>
      <h3>{translatedText}</h3>
    </div>
  );
}
