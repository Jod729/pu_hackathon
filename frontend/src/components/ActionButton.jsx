import React from 'react';

const ActionButton = ({ label, onClick, disabled, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold 
      hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20 
      ${disabled ? 'opacity-30 grayscale cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
