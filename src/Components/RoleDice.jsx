import styled from "styled-components"




export const RoleDice = ({roleDice,currentDice}) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}> 
      <img src={`/images/dices/dice${currentDice}.jpg`} alt="dice1" width={300} height={300} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
display: flex;
justify-content: center;
margin-top:48px ;
flex-direction: column;
align-items: center;

p{
  font-size: 24px;
margin-top: -4px;
}
.dice{
  cursor: pointer;

}
`