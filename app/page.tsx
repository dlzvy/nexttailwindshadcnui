'use client';

import { useState } from 'react';
import { Moon, Sun, Zap, Palette, Layers } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 to-slate-800'
        : 'bg-gradient-to-br from-slate-50 to-slate-100'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-xl shadow-lg transition-all duration-300 ${
              isDark
                ? 'bg-slate-700 hover:bg-slate-600'
                : 'bg-white hover:bg-slate-50'
            }`}
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Tech Stack
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Next.js, Tailwind CSS & shadcn/ui
          </p>
          <p className={`text-sm mt-4 transition-colors duration-300 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Powered by Next.js 15 with Turbopack for lightning-fast development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`group p-8 rounded-2xl shadow-xl transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 hover:bg-slate-750'
              : 'bg-white hover:shadow-2xl'
          }`}>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_408_139" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black"/>
                  </mask>
                  <g mask="url(#mask0_408_139)">
                    <circle cx="90" cy="90" r="90" fill={isDark ? 'white' : 'black'}/>
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
                    <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor={isDark ? 'white' : 'black'}/>
                      <stop offset="1" stopColor={isDark ? 'white' : 'black'} stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                      <stop stopColor={isDark ? 'white' : 'black'}/>
                      <stop offset="1" stopColor={isDark ? 'white' : 'black'} stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                Next.js
              </h3>
              <p className={`text-sm text-center transition-colors duration-300 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                React Framework for Production
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  v15 with Turbopack
                </span>
              </div>
            </div>
          </div>

          <div className={`group p-8 rounded-2xl shadow-xl transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 hover:bg-slate-750'
              : 'bg-white hover:shadow-2xl'
          }`}>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 256 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.743 0C65.895 0 53.133 8.26 45.51 24.753C41.699 33 40.365 43.425 40.365 56.1V63.6C51.8 63.6 58.087 59.325 62.96 50.85C67.833 42.3 69.167 31.875 69.167 19.2V11.7C73.978 11.7 76.415 13.95 79.932 18.3C83.449 22.65 84.783 28.65 84.783 36.15V63.6H96.505V36.15C96.505 18.15 87.845 0 83.743 0Z" fill="#38BDF8"/>
                  <path d="M128.008 0C110.16 0 97.398 8.26 89.775 24.753C85.964 33 84.63 43.425 84.63 56.1V63.6H96.352V56.1C96.352 43.425 97.686 33 101.497 24.753C109.12 8.26 121.882 0 139.73 0C157.578 0 170.34 8.26 177.963 24.753C181.774 33 183.108 43.425 183.108 56.1V90.9C183.108 103.575 181.774 114 177.963 122.247C170.34 138.74 157.578 147 139.73 147C133.129 147 127.476 145.5 122.603 142.5C117.73 139.5 113.919 135.15 111.064 129.6L101.343 136.65C105.154 143.55 110.873 149.025 118.496 153.15C126.119 157.275 134.779 159.3 144.603 159.3C162.451 159.3 175.213 151.05 182.836 134.55C186.647 126.3 187.981 115.875 187.981 103.2V56.1C187.981 43.425 186.647 33 182.836 24.753C175.213 8.26 162.451 0 144.603 0H128.008Z" fill="#38BDF8"/>
                  <path d="M0 63.6C0 50.925 1.334 40.5 5.145 32.253C12.768 15.76 25.53 7.5 43.378 7.5C49.979 7.5 55.632 9 60.505 12C65.378 15 69.189 19.35 72.044 24.9L81.765 17.85C77.954 10.95 72.235 5.475 64.612 1.35C56.989 -2.775 48.329 -4.8 38.505 -4.8C20.657 -4.8 7.895 3.45 0.272 19.95C-3.539 28.2 -4.873 38.625 -4.873 51.3V98.4C-4.873 111.075 -3.539 121.5 0.272 129.747C7.895 146.24 20.657 154.5 38.505 154.5C48.329 154.5 56.989 152.475 64.612 148.35C72.235 144.225 77.954 138.75 81.765 131.85L72.044 124.8C69.189 130.35 65.378 134.7 60.505 137.7C55.632 140.7 49.979 142.2 43.378 142.2C25.53 142.2 12.768 133.94 5.145 117.447C1.334 109.2 0 98.775 0 86.1V63.6Z" fill="#38BDF8"/>
                  <path d="M192.855 90.9C192.855 103.575 194.189 114 197.999 122.247C205.622 138.74 218.384 147 236.232 147C254.08 147 266.842 138.74 274.465 122.247C278.276 114 279.61 103.575 279.61 90.9V63.6H267.888V90.9C267.888 103.575 266.554 114 262.743 122.247C255.12 138.74 242.358 147 224.51 147C206.662 147 193.9 138.74 186.277 122.247C182.466 114 181.132 103.575 181.132 90.9V0H169.41V90.9H192.855Z" fill="#38BDF8"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                Tailwind CSS
              </h3>
              <p className={`text-sm text-center transition-colors duration-300 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Utility-First CSS Framework
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Palette className="w-4 h-4 text-blue-500" />
                <span className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  v3.4 Latest
                </span>
              </div>
            </div>
          </div>

          <div className={`group p-8 rounded-2xl shadow-xl transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 hover:bg-slate-750'
              : 'bg-white hover:shadow-2xl'
          }`}>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="256" height="256" rx="60" fill={isDark ? 'white' : 'black'}/>
                  <path d="M128 90L165 128L128 166L91 128L128 90Z" fill={isDark ? 'black' : 'white'}/>
                  <path d="M165 128L202 90L165 52L128 90L165 128Z" fill={isDark ? 'black' : 'white'}/>
                  <path d="M128 166L91 204L54 166L91 128L128 166Z" fill={isDark ? 'black' : 'white'}/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>
                shadcn/ui
              </h3>
              <p className={`text-sm text-center transition-colors duration-300 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Beautifully Designed Components
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Layers className="w-4 h-4 text-purple-500" />
                <span className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Modern UI System
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 ${
          isDark
            ? 'bg-slate-800'
            : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            Performance & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    Turbopack Powered
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Lightning-fast development server with up to 53% faster builds
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Palette className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    Modern Styling
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Utility-first CSS with dark mode support and responsive design
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Layers className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    Component Library
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Beautiful, accessible components built with Radix UI
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    Production Ready
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Optimized for performance with TypeScript support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
