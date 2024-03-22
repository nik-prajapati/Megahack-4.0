import React from 'react'
import NavBar from '../components/NavBar'
import './HomePage.css'
import animation from '../assets/mind.json'
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';


function HomePage() {
  return (
    <div className='container'>
    <NavBar/>
      <div className="columns">
        <div className="column1">
        <Typewriter
      options={{
        strings: ["Together, let's illuminate the path to mental well-being"],
        autoStart: true,
        loop: true,
        speed: 200,
        deleteSpeed: 100,
        delay: 75,
        pauseFor: 1000,
      }}
      
    />
        </div>
        <div className="column2">
        <Lottie animationData={animation} loop={true} autoplay={true} speed={1} style={{ width: '500px', height: '500px' }} />
   
        </div>
      
      </div>
    </div>
  )
}

export default HomePage
