import React, { useState } from 'react';
import { Calculator, TrendingUp, Coins } from 'lucide-react';

const BonusCalculator: React.FC = () => {
  const [deposit, setDeposit] = useState<number>(100);
  const [bonusPercent, setBonusPercent] = useState<number>(100);
  const [maxBonus, setMaxBonus] = useState<number>(500);

  const calculateBonus = () => {
    const bonusAmount = (deposit * bonusPercent) / 100;
    return Math.min(bonusAmount, maxBonus);
  };

  const totalAmount = deposit + calculateBonus();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <Calculator className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Калькулятор бонусов</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Рассчитай свой бонус
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Узнай, сколько дополнительных средств получишь при регистрации
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Сумма депозита (USDT)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    min="10"
                    max="10000"
                  />
                  <Coins className="absolute right-3 top-3 w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">
                  Процент бонуса
                </label>
                <select
                  value={bonusPercent}
                  onChange={(e) => setBonusPercent(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value={50}>50%</option>
                  <option value={100}>100%</option>
                  <option value={150}>150%</option>
                  <option value={200}>200%</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">
                  Максимальный бонус (USDT)
                </label>
                <select
                  value={maxBonus}
                  onChange={(e) => setMaxBonus(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value={250}>250 USDT</option>
                  <option value={500}>500 USDT</option>
                  <option value={750}>750 USDT</option>
                  <option value={1000}>1000 USDT</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl p-6 border border-purple-400/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
                  Результат расчета
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ваш депозит:</span>
                    <span className="text-white font-semibold">{deposit} USDT</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Бонус ({bonusPercent}%):</span>
                    <span className="text-cyan-400 font-semibold">+{calculateBonus()} USDT</span>
                  </div>
                  
                  <div className="border-t border-gray-600/50 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">Итого для игры:</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {totalAmount} USDT
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-4 border border-green-400/20">
                <p className="text-green-400 text-sm">
                  💡 <strong>Совет:</strong> Начни с небольшого депозита, чтобы протестировать платформу
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusCalculator;