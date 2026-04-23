'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Character {
  id: number;
  image: string;
  message: string;
  plea: string;
}

const characters: Character[] = [
  {
    id: 1,
    image: '/img10.jpg',
    message: 'I know I hurt you… and it breaks me inside...',
    plea: 'pleaseee maaaaf kr do naaa 🥺👉👈 meowwww… sun lo naaa 💗',
  },
  {
    id: 2,
    image: '/img1.jpg',
    message: 'Being away from you doesn’t feel like living...',
    plea: 'areeee sun lo naaa 😭 please maaaaf kr do naaa meowwww 🐾💔',
  },
  {
    id: 3,
    image: '/img12.jpg',
    message: 'I never meant to hurt someone I love this much...',
    plea: 'plissss maaaaf kr do naaa 🥺 meowwww… I love youuu 💞',
  },
  {
    id: 4,
    image: '/img11 (10).jpg',
    message: 'I miss you in ways words can’t explain...',
    plea: 'sun lo naaa ek baarrr 😞 please maaaaf kr do naaa meowwww 🐾💗',
  },
  {
    id: 5,
    image: '/img11 (9).jpg',
    message: 'I’m truly sorry… you matter more than anything to me...',
    plea: 'areeee plissss maaaaf kr do naaa 🥺👉👈 meowwww… baat kr lo naaa 💌',
  },
  {
    id: 6,
    image: '/img11 (8).jpg',
    message: 'You’re not just important… you’re everything to me...',
    plea: 'pleaseeeee maaaaf kr do naaa 😭 meowwww… don’t gooo 💗',
  },
  {
    id: 7,
    image: '/img11 (7).jpg',
    message: 'Your silence hurts more than anything else...',
    plea: 'sun lo naaa plissss 🥺 maaaaf kr do naaa meowwww 🐾💞',
  },
  {
    id: 8,
    image: '/img11 (2).jpg',
    message: 'I’m here… still holding on to us...',
    plea: 'pleaseeeee maaaaf kr do naaa 🥺 meowwww… I need youuu 💔💗',
  },
  {
    id: 9,
    image: '/img11 (3).jpg',
    message: 'Talking to you is my favorite part of every day...',
    plea: 'sun lo naaa 😞 maaaaf kr do naaa pleaseee meowwww 🐾💌',
  },
  {
    id: 10,
    image: '/img11 (4).jpg',
    message: 'Your voice feels like home to my soul...',
    plea: 'plissss wapas aa jao naaa 🥺 meowwww… forgive me 💗',
  },
  {
    id: 11,
    image: '/img11 (5).jpg',
    message: 'Losing you is something I can’t even imagine...',
    plea: 'pleaseeeee maaaaf kr do naaa 😭 meowwww… don’t leave 💞',
  },
  {
    id: 12,
    image: '/img11 (6).jpg',
    message: 'I’m sorry… from the deepest part of my heart...',
    plea: 'areeee sun lo naaa 🥺 maaaaf kr do naaa meowwww 🐾❤️',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChar = characters[currentIndex];
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  

  if (response === 'yes') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex flex-col overflow-hidden">
        {/* Heart Rain */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animation: `fall ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <span className="text-4xl">💕</span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8 animate-bounce">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%2829%29.jfif-NS5LNx22453VcoogUhrTOjnYWhmMUI.jpeg"
              alt="I love you so much"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto"
              priority
            />
          </div>

          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold text-rose-600 mb-4">I LOVE YOU!</h1>
            <p className="text-2xl text-rose-500 mb-8">
              Thank you for forgiving me. You make me the happiest person in the world.
            </p>
            <button
              onClick={() => setResponse(null)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex flex-col">
      {/* Floating hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
            }}
          >
            <span className="text-5xl opacity-30">💕</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out;
        }
        .animate-pulse-heart {
          animation: pulse-heart 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main Content */}
    
  <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-rose-600 mb-2">I&apos;m Sorry</h1>
          <p className="text-lg text-rose-500">Please... forgive me</p>
          {response === 'no' && (
            <p className="text-lg text-red-500 font-bold mt-4 animate-pulse">
              I won&apos;t give up! Please say YES...
            </p>
          )}
        </div>
        {/* Character Carousel */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-col items-center gap-8">
            {/* Image */}
            <div className="animate-slide-in">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src={currentChar.image}
                  alt={currentChar.message}
                  width={300}
                  height={300}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Messages */}
            <div className="text-center space-y-4 animate-slide-in">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                {currentChar.message}
              </p>
              <p className="text-xl md:text-2xl text-rose-600 font-bold animate-pulse-heart">
                {currentChar.plea}
              </p>
            </div>


          </div>
        </div>

        {/* YES/NO Buttons */}
        <div className="mt-12 flex gap-6 justify-center flex-wrap">
          <button
            onClick={() => setResponse('yes')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            YES
          </button>
         <button
  onClick={() => {
    setResponse('no');
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  }}
  className={`text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-lg ${
    response === 'no'
      ? 'bg-orange-500 hover:bg-orange-600 animate-bounce'
      : 'bg-red-500 hover:bg-red-600'
  }`}
>
  NO
</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-rose-500 relative z-10">
        <p className="text-lg font-light">Forever yours... until you forgive me ✨</p>
      </footer>
    </div>
  );
}
