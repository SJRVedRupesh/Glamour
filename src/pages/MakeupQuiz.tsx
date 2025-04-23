import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getProductRecommendations } from '@/lib/productRecommendations';
import { Product } from '@/types/product';
import GeminiChatbot from '@/components/GeminiChatbot';

const questions = [
  {
    id: 'skin-type',
    question: 'What is your skin type?',
    options: ['dry', 'oily', 'combination', 'normal'],
  },
  {
    id: 'skin-tone',
    question: 'What is your skin tone?',
    options: ['fair', 'light', 'medium', 'tan', 'deep'],
  },
  {
    id: 'makeup-style',
    question: 'What makeup style do you prefer?',
    options: ['natural', 'glam', 'bold', 'classic'],
  },
  {
    id: 'budget',
    question: 'What is your budget range?',
    options: ['drugstore', 'mid-range', 'high-end', 'luxury', 'mixed'],
  },
];

const MakeupQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const products = getProductRecommendations({
        ...answers,
        [currentQuestion.id]: answer,
      });
      setRecommendedProducts(products);
      setShowResults(true);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Personalized Recommendations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recommended Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedProducts.map((product) => (
                <Card key={product.id} className="p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <p className="text-lg font-bold text-beauty-pink-dark mt-2">{product.price}</p>
                  <Button
                    className="w-full mt-4 bg-beauty-pink-dark hover:bg-beauty-pink"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Chat with Our Makeup Expert</h2>
            <GeminiChatbot quizAnswers={answers} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Makeup Quiz</h1>
      <Progress value={progress} className="mb-8" />
      <Card className="max-w-2xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">
          {questions[currentQuestionIndex].question}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions[currentQuestionIndex].options.map((option) => (
            <Button
              key={option}
              variant="outline"
              className="w-full h-16 text-lg"
              onClick={() => handleAnswer(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MakeupQuiz; 