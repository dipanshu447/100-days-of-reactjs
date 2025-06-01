import { useMemo, useState } from "react";
import languages from "./languages.js";
import Header from './Header.jsx';
import clsx from 'clsx';
import { getFarewellText, getRandomWord } from './utils.js';
import Confetti from 'react-confetti';

export default function AssemblyEndgame() {
  const [userGuess, setuserGuess] = useState([]);
  const [currentWord, setcurrentWord] = useState(() => getRandomWord());
  const wrongGuessCount = userGuess.reduce((count, e) => {
    if (!(currentWord.includes(e))) count++;
    return count;
  }, 0);
  const gameWon = Array.from(currentWord).every(l => userGuess.includes(l));
  const gamelost = wrongGuessCount >= languages.length - 1;
  const gameOver = gameWon || gamelost;
  const lastGuessedletter = userGuess[userGuess.length - 1];
  const lastGuess = lastGuessedletter && !currentWord.includes(lastGuessedletter);

  const langElements = languages.map((lang, index) => {
    const lost = index < wrongGuessCount;
    const fade = clsx("font-semibold px-2 py-1.5 rounded-sm", lost && "opacity-10")
    return (
      <span key={lang.name} className="flex relative">
        <span className={fade} style={{ backgroundColor: lang.backgroundColor, color: lang.color }}>
          {lang.name}
        </span>
        {lost && <span className="absolute inset-0 flex justify-center items-center">💀</span>}
      </span>
    )
  });

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const hint = useMemo(() => {
    const randomVs = Array.from(new Set(currentWord)).sort(() => 0.5 - Math.random());
    const finalhint = randomVs.slice(0,(currentWord.length/2)-1);
    setuserGuess(finalhint);
    return finalhint;
  },[currentWord]);

  const inputWord = Array.from(currentWord).map((letter, index) => {
    const missingLetters = clsx("bg-[#323232] text-[#F9F4DA] w-[40px] h-[40px] font-bold border-b-2 text-center flex justify-center items-center border-b-[#F9F4DA] capitalize", {
      "!text-[#EC5D49]": !userGuess.includes(letter) && gamelost
    })
    const revealLetters = gamelost || userGuess.includes(letter) || hint.includes(letter);
    return (
      <span key={index} className={missingLetters}>{revealLetters ? letter : ""}</span>
    )
  });

  const keyboard = Array.from(alphabet).map(l => {
    const Guess = userGuess.includes(l);
    const correctGuess = Guess && currentWord.includes(l);
    const wrongGuess = Guess && !currentWord.includes(l);
    const custyles = clsx({
      "text-[#1E1E1E] w-[40px] h-[40px] text-md font-semibold border-1 text-center flex justify-center items-center border-[#D7D7D7] rounded-sm capitalize cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed": true,
      "bg-[#10A95B]": correctGuess,
      "bg-[#EC5D49]": wrongGuess,
      "bg-[#FCBA29]": !Guess
    })

    return (
      <button key={l}
        className={custyles}
        disabled={gameOver}
        aria-disabled={userGuess.includes(l)}
        aria-label={`Letter ${l}`}
        onClick={() => addUserGuesses(l)}>{l}</button>
    )
  });

  function addUserGuesses(letter) {
    if (userGuess.includes(letter)) return;
    setuserGuess(prev => [...prev, letter]);
  }

  let farwell = {
    lost: lastGuess,
    message: () => getFarewellText(languages[wrongGuessCount - 1].name)
  };

  function startnewGame() {
    setcurrentWord(getRandomWord());
    setuserGuess([]);
  }

  return (
    <main className="m-0 font-[Hanken_Grotesk] bg-[#262626] text-[#D9D9D9] px-5 py-10 h-auto w-full sm:h-screen flex flex-col items-center overflow-hidden">
      <Header gameWon={gameWon} gameOver={gameOver} gamelost={gamelost} farwell={farwell} />
      <section className="my-10 w-xs sm:w-md flex gap-1 justify-center flex-wrap">
        {langElements}
      </section>
      <section className="w-sm flex gap-1 justify-center">
        {inputWord}
      </section>
      <section className="mt-12 sm:w-lg flex gap-2 justify-center flex-wrap">
        {keyboard}
      </section>
      <section className="sr-only">
        <p>
          {currentWord.includes(lastGuessedletter) ?
            `Correct! The letter ${lastGuessedletter} is in the word.` :
            `Sorry! The letter ${lastGuessedletter} is not in the word.`
          }
          You have {languages - 1} attempts left.
        </p>
        <p>
          Current Word : {Array.from(currentWord).map(letter =>
            userGuess.includes(letter) ? letter + "." : "blank.")
            .join(" ")}
        </p>
      </section>
      {gameOver && <button
        className="mt-8 bg-[#11B5E5] border-1 border-[#D7D7D7] text-[#1E1E1E] font-bold px-15 py-2 rounded-sm cursor-pointer"
        onClick={startnewGame}
      >
        New Game
      </button>}
      {gameWon && <Confetti recycle={false} numberOfPieces={1000} />}
    </main>
  )
}