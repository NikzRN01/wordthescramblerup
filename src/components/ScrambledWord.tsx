import React from 'react';

interface ScrambledWordProps {
  word: string;
}

const ScrambledWord: React.FC<ScrambledWordProps> = ({ word }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-gray-600 font-medium">Unscramble this word:</h2>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl shadow-lg w-full">
        <p className="text-3xl md:text-4xl font-bold text-white text-center tracking-wider">
          {word}
        </p>
      </div>
    </div>
  );
};

export default ScrambledWord;