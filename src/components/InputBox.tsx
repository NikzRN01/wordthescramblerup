import React, { useEffect, useRef } from 'react';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  isWrong: boolean;
  resetWrongState: () => void;
}

const InputBox: React.FC<InputBoxProps> = ({ 
  value, 
  onChange, 
  isWrong,
  resetWrongState 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on component mount
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isWrong) {
      const timer = setTimeout(() => {
        resetWrongState();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isWrong, resetWrongState]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full py-3 px-4 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all
          ${isWrong ? 'border-red-500 animate-shake' : 'border-gray-300'}
        `}
        placeholder="Type your answer..."
        autoComplete="off"
      />
    </div>
  );
};

export default InputBox;