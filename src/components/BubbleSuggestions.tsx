'use client';

import { suggestedQuestions } from '@/data/resume';

interface BubbleSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  askedQuestions: Set<string>;
  isVisible: boolean;
}

export default function BubbleSuggestions({ onSuggestionClick, askedQuestions, isVisible }: BubbleSuggestionsProps) {
  if (!isVisible) return null;

  // Filter out already asked questions and limit to 3-4 suggestions
  const availableQuestions = suggestedQuestions.filter(question => {
    // Normalize questions for comparison (remove punctuation, convert to lowercase)
    const normalizedQuestion = question.toLowerCase().replace(/[?!.,]/g, '').trim();
    
    // Check if this question or a similar one has been asked
    return !Array.from(askedQuestions).some(asked => {
      const normalizedAsked = asked.toLowerCase().replace(/[?!.,]/g, '').trim();
      
      // Check for exact matches or significant overlap
      if (normalizedAsked === normalizedQuestion) return true;
      
      // Check for key phrases that indicate the same topic
      const questionKeywords = normalizedQuestion.split(' ').filter(word => word.length > 3);
      const askedKeywords = normalizedAsked.split(' ').filter(word => word.length > 3);
      
      // If 60% or more of keywords match, consider it asked
      const matchingKeywords = questionKeywords.filter(keyword => 
        askedKeywords.some(askedKeyword => 
          askedKeyword.includes(keyword) || keyword.includes(askedKeyword)
        )
      );
      
      return matchingKeywords.length >= Math.ceil(questionKeywords.length * 0.6);
    });
  }).slice(0, 4); // Show max 4 suggestions

  if (availableQuestions.length === 0) return null;

  return (
    <div className="px-4 pb-2 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {availableQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(question)}
              className="bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-600
                       hover:border-blue-300 dark:hover:border-blue-500
                       hover:bg-blue-50 dark:hover:bg-blue-900/20
                       text-gray-700 dark:text-gray-300
                       hover:text-blue-700 dark:hover:text-blue-300
                       px-3 py-2 rounded-full text-sm
                       transition-all duration-200
                       shadow-sm hover:shadow-md
                       flex items-center space-x-1
                       max-w-xs truncate
                       transform hover:scale-105
                       animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
              title={question}
            >
              <span className="text-blue-500 text-xs">💭</span>
              <span className="truncate">{question}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}