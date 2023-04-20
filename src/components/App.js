import { useState } from 'react';
import Scorecard from './Scorecard';
import Button from './Button';
import Form from './Form';
import Commentory from './Commentory'

function App() {
  const [score, setscore] = useState(0); // update score in scorecard
  const [wicket, setwicket] = useState(0); // update wicket
  const [gameOver, setgameOver] = useState(false); // tell game is over or not
  const [run, setrun] = useState(0); // update run in the form for commentator
  const [comment, setcomment] = useState(""); // commentator made comment in string
  const [over, setover] = useState([]); // every ball -- runs and commentory store in this array
  const [totalOver, settotalOver] = useState(0.0) // total over in the score card
  const [currball, setcurrball] = useState(0.1) // this will show over in the commentory section


  const handlebutton = (e)=>{
    setrun(e.target.innerHTML);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(run==="wicket"){
      setwicket(wicket+1);
      wicket===9?(setgameOver(true)):(setgameOver(false))
    }
    else{
      const curr = parseInt(run);
      const totalrun = curr+score;
      setscore(totalrun);
    }

    // this will set every ball commentory in over array
    over.unshift(<span>{`(${currball}), ${run==="0"?"No run":run} , ${comment}`}</span>);
    setover(oldarray=>[...oldarray])

    // update over in the scorecard
    if(totalOver.toString().split(".")[1]==="5"){
      const firstpart = parseInt(totalOver.toString().split(".")[0])+1;
      settotalOver(`${firstpart}.0`)
    }
    else{
      if(totalOver.toString().split(".")[1]===undefined){
        settotalOver(totalOver+0.1)
      }
      else{
        const firstpart = totalOver.toString().split(".")[0];
        const secondpart = parseInt(totalOver.toString().split(".")[1])+1;
        settotalOver(`${firstpart}.${secondpart}`)
      }
    }
    // this will update every ball in commentory section
    if(currball.toString().split(".")[1]==="6"){
      const firstcurrball = parseInt(currball.toString().split(".")[0])+1;
      setcurrball(`${firstcurrball}.1`)
    }
    else{
      const firstpartcurrball = currball.toString().split(".")[0];
      const secondpartcurrball = parseInt(currball.toString().split(".")[1])+1;
      setcurrball(`${firstpartcurrball}.${secondpartcurrball}`)
    }
  }
  const handleComment = (e)=>{
    setcomment(e.target.value);
  }
  return (
    <div className="App">
      <h1>Score Keeper</h1>
      <Scorecard score={score} wicket={wicket} totalOver={totalOver} />
      {gameOver?(
        <h1>Game Over</h1>
      ):(
      <>
        <Button handlebutton={handlebutton}/>
        <Form handleSubmit={handleSubmit} run={run} handleComment={handleComment} />
      </>
      )}
      <hr />
      <Commentory over={over} />
    </div>
  );
}

export default App;
