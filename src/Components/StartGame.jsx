

export const StartGame = ({toggle}) => {
  return (
    <div className="container">
        <img src="https://img.pikbest.com/ai/illus_our/20230427/7856e8e09452a22a387795fa97b8dbce.jpg!w700wp" alt="" />
       <div className="content">
        <h1>DICE GAME</h1>
        <button onClick={toggle}>Play Now</button>
        </div>
    </div>
  )
}
