import React from 'react';
import './Cm.css'
import gallery_1 from '../../asset/gallery-1.png'
import gallery_2 from '../../asset/gallery-2.png'
import gallery_3 from '../../asset/gallery-3.png'
import gallery_4 from '../../asset/gallery-4.png'

function Cm() {
  return (
    <div className='cm'>
      <div className="g">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here </button>
    </div>
  );
}

export default Cm;
