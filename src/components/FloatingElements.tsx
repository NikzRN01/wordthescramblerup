import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[200px] h-[200px] rounded-full bg-purple-500/20 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-indigo-500/20 blur-3xl animate-float-medium"></div>
      
      {/* Floating particles */}
      <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-purple-400/60 animate-float-particle1"></div>
      <div className="absolute top-[40%] left-[20%] w-3 h-3 rounded-full bg-indigo-400/60 animate-float-particle2"></div>
      <div className="absolute bottom-[30%] right-[40%] w-2 h-2 rounded-full bg-pink-400/60 animate-float-particle3"></div>
      
      {/* Gradient lines */}
      <div className="absolute top-[10%] left-[50%] w-[1px] h-[100px] bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 animate-pulse-slow"></div>
      <div className="absolute top-[40%] right-[20%] w-[1px] h-[150px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 animate-pulse-slower"></div>
      
      {/* Glowing rings */}
      <div className="absolute top-[30%] left-[30%] w-[50px] h-[50px] rounded-full border border-purple-500/30 animate-expand"></div>
      <div className="absolute bottom-[20%] right-[25%] w-[30px] h-[30px] rounded-full border border-indigo-500/30 animate-expand-delayed"></div>
    </div>
  );
};

export default FloatingElements;