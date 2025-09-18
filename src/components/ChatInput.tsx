'use client';

import { useState, useEffect, useRef } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Function to detect mobile keyboard
    const handleViewportChange = () => {
      // Check if we're on mobile and if the viewport height changed significantly
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        const viewportHeight = window.visualViewport?.height || window.innerHeight;
        const windowHeight = window.screen.height;
        // If viewport is significantly smaller than screen, keyboard is likely open
        const keyboardOpen = viewportHeight < windowHeight * 0.75;
        setIsKeyboardOpen(keyboardOpen);
        
        // Additional check: if visual viewport is much smaller than window, keyboard is open
        const visualViewportRatio = viewportHeight / window.innerHeight;
        if (visualViewportRatio < 0.75) {
          setIsKeyboardOpen(true);
        }
      } else {
        setIsKeyboardOpen(false);
      }
    };

    // Function to handle focus events
    const handleFocus = () => {
      // Small delay to allow viewport to adjust
      setTimeout(() => {
        if (window.innerWidth <= 768) {
          setIsKeyboardOpen(true);
        }
      }, 300);
    };

    const handleBlur = () => {
      // Small delay to allow viewport to adjust
      setTimeout(() => {
        handleViewportChange();
      }, 300);
    };

    // Listen for viewport changes (more reliable for keyboard detection)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
    }
    window.addEventListener('resize', handleViewportChange);
    
    // Listen for input focus/blur events
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    // Initial check
    handleViewportChange();

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
      }
      window.removeEventListener('resize', handleViewportChange);
      
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div 
      className={`chat-input-container border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 ${
        isKeyboardOpen ? 'keyboard-open pb-2' : 'pb-4'
      }`}
    >
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about my background, skills, or experience..."
              className="w-full resize-none rounded-xl border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100
                       placeholder-gray-500 dark:placeholder-gray-400
                       px-4 py-3 pr-12 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       disabled:opacity-50 disabled:cursor-not-allowed
                       max-h-32
                       placeholder:text-sm sm:placeholder:text-base"
              rows={1}
              disabled={isLoading}
              style={{ fontSize: '16px' }} // Prevent zoom on iOS
            />
            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600
                     text-white rounded-xl px-4 py-3 
                     transition-colors duration-200
                     disabled:cursor-not-allowed
                     flex items-center justify-center
                     min-w-[48px] h-[48px]
                     shrink-0"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            )}
          </button>
        </div>
        {/* Hide hint text when keyboard is open on mobile to save space */}
        {!isKeyboardOpen && (
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
            <span className="hidden sm:inline">Press Enter to send, Shift+Enter for new line</span>
            <span className="sm:hidden">Tap send or press Enter</span>
          </div>
        )}
      </form>
    </div>
  );
}