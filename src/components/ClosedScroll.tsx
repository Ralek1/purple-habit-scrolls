
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ClosedScrollProps {
  onClick: () => void;
}

const ClosedScroll: React.FC<ClosedScrollProps> = ({ onClick }) => {
  return (
    <div 
      className="w-full max-w-md mx-auto cursor-pointer transition-transform hover:scale-105 duration-300 mt-6"
      onClick={onClick}
    >
      <div className="pixel-scroll-closed relative">
        {/* Top scroll handle */}
        <div className="pixel-scroll-handle pixel-scroll-handle-top">
          <div className="pixel-scroll-knob"></div>
          <div className="pixel-wooden-rod"></div>
          <div className="pixel-scroll-knob"></div>
        </div>
        
        {/* Closed scroll body */}
        <div className="scroll-closed-body flex items-center justify-center py-6 px-4 rounded-xl">
          <Sparkles className="w-6 h-6 text-amber-800/80" />
          <span className="font-pixel text-amber-950 text-sm px-3">Click to discover a habit</span>
          <Sparkles className="w-6 h-6 text-amber-800/80" />
        </div>
        
        {/* Bottom scroll handle */}
        <div className="pixel-scroll-handle pixel-scroll-handle-bottom">
          <div className="pixel-scroll-knob"></div>
          <div className="pixel-wooden-rod"></div>
          <div className="pixel-scroll-knob"></div>
        </div>
      </div>
    </div>
  );
};

export default ClosedScroll;
