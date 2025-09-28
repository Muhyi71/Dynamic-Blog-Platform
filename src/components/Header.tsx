import React from 'react';
import { Sparkles, Settings } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
  showAdminButton?: boolean;
}

export function Header({ onAdminClick, showAdminButton = true }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 backdrop-blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative p-4 glass-button rounded-2xl animate-float">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-2xl blur-xl"></div>
            </div>
            <div>
              <h1 className="text-4xl font-display font-bold text-white tracking-tight">
                ThoughtSphere
              </h1>
              <p className="text-white/90 text-base font-medium tracking-wide">
                Where Ideas Illuminate Minds
              </p>
            </div>
          </div>

          {showAdminButton && (
            <button
              onClick={onAdminClick}
              className="flex items-center gap-3 px-8 py-4 glass-button text-white rounded-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <Settings className="w-5 h-5" />
              Admin Panel
            </button>
          )}
        </div>
      </div>
    </header>
  );
}