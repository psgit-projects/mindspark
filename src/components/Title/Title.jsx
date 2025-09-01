import React from 'react';
import './Ti.css'
function Title({subTitle, title}) {
  return (
    <div className='ti'>
      <p>{subTitle}</p>
      <h1>{title}</h1>
      
    </div>
  );
}

export default Title;
