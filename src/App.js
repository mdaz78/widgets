import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite js framework among engineers',
  },
  {
    title: 'How you use React?',
    content: 'You use react by using components',
  },
];

export default function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
