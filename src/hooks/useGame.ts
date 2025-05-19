import { useState, useCallback, useMemo } from 'react';
import { words } from '../utils/wordList';
import { shuffleWord } from '../utils/shuffleWord';

export const useGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hasUsedHint, setHasUsedHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  // Get current word and hint from the list
  const currentWord = useMemo(() => words[currentIndex].word, [currentIndex]);
  const currentHint = useMemo(() => words[currentIndex].hint, [currentIndex]);

  // Generate scrambled version of the current word
  const scrambledWord = useMemo(() => 
    shuffleWord(currentWord), [currentIndex, currentWord]
  );

  // Process the player's guess
  const processGuess = useCallback((guess: string) => {
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      // Correct answer
      setScore(prevScore => prevScore + 10);
      setIsCorrect(true);
    } else {
      // Wrong answer
      setIsWrong(true);
    }
  }, [currentWord]);

  // Reset wrong state
  const resetWrongState = useCallback(() => {
    setIsWrong(false);
  }, []);

  // Show hint and deduct points
  const useHint = useCallback(() => {
    if (!hasUsedHint) {
      setShowHint(true);
      setHasUsedHint(true);
      setScore(prevScore => Math.max(0, prevScore - 5)); // Prevent negative score
    }
  }, [hasUsedHint]);

  // Move to next word
  const nextWord = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    setIsCorrect(false);
    setIsWrong(false);
    setShowHint(false);
    setHasUsedHint(false);
  }, []);

  // Restart game
  const restartGame = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setIsCorrect(false);
    setIsWrong(false);
    setShowHint(false);
    setHasUsedHint(false);
  }, []);

  return {
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
  };
};