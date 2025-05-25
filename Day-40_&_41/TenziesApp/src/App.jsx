import { useEffect, useRef, useState } from 'react'
import Dice from './Dice.jsx'
import { nanoid } from 'nanoid';
import Confetti from "react-confetti";

export default function App() {
  const [Dices, setDices] = useState(() => generateAllNewDice());
  const winGameFocus = useRef(null);
  const rollCounter = useRef(0);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(i => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }));
  }

  function rollDices() {
    if (tenzies) {
      rollCounter.current = 0;
      setDices(generateAllNewDice())
    } else {
      setDices(prev => prev.map(die => ((!die.isHeld) ? { ...die, value: Math.ceil(Math.random() * 6) } : die)));
      rollCounter.current += 1;
    }
  }

  function onHold(id) {
    setDices(prev => prev.map(die => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)));
  }

  let allDices = Dices.map(dice => <Dice
    key={dice.id}
    value={dice.value}
    isHeld={dice.isHeld}
    onHold={() => onHold(dice.id)}
  />);

  const tenzies = Dices.every(die => die.isHeld && die.value === Dices[0].value);
  const previousScore = useRef(0);
  useEffect(() => {
    if(tenzies) {
      winGameFocus.current.focus();
      const previous = Number(localStorage.getItem("RoundScore"));
      if(previous === 0 || rollCounter.current < previous) localStorage.setItem("RoundScore",rollCounter.current);
    }
    previousScore.current = Number(localStorage.getItem("RoundScore"));
  } ,[tenzies]);

  let previousScoreMessage = (previousScore.current !== 0) && (previousScore.current > rollCounter.current && `YOU SCORED HIGHER THAN YOUR PREVIOUS SCORE: ${previousScore.current}`);

  return (
    <main>
      {tenzies && <Confetti />}
      <div aria-live='polite' className="sr-only">
        {tenzies && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {allDices}
      </div>
      {(tenzies && (previousScore.current !== 0 && !(previousScore.current <= rollCounter.current))) && <div className="rounds">{previousScoreMessage}</div>}  
      {tenzies  && <div className="rounds">You did it in {rollCounter.current} rounds</div>}
      <button onClick={rollDices} className='roll' ref={winGameFocus}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}