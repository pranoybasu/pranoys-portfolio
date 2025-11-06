'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BrickBreakerGame from '../game/BrickBreakerGame';

export default function BrickBreakerSection() {
  const [showGame, setShowGame] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="brick-breaker" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 border-2 border-yellow-500/30 hover:border-yellow-400/50 dark:hover:border-yellow-400/50 transition-all duration-300 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 dark:from-yellow-500/5 dark:to-orange-500/5"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-6xl">🎮</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 dark:from-yellow-400 dark:via-yellow-500 dark:to-orange-500 bg-clip-text text-transparent">
              Where It All Began
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full" />
          </div>

          {/* Story */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
              My coding journey started in <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Class 10</span> when I created this Brick Breaker game in Java.
              It was my first real project, and it sparked a passion that led me to where I am today.
            </p>
            
            <div className="glass rounded-lg p-6 border border-yellow-500/20 dark:border-yellow-500/20 bg-yellow-500/5 dark:bg-yellow-500/5">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500 dark:text-yellow-400 mb-2">A Developer's Origin Story</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    What started as a simple school project became the foundation of my development career. 
                    I've recreated it here in JavaScript—experience the game that started it all!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setShowGame(true)}
              className="group relative px-12 py-5 rounded-xl font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-cosmic-darker dark:text-cosmic-darker hover:shadow-2xl hover:shadow-yellow-500/30 dark:hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>🎮</span>
                <span>Play Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </button>
            
            <p className="text-sm text-gray-600 dark:text-gray-500 mt-4">
              Move your mouse or touch to control the paddle • Break all bricks to win!
            </p>
            
            {/* Easter Egg Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-6 text-xs text-gray-700 dark:text-gray-600"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/5 dark:bg-yellow-500/5 border border-yellow-500/20 dark:border-yellow-500/20">
                💡 Pro tip: There's a secret code to access this game from anywhere... 🎮
              </span>
            </motion.div>
          </motion.div>
          
          {/* Game Modal */}
          <BrickBreakerGame isOpen={showGame} onClose={() => setShowGame(false)} />

          {/* Fun Facts */}
          {!showGame && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
            >
              <div className="glass rounded-lg p-4 border border-yellow-500/10 dark:border-yellow-500/10">
                <div className="text-2xl mb-2">📅</div>
                <div className="text-yellow-500 dark:text-yellow-400 font-semibold">2016</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">Year Created</div>
              </div>
              
              <div className="glass rounded-lg p-4 border border-yellow-500/10 dark:border-yellow-500/10">
                <div className="text-2xl mb-2">☕</div>
                <div className="text-yellow-500 dark:text-yellow-400 font-semibold">Java → JavaScript</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">Technology Evolution</div>
              </div>
              
              <div className="glass rounded-lg p-4 border border-yellow-500/10 dark:border-yellow-500/10">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-yellow-500 dark:text-yellow-400 font-semibold">First Project</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">That Started It All</div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}