import React, { useRef, useEffect } from 'react';

interface ScoreBoardProps {
  score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  const prevScoreRef = useRef(score);
  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prevScoreRef.current !== score && scoreRef.current) {
      // Add animation class
      scoreRef.current.classList.add('animate-pulse-once');
      
      // Color class based on score change
      if (score > prevScoreRef.current) {
        scoreRef.current.classList.add('text-green-500');
        scoreRef.current.classList.remove('text-red-500');
      } else if (score < prevScoreRef.current) {
        scoreRef.current.classList.add('text-red-500'); 
        scoreRef.current.classList.remove('text-green-500');
      }
      
      // Remove animation and color classes after animation ends
      const timer = setTimeout(() => {
        if (scoreRef.current) {
          scoreRef.current.classList.remove('animate-pulse-once', 'text-green-500', 'text-red-500');
        }
      }, 600);
      
      prevScoreRef.current = score;
      return () => clearTimeout(timer);
    }
  }, [score]);

  return (
    <div className="bg-indigo-50 px-4 py-2 rounded-lg">
      <p className="font-bold text-lg">
        Score: <span ref={scoreRef} className="transition-colors duration-300">{score}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;