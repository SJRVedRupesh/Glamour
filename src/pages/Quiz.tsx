import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface QuizOption {
  id: string;
  label: string;
  value: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

const Quiz = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions: QuizQuestion[] = [
    {
      id: 'skin-type',
      question: 'What is your skin type?',
      options: [
        { id: 'oily', label: 'Oily', value: 'oily' },
        { id: 'dry', label: 'Dry', value: 'dry' },
        { id: 'combination', label: 'Combination', value: 'combination' },
        { id: 'normal', label: 'Normal', value: 'normal' },
        { id: 'sensitive', label: 'Sensitive', value: 'sensitive' }
      ]
    },
    {
      id: 'skin-tone',
      question: 'What is your skin tone?',
      options: [
        { id: 'fair', label: 'Fair', value: 'fair' },
        { id: 'light', label: 'Light', value: 'light' },
        { id: 'medium', label: 'Medium', value: 'medium' },
        { id: 'tan', label: 'Tan', value: 'tan' },
        { id: 'deep', label: 'Deep', value: 'deep' }
      ]
    },
    {
      id: 'makeup-style',
      question: 'What is your preferred makeup style?',
      options: [
        { id: 'natural', label: 'Natural/Minimal', value: 'natural' },
        { id: 'glam', label: 'Full Glam', value: 'glam' },
        { id: 'bold', label: 'Bold & Colorful', value: 'bold' },
        { id: 'classic', label: 'Classic/Timeless', value: 'classic' },
        { id: 'trendy', label: 'Trendy/Experimental', value: 'trendy' }
      ]
    },
    {
      id: 'time',
      question: 'How much time do you typically spend on your makeup?',
      options: [
        { id: '5min', label: '5 minutes or less', value: '5min' },
        { id: '15min', label: '5-15 minutes', value: '15min' },
        { id: '30min', label: '15-30 minutes', value: '30min' },
        { id: '60min', label: '30-60 minutes', value: '60min' },
        { id: '60min-plus', label: 'More than 60 minutes', value: '60min-plus' }
      ]
    },
    {
      id: 'budget',
      question: 'What is your preferred budget for makeup products?',
      options: [
        { id: 'drugstore', label: 'Drugstore/Affordable', value: 'drugstore' },
        { id: 'mid-range', label: 'Mid-range', value: 'mid-range' },
        { id: 'high-end', label: 'High-end', value: 'high-end' },
        { id: 'luxury', label: 'Luxury', value: 'luxury' },
        { id: 'mixed', label: 'Mix of price points', value: 'mixed' }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = () => {
    toast({
      title: "Quiz completed!",
      description: "Your personalized recommendations are ready.",
    });
    
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    
    navigate('/products');
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-beauty-pink-light/30">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-playfair">Beauty Quiz</h1>
          <p className="mt-4 text-gray-600">
            Answer these questions to get personalized makeup recommendations tailored to your preferences.
          </p>
        </motion.div>
        
        <motion.div 
          className="w-full bg-white rounded-full h-2.5 mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div 
            className="bg-beauty-pink-dark h-2.5 rounded-full" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </motion.div>
        
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="beauty-card shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">{currentQuestion.question}</h2>
              
              <RadioGroup className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-beauty-pink-light/30 cursor-pointer transition-colors"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <RadioGroupItem 
                      value={option.value} 
                      id={option.id}
                      checked={answers[currentQuestion.id] === option.value}
                      className="text-beauty-pink-dark"
                    />
                    <Label 
                      htmlFor={option.id} 
                      className="flex-grow cursor-pointer font-medium"
                    >
                      {option.label}
                    </Label>
                    {answers[currentQuestion.id] === option.value && (
                      <Check className="w-5 h-5 text-beauty-pink-dark" />
                    )}
                  </div>
                ))}
              </RadioGroup>
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={currentStep === 0 ? 'opacity-0' : ''}
                >
                  Back
                </Button>
                
                <Button 
                  onClick={() => handleAnswer(answers[currentQuestion.id] || '')}
                  disabled={!answers[currentQuestion.id]}
                  className="bg-beauty-pink-dark hover:bg-beauty-pink text-white"
                >
                  {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
