import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particles ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${-Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Animated circles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute rounded-full border border-primary/10"
          style={{
            width: `${20 + Math.random() * 100}px`,
            height: `${20 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${-Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-animated opacity-10 animate-gradient" />
    </div>
  );
};

export default AnimatedBackground;