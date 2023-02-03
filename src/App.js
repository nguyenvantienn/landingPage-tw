import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
import './App.css';

import {useState,useEffect} from 'react'

function App() {
  const [windowSize , setWindowSize] =useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile,setIsMobile] = useState(false);
  // console.log(isMobile);
  useEffect(()=>{
    const handleSize = () =>{
      setWindowSize({
        width:window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize",handleSize);
    // handleSize();
    // Cleanup function
    return ()=>{
      window.removeEventListener("resize",handleSize);
    }
  });
  useEffect(()=>{
    setIsMobile( windowSize.width < 500)
    
  },[windowSize])


  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-700 to-purple-500 text-white">
        <NavBar isMobile={isMobile}/>
        <Slogan/>
        <Content/>
    </div>

  );
}

export default App;
