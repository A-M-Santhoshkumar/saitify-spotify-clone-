import React, { use, useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Home from './componets/Home'
import Opening from './componets/Opening'


function App() {
  
 const [isVisible, setIsVisible] = useState(true);
 useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 4000);
  return () => clearTimeout(timer);

 },[])
  return (
    <>
  {isVisible && <Opening/>}  
        <Home/>
    </>
  )
}

export default App
