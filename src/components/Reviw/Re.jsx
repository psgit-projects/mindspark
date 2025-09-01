import React from 'react';
import './Re.css';
import user_1 from '../../asset/user-1.png';
import user_2 from '../../asset/user-2.png';
import user_3 from '../../asset/user-3.png';
import user_4 from '../../asset/user-4.png';

const testimonials = [
  {
    id: 1,
    image: user_1,
    name: 'William',
    location: 'MindSpark, USA',
    feedback: 'MindSpark website offers a wide range of courses, catering to various fields including technology, business, and soft skills development. With a team of experienced instructors and a user-friendly interface, MindSpark ensures that students receive comprehensive learning experiences.',
  },
  {
    id: 2,
    image: user_2,
    name: 'Alex',
    location: 'MindSpark, USA',
    feedback: 'MindSpark website offers a wide range of courses, catering to various fields including technology, business, and soft skills development. With a team of experienced instructors and a user-friendly interface, MindSpark ensures that students receive comprehensive learning experiences.',
  },
  {
    id: 3,
    image: user_3,
    name: 'Rollex',
    location: 'MindSpark, USA',
    feedback: 'MindSpark website offers a wide range of courses, catering to various fields including technology, business, and soft skills development. With a team of experienced instructors and a user-friendly interface, MindSpark ensures that students receive comprehensive learning experiences.',
  },
  {
    id: 4,
    image: user_4,
    name: 'Valen',
    location: 'MindSpark, USA',
    feedback: 'MindSpark website offers a wide range of courses, catering to various fields including technology, business, and soft skills development. With a team of experienced instructors and a user-friendly interface, MindSpark ensures that students receive comprehensive learning experiences.',
  },
];

const Re = () => {
  return (
    <div className="re">
      <div className="sl">
        <ul>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <div className="sle">
                <div className="ul">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.feedback}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Re;
