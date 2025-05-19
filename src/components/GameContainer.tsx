import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import ScrambledWord from './ScrambledWord';
import InputBox from './InputBox';
import HintButton from './HintButton';
import ScoreBoard from './ScoreBoard';
import Feedback from './Feedback';
import { useGame } from '../hooks/useGame';
import FloatingElements from './FloatingElements';

const GameContainer: React.FC = () => {
  const {
    scrambledWord,
    currentWord,
    currentHint,
    score,
    hasUsedHint,
    showHint,
    isCorrect,
    isWrong,
    resetWrongState,
    processGuess,
    useHint,
    nextWord,
    restartGame,
  } = useGame();

  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      processGuess(guess);
    }
  };

  const handleNextWord = () => {
    nextWord();
    setGuess('');
  };

  useEffect(() => {
    if (isCorrect) {
      setGuess('');
    }
  }, [isCorrect]);

  return (
    <div className="relative w-full max-w-md">
      <FloatingElements />
      
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8 relative z-10 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center">
            <Sparkles className="mr-2 text-purple-400" size={24} />
            Word Puzzle
          </h1>
          <ScoreBoard score={score} />
        </div>

        {isCorrect ? (
          <Feedback 
            isCorrect={true} 
            correctWord={currentWord}
            onNextWord={handleNextWord}
          />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <ScrambledWord word={scrambledWord} />
            
            <div className="space-y-4">
              <InputBox 
                value={guess} 
                onChange={setGuess} 
                isWrong={isWrong}
                resetWrongState={resetWrongState}
              />
              
              <div className="flex justify-between space-x-3">
                <HintButton 
                  onClick={useHint} 
                  disabled={hasUsedHint || isCorrect} 
                />
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ring-offset-slate-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
        
        {showHint && (
          <div className="mt-4 p-3 bg-amber-900/50 backdrop-blur-sm border border-amber-700/50 rounded-lg text-amber-200 animate-fadeIn">
            <p className="font-medium">💡 Hint: {currentHint}</p>
          </div>
        )}
        
        <div className="mt-8 pt-4 border-t border-slate-700">
          <button
            onClick={restartGame}
            className="w-full py-2 px-4 bg-slate-700 text-slate-200 rounded-lg font-medium hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ring-offset-slate-800"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameContainer;