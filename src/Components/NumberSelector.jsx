import styled from "styled-components"
import { useState } from "react"


export const NumberSelector = (
  {error, setError,selectedNumber,setSelectedNumber}
) => {

  const arrNumber = [1 , 2 , 3 ,4 , 5, 6]
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }
  return (
   <div className="number-selector">
   <p className="error">{error}</p>
   <div className="flex">
     
      {
        arrNumber.map((value,i) =>{
          return(
            <Box
            isSelected={
              value===selectedNumber
            }
           onClick={()=>numberSelectorHandler(value)}>
            {value}
          </Box>
          )
        })
      }
   </div>
   <p>Select Number</p>
 
    </div>
  )
}
const Box = styled.div`
height:72px;
width:72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isSelected?"black" : "white")};
color: ${(props)=>(props.isSelected?"white" : "black")};



`

