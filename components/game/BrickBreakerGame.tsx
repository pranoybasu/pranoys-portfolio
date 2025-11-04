'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BrickBreakerGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrickBreakerGame({ isOpen, onClose }: BrickBreakerGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game constants
    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 600;
    const PADDLE_WIDTH = 100;
    const PADDLE_HEIGHT = 15;
    const BALL_RADIUS = 8;
    const BRICK_ROWS = 5;
    const BRICK_COLS = 8;
    const BRICK_WIDTH = 90;
    const BRICK_HEIGHT = 25;
    const BRICK_PADDING = 10;
    const BRICK_OFFSET_TOP = 80;
    const BRICK_OFFSET_LEFT = 35;

    // Game state
    let paddle = { x: CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2, y: CANVAS_HEIGHT - 40 };
    let ball = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: 4, dy: -4 };
    let bricks: { x: number; y: number; status: number; color: string }[][] = [];
    let currentLives = 3;
    let currentScore = 0;
    let isPlaying = true;

    // Initialize bricks
    const colors = ['#3b82f6', '#06b6d4', '#ec4899', '#8b5cf6', '#10b981'];
    for (let row = 0; row < BRICK_ROWS; row++) {
      bricks[row] = [];
      for (let col = 0; col < BRICK_COLS; col++) {
        bricks[row][col] = {
          x: col * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT,
          y: row * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP,
          status: 1,
          color: colors[row],
        };
      }
    }

    // Mouse/Touch control
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      paddle.x = Math.max(0, Math.min(CANVAS_WIDTH - PADDLE_WIDTH, mouseX - PADDLE_WIDTH / 2));
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      paddle.x = Math.max(0, Math.min(CANVAS_WIDTH - PADDLE_WIDTH, touchX - PADDLE_WIDTH / 2));
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Collision detection
    function collisionDetection() {
      for (let row = 0; row < BRICK_ROWS; row++) {
        for (let col = 0; col < BRICK_COLS; col++) {
          const brick = bricks[row][col];
          if (brick.status === 1) {
            if (
              ball.x > brick.x &&
              ball.x < brick.x + BRICK_WIDTH &&
              ball.y > brick.y &&
              ball.y < brick.y + BRICK_HEIGHT
            ) {
              ball.dy = -ball.dy;
              brick.status = 0;
              currentScore += 10;
              setScore(currentScore);

              // Check win condition
              if (currentScore === BRICK_ROWS * BRICK_COLS * 10) {
                isPlaying = false;
                setGameState('won');
              }
            }
          }
        }
      }
    }

    // Draw functions
    function drawBall() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.closePath();

      // Glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#3b82f6';
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function drawPaddle() {
      if (!ctx) return;
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(paddle.x, paddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);

      // Gradient overlay
      const gradient = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x, paddle.y + PADDLE_HEIGHT);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(paddle.x, paddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);
    }

    function drawBricks() {
      if (!ctx) return;
      for (let row = 0; row < BRICK_ROWS; row++) {
        for (let col = 0; col < BRICK_COLS; col++) {
          const brick = bricks[row][col];
          if (brick.status === 1) {
            ctx.fillStyle = brick.color;
            ctx.fillRect(brick.x, brick.y, BRICK_WIDTH, BRICK_HEIGHT);

            // Brick border
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.strokeRect(brick.x, brick.y, BRICK_WIDTH, BRICK_HEIGHT);
          }
        }
      }
    }

    function drawScore() {
      if (!ctx) return;
      ctx.font = '20px Space Grotesk, sans-serif';
      ctx.fillStyle = '#fff';
      ctx.fillText(`Score: ${currentScore}`, 20, 35);
      ctx.fillText(`Lives: ${currentLives}`, CANVAS_WIDTH - 100, 35);
    }

    // Game loop
    function draw() {
      if (!isPlaying || !ctx) return;

      // Clear canvas
      ctx.fillStyle = 'rgba(10, 14, 39, 0.3)';
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      collisionDetection();

      // Ball movement
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Wall collision
      if (ball.x + ball.dx > CANVAS_WIDTH - BALL_RADIUS || ball.x + ball.dx < BALL_RADIUS) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < BALL_RADIUS) {
        ball.dy = -ball.dy;
      }

      // Paddle collision
      if (
        ball.y + ball.dy > paddle.y - BALL_RADIUS &&
        ball.x > paddle.x &&
        ball.x < paddle.x + PADDLE_WIDTH
      ) {
        // Add spin based on where the ball hits the paddle
        const hitPos = (ball.x - paddle.x) / PADDLE_WIDTH;
        ball.dx = (hitPos - 0.5) * 8;
        ball.dy = -ball.dy;
      }

      // Ball falls below paddle
      if (ball.y + ball.dy > CANVAS_HEIGHT - BALL_RADIUS) {
        currentLives--;
        setLives(currentLives);

        if (currentLives === 0) {
          isPlaying = false;
          setGameState('lost');
        } else {
          // Reset ball
          ball.x = CANVAS_WIDTH / 2;
          ball.y = CANVAS_HEIGHT / 2;
          ball.dx = 4;
          ball.dy = -4;
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);

  const handleRestart = () => {
    setScore(0);
    setLives(3);
    setGameState('playing');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-cosmic-dark border border-cosmic-blue/30 rounded-2xl p-6 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  🎮 Brick Breaker
                  <span className="text-sm text-yellow-400">⭐ Class 10 Special</span>
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  My first project from school days - now playable in the browser!
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close game"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Game Canvas */}
            <div className="relative rounded-lg overflow-hidden border border-cosmic-blue/20">
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="w-full h-auto bg-cosmic-darker"
              />

              {/* Game Over Overlay */}
              {gameState !== 'playing' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                  <div className="text-center">
                    {gameState === 'won' ? (
                      <>
                        <h3 className="text-4xl font-bold text-yellow-400 mb-2">🎉 You Won!</h3>
                        <p className="text-white/80 mb-4">Final Score: {score}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-4xl font-bold text-red-400 mb-2">Game Over</h3>
                        <p className="text-white/80 mb-4">Score: {score}</p>
                      </>
                    )}
                    <button
                      onClick={handleRestart}
                      className="px-6 py-3 bg-cosmic-blue hover:bg-cosmic-blue/80 text-white rounded-lg transition-colors"
                    >
                      Play Again
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center text-white/60 text-sm">
              <p>Move your mouse or touch to control the paddle • Break all bricks to win!</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}