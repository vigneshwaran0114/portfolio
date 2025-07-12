// src/components/ChatbotWidget.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Icon from './AppIcon';
import axios from 'axios';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I'm your Dev Assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  const chatWidgetRef = useRef(null);
  const chatWindowRef = useRef(null);
  const widgetButtonRef = useRef(null);
  const messagesRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Initialize widget animation
  useEffect(() => {
    if (widgetButtonRef.current) {
      gsap.fromTo(widgetButtonRef.current, 
        { 
          scale: 0,
          opacity: 0,
          rotation: -180
        },
        { 
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 1
        }
      );

      // Subtle floating animation
      gsap.to(widgetButtonRef.current, {
        y: -5,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  // Handle chat window open/close animations
  useEffect(() => {
    if (chatWindowRef.current) {
      if (isOpen) {
        gsap.fromTo(chatWindowRef.current,
          {
            scale: 0,
            opacity: 0,
            transformOrigin: "bottom right",
            y: 20
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.4)"
          }
        );

        // Animate messages with stagger
        if (messagesRef.current) {
          const messageElements = messagesRef.current.children;
          gsap.fromTo(messageElements,
            {
              x: -20,
              opacity: 0
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.1,
              delay: 0.2,
              ease: "power2.out"
            }
          );
        }
      } else {
        gsap.to(chatWindowRef.current, {
          scale: 0,
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [isOpen]);

  // Handle button hover animations
  const handleButtonHover = (isHovering) => {
    if (!isDragging && widgetButtonRef.current) {
      gsap.to(widgetButtonRef.current, {
        scale: isHovering ? 1.1 : 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  // Handle dragging functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newPosition = {
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y
      };
      
      // Constrain to viewport
      const rect = chatWidgetRef.current?.getBoundingClientRect();
      if (rect) {
        newPosition.x = Math.max(-rect.width / 2, Math.min(window.innerWidth - rect.width / 2, newPosition.x));
        newPosition.y = Math.max(-rect.height / 2, Math.min(window.innerHeight - rect.height / 2, newPosition.y));
      }
      
      setPosition(newPosition);
      
      if (chatWidgetRef.current) {
        gsap.set(chatWidgetRef.current, {
          x: newPosition.x,
          y: newPosition.y
        });
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Snap back to edge if desired
      if (chatWidgetRef.current) {
        gsap.to(chatWidgetRef.current, {
          x: position.x,
          y: position.y,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);

  // Scroll to latest message when messages change
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Track unread bot messages when chat is closed
  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.type === 'bot' && !lastMsg.loading) {
        setUnreadCount((prev) => prev + 1);
      }
    }
  }, [messages, isOpen]);

  // Reset unread count when chat is opened
  useEffect(() => {
    if (isOpen) setUnreadCount(0);
  }, [isOpen]);

  // Handle sending a message
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = {
      id: Date.now(),
      type: 'user',
      message: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Show a loading message
    setMessages(prev => [
      ...prev,
      {
        id: Date.now() + 1,
        type: 'bot',
        message: "Thinking...",
        timestamp: new Date(),
        loading: true,
      }
    ]);

    try {
      // Call Netlify serverless function instead of OpenRouter API directly
      const response = await axios.post(
        '/.netlify/functions/chatbot',
        {
          messages: [
            { role: "system", content: "You are a helpful assistant for a developer portfolio website." },
            ...messages.filter(m => m.type === 'user' || m.type === 'bot').map(m => ({
              role: m.type === 'user' ? 'user' : 'assistant',
              content: m.message
            })),
            { role: "user", content: userMsg.message }
          ]
        }
      );

      // Remove the loading message and add the real reply
      setMessages(prev => [
        ...prev.filter(m => !m.loading),
        {
          id: Date.now() + 2,
          type: 'bot',
          message: response.data.choices[0].message.content.trim(),
          timestamp: new Date(),
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev.filter(m => !m.loading),
        {
          id: Date.now() + 2,
          type: 'bot',
          message: "Sorry, I couldn't get an answer right now.",
          timestamp: new Date(),
        }
      ]);
    }
  };

  const toggleChat = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-40"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        >
          {/* Header */}
          <div className="bg-accent text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Dev Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" ref={messagesRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`w-full break-words px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                    msg.type === 'user' ?'bg-accent text-white rounded-br-none' :'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                  style={{ wordBreak: 'break-word', overflowWrap: 'anywhere', maxHeight: 'none' }}
                >
                  <p className="whitespace-pre-line break-words">{msg.message}</p>
                  <p className={`text-xs mt-1 ${
                    msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') handleSend();
                }}
              />
              <button
                className="bg-accent text-white px-3 py-2 rounded-lg hover:bg-accent-600 transition-colors"
                onClick={handleSend}
                disabled={!input.trim()}
              >
                <Icon name="Send" size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Widget Button */}
      <div
        ref={chatWidgetRef}
        className="fixed bottom-6 right-6 z-50"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        <button
          ref={widgetButtonRef}
          onClick={toggleChat}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => handleButtonHover(true)}
          onMouseLeave={() => handleButtonHover(false)}
          className={`w-16 h-16 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center relative group ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          aria-label="Open chat"
        >
          <Icon 
            name={isOpen ? "X" : "MessageCircle"} 
            size={24} 
            className="transition-transform duration-200"
          />
          
          {/* Notification badge */}
          {!isOpen && unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {unreadCount}
            </div>
          )}
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {isOpen ? 'Close chat' : 'Chat with me'}
          </div>
        </button>
      </div>
    </>
  );
};

export default ChatbotWidget;