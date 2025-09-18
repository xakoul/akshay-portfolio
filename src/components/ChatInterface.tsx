'use client';

import { useState, useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import { generateResponse } from '@/utils/chatLogic';
import { resumeData } from '@/data/resume';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import SuggestedPrompts from './SuggestedPrompts';
import BubbleSuggestions from './BubbleSuggestions';
import Image from 'next/image';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      content: `Hello! I'm Akshay Koul, and this is my interactive portfolio. I'm excited to chat with you about my background, experience, and projects.

Feel free to ask me anything! You can use the suggested questions below or ask me something specific about my skills, projects, or experience.`,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add to asked questions set
    setAskedQuestions(prev => new Set([...prev, content]));

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate typing delay for more natural feel
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // Generate AI response
    const responseContent = generateResponse(content);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: responseContent,
      isUser: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handlePromptClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const handleBubbleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleProjectClick = (projectName: string) => {
    handleSendMessage(`Tell me more about ${projectName}`);
  };

  const handleCompanyClick = (companyName: string) => {
    handleSendMessage(`Tell me more about your work at ${companyName}`);
  };

  const showSuggestions = messages.length <= 1;
  const showBubbleSuggestions = messages.length > 1 && !isLoading;

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Profile Section */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src="/avatar.jpg"
                  alt="Akshay Koul"
                  width={48}
                  height={48}
                  className="sm:w-14 sm:h-14 rounded-full border-2 border-gray-200 dark:border-gray-600 shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
              </div>
              
              {/* Name and Title */}
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {resumeData.personal.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {resumeData.personal.title} • Interactive Portfolio
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* GitHub */}
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 
                         hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200
                         group"
                title="GitHub Profile"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                         hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all duration-200
                         group"
                title="LinkedIn Profile"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={resumeData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 
                         hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full transition-all duration-200
                         group"
                title="Instagram Profile"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.128 4.68.306 3.938.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.306 4.88.128 5.728.072 6.958.016 8.19 0 8.597 0 12.017s.016 3.827.072 5.06c.056 1.23.234 2.077.558 2.818.306.79.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.741.324 1.588.502 2.818.558C7.989 23.984 8.396 24 12.017 24s3.827-.016 5.06-.072c1.23-.056 2.077-.234 2.818-.558.79-.305 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.324-.741.502-1.588.558-2.818.056-1.233.072-1.64.072-5.06s-.016-3.827-.072-5.06c-.056-1.23-.234-2.077-.558-2.818-.305-.79-.718-1.459-1.384-2.126C19.335 1.347 18.666.935 17.877.63 17.135.306 16.288.128 15.058.072 13.825.016 13.418 0 12.017 0zm0 2.16c3.37 0 3.77.016 5.095.072 1.23.056 1.9.256 2.346.42.59.23.982.5 1.411.929.429.428.699.821.929 1.41.164.447.364 1.116.42 2.347.056 1.325.072 1.725.072 5.095s-.016 3.77-.072 5.095c-.056 1.23-.256 1.9-.42 2.346-.23.59-.5.982-.929 1.411-.428.429-.821.699-1.41.929-.447.164-1.116.364-2.347.42-1.325.056-1.725.072-5.095.072s-3.77-.016-5.095-.072c-1.23-.056-1.9-.256-2.346-.42-.59-.23-.982-.5-1.411-.929-.429-.428-.699-.821-.929-1.41-.164-.447-.364-1.116-.42-2.347-.056-1.325-.072-1.725-.072-5.095s.016-3.77.072-5.095c.056-1.23.256-1.9.42-2.346.23-.59.5-.982.929-1.411.428-.429.821-.699 1.41-.929.447-.164 1.116-.364 2.347-.42C8.247 2.176 8.647 2.16 12.017 2.16zm0 3.679c-3.515 0-6.361 2.846-6.361 6.361s2.846 6.361 6.361 6.361 6.361-2.846 6.361-6.361-2.846-6.361-6.361-6.361zm0 10.492c-2.282 0-4.131-1.849-4.131-4.131s1.849-4.131 4.131-4.131 4.131 1.849 4.131 4.131-1.849 4.131-4.131 4.131zM19.846 5.595c0 .821-.666 1.487-1.487 1.487-.821 0-1.487-.666-1.487-1.487s.666-1.487 1.487-1.487c.821 0 1.487.666 1.487 1.487z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4">
          {/* Suggested prompts (only show initially) */}
          <SuggestedPrompts 
            onPromptClick={handlePromptClick}
            isVisible={showSuggestions}
          />

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble 
                key={message.id} 
                message={message} 
                onProjectClick={handleProjectClick}
                onCompanyClick={handleCompanyClick}
              />
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-gray-500 text-sm">Akshay is typing...</span>
                </div>
              </div>
            )}
          </div>
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bubble Suggestions above input */}
      <BubbleSuggestions
        onSuggestionClick={handleBubbleSuggestionClick}
        askedQuestions={askedQuestions}
        isVisible={showBubbleSuggestions}
      />

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}