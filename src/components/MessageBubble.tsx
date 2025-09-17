'use client';

import { Message } from '@/types/chat';
import { format } from 'date-fns';
import Image from 'next/image';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const parseLinks = (text: string) => {
    // Parse markdown-style links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // Add the link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 
                   underline hover:no-underline 
                   transition-colors duration-200
                   font-medium
                   inline-flex items-center gap-1
                   hover:bg-blue-50 dark:hover:bg-blue-900/20 
                   px-1 py-0.5 rounded
                   -mx-1"
        >
          {match[1]}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

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
              {parseLinks(line)}
            </div>
          );
        }
        
        // Handle emphasis
        if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
          return (
            <div key={index} className="italic mb-1">
              {parseLinks(line.slice(1, -1))}
            </div>
          );
        }
        
        // Regular line
        if (line.trim()) {
          return (
            <div key={index} className="mb-2">
              {parseLinks(line)}
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
          : 'order-2 ml-2 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden'
      }`}>
        {message.isUser ? (
          'Y'
        ) : (
          <Image
            src="/avatar.jpg"
            alt="Akshay Koul"
            width={28}
            height={28}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}