import React from 'react';
import { Sparkles, TrendingUp, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float"></div>
        
        {/* Hexagonal Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-purple-400/30 rotate-12 animate-bounce-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center z-20">
        {/* Left Content */}
        <div className="text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Web3 Casino Revolution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Лучшие онлайн-
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                казино 2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl animate-slide-up animation-delay-300">
              Объективные обзоры,
              <br />
              <span className="text-cyan-400 animate-pulse">честные бонусы</span>, крипто-оплата
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button flex items-center space-x-2 hover:scale-105 transform">
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:rotate-12" />
              <span>Выбрать казино</span>
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-xl font-medium text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Демо режим</span>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up animation-delay-900">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 animate-counter" data-target="50">50+</div>
              <div className="text-sm text-gray-400">Казино</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 animate-counter" data-target="1000">1000+</div>
              <div className="text-sm text-gray-400">Отзывов</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-gray-400">Поддержка</div>
            </div>
          </div>
        </div>

        {/* Right Content - Enhanced Holographic Element */}
        <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
          <div className="relative">
            {/* Main Holographic Card */}
            <div className="relative w-80 h-96 bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl border border-cyan-400/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 hover:rotate-1 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl animate-pulse-glow"></div>
              
              {/* Scanning Line Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl animate-bounce-slow group-hover:animate-spin">
                    🎰
                  </div>
                  <h3 className="text-xl font-bold text-white animate-pulse">Web3 Casino</h3>
                  <p className="text-cyan-400 text-lg font-semibold animate-gradient-x bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">+500% Бонус</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-center space-x-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold animate-pulse hover:scale-110 transition-transform cursor-pointer">₿</div>
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold animate-pulse animation-delay-300 hover:scale-110 transition-transform cursor-pointer">$</div>
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold animate-pulse animation-delay-600 hover:scale-110 transition-transform cursor-pointer">T</div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform">
                    Играть сейчас
                  </button>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce group-hover:animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse group-hover:animate-spin"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400/30 rounded-full animate-ping animation-delay-1000"></div>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-very-slow">
              <div className="absolute -top-8 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute -bottom-8 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;