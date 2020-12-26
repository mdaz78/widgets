import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

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

const options = [
  {
    label: 'The Color red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default function App() {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        labelName={'Select a beautiful color'}
        onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
}
