import React from 'react';
import { Star, Zap, Shield, TrendingUp, ExternalLink } from 'lucide-react';
import { topCasinos } from '../data/casinos';

const TopCasinos: React.FC = () => {
  const getCryptoIcon = (crypto: string) => {
    const icons: { [key: string]: string } = {
      'BTC': '₿',
      'USDT': '$',
      'TON': 'T',
      'ETH': 'Ξ',
      'DOGE': 'Đ',
      'LTC': 'Ł'
    };
    return icons[crypto] || crypto;
  };

  const handleCasinoClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const renderLogo = (casino: any) => {
    // Check if logo is an image path or emoji
    if (casino.logo.startsWith('/')) {
      return (
        <img 
          src={casino.logo} 
          alt={`${casino.name} logo`}
          className="w-16 h-16 object-contain rounded-2xl animate-pulse-slow group-hover:animate-bounce"
        />
      );
    } else {
      return (
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl animate-pulse-slow group-hover:animate-bounce">
          {casino.logo}
        </div>
      );
    }
  };

  return (
    <section id="casinos" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Рейтинг 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Топ казино
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Проверенные казино с лучшими бонусами и быстрыми выплатами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCasinos.map((casino, index) => (
            <div
              key={casino.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Rank Badge with Animation */}
              <div className="absolute top-4 left-4 z-10">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce-slow hover:animate-spin">
                  {index + 1}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scanning Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
              </div>

              <div className="relative p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  {renderLogo(casino)}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{casino.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-all duration-300 ${
                            i < Math.floor(casino.rating)
                              ? 'text-yellow-400 fill-current animate-pulse'
                              : 'text-gray-600'
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">{casino.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Bonus with Enhanced Animation */}
                <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl p-4 border border-purple-400/20 group-hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 transform">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400 animate-pulse group-hover:animate-bounce" />
                    <span className="text-yellow-400 font-semibold">Бонус</span>
                  </div>
                  <p className="text-white font-bold text-lg animate-gradient-x bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">{casino.bonus}</p>
                </div>

                {/* Features with Staggered Animation */}
                <div className="space-y-2">
                  {casino.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-2 text-gray-300 animate-slide-in-left"
                      style={{ animationDelay: `${(index * 200) + (idx * 100)}ms` }}
                    >
                      <Shield className="w-4 h-4 text-green-400 animate-pulse" />
                      <span className="text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Crypto Support with Hover Effects */}
                <div className="flex flex-wrap gap-2">
                  {casino.cryptoSupport.map((crypto, idx) => (
                    <div
                      key={crypto}
                      className="px-3 py-1 bg-slate-700/50 rounded-lg border border-gray-600/50 text-xs font-medium text-gray-300 flex items-center space-x-1 hover:scale-110 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (idx * 150)}ms` }}
                    >
                      <span className="font-bold text-orange-400 animate-pulse">{getCryptoIcon(crypto)}</span>
                      <span>{crypto}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Action Button */}
                <button 
                  onClick={() => handleCasinoClick(casino.link)}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button flex items-center justify-center space-x-2 group hover:scale-105 transform"
                >
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:rotate-12" />
                  <span>Играть</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-medium text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 glow-button hover:scale-105 transform">
            Показать все казино
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCasinos;