import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Animated particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-particles"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${-Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
          }}
        />
      ))}
      
      {/* Animated circles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute rounded-full border border-primary/10 animate-float"
          style={{
            width: `${20 + Math.random() * 100}px`,
            height: `${20 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${-Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-animated opacity-10 animate-gradient" />
    </div>
  );
};

export default AnimatedBackground;