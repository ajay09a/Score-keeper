import { useState } from 'react';

function App() {
  const [score, setscore] = useState(0);
  const [wicket, setwicket] = useState(0);
  const [gameOver, setgameOver] = useState(false)

  const handlebutton = (e)=>{
    const run = parseInt(e.target.innerHTML);
    const totalrun = run+score;
    setscore(totalrun);
  }
  const handlewicket = (e)=>{
    setwicket(wicket+1);
    wicket===10?(setgameOver(true)):(setgameOver(false))
  }
  return (
    <div className="App">
      <h1>Score Keeper</h1>
      <h3>Score:{score}/{wicket}</h3>
      {gameOver?(
        <h1>Game Over</h1>
      ):(
      <>
        <button onClick={handlebutton}>1</button>
        <button onClick={handlebutton}>2</button>
        <button onClick={handlebutton}>3</button>
        <button onClick={handlebutton}>4</button>
        <button onClick={handlebutton}>5</button>
        <button onClick={handlebutton}>6</button>
        <button onClick={handlewicket}>wicket</button>
      </>
      )}
    </div>
  );
}

export default App;
