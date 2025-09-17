'use client';

import { Message } from '@/types/chat';
import { format } from 'date-fns';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const formatContent = (content: string) => {
    // Convert markdown-style formatting to HTML
    return content
      .split('\n')
      .map((line, index) => {
        // Handle bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <div key={index} className="font-semibold text-lg mb-2">
              {line.slice(2, -2)}
            </div>
          );
        }
        
        // Handle bullet points
        if (line.startsWith('• ') || line.startsWith('*')) {
          return (
            <div key={index} className="ml-4 mb-1">
              {line}
            </div>
          );
        }
        
        // Handle emphasis
        if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
          return (
            <div key={index} className="italic mb-1">
              {line.slice(1, -1)}
            </div>
          );
        }
        
        // Regular line
        if (line.trim()) {
          return (
            <div key={index} className="mb-2">
              {line}
            </div>
          );
        }
        
        // Empty line for spacing
        return <div key={index} className="mb-2"></div>;
      });
  };

  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4 message-bubble`}>
      <div className={`max-w-[80%] ${message.isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            message.isUser
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <div className="whitespace-pre-wrap">
            {message.isUser ? message.content : formatContent(message.content)}
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-2">
          {format(message.timestamp, 'h:mm a')}
        </div>
      </div>
      
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shadow-sm ${
        message.isUser 
          ? 'bg-blue-500 text-white order-1 mr-2' 
          : 'bg-green-500 text-white order-2 ml-2'
      }`}>
        {message.isUser ? 'Y' : 'A'}
      </div>
    </div>
  );
}