'use client';

import { Message } from '@/types/chat';
import { format } from 'date-fns';
import Image from 'next/image';

interface MessageBubbleProps {
  message: Message;
  onProjectClick?: (projectName: string) => void;
}

export default function MessageBubble({ message, onProjectClick }: MessageBubbleProps) {
  const parseLinks = (text: string) => {
    // First handle bold labels like **Company:** or **Technologies Used:**
    const boldLabelRegex = /\*\*([^*:]+):\*\*\s*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Handle bold labels first
    while ((match = boldLabelRegex.exec(text)) !== null) {
      // Add text before the bold label
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        parts.push(...parseFormattedText(beforeText));
      }
      
      // Add the bold label
      parts.push(
        <strong key={`label-${match.index}`} className="font-semibold text-gray-800 dark:text-gray-200">
          {match[1]}:
        </strong>
      );
      parts.push(' '); // Add space after label
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      parts.push(...parseFormattedText(remainingText));
    }
    
    return parts.length > 0 ? parts : parseFormattedText(text);
  };

  const parseFormattedText = (text: string) => {
    // Handle regular bold text
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Handle bold text
    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        parts.push(...parseLinksInText(beforeText));
      }
      
      // Add the bold text
      parts.push(
        <strong key={`bold-${match.index}`} className="font-semibold">
          {match[1]}
        </strong>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      parts.push(...parseLinksInText(remainingText));
    }
    
    return parts.length > 0 ? parts : parseLinksInText(text);
  };

  const parseLinksInText = (text: string) => {
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
      
      const linkText = match[1];
      const linkUrl = match[2];
      
      // Check if it's a project link
      if (linkUrl.startsWith('project:')) {
        const projectName = linkUrl.replace('project:', '');
        parts.push(
          <button
            key={match.index}
            onClick={() => onProjectClick?.(projectName)}
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 
                     underline hover:no-underline 
                     transition-colors duration-200
                     font-medium
                     inline-flex items-center gap-1
                     hover:bg-blue-50 dark:hover:bg-blue-900/20 
                     px-1 py-0.5 rounded
                     -mx-1
                     cursor-pointer"
          >
            {linkText}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        );
      } else {
        // Regular external link
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
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
            {linkText}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        );
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  const formatContent = (content: string) => {
    // Convert markdown-style formatting to HTML
    return content
      .split('\n')
      .map((line, index) => {
        // Handle icon display with project name
        if (line.includes('[icon:')) {
          const iconMatch = line.match(/\[icon:([^\]]*)\]/);
          const iconUrl = iconMatch ? iconMatch[1] : '';
          
          // Remove the icon markup from the line
          const cleanLine = line.replace(/\[icon:[^\]]*\]\s*/, '');
          
          return (
            <div key={index} className="flex items-start gap-3 mb-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              {iconUrl && (
                <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                  <Image
                    src={iconUrl}
                    alt="Project icon"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                {parseLinks(cleanLine)}
              </div>
            </div>
          );
        }
        
        // Handle bold labels (like **Company:** or **Technologies Used:**)
        if (line.includes('**') && line.includes(':**')) {
          return (
            <div key={index} className="mb-2">
              {parseLinks(line)}
            </div>
          );
        }
        
        // Handle bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <div key={index} className="font-semibold text-lg mb-2">
              {parseLinks(line.slice(2, -2))}
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