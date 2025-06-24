import React from 'react';
import { Bitcoin, Zap, Shield, TrendingUp, Coins, Cpu } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Bitcoin, delay: '0s', position: 'top-20 left-20' },
    { Icon: Zap, delay: '1s', position: 'top-40 right-32' },
    { Icon: Shield, delay: '2s', position: 'bottom-40 left-32' },
    { Icon: TrendingUp, delay: '0.5s', position: 'top-60 left-1/2' },
    { Icon: Coins, delay: '1.5s', position: 'bottom-20 right-20' },
    { Icon: Cpu, delay: '2.5s', position: 'top-32 right-1/4' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 animate-float-slow`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
      ))}
      
      {/* Holographic Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-spin-slow"></div>
    </div>
  );
};

export default FloatingElements;