import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Video, 
  ShoppingBag, 
  Clock, 
  Calendar, 
  Heart, 
  Star, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import QuickTipCard from '@/components/QuickTipCard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to GlamGuru!",
        description: "Take our beauty quiz to get personalized recommendations",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-beauty h-[70vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-playfair">
                  Your Personal <br/> 
                  <span className="text-beauty-pink-dark">Beauty Assistant</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-lg">
                  Discover personalized makeup tips, product recommendations, and tutorials designed just for you.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-beauty-pink-dark hover:bg-beauty-pink text-white"
                    asChild
                  >
                    <Link to="/quiz">
                      Take Beauty Quiz
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-beauty-pink-dark text-beauty-pink-dark hover:bg-beauty-pink-light"
                    asChild
                  >
                    <Link to="/tutorials">
                      Watch Tutorials
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                className="hidden md:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative w-full h-[400px] rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-beauty-mauve-light rounded-full opacity-70"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Beauty products" 
                    className="absolute inset-0 w-full h-full object-cover rounded-full opacity-80"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-12 h-12 text-beauty-pink-dark" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,160C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Your complete beauty assistant to help you look and feel your best every day.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-beauty-pink-light flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-beauty-pink-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Tips</h3>
                  <p className="text-gray-600">
                    Get beauty advice tailored to your skin type, tone, and personal preferences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-beauty-mauve-light flex items-center justify-center mb-4">
                    <Video className="w-8 h-8 text-beauty-mauve-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
                  <p className="text-gray-600">
                    Learn from step-by-step video tutorials for different makeup looks and techniques.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-beauty-cream flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-beauty-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Product Recommendations</h3>
                  <p className="text-gray-600">
                    Discover makeup products perfectly suited to your skin, preferences, and budget.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-beauty-blush flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-beauty-pink-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Time-Saving Tips</h3>
                  <p className="text-gray-600">
                    Quick makeup routines and multi-purpose product suggestions for busy days.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-beauty-pink-light flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-beauty-pink-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Skin Care Integration</h3>
                  <p className="text-gray-600">
                    Pre-makeup skincare tips and product recommendations for your skin type.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-beauty-mauve-light flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-beauty-mauve-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Routine Tracker</h3>
                  <p className="text-gray-600">
                    Keep track of your beauty routines and get timely reminders for skincare steps.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Tips Section */}
      <section className="py-16 bg-beauty-pink-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">Quick Beauty Tips</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Try these simple tricks to enhance your beauty routine.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <QuickTipCard 
                title="Apply foundation in natural light" 
                content="To ensure your foundation matches perfectly, apply it in natural daylight whenever possible."
                icon={<Star className="w-6 h-6 text-beauty-pink-dark" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <QuickTipCard 
                title="Set cream products with powder" 
                content="For longer-lasting makeup, set cream blushes and highlighters with a light dusting of translucent powder."
                icon={<Clock className="w-6 h-6 text-beauty-mauve-dark" />}
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <QuickTipCard 
                title="Use lip liner all over lips" 
                content="For longer-lasting lipstick, fill in your entire lips with lip liner before applying lipstick."
                icon={<Heart className="w-6 h-6 text-beauty-pink-dark" />}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Button 
              className="bg-beauty-pink-dark hover:bg-beauty-pink text-white"
              asChild
            >
              <Link to="/routines">
                View More Tips
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-gradient-mauve py-12 md:py-16 px-6 md:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Discover Your Perfect Look Today
                </motion.h2>
                <motion.p 
                  className="mt-4 text-lg text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Take our beauty quiz and get personalized recommendations tailored just for you.
                </motion.p>
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-beauty-mauve-dark hover:bg-beauty-mauve text-white"
                    asChild
                  >
                    <Link to="/quiz">
                      Start Beauty Quiz
                      <Sparkles className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 text-beauty-pink-dark" />
                <span className="ml-2 text-xl font-playfair font-semibold text-beauty-pink-dark">GlamGuru</span>
              </div>
              <p className="mt-4 text-gray-600 max-w-md">
                Your personal beauty assistant providing tailored makeup tips, product recommendations, and beauty tutorials.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-800 uppercase">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/quiz" className="text-gray-600 hover:text-beauty-pink-dark">Beauty Quiz</Link></li>
                <li><Link to="/tutorials" className="text-gray-600 hover:text-beauty-pink-dark">Tutorials</Link></li>
                <li><Link to="/products" className="text-gray-600 hover:text-beauty-pink-dark">Product Recommendations</Link></li>
                <li><Link to="/routines" className="text-gray-600 hover:text-beauty-pink-dark">Beauty Routines</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-800 uppercase">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-beauty-pink-dark">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-beauty-pink-dark">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-beauty-pink-dark">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-beauty-pink-dark">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} GlamGuru. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
