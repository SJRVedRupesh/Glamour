
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Check, Plus, Calendar, Coffee, Sunset, Moon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getRoutines, getQuickRoutines } from '@/lib/routineData';
import { Routine, RoutineStep } from '@/types/routine';

const Routines = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [routines, setRoutines] = useState<Routine[]>(getRoutines());
  const [quickRoutines, setQuickRoutines] = useState(getQuickRoutines());
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const StepCard = ({ step, index }: { step: RoutineStep; index: number }) => (
    <div className="flex items-start p-4 border-b last:border-b-0">
      <div className="flex-shrink-0 mr-4">
        <div className="w-8 h-8 rounded-full bg-beauty-pink-light flex items-center justify-center">
          <span className="font-semibold text-beauty-pink-dark">{index + 1}</span>
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="font-medium">{step.title}</h4>
        <p className="text-sm text-gray-600 mt-1">{step.description}</p>
        {step.productSuggestion && (
          <div className="mt-2 p-2 bg-beauty-pink-light/30 rounded-md">
            <p className="text-sm font-medium">Suggested Product: {step.productSuggestion}</p>
          </div>
        )}
      </div>
      <div className="flex-shrink-0 ml-2">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-beauty-pink-dark">
          <Check className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  const TimeIcon = ({ timeOfDay }: { timeOfDay: string }) => {
    switch (timeOfDay) {
      case 'morning':
        return <Coffee className="h-5 w-5 text-beauty-gold" />;
      case 'evening':
        return <Sunset className="h-5 w-5 text-beauty-mauve-dark" />;
      case 'night':
        return <Moon className="h-5 w-5 text-beauty-pink-dark" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-playfair">Beauty Routines</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Follow these carefully curated routines to achieve your best look, whether you have 5 minutes or 50.
          </p>
        </motion.div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-playfair font-semibold mb-6">Quick Routines</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {quickRoutines.map((routine) => (
              <motion.div key={routine.id} variants={fadeIn}>
                <Card className="beauty-card h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{routine.title}</h3>
                      <div className="flex items-center px-3 py-1 bg-beauty-pink-light/50 rounded-full">
                        <Clock className="h-4 w-4 text-beauty-pink-dark mr-1" />
                        <span className="text-sm font-medium text-beauty-pink-dark">{routine.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{routine.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      {routine.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-6 h-6 rounded-full bg-beauty-pink-light/70 flex items-center justify-center">
                              <span className="text-xs font-medium text-beauty-pink-dark">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 border-beauty-pink-dark text-beauty-pink-dark hover:bg-beauty-pink-light"
                    >
                      Save Routine
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* Add New Quick Routine Card */}
            <motion.div variants={fadeIn}>
              <Card className="beauty-card h-full border-dashed border-2 border-gray-300 bg-transparent hover:bg-gray-50/50 transition-colors cursor-pointer">
                <CardContent className="p-5 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                    <Plus className="h-6 w-6 text-gray-500" />
                  </div>
                  <p className="text-gray-500 font-medium">Create Custom Routine</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-playfair font-semibold mb-6">Complete Beauty Routines</h2>
          <Tabs defaultValue="daily" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-beauty-pink-light/50 w-full justify-start mb-6">
              <TabsTrigger 
                value="daily" 
                className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
              >
                Daily Routine
              </TabsTrigger>
              <TabsTrigger 
                value="weekly" 
                className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
              >
                Weekly Special
              </TabsTrigger>
              <TabsTrigger 
                value="event" 
                className="data-[state=active]:bg-beauty-pink-dark data-[state=active]:text-white"
              >
                Special Events
              </TabsTrigger>
            </TabsList>
            
            {routines
              .filter(routine => routine.type === activeTab)
              .map(routine => (
                <TabsContent key={routine.id} value={activeTab}>
                  <Card className="beauty-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-semibold font-playfair">{routine.title}</h3>
                          <p className="text-gray-600 mt-1">{routine.description}</p>
                        </div>
                        <div className="hidden md:block">
                          <Button className="bg-beauty-pink-dark hover:bg-beauty-pink text-white">
                            <Calendar className="mr-2 h-4 w-4" /> Add to My Routines
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {routine.timeframes.map((timeframe, idx) => (
                          <Card key={idx} className="bg-white/80">
                            <CardContent className="p-4">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-beauty-pink-light/70 flex items-center justify-center mr-3">
                                  <TimeIcon timeOfDay={timeframe.timeOfDay} />
                                </div>
                                <div>
                                  <h4 className="font-medium">{timeframe.title}</h4>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{timeframe.duration}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="border rounded-md divide-y divide-gray-100">
                                {timeframe.steps.map((step, stepIdx) => (
                                  <StepCard key={stepIdx} step={step} index={stepIdx} />
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="md:hidden">
                        <Button className="w-full bg-beauty-pink-dark hover:bg-beauty-pink text-white">
                          <Calendar className="mr-2 h-4 w-4" /> Add to My Routines
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))
            }
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Routines;
