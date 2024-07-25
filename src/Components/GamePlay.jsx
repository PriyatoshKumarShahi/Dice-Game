import { useState } from "react"
import { NumberSelector } from "./NumberSelector"
import { RoleDice } from "./RoleDice"
import { TotalScore } from "./TotalScore"
import { Rules } from "./Rules"



export const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]= useState()
  const [currentDice,setCurrentDice]=useState(6);
  const [error,setError]=useState("")
  const [ showRules,setShowRules]=useState(false)



  const generateRandomNumber =(min,max)=>{
    return Math.floor(Math.random() * (max-min)+min)
  }
  const roleDice= ()=>{
    if(!selectedNumber){

      setError("You have not selected any number")
     return;
    }
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev )=>randomNumber);


if(selectedNumber==randomNumber){
  setScore((prev)=>prev+4)
}
else{
  setScore((prev) => prev-1)
}
setSelectedNumber(undefined);


  }

const resetScore = ()=>{
  setScore(0)
}



  return (
    <div>
    <main className="game-play">
     
      <TotalScore score={score}/>
     <NumberSelector error={error}
     setError={setError}
     selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}
     />
    </main>
    <RoleDice
    currentDice={currentDice}
    roleDice={roleDice}

    />
    <div className="btns">
      <button id="btn1" onClick={resetScore}>Reset Score</button>
      <button id="btn2" onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide":"Show"}Rules</button>
    </div>
    {showRules && <Rules/>}
 </div>
  )
}
