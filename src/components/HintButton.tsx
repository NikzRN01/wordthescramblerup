import React from 'react';
import { Lightbulb } from 'lucide-react';

interface HintButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const HintButton: React.FC<HintButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${disabled 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : 'bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-500'
        }
      `}
    >
      <Lightbulb className="mr-2" size={20} />
      Hint (-5)
    </button>
  );
};

export default HintButton;