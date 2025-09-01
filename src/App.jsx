import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Cm from './components/camps/Cm'
import Re from './components/Reviw/Re'
import Contact from './components/contact/Contact.jsx'
import Foooter from './components/footer/Foooter'
import Video from './components/videoPlayer/Video'





const App = () => {
  const [play, setPlay] = useState(false)
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="ct">
        <Title subTitle='Our Program' title='What We Offer'></Title>
        <Programs></Programs>
      <About setPlay={setPlay}></About>
      <Title subTitle='Gallery' title='Campus Photos' ></Title>
<Cm></Cm>
<Title subTitle='Review' title='What Student Says' ></Title>
<Re></Re>
<Title subTitle='Contact Us' title='Get In Touch' ></Title>
<Contact></Contact>
<Foooter></Foooter>

      </div>
      <Video play={play} setPlay={setPlay}></Video>
    </div>
  )
}

export default App
