import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({
  options,
  selected,
  onSelectedChange,
  label,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect((event) => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return function cleanup() {
      document.body.removeEventListener('click', onBodyClick);
    };
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
    <div className='ui form' ref={ref}>
      <div className='field'>
        <label htmlFor='' className='label'>
          {label}
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
