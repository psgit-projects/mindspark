import React, { useRef } from 'react';
import './Re.css';
import user_1 from '../../asset/user-1.png';
import user_2 from '../../asset/user-2.png';
import user_3 from '../../asset/user-3.png';
import user_4 from '../../asset/user-4.png';

const testimonials = [
  { id: 1, image: user_1, name: 'William', location: 'MindSpark, USA', feedback: 'I loved the technology courses...' },
  { id: 2, image: user_2, name: 'Alex', location: 'MindSpark, USA', feedback: 'MindSpark’s business courses...' },
  { id: 3, image: user_3, name: 'Rollex', location: 'MindSpark, USA', feedback: 'Soft skills and personal development...' },
  { id: 4, image: user_4, name: 'Valen', location: 'MindSpark, USA', feedback: 'Great learning experience!...' },
];

const Re = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const prevSlide = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <div className="re">
      <button className="n-btn" onClick={prevSlide}>&lt;</button>
      <button className="b-btn" onClick={nextSlide}>&gt;</button>
      <div className="sl" ref={sliderRef}>
        <ul>
          {testimonials.map(t => (
            <li key={t.id}>
              <div className="sle">
                <div className="ul">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <h3>{t.name}</h3>
                    <span>{t.location}</span>
                  </div>
                </div>
                <p>{t.feedback}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Re;
