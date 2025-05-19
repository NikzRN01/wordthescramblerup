import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeedbackProps {
  isCorrect: boolean;
  correctWord: string;
  onNextWord: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({ isCorrect, correctWord, onNextWord }) => {
  if (!isCorrect) return null;

  return (
    <div className="py-8 flex flex-col items-center space-y-6 animate-fadeIn">
      <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
        <CheckCircle className="text-green-600" size={40} />
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Correct!</h3>
        <p className="text-gray-600 mb-1">The word was:</p>
        <p className="text-2xl font-bold text-indigo-600">{correctWord}</p>
      </div>
      
      <button
        onClick={onNextWord}
        className="py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Next Word
      </button>
    </div>
  );
};

export default Feedback;