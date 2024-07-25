import styled from "styled-components"
export const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play Dice Game?</h2>
        <div className="text">
            <p>1. Select Any Number.</p>
            <p>2. Click on the dice.</p>
            <p>3. After click on dice if selected number is equal to dice number you will get +4 points.</p>
            <p>4. If you get wrong guess then 1 point will be deducted.</p>
        </div>
    </RulesContainer>
  )
}

const RulesContainer = styled.div`

background-color: #fbf1f1;
padding: 20px;
max-width: 800px;
margin: auto;
margin-top: 40px;
border-radius: 10px;

h2{
    font-size: 24px;


}
.text{
    margin-top:24px;

}
`