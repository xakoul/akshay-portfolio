'use client';

import { Message } from '@/types/chat';
import { format } from 'date-fns';
import Image from 'next/image';

interface MessageBubbleProps {
  message: Message;
  onProjectClick?: (projectName: string) => void;
  onCompanyClick?: (companyName: string) => void;
}

export default function MessageBubble({ message, onProjectClick, onCompanyClick }: MessageBubbleProps) {
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
      } else if (linkUrl.startsWith('company:')) {
        const companyName = linkUrl.replace('company:', '');
        parts.push(
          <button
            key={match.index}
            onClick={() => onCompanyClick?.(companyName)}
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
    const lines = content.split('\n');
    const result = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Handle icon display with project/profile name
      if (line.includes('[icon:')) {
        const iconMatch = line.match(/\[icon:([^\]]*)\]/);
        const iconUrl = iconMatch ? iconMatch[1] : '';
        
        // Remove the icon markup from the line
        const cleanLine = line.replace(/\[icon:[^\]]*\]\s*/, '');
        
        // Check if this is a profile response (avatar.jpg)
        const isProfileResponse = iconUrl.includes('avatar.jpg');
        const iconSize = isProfileResponse ? 67 : 48; // 40% larger: 48 * 1.4 = 67.2
        
        // Build card content
        let cardContent = cleanLine;
        let linesToSkip = 0;
        
        if (isProfileResponse) {
          // For profile responses, include the next line (title and location) in the same card
          if (i + 1 < lines.length && lines[i + 1].trim() && !lines[i + 1].startsWith('[') && lines[i + 1].includes('**')) {
            cardContent += '\n' + lines[i + 1];
            linesToSkip = 1;
          }
        } else {
          // For project cards (both list and detail), include company name 
          // Company name is typically the next line after project name and doesn't start with special chars
          if (i + 1 < lines.length && lines[i + 1].trim() && 
              !lines[i + 1].startsWith('[') && 
              !lines[i + 1].startsWith('**') && 
              !lines[i + 1].includes('🌐') && 
              !lines[i + 1].includes('📋') &&
              !lines[i + 1].includes('Technologies Used') &&
              lines[i + 1].length < 100) { // Company names are typically short
            cardContent += '\n' + lines[i + 1];
            linesToSkip = 1;
          }
          // Note: We no longer include description and links in the card for a cleaner look
        }
        
        result.push(
          <div key={`card-${i}`} className="flex items-start gap-3 mb-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            {iconUrl && (
              <div className={`flex-shrink-0 rounded-lg overflow-hidden ${isProfileResponse ? 'w-[67px] h-[67px]' : 'w-12 h-12'}`}>
                <Image
                  src={iconUrl}
                  alt={isProfileResponse ? "Profile" : "Project icon"}
                  width={iconSize}
                  height={iconSize}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              {cardContent.split('\n').map((cardLine, lineIndex) => (
                <div key={lineIndex} className={lineIndex > 0 ? "mt-1" : ""}>
                  {parseLinks(cardLine)}
                </div>
              ))}
            </div>
          </div>
        );
        i += linesToSkip + 1;
        continue;
      }
      
      // Handle skill badges (multiple images in one line)
      if (line.includes('![') && line.split('![').length > 2) {
        const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        const badges = [];
        let match;
        
        while ((match = imageRegex.exec(line)) !== null) {
          const altText = match[1];
          const imageUrl = match[2];
          badges.push({ alt: altText, url: imageUrl });
        }
        
        if (badges.length > 0) {
          result.push(
            <div key={i} className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge, index) => (
                <Image
                  key={index}
                  src={badge.url}
                  alt={badge.alt}
                  width={120}
                  height={28}
                  className="h-7 object-contain"
                  style={{ maxWidth: 'none', width: 'auto' }}
                />
              ))}
            </div>
          );
          i++;
          continue;
        }
      }
      
      // Handle bold labels (like **Company:** or **Technologies Used:**)
      if (line.includes('**') && line.includes(':**')) {
        result.push(
          <div key={i} className="mb-2">
            {parseLinks(line)}
          </div>
        );
        i++;
        continue;
      }
      
      // Handle bold text
      if (line.startsWith('**') && line.endsWith('**')) {
        result.push(
          <div key={i} className="font-semibold text-lg mb-2">
            {parseLinks(line.slice(2, -2))}
          </div>
        );
        i++;
        continue;
      }
      
      // Handle bullet points
      if (line.startsWith('• ') || line.startsWith('*')) {
        result.push(
          <div key={i} className="ml-4 mb-1">
            {parseLinks(line)}
          </div>
        );
        i++;
        continue;
      }
      
      // Handle emphasis
      if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        result.push(
          <div key={i} className="italic mb-1">
            {parseLinks(line.slice(1, -1))}
          </div>
        );
        i++;
        continue;
      }
      
      // Regular line
      if (line.trim()) {
        result.push(
          <div key={i} className="mb-2">
            {parseLinks(line)}
          </div>
        );
        i++;
        continue;
      }
      
      // Empty line for spacing
      result.push(<div key={i} className="mb-2"></div>);
      i++;
    }
    
    return result;
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