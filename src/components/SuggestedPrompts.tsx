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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Or ask me anything else about my background, experience, or interests!
        </p>
      </div>
    </div>
  );
}