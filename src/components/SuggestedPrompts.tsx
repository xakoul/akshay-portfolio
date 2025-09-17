'use client';

import { suggestedQuestions } from '@/data/resume';

interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
  isVisible: boolean;
}

export default function SuggestedPrompts({ onPromptClick, isVisible }: SuggestedPromptsProps) {
  if (!isVisible) return null;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
        Ask me anything! Here are some suggestions:
      </h3>
      
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-3">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(question)}
            className="p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 
                     hover:border-blue-300 dark:hover:border-blue-600 
                     hover:bg-blue-50 dark:hover:bg-blue-900/20
                     transition-all duration-200 
                     text-gray-700 dark:text-gray-300
                     hover:text-blue-700 dark:hover:text-blue-300"
          >
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">💬</span>
              {question}
            </div>
          </button>
        ))}
      </div>

      {/* Mobile: Horizontal scrollable */}
      <div className="md:hidden">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => onPromptClick(question)}
              className="flex-shrink-0 w-72 p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 
                       hover:border-blue-300 dark:hover:border-blue-600 
                       hover:bg-blue-50 dark:hover:bg-blue-900/20
                       transition-all duration-200 
                       text-gray-700 dark:text-gray-300
                       hover:text-blue-700 dark:hover:text-blue-300
                       snap-start"
            >
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">💬</span>
                <span className="text-sm">{question}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mt-2 gap-1">
          {suggestedQuestions.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"
            />
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Or ask me anything else about my background, experience, or interests!
        </p>
      </div>
    </div>
  );
}