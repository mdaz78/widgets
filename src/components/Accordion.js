import React, { useState } from 'react';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = items.map(({ title, content }, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {title}
        </div>
        <div className={`content ${active}`}>
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
}
