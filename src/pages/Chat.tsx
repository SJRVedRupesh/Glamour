import React from 'react';
import GeminiChatbot from '@/components/GeminiChatbot';

const Chat = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Chat with Our Makeup Expert</h1>
        <p className="text-center text-gray-600 mb-8">
          Get personalized makeup advice, product recommendations, and beauty tips from our AI expert.
        </p>
        <GeminiChatbot quizAnswers={{}} />
      </div>
    </div>
  );
};

export default Chat; 