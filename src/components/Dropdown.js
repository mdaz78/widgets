import React, { useState, useEffect } from 'react';

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', () => console.log('clicked'));
  }, []);

  const renderedOptions = options.map((option) => {
    const { label, value } = option;

    if (value === selected.value) {
      return null;
    }

    return (
      <div
        className='item'
        key={value}
        onClick={() => onSelectedChange(option)}
      >
        {label}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label htmlFor='' className='label'>
          Select a Color
        </label>
        <div
          className={`ui selection dropdown ${open && 'visible active'}`}
          onClick={() => setOpen(!open)}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open && 'visible transition'}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
