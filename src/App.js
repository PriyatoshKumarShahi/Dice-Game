import { useState } from 'react';
import './App.css';
import { StartGame } from './Components/StartGame';
import { GamePlay } from './Components/GamePlay';
import styled  from 'styled-components';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev) =>!prev)
  }
  return (
    <div>
      
      {
        isGameStarted? <GamePlay/>:<StartGame toggle={toggleGamePlay}/>
      }
    </div>
  );
}

export default App;
