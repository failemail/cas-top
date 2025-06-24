import React from 'react';
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { userReviews } from '../data/casinos';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Отзывы пользователей
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Реальные отзывы игроков о лучших казино
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userReviews.map((review) => (
            <div
              key={review.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 p-6 space-y-4 hover:transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.userName}</h4>
                    <p className="text-sm text-cyan-400">{review.casinoName}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed">{review.text}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <span className="text-sm text-gray-400">{review.date}</span>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{review.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">{review.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button">
            Оставить отзыв
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;