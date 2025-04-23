import { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  products?: Array<{
    name: string;
    brand: string;
    price: string;
    link?: string;
    description?: string;
    bestFor?: string;
    benefits?: string;
    usage?: string;
  }>;
}

const GeminiChatbot = ({ quizAnswers }: { quizAnswers: Record<string, string> }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial greeting with quiz results
    const initialMessage = {
      role: 'assistant' as const,
      content: `Hello! I'm your personal beauty advisor. Based on your preferences, I'm here to help you discover the perfect products and share gentle beauty tips. What would you like to know about?`,
    };
    setMessages([initialMessage]);
  }, [quizAnswers]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('Gemini API key is not configured');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash"
      });

      const prompt = `You are a gentle and knowledgeable beauty advisor. The user has shared these preferences: ${JSON.stringify(quizAnswers)}. 
      They asked: "${input}".

      Please provide a warm, detailed response that includes:
      1. A kind and understanding answer to their question
      2. Gentle, step-by-step advice if applicable
      3. Product recommendations with specific details
      4. Caring tips and best practices
      5. Any gentle warnings or considerations

      For product recommendations, use this exact format:
      Recommended Products:
      [Product Name] - [Brand] - ₹[Price in Rupees]
      Link: [Direct product link from Amazon, Nykaa, or brand's official website]
      Description: [Detailed product description]
      Best for: [Specific skin type/concerns]
      Key benefits: [Main benefits]
      How to use: [Simple usage instructions]

      [Product Name] - [Brand] - ₹[Price in Rupees]
      Link: [Direct product link from Amazon, Nykaa, or brand's official website]
      Description: [Detailed product description]
      Best for: [Specific skin type/concerns]
      Key benefits: [Main benefits]
      How to use: [Simple usage instructions]

      Important:
      - Only recommend real, available products from well-known brands
      - Use accurate prices in Indian Rupees (₹)
      - Provide specific, detailed descriptions
      - Include clear usage instructions
      - Focus on products available in India
      - Include direct product links from reliable sources
      - DO NOT include any images or image URLs
      - Keep the tone warm, gentle, and encouraging
      - Use simple language and explain any terms that might be unfamiliar
      - Focus on making the user feel comfortable and confident in their beauty choices.`;

      const result = await model.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          },
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          },
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          }
        ]
      });

      if (!result.response) {
        throw new Error('No response from Gemini API');
      }

      const assistantResponse = result.response.text();

      const productsMatch = assistantResponse.match(/Recommended Products:([\s\S]*?)(?=\n\n|$)/);
      const products = productsMatch ? productsMatch[1].split('\n\n').filter(Boolean).map(productBlock => {
        const lines = productBlock.split('\n');
        const [name, brand, price] = lines[0].split(' - ');
        const link = lines[1]?.replace('Link: ', '');
        const description = lines[2]?.replace('Description: ', '');
        const bestFor = lines[3]?.replace('Best for: ', '');
        const benefits = lines[4]?.replace('Key benefits: ', '');
        const usage = lines[5]?.replace('How to use: ', '');
        
        return {
          name: name?.trim() || '',
          brand: brand?.trim() || '',
          price: price?.trim() || '',
          link: link?.trim() || '',
          description: description?.trim() || '',
          bestFor: bestFor?.trim() || '',
          benefits: benefits?.trim() || '',
          usage: usage?.trim() || ''
        };
      }) : undefined;

      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantResponse,
        products
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-4">
      <ScrollArea className="h-[400px] mb-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-beauty-pink-dark text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.products && (
                  <div className="mt-4 space-y-4">
                    <h4 className="font-semibold text-lg">Recommended Products:</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {message.products.map((product, idx) => (
                        <Card key={idx} className="p-4">
                          <div>
                            <h5 className="text-lg font-semibold">{product.name}</h5>
                            <p className="text-sm text-gray-600">{product.brand}</p>
                            <p className="text-lg font-bold text-beauty-pink-dark mt-1">{product.price}</p>
                            {product.link && (
                              <a 
                                href={product.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-beauty-pink-dark hover:underline mt-2 block"
                              >
                                View Product
                              </a>
                            )}
                            {product.description && (
                              <p className="text-sm mt-2">{product.description}</p>
                            )}
                            {product.bestFor && (
                              <p className="text-sm mt-1"><span className="font-medium">Best for:</span> {product.bestFor}</p>
                            )}
                            {product.benefits && (
                              <p className="text-sm mt-1"><span className="font-medium">Benefits:</span> {product.benefits}</p>
                            )}
                            {product.usage && (
                              <p className="text-sm mt-1"><span className="font-medium">How to use:</span> {product.usage}</p>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {error && (
            <div className="text-red-500 text-sm text-center">
              Error: {error}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about beauty and makeup..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-beauty-pink-dark hover:bg-beauty-pink"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </Card>
  );
};

export default GeminiChatbot; 