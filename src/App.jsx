import './App.css';
import React, { useState } from 'react';
//import {useNavigate} from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './Animation - 1705978106919.json';
import animationData2 from './Animation - 1705978244592.json';
import animationData3 from './Animation - 1705978271419.json';

function App() {
  const [position, setPosition] = useState({ top: '75%', left: '55%' });
  const animations = [animationData, animationData2, animationData3];
  const [animationIndex, setAnimationIndex] = useState(2);
 // const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animations[animationIndex],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleNoClick = () => {
    console.log('No button clicked!');
    const newTop = Math.floor(Math.random() * 80) + '%';
    const newLeft = Math.floor(Math.random() * 80) + '%';
    setPosition({ top: newTop, left: newLeft });
    setAnimationIndex(1); // Set animation to animationData2
  }

  const handleYesClick = () =>  {
    console.log('Yes button clicked!');
    setAnimationIndex(0); // Set animation to animationData3
   // navigate("./Ok.jsx");
  }

  return (
    <>
      <h1 className='head'
      style={{ position: 'absolute', top: '65%', left: '45%', fontFamily:'FontsFree-Net-SF-Compact-Rounded-Bold' }}
      >Do You Love Me?</h1>
      <button className="test" onClick={handleYesClick} 
      style={{ position: 'absolute', top: '75%', left: '40%' }}
      >YES</button>
      <button className="test1" onMouseEnter={handleNoClick}
        style={{ position: 'absolute', top: position.top, left: position.left }}
      >NO</button>
      <div className="pic"><Lottie options={defaultOptions} height={300} width={300} /></div>
    </>
  );
}

export default App;