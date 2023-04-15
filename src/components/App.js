import { useState } from 'react';
import Scorecard from './Scorecard';
import Button from './Button';
import Form from './Form';
import Commentory from './Commentory'

function App() {
  const [score, setscore] = useState(0);
  const [wicket, setwicket] = useState(0);
  const [gameOver, setgameOver] = useState(false);
  const [run, setrun] = useState(0);
  const [comment, setcomment] = useState("");
  const [over, setover] = useState([]);
  const [totalOver, settotalOver] = useState(0.0)



  const handlebutton = (e)=>{
    setrun(e.target.innerHTML);
  }
  const handlewicket = (e)=>{
    setrun(e.target.innerHTML);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(run==="wicket"){
      setwicket(wicket+1);
      wicket===10?(setgameOver(true)):(setgameOver(false))
    }
    else{
      const curr = parseInt(run);
      const totalrun = curr+score;
      setscore(totalrun);
    }
    over.unshift(<span>{`${run==="0"?"No run":run} , ${comment}`}</span>);
    setover(oldarray=>[...oldarray])
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
    // console.log(totalOver.toString().split(".")[1]);
  }
  const handleComment = (e)=>{
    setcomment(e.target.value)
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
