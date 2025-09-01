import React from 'react';
import './about.css'
import about_img from '../../asset/about.png'
import play_icon from '../../asset/play-icon.png'
function About({setPlay}) {
  return (
    <div className='ab'>
    <div className="ab-le">
    <img src={about_img} alt="" className='about-img' />
    <img src={play_icon} alt="" className='play-icon' onClick={()=>{
      setPlay(true)
    }} />
    </div>
    <div className="ab-rt">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nuturing Tommorrow Leaders Today</h2>
      <p>At Our University, we believe in shaping the future by providing exceptional education through our diverse range of programs. Our courses are meticulously designed to blend theoretical knowledge with practical application, ensuring students are well-prepared to tackle real-world challenges. With experienced faculty, cutting-edge facilities, and a commitment to innovation, we aim to nurture curiosity, creativity, and leadership in every student.</p>
       <p> Our programs offer specialized learning opportunities across various fields, including science, technology, arts, business, and more. Students gain access to state-of-the-art laboratories, collaborative learning environments, and global internship opportunities. Beyond academics, our vibrant campus life fosters personal growth through clubs, events, and cultural activities.</p>
      <p>Join us on a journey to achieve academic excellence and create a meaningful impact in the world. Explore our programs today and discover how we can help you shape your future.</p>

    </div>
    </div>
  );
}

export default About;
